import { createContext, useContext, ReactNode } from 'react';
import { useGeneralInfo } from '../hooks/useGeneralInfo';
import { useSupportedLanguages } from '../hooks/useSupportedLanguages';
import { GeneralInfo, SupportedLanguage } from '../types/global';
import { useLanguageStore } from '../stores/languageStore';

type AppContextType = {
    generalInfo: GeneralInfo | undefined;
    languages: SupportedLanguage[];
    defaultLanguage: SupportedLanguage | undefined;
    currentLanguage: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const { generalInfo } = useGeneralInfo();
    const { languages, defaultLanguage } = useSupportedLanguages();
    const selectedLang = useLanguageStore((state) => state.selectedLang);

    const value = {
        generalInfo,
        languages,
        defaultLanguage,
        currentLanguage: selectedLang,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};
