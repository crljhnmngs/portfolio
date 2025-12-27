import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';
import { Projects } from '~/types/global';
import { useTranslation } from 'react-i18next';

export const ProjectModal = ({
    project,
    isOpen,
    onClose,
}: {
    project: Projects | null;
    isOpen: boolean;
    onClose: () => void;
}) => {
    if (!isOpen || !project) return null;
    const { t, i18n } = useTranslation();

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ${
                i18n.language === 'ar' && 'font-arabic'
            }`}
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] max-w-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
                    onClick={onClose}
                >
                    <FaTimes size={24} />
                </button>

                <h2 className="text-xl font-semibold dark:text-white">
                    {project.name}
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {project.about}
                </p>
                <div className="mt-4">
                    <span className="font-semibold dark:text-white">
                        {t('projects.modal.technologies')}
                    </span>
                    <ul className="mt-1 flex flex-wrap gap-2">
                        {project.tech.map((tech: string, index: number) => (
                            <li
                                key={index}
                                className="bg-gray-800 text-white dark:text-gray-300 px-3 py-1 text-xs rounded-md"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`mt-4 flex gap-4`}>
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-blue-500 hover:underline"
                        >
                            <FaGithub size={20} />{' '}
                            {t('projects.modal.viewRepo')}
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-green-500 hover:underline"
                        >
                            <FaLink size={20} /> {t('projects.modal.viewSite')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
