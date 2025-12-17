import { createContext, useContext, ReactNode } from 'react';
import { LocalizedInfo } from '../types/global';
import { useLanguageStore } from '../stores/languageStore';
import { useApp } from './AppContext';
import { useLocalizedInfoQuery } from '../hooks/useLocalizedInfoQuery';

type LocalizedInfoContextType = {
    localizedInfo: LocalizedInfo | undefined;
    isLoading: boolean;
    isError: boolean;
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
    const { localizedInfo, isLoading, isError } = useLocalizedInfoQuery(
        generalInfo?.id ?? '',
        selectedLang
    );

    const value = {
        localizedInfo,
        isLoading,
        isError,
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
        throw new Error(
            'useLocalizedInfo must be used within LocalInfoProvider'
        );
    }
    return context;
};
