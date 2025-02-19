import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    dark: () => {},
    light: () => {},
});

// Corrected spelling here
export const ThemeProvider = ThemeContext.Provider;

// Ensure proper export of useTheme
export function useTheme() {
    return useContext(ThemeContext);
}
