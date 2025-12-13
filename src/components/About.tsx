import React from 'react';
import Me from '../assets/images/me.webp';
import moment from 'moment';
import { SlideLeft, SlideRight } from '../animation/Slide';
import { Popup } from '../animation/Popup';
import ImageWithFallback from '../utils/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import { useLocalizedInfo } from '../contexts/LocalizedInfoContext';
import draftToHtml from 'draftjs-to-html';

export default function About() {
    const age = moment().diff(import.meta.env.VITE_DATEOFBIRTH, 'years');
    const { t, i18n } = useTranslation();
    const yearsOfExperience = Number(
        moment()
            .diff(import.meta.env.VITE_YEARSOFEXPERIENCE, 'years', true)
            .toFixed(1)
    );
    const { localizedInfo, isLoading } = useLocalizedInfo();
    let aboutHtml = '';

    if (!isLoading) {
        aboutHtml = localizedInfo?.about_me
            ? draftToHtml(
                  typeof localizedInfo.about_me === 'string'
                      ? JSON.parse(localizedInfo.about_me)
                      : localizedInfo.about_me
              )
            : '';
        aboutHtml = aboutHtml
            .replace('{age}', age.toString())
            .replace('{experience}', yearsOfExperience.toString());
    }

    return (
        <section
            className={`aboutMaxHeight:h-auto desktopMaxHeight:h-maxDesktop h-auto about:h-screen w-screen bg-white dark:bg-gray-900 flex max-screen:justify-center ${
                i18n.language === 'ar' && 'font-arabic'
            }`}
            id="about"
            aria-labelledby="about-heading"
        >
            <div className="h-full w-full max-screen:max-w-maxDesktop flex flex-col">
                <div className="sm:h-[13%] h-auto flex justify-center items-end pt-10 home:pt-5">
                    <Popup
                        delay={0.6}
                        className="text-black font-semibold text-3xl sm:text-4xl dark:text-white sm:pb-14 md:pb-0"
                    >
                        <h2 id="about-heading">{t('about.heading')}</h2>
                    </Popup>
                </div>
                <div className="sm:h-[90%] h-auto flex flex-col about:flex-row px-7 justify-center items-center">
                    <SlideLeft
                        className="min-w-1/2 flex items-start justify-center -mt-5 about:-mt-5"
                        delay={0.5}
                    >
                        <div className="size-[280px] sm:size-[26rem] about:size-[31rem] flex items-start pt-3 justify-center bg-bg-image">
                            <div className="size-[14.5rem] sm:size-[22rem] about:size-[25.5rem] rounded-[50%] overflow-hidden mr-3 sm:mr-4 about:mr-6 mt-1 about:mt-5">
                                <ImageWithFallback
                                    src={Me}
                                    alt="Photo of Carl"
                                    loaderColor="white"
                                    className="size-full mt-2"
                                />
                            </div>
                        </div>
                    </SlideLeft>
                    <SlideRight
                        className="w-full sm:w-[80%] home:w-1/2 h-auto about:h-full pt-0 flex items-center aboutMaxHeight:pt-10"
                        delay={0.5}
                    >
                        <div className="pb-6 w-full">
                            {isLoading ? (
                                <div className="w-full max-w-3xl space-y-3">
                                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[90%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[95%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[80%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[85%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[85%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 w-[85%] bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                </div>
                            ) : (
                                <div
                                    className="text-black text-base dark:text-white text-justify leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutHtml,
                                    }}
                                />
                            )}
                        </div>
                    </SlideRight>
                </div>
            </div>
        </section>
    );
}
