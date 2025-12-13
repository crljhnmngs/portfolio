import { createContext, useContext, ReactNode } from 'react';
import { useGeneralInfo } from '../hooks/useGeneralInfo';
import { useSupportedLanguages } from '../hooks/useSupportedLanguages';
import { LocalizedInfo } from '../types/global';
import { useLanguageStore } from '../stores/languageStore';
import { useApp } from './AppContext';
import { useLocalizedInfoQuery } from '../hooks/useLocalizedInfoQuery';

type LocalizedInfoContextType = {
    localizedInfo: LocalizedInfo | undefined;
    isLoading: boolean;
};

const LocalizeInfoContext = createContext<LocalizedInfoContextType | undefined>(
    undefined
);

type LocalizedInfoProviderProps = {
    children: ReactNode;
};

export const LocalizedInfoProvider = ({
    children,
}: LocalizedInfoProviderProps) => {
    const { generalInfo } = useApp();
    const selectedLang = useLanguageStore((state) => state.selectedLang);
    const { localizedInfo, isLoading } = useLocalizedInfoQuery(
        generalInfo?.id ?? '',
        selectedLang
    );

    const value = {
        localizedInfo,
        isLoading,
    };

    return (
        <LocalizeInfoContext.Provider value={value}>
            {children}
        </LocalizeInfoContext.Provider>
    );
};

export const useLocalizedInfo = () => {
    const context = useContext(LocalizeInfoContext);
    if (!context) {
        throw new Error('useLocalInfo must be used within LocalInfoProvider');
    }
    return context;
};
