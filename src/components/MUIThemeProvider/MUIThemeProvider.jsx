import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useMemo } from "react";
import getThemeOptions from "./getThemeOptions";
import useLocalStorage from "hooks/useLocalStorage";

const ColorModeContext = createContext();

export default function MuiThemeProvider({ children }) {
    const [mode, setMode] = useLocalStorage('themeMode','light');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [setMode],
    );
    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export const useToggleDarkMode = () => {
    const colorMode = React.useContext(ColorModeContext);
    const toggle = useMemo(() => colorMode.toggleColorMode, [colorMode])
    return toggle
}
