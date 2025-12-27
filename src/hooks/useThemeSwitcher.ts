import { useState, useEffect } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
};

export type ThemeSetter = (theme: string) => void;

export function useThemeSwitcher(): [string, ThemeSetter] {
    const [theme, setTheme] = useState<string>(getInitialTheme);

    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        localStorage.setItem('color-theme', theme);
    };

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return [theme, setTheme];
}
