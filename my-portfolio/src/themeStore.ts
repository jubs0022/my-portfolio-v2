import {create} from 'zustand';

interface webThemeState {
    webTheme: 'light' | 'dark';
    toggleWebTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<webThemeState>((set) => ({
    webTheme: 'light',
    toggleWebTheme: (theme) => set({ webTheme: theme }),
}));