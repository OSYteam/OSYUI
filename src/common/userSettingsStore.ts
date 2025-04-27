import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


type appTheme = 'dark' | 'light';
const initialTheme = localStorage.getItem("theme")! as appTheme;


interface userSettingsState {
    theme: appTheme;
    setTheme: (theme: appTheme) => void;
}


export const useUserSettingsStore = create<userSettingsState>()(

    immer((set, _get) => ({
        theme: initialTheme,
        setTheme: (theme: appTheme) => {
            set((state) => {

                localStorage.setItem("theme", theme);
                state.theme = theme;
            })
        }
    }))

);