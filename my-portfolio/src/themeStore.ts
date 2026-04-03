// themeStore.ts
import { create } from 'zustand'

interface ThemeState {
  dark: boolean
  textColor: string
  toggleDark: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  textColor: '#343434', // default light text
  bgColor: '#F8F8F8',   // default light background
  toggleDark: () => set((state) => {
    const newDark = !state.dark
    return {
      dark: newDark,
      textColor: newDark ? '#F8F8F8' : '#343434',
    }
  }),
}))