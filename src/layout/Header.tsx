import React from 'react';
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '../const';
import { SettingsToggle } from '../components/SettingsToggle';
import { useUIStore } from '../stores/uiStore';
import { useLanguageStore } from '../stores/languageStore';

export default function Header() {
    const { t, i18n } = useTranslation();
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const isOpen = useUIStore((state) => state.isNavbarOpen);
    const toggleNavbar = useUIStore((state) => state.toggleNavbar);

    const getResponsiveClass = (baseClass: string) => {
        switch (selectedLang) {
            case 'ceb':
            case 'fr':
                return `navCeb:${baseClass}`;
            case 'fil':
                return `navFil:${baseClass}`;
            case 'es':
                return `navEs:${baseClass}`;
            case 'ja':
                return `navJp:${baseClass}`;
            case 'pt':
                return `navPt:${baseClass}`;
            default:
                return `nav:${baseClass}`;
        }
    };

    return (
        <React.Fragment>
            <nav
                className={`bg-white dark:bg-gray-700 sticky z-50 w-full h-[70px] flex max-screen:justify-center top-0 
                    ${getResponsiveClass('px-16')} px-5 shadow-lg`}
            >
                <div className="w-full max-screen:max-w-maxDesktop h-full flex flex-row justify-between items-center">
                    <div>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            className="dark:text-white cursor-pointer"
                        >
                            CrlJhnMngs
                        </Link>
                    </div>
                    <div className={`${getResponsiveClass('flex')} gap-4 mt-1`}>
                        <div
                            className={`width-auto hidden ${getResponsiveClass(
                                'flex'
                            )} gap-4 mt-1 w-full`}
                        >
                            <ul
                                className={`flex ${getResponsiveClass(
                                    'flex-row'
                                )} flex-col items-center ${getResponsiveClass(
                                    'gap-3'
                                )} gap-1 ${
                                    selectedLang === 'ar' && 'font-arabic'
                                }`}
                            >
                                {sections.map((section) => (
                                    <li
                                        key={section.nameKey}
                                        className="cursor-pointer"
                                    >
                                        <Link
                                            to={section.id}
                                            activeClass="text-white bg-blue-500"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            className={`hover:text-white px-4 py-2 text-black hover:bg-blue-500 dark:text-white text-[15px] rounded-md`}
                                        >
                                            {t(section.nameKey)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className={`flex items-center ${getResponsiveClass(
                                'gap-2'
                            )} gap-1`}
                        >
                            <div>
                                <SettingsToggle language={selectedLang} />
                            </div>
                            <div
                                className={`flex ${getResponsiveClass(
                                    'hidden'
                                )} dark:text-white`}
                            >
                                <Hamburger
                                    toggled={isOpen}
                                    toggle={toggleNavbar}
                                    duration={0.9}
                                    size={22}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { type: 'spring' } }}
                        exit={{ x: 200, transition: { type: 'spring' } }}
                        className={`bg-white ${getResponsiveClass(
                            'hidden'
                        )} dark:bg-gray-700 p-2 z-50 fixed top-[70px] mt-2 rounded-lg shadow-lg right-2 block w-40 h-auto ${
                            selectedLang === 'ar' && 'font-arabic'
                        }`}
                    >
                        <ul className="flex flex-col gap-2 text-md font-medium">
                            {sections.map((section) => (
                                <Link
                                    key={section.nameKey}
                                    to={section.id}
                                    activeClass="text-white bg-blue-500"
                                    className="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    onClick={() => toggleNavbar}
                                >
                                    <li>{t(section.nameKey)}</li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}
