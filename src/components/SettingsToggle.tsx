import { FaCog } from 'react-icons/fa';
import { useThemeSwitcher } from '../hooks/useThemeSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useUIStore } from '../stores/uiStore';
import { useLanguageStore } from '../stores/languageStore';

export const SettingsToggle = () => {
    const [theme, setTheme] = useThemeSwitcher();
    const { t } = useTranslation();
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const isOpen = useUIStore((state) => state.isSettingsOpen);
    const toggleSettings = useUIStore((state) => state.toggleSettings);

    const toggleDarkMode = () => {
        try {
            if (theme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        } catch (error) {
            console.log('Error switching theme');
        }
    };

    const getResponsiveClass = () => {
        switch (selectedLang) {
            case 'ceb':
            case 'fr':
                return 'navCeb:-right-14';
            case 'fil':
                return 'navFil:-right-14';
            case 'es':
                return 'navEs:-right-14';
            case 'ja':
                return 'navJp:-right-14';
            case 'pt':
                return 'navPt:-right-14';
            default:
                return 'nav:-right-14';
        }
    };

    return (
        <div className="relative">
            <button
                onClick={toggleSettings}
                className="p-2 rounded-full transition"
                aria-label="Toggle settings"
            >
                <FaCog
                    className={`w-7 h-7 transition-transform duration-300 dark:text-white text-black ${
                        isOpen ? 'rotate-[100deg]' : 'rotate-[0deg]'
                    }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.2 },
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2 },
                        }}
                        className={`absolute -right-16 ${getResponsiveClass()} mt-4 w-56 p-4 bg-white dark:bg-gray-700 shadow-xl rounded-lg z-50 flex justify-center flex-col gap-3`}
                    >
                        <div className="flex justify-center">
                            <div
                                className={`dark text-[11%] nav:text-[12%] dark:border dark:border-white border border-black relative h-[16em] w-[30em] rounded-[16em] cursor-pointer bg-[#423966] ${
                                    theme === 'light' ? 'day' : ''
                                }`}
                                onClick={toggleDarkMode}
                            >
                                <div
                                    className={`moon absolute block rounded-[50%] top-[3em] left-[3em] w-[10em] h-[10em] bg-[#423966] ${
                                        theme === 'light' ? 'sun' : ''
                                    }`}
                                ></div>
                            </div>
                        </div>
                        <div
                            className={`w-full ${
                                selectedLang === 'ar' && 'font-arabic'
                            }`}
                        >
                            <h1 className="text-black dark:text-white text-base">
                                {t('translation.select')}
                            </h1>
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
