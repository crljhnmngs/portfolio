import React, { useMemo } from 'react';
import { ReactTyped } from 'react-typed';
import ReactLottie from 'lottie-react';
import codingAnimation from '../json/coding.json';
import { SlideLeft, SlideRight } from '../animation/Slide';
import { useTranslation } from 'react-i18next';
import { useApp } from '../contexts/AppContext';
import { useSocialLinks } from '../hooks/useSocialLinks';
import { useLocalizedInfo } from '../contexts/LocalizedInfoContext';

export default function Home() {
    const { t, i18n } = useTranslation();
    const { generalInfo } = useApp();
    const { localizedInfo, isLoading } = useLocalizedInfo();
    const socials = useSocialLinks();

    return (
        <section
            className={`commonMaxHeight:h-auto desktopMaxHeight:h-maxDesktop h-screen sm:h-auto home:h-screen bg-bg-light dark:bg-bg-dark bg-cover bg-green-200 flex max-screen:justify-center ${
                i18n.language === 'ar' && 'font-arabic'
            }`}
            id="/"
        >
            <div className="max-screen:max-w-maxDesktop flex sm:items-center items-center justify-center sm:gap-0 home:gap-2 sm:flex-col home:flex-row w-full h-full">
                <SlideLeft
                    className="h-auto sm:h-[433px] home:h-auto home:max-w-[40%] w-full home:px-0 px-5 flex flex-col justify-center sm:items-center items-start home:items-start "
                    delay={0.5}
                >
                    <div className={`${isLoading ? 'w-full' : ''} `}>
                        {isLoading ? (
                            <div className="animate-pulse space-y-3">
                                <div className="h-8 sm:h-10 home:h-11 w-[80%] bg-gray-300 dark:bg-gray-700 rounded" />
                            </div>
                        ) : (
                            <p className="font-bold home:text-5xl sm:text-4xl text-3xl text-black dark:text-white sm:dark:text-white">
                                {t('hero.greeting', {
                                    name: localizedInfo?.full_name,
                                })}
                            </p>
                        )}
                    </div>
                    <div className="mt-1">
                        <ReactTyped
                            strings={
                                t('hero.roles', {
                                    returnObjects: true,
                                }) as string[]
                            }
                            typeSpeed={50}
                            backSpeed={60}
                            loop
                            className="font-bold home:text-5xl sm:text-4xl text-3xl text-[#3B82F6] text-start sm:text-center home:text-start"
                        />
                    </div>
                    <div className="mt-6 w-full sm:w-1/2 home:w-[80%]">
                        {isLoading ? (
                            <div className="animate-pulse space-y-3">
                                <div className="h-4 sm:h-5 home:h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                                <div className="h-4 sm:h-5 home:h-6 w-[90%] bg-gray-300 dark:bg-gray-700 rounded" />
                                <div className="h-4 sm:h-5 home:h-6 w-[70%] bg-gray-300 dark:bg-gray-700 rounded" />
                            </div>
                        ) : (
                            <p className="font-light home:text-lg sm:text-base text-sm text-start sm:text-center home:text-start dark:sm:text-white dark:text-white">
                                {t('hero.description', {
                                    company: localizedInfo?.current_company,
                                    position: localizedInfo?.current_role,
                                })}
                            </p>
                        )}
                    </div>
                    <div className="mt-8 flex gap-4 h-11 sm:h-[3.2rem] justify-start sm:justify-center home:justify-start w-[100%] sm:dark:text-white home:dark:text-black">
                        {socials.map((social) => (
                            <div
                                className="w-full h-full max-w-14"
                                key={social.name}
                            >
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex w-full justify-start sm:justify-center home:justify-start">
                        <a
                            href={generalInfo?.resumeUrl || '/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`home:w-[80%] w-[50%] max-w-56 h-[60px] text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-3 me-2 focus:outline-none inline-flex items-center justify-center ${
                                i18n.language === 'ar' && 'text-right'
                            }`}
                        >
                            {t('hero.resume')}
                        </a>
                    </div>
                </SlideLeft>
                <SlideRight
                    className="sm:h-[433px] home:h-[60%] home:w-[40%] w-full justify-center items-start hidden sm:flex "
                    delay={0.5}
                >
                    <ReactLottie
                        animationData={codingAnimation}
                        className="w-full h-[120%] animate-float -mt-14"
                        loop={true}
                    />
                </SlideRight>
            </div>
        </section>
    );
}
