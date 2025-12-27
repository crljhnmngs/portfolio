import React, { useState, useRef, useEffect } from 'react';
import { Popup } from '../animation/Popup';
import { FaGithub, FaEye } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ImageWithFallback from '../utils/ImageWithFallback';
import { TechList } from './TechList';
import { ProjectModal } from './ProjectModal';
import { useTranslation } from 'react-i18next';
import { Projects as ProjectsType } from '../types/global';
import { useProjects } from '../hooks/useProjects';
import { useLanguageStore } from '../stores/languageStore';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
        null
    );
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const { projects, isLoading, isError } = useProjects(selectedLang);

    const swiperRef = useRef<SwiperType | null>(null);

    const openModal = (project: ProjectsType) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    useEffect(() => {
        if (isModalOpen && swiperRef.current) {
            swiperRef.current.autoplay?.stop();
        } else if (!isModalOpen && swiperRef.current) {
            swiperRef.current.autoplay?.start();
        }
    }, [isModalOpen]);

    return (
        <section
            className="min-h-screen sm:h-auto desktopMaxHeight:h-maxDesktop projectMaxHeight:h-screen projectsCustomBP:h-auto bg-gray-100 dark:bg-black flex max-screen:justify-center"
            id="projects"
        >
            <div className="w-full max-screen:max-w-maxDesktop">
                <div className="max-w-maxScreen mx-auto sm:px-6 lg:px-7 px-4 h-full max-screen:px-0">
                    <div
                        className={`flex items-center justify-center pt-10 ${
                            selectedLang === 'ar' && 'font-arabic'
                        }`}
                    >
                        <Popup
                            delay={0.5}
                            className="text-black font-semibold text-3xl sm:text-3xl dark:text-white"
                        >
                            {t('projects.heading')}
                        </Popup>
                    </div>
                    {isLoading ? (
                        <ProjectCarouselSkeleton />
                    ) : isError ? (
                        <div className="text-red-700 dark:text-red-500 h-[80%] flex items-center justify-center text-base text-center">
                            <p>{t('api.error')}</p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-black text-base w-full h-[80%] flex  items-center justify-center dark:text-white">
                            {t('api.empty')}
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className="py-5 sm:py-10 w-full h-[calc(80%-3rem)] sm:h-[90%]">
                                <Swiper
                                    onSwiper={(swiper) =>
                                        (swiperRef.current = swiper)
                                    }
                                    effect="coverflow"
                                    grabCursor={true}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView="auto"
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 25,
                                        depth: 100,
                                        modifier: 3,
                                        slideShadows: true,
                                    }}
                                    modules={[
                                        EffectCoverflow,
                                        Pagination,
                                        Autoplay,
                                    ]}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                    }}
                                    className="w-full h-full"
                                >
                                    {projects.map((project) => (
                                        <SwiperSlide key={project.id}>
                                            <div className="w-[24rem] h-[32rem] lg:w-[29rem] lg:h-[33rem] xl:w-[32rem] xl:h-[35.5rem] project-xl:w-[35rem] project-xl:h-[39rem] mt-2 dark:bg-gray-200 bg-white rounded-lg p-3 lg:p-4">
                                                <div className="h-[50%] xl:h-[55%] w-full">
                                                    <ImageWithFallback
                                                        src={project.image_url}
                                                        alt={project.name}
                                                        loaderColor="black"
                                                        className="object-fill size-full rounded-lg"
                                                    />
                                                </div>
                                                <div className="h-[50%] xl:h-[45%] relative">
                                                    <div className="mt-5 text-xl w-full project-xl:text-2xl font-semibold flex flex-col -gap-1">
                                                        <div className="flex gap-1">
                                                            {project.new && (
                                                                <span className="text-[12px] leading-3 text-white text-center bg-red-500 dark:bg-red-600 px-1 py-1 rounded-md w-auto">
                                                                    {t(
                                                                        'projects.new'
                                                                    )}
                                                                </span>
                                                            )}
                                                            {project.dev && (
                                                                <span className="text-[12px] leading-3 text-white text-center bg-green-500 dark:bg-green-600 px-1 py-1 rounded-md w-auto">
                                                                    {t(
                                                                        'projects.dev'
                                                                    )}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <h1 className="overflow-hidden">
                                                            {project.name}
                                                        </h1>
                                                    </div>
                                                    <div
                                                        className={`mt-3 max-w-[100%] min-h-[4.5rem] ${
                                                            selectedLang ===
                                                                'ar' &&
                                                            'font-arabic'
                                                        }`}
                                                    >
                                                        <p className="text-justify sm:text-base line-clamp-3 project-xl:line-clamp-4">
                                                            {project.about}
                                                        </p>
                                                    </div>

                                                    <div className="absolute bottom-[15px] lg:bottom-5 w-full">
                                                        <TechList
                                                            techs={project.tech}
                                                        />
                                                        <div className="flex justify-between">
                                                            <div className="text-base font-semibold pl-2 pt-1">
                                                                <p>
                                                                    {
                                                                        project.date.split(
                                                                            '-'
                                                                        )[0]
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="flex gap-3 pr-1 sm:pr-5">
                                                                <div
                                                                    className={`relative group ${
                                                                        selectedLang ===
                                                                            'ar' &&
                                                                        'text-right fontOnly-arabic'
                                                                    }`}
                                                                >
                                                                    <button
                                                                        onClick={() =>
                                                                            openModal(
                                                                                project
                                                                            )
                                                                        }
                                                                        data-tooltip-id={`tooltip-${project.name}`}
                                                                        data-tooltip-content={t(
                                                                            'projects.viewInfo'
                                                                        )}
                                                                        className="group-hover:opacity-100"
                                                                        aria-label={t(
                                                                            'projects.viewInfo'
                                                                        )}
                                                                    >
                                                                        <FaEye className="size-7 opacity-60 cursor-pointer group-hover:opacity-100 transition-opacity" />
                                                                    </button>

                                                                    <Tooltip
                                                                        id={`tooltip-${project.name}`}
                                                                        place="top"
                                                                        delayShow={
                                                                            0
                                                                        }
                                                                        delayHide={
                                                                            0
                                                                        }
                                                                        offset={
                                                                            5
                                                                        }
                                                                        className="!text-xs text-center !rounded-md !py-2 !px-3 !bg-black dark:!bg-white !text-white dark:!text-black shadow-lg max-w-[130px] !whitespace-normal !opacity-100"
                                                                    />
                                                                </div>
                                                                {project.links
                                                                    ?.github && (
                                                                    <div
                                                                        className={`relative group ${
                                                                            selectedLang ===
                                                                                'ar' &&
                                                                            'text-right fontOnly-arabic'
                                                                        }`}
                                                                    >
                                                                        <a
                                                                            href={
                                                                                project
                                                                                    .links
                                                                                    .github
                                                                            }
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                            data-tooltip-id={`tooltip-github-${project.name}`}
                                                                            data-tooltip-content={t(
                                                                                'projects.viewRepo'
                                                                            )}
                                                                            className="opt-10 group-hover:opacity-100"
                                                                            aria-label={t(
                                                                                'projects.viewRepo'
                                                                            )}
                                                                        >
                                                                            <FaGithub className="size-7 opacity-60 cursor-pointer group-hover:opacity-100 transition-opacity" />
                                                                        </a>

                                                                        <Tooltip
                                                                            id={`tooltip-github-${project.name}`}
                                                                            place="top"
                                                                            delayShow={
                                                                                0
                                                                            }
                                                                            delayHide={
                                                                                0
                                                                            }
                                                                            offset={
                                                                                5
                                                                            }
                                                                            className="!text-xs text-center !rounded-md !py-2 !px-3 !bg-black dark:!bg-white !text-white dark:!text-black shadow-lg max-w-[130px] !whitespace-normal !opacity-100"
                                                                        />
                                                                    </div>
                                                                )}
                                                                {project.links
                                                                    ?.live && (
                                                                    <div
                                                                        className={`relative group ${
                                                                            selectedLang ===
                                                                                'ar' &&
                                                                            'text-right fontOnly-arabic'
                                                                        }`}
                                                                    >
                                                                        <a
                                                                            href={
                                                                                project
                                                                                    .links
                                                                                    .live
                                                                            }
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                            data-tooltip-id={`tooltip-live-${project.name}`}
                                                                            data-tooltip-content={t(
                                                                                'projects.viewSite'
                                                                            )}
                                                                            className="group-hover:opacity-100"
                                                                            aria-label={t(
                                                                                'projects.viewSite'
                                                                            )}
                                                                        >
                                                                            <FaLink className="size-7 opacity-60 cursor-pointer group-hover:opacity-100 transition-opacity" />
                                                                        </a>

                                                                        <Tooltip
                                                                            id={`tooltip-live-${project.name}`}
                                                                            place="top"
                                                                            delayShow={
                                                                                0
                                                                            }
                                                                            delayHide={
                                                                                0
                                                                            }
                                                                            offset={
                                                                                5
                                                                            }
                                                                            className="!text-xs text-center !rounded-md !py-2 !px-3 !bg-black dark:!bg-white !text-white dark:!text-black shadow-lg max-w-[130px] !whitespace-normal !opacity-100"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="w-full flex items-center justify-center pb-5 sm:hidden">
                                <p className="text-sm text-black dark:text-white">
                                    {t('projects.swipe')}
                                </p>
                            </div>
                        </React.Fragment>
                    )}
                </div>
                <ProjectModal
                    project={selectedProject!}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </section>
    );
}

export const ProjectSkeleton = () => {
    return (
        <div className="w-[22rem] h-[32rem] lg:w-[29rem] lg:h-[33rem] xl:w-[32rem] xl:h-[35.5rem] project-xl:w-[35rem] project-xl:h-[39rem] mt-2 bg-white dark:bg-gray-200 rounded-lg p-3 lg:p-4 animate-pulse">
            <div className="h-[50%] xl:h-[55%] w-full bg-gray-300 dark:bg-gray-400 rounded-lg"></div>

            <div className="h-[50%] xl:h-[45%] relative">
                <div className="mt-5 flex gap-1">
                    <div className="w-12 h-5 bg-gray-300 dark:bg-gray-400 rounded-md"></div>
                    <div className="w-16 h-5 bg-gray-300 dark:bg-gray-400 rounded-md"></div>
                </div>
                <div className="mt-2 w-3/4 h-7 bg-gray-300 dark:bg-gray-400 rounded"></div>
                <div className="mt-3 space-y-2">
                    <div className="w-full h-4 bg-gray-300 dark:bg-gray-400 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 dark:bg-gray-400 rounded"></div>
                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-400 rounded"></div>
                </div>

                <div className="absolute bottom-[15px] lg:bottom-5 w-full">
                    <div className="flex gap-2 mb-3">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-16 h-5 bg-gray-300 dark:bg-gray-400 rounded"></div>
                        <div className="flex gap-3">
                            <div className="w-7 h-7 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                            <div className="w-7 h-7 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                            <div className="w-7 h-7 bg-gray-300 dark:bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectCarouselSkeleton = () => {
    return (
        <div className="sm:py-10 py-5 w-full h-[86%]">
            <div className="flex items-center justify-center gap-4 w-full h-full px-4">
                <div className="hidden md:flex gap-4">
                    <div className="opacity-50 scale-90">
                        <ProjectSkeleton />
                    </div>
                    <ProjectSkeleton />
                    <div className="opacity-50 scale-90">
                        <ProjectSkeleton />
                    </div>
                </div>

                <div className="md:hidden">
                    <ProjectSkeleton />
                </div>
            </div>
        </div>
    );
};
