import { create } from 'zustand';

interface UIStore {
    isSettingsOpen: boolean;
    toggleSettings: () => void;
    closeSettings: () => void;

    isNavbarOpen: boolean;
    toggleNavbar: () => void;
    closeNavbar: () => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
    isSettingsOpen: false,
    isNavbarOpen: false,

    toggleSettings: () => {
        const { isSettingsOpen } = get();
        set({
            isSettingsOpen: !isSettingsOpen,
            isNavbarOpen: false,
        });
    },

    toggleNavbar: () => {
        const { isNavbarOpen } = get();
        set({
            isNavbarOpen: !isNavbarOpen,
            isSettingsOpen: false,
        });
    },

    closeSettings: () => set({ isSettingsOpen: false }),
    closeNavbar: () => set({ isNavbarOpen: false }),
}));
