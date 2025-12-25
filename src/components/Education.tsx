import React, { useMemo } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { educations } from '../const';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../stores/languageStore';
import { useEducations } from '../hooks/useEducations';

export const Education = () => {
    const { t } = useTranslation();
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const { educations, isLoading, isError } = useEducations(selectedLang);

    const formatMonthYear = (dateString: string): string => {
        if (!dateString) return '';
        if (dateString === 'Present') return t(`months.${dateString}`);

        // Parse the date string (format: YYYY-MM)
        const [year, month] = dateString.split('-');

        const date = new Date(parseInt(year), parseInt(month) - 1, 1);

        const monthName = date.toLocaleString('en-US', { month: 'long' });
        const yearNumber = date.getFullYear();

        return t(`months.${monthName}`, {
            year: yearNumber,
        });
    };

    return (
        <div className="-mt-3">
            {isLoading ? (
                <ol className="relative border-l border-gray-300 dark:border-gray-600">
                    {[1, 2].map((item) => (
                        <li key={item} className="p-1 mb-10 ml-6">
                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-gray-300 dark:bg-gray-700 rounded-full ring-8 ring-white dark:ring-gray-900"></span>

                            <div className="animate-pulse">
                                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-56 mb-3"></div>
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-3"></div>
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-4"></div>
                                <div className="-mt-2 flex flex-wrap gap-2 mb-2">
                                    {[1, 2, 3, 4, 5].map((tag) => (
                                        <div
                                            key={tag}
                                            className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-md"
                                        ></div>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48"></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            ) : isError ? (
                <div className="text-red-700 dark:text-red-500 h-24 text-base text-center">
                    <p>{t('api.error')}</p>
                </div>
            ) : educations.length === 0 ? (
                <div className="text-black text-base w-full h-24 flex justify-center items-center dark:text-white">
                    {t('api.empty')}
                </div>
            ) : (
                <ol
                    className={`relative border-l border-gray-300 dark:border-gray-600`}
                >
                    {educations.map((education) => (
                        <li
                            key={education.id}
                            className={`p-1 mb-10 ml-6  ${
                                selectedLang === 'ar' &&
                                'text-right fontOnly-arabic'
                            }`}
                        >
                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <img
                                    src={education.logo_url}
                                    alt={education.school}
                                    className="w-full h-full rounded-full"
                                />
                            </span>
                            <h3
                                className={`flex items-center text-lg font-semibold text-gray-900 dark:text-white ${
                                    selectedLang === 'ar' && 'justify-end'
                                }`}
                            >
                                {t(education.school)}
                            </h3>
                            <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                                {t(education.track)}
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                {t(education.course)}
                            </p>
                            <div
                                className={`-mt-2 flex flex-wrap ${
                                    selectedLang === 'ar' && 'justify-end'
                                }`}
                            >
                                {education.tech.map((tech) => (
                                    <div
                                        key={tech}
                                        className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-white dark:text-gray-300"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400 ${
                                    selectedLang === 'ar' && 'justify-end'
                                }`}
                            >
                                <IoCalendarNumberOutline size={16} />
                                <time>
                                    {formatMonthYear(education.start_date) +
                                        ' - ' +
                                        formatMonthYear(education.end_date)}
                                </time>
                            </div>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};
