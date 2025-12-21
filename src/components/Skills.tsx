import React, { useMemo } from 'react';
import { Popup } from '../animation/Popup';
import { motion } from 'framer-motion';
import { skills } from '../const';
import { useTranslation } from 'react-i18next';
import { useSkills } from '../hooks/useSkills';

export default function Skills() {
    const { t, i18n } = useTranslation();
    const { skills, isLoading, isError } = useSkills();

    return (
        <section
            className={`h-auto skillsMd:h-auto xl:h-screen skillsMaxHeight:h-maxDesktop bg-gray-100 dark:bg-black flex items-center flex-col ${
                skills.length === 0 || (isError && '!h-screen')
            }`}
            id="skills"
        >
            <div className="h-full w-full max-screen:max-w-maxDesktop flex items-center flex-col">
                <div
                    className={`sm:h-[13%] h-auto flex justify-center items-end pt-10 ${
                        i18n.language === 'ar' && 'font-arabic'
                    }`}
                >
                    <Popup
                        delay={0.5}
                        className="text-black font-semibold text-3xl sm:text-4xl dark:text-white"
                    >
                        {t('skills.heading')}
                    </Popup>
                </div>
                {isLoading ? (
                    <div className="flex flex-wrap mt-4 sm:mt-10 justify-around sm:max-w-[80%] mb-4 animate-pulse">
                        {Array.from({ length: 30 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="py-2 px-2 bg-gray-100 dark:bg-black md:m-4 mx-1 skill-sm:mx-2 mt-6 rounded-lg flex items-center justify-center md:w-48 w-40 min-w-[100px] skill-sm:min-w-[192px] border"
                            >
                                <div className="w-10 skill-sm:w-11 skill:w-12 h-10 skill-sm:h-11 skill:h-12 bg-gray-300 dark:bg-gray-700 rounded-full" />

                                <div className="ml-4 h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : skills.length === 0 ? (
                    <div className="text-black text-base w-full h-full flex justify-center items-center dark:text-white">
                        {t('api.empty')}
                    </div>
                ) : isError ? (
                    <div className="text-red-700 dark:text-red-500 text-base w-full h-full flex justify-center items-center">
                        <p>{t('api.error')}</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap mt-4 sm:mt-10 justify-around sm:max-w-[80%] mb-4">
                        {skills.map((skill) => (
                            <motion.div
                                initial="hidden"
                                whileInView={'visible'}
                                whileHover={{ scale: 1.2 }}
                                variants={{
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: 'spring',
                                        },
                                    },
                                    hidden: { opacity: 1, y: 80 },
                                }}
                                key={skill.name}
                                className={`py-2 px-2 bg-white md:m-4 mx-1 skill-sm:mx-2 mt-6 rounded-lg flex items-center ${
                                    !skill.icon_url && 'justify-center'
                                } cursor-pointer md:w-48 w-40 min-w-[100px] skill-sm:min-w-[192px] border`}
                            >
                                {skill.icon_url && (
                                    <img
                                        alt=""
                                        src={skill.icon_url}
                                        className="w-10 skill-sm:w-11 skill:w-12"
                                    />
                                )}
                                <h4
                                    className={`text-md ${
                                        skill.icon_url && 'ml-4'
                                    }`}
                                >
                                    {skill.name}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
