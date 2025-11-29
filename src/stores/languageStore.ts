import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const STORAGE_KEY = 'portfolio_selected_language';

const isValidLangCode = (code: string): boolean => {
    return /^[a-z]{2,5}$/.test(code);
};

interface LanguageStore {
    selectedLang: string;
    setSelectedLang: (code: string) => void;
    resetToDefault: (defaultCode: string) => void;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            selectedLang: 'en',
            setSelectedLang: (code) => {
                if (isValidLangCode(code)) {
                    set({ selectedLang: code });
                } else {
                    console.warn('[languageStore] Invalid lang code:', code);
                }
            },
            resetToDefault: (defaultCode) => set({ selectedLang: defaultCode }),
        }),
        {
            name: STORAGE_KEY,
            partialize: (state) => ({ selectedLang: state.selectedLang }),
            version: 1,
            skipHydration: true,
        }
    )
);
