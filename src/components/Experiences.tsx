import React, { useMemo } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { PiBriefcaseMetal } from 'react-icons/pi';
import { experiences } from '../const';
import { useTranslation } from 'react-i18next';
import { useExperiences } from '../hooks/useExperiences';
import { useLanguageStore } from '../stores/languageStore';
import draftToHtml from 'draftjs-to-html';

export const Experiences = () => {
    const { t } = useTranslation();
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const { experiences, isLoading, isError } = useExperiences(selectedLang);

    const renderDraftHtml = (value: unknown): string => {
        if (isLoading || isError || !value) {
            return '';
        }
        try {
            const raw = typeof value === 'string' ? JSON.parse(value) : value;

            const html = draftToHtml(raw as any);

            return html;
        } catch (error) {
            console.error('renderDraftHtml error:', error, value);
            return '';
        }
    };

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
        <>
            {isLoading ? (
                <ol className="relative border-l border-gray-300 dark:border-gray-600 w-full max-w-4xl animate-pulse">
                    {[1, 2].map((item) => (
                        <li key={item} className="mb-10 ml-6">
                            <div className="bg-gray-800 px-4 py-3 rounded-lg">
                                <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-gray-300 dark:bg-gray-700 rounded-full ring-8 ring-white dark:ring-gray-900 -mt-1"></span>

                                <div className="animate-pulse">
                                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-48 mb-3"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-3"></div>
                                    <div className="space-y-2 mb-4">
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
                                    </div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-4"></div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {[1, 2, 3, 4].map((tag) => (
                                            <div
                                                key={tag}
                                                className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-md"
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                                    </div>
                                </div>
                            </div>
                            {item === 1 && (
                                <ol className="mt-4 space-y-10 relative border-l border-gray-300 dark:border-gray-600">
                                    {[1, 2].map((subItem) => (
                                        <li key={subItem} className="p-1 ml-6">
                                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-gray-300 dark:bg-gray-700 rounded-full -mt-1"></span>

                                            <div className="animate-pulse">
                                                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-3"></div>
                                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-3"></div>
                                                <div className="space-y-2 mb-2">
                                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {[1, 2, 3].map((tag) => (
                                                        <div
                                                            key={tag}
                                                            className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"
                                                        ></div>
                                                    ))}
                                                </div>

                                                <div className="flex items-center space-x-2 mt-2">
                                                    <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ol>
            ) : isError ? (
                <div className="text-red-700 dark:text-red-500 text-base text-center">
                    <p>{t('api.error')}</p>
                </div>
            ) : experiences.length === 0 ? (
                <div className="text-black text-base w-full h-full flex justify-center items-center dark:text-white">
                    {t('api.empty')}
                </div>
            ) : (
                <ol className="relative border-l border-gray-300 dark:border-gray-600">
                    {experiences.map((e) => (
                        <li key={e.id} className="mb-10 ml-6">
                            <div
                                className={`bg-gray-800 px-4 py-3 rounded-lg ${
                                    selectedLang === 'ar' &&
                                    'text-right fontOnly-arabic'
                                }`}
                            >
                                <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 -mt-1">
                                    <img
                                        src={e.logo}
                                        alt={e.company}
                                        className="w-full h-full rounded-full"
                                    />
                                </span>
                                <h3 className="text-lg font-semibold text-white">
                                    {e.company}
                                </h3>
                                <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                                    {e.role}
                                </p>
                                <pre
                                    className="text-base font-sans whitespace-pre-wrap font-normal text-gray-300"
                                    dangerouslySetInnerHTML={{
                                        __html: renderDraftHtml(e.description),
                                    }}
                                />

                                <a
                                    href={e.link}
                                    className="text-blue-300 underline break-all"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {e.link}
                                </a>

                                <div
                                    className={`mt-4 flex flex-wrap ${
                                        selectedLang === 'ar' && 'justify-end'
                                    }`}
                                >
                                    {e.tech.map((tech) => (
                                        <div
                                            key={tech}
                                            className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-2 text-white"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`flex items-center space-x-2 mt-2 text-sm text-gray-400 ${
                                        selectedLang === 'ar' && 'justify-end'
                                    }`}
                                >
                                    <IoCalendarNumberOutline size={16} />
                                    <time>
                                        {formatMonthYear(e.start_date) +
                                            ' - ' +
                                            formatMonthYear(e.end_date)}
                                    </time>
                                </div>
                            </div>

                            {e.sub_items && (
                                <ol className="mt-4 space-y-10 relative border-l border-gray-300 dark:border-gray-600">
                                    {e.sub_items.map((subItem, idx) => (
                                        <li
                                            key={idx}
                                            className={`p-1 ml-6 ${
                                                selectedLang === 'ar' &&
                                                'text-right fontOnly-arabic'
                                            }`}
                                        >
                                            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-white text-black -mt-1">
                                                <PiBriefcaseMetal />
                                            </span>
                                            <h4
                                                className={`flex items-center font-semibold text-md text-gray-900 dark:text-white ${
                                                    selectedLang === 'ar' &&
                                                    'justify-end'
                                                }`}
                                            >
                                                {subItem.position}
                                            </h4>
                                            <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                                                {subItem.setup}
                                            </time>

                                            {subItem.projects?.map(
                                                (project, j) => (
                                                    <div
                                                        className="mt-2"
                                                        key={j}
                                                    >
                                                        <p
                                                            className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400"
                                                            dangerouslySetInnerHTML={{
                                                                __html: renderDraftHtml(
                                                                    project.description
                                                                ),
                                                            }}
                                                        />
                                                        <div
                                                            className={`-mt-2 flex flex-wrap ${
                                                                selectedLang ===
                                                                    'ar' &&
                                                                'justify-end'
                                                            }`}
                                                        >
                                                            {project.tech?.map(
                                                                (tech) => (
                                                                    <div
                                                                        key={
                                                                            tech
                                                                        }
                                                                        className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 text-white dark:text-gray-300"
                                                                    >
                                                                        {tech}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )}

                                            <div
                                                className={`flex items-center space-x-2 mt-2 text-sm text-gray-700 dark:text-gray-400 ${
                                                    selectedLang === 'ar' &&
                                                    'justify-end'
                                                }`}
                                            >
                                                <IoCalendarNumberOutline
                                                    size={16}
                                                />
                                                <time>
                                                    {formatMonthYear(
                                                        subItem.start_date
                                                    ) +
                                                        ' - ' +
                                                        formatMonthYear(
                                                            subItem.end_date
                                                        )}
                                                </time>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ol>
            )}
        </>
    );
};
