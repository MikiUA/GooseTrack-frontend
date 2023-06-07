import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, useMemo } from "react";


const themeOptions = (mode) => ({
    palette: {
        mode
    }
});

const ColorModeContext = createContext();

export default function MuiThemeProvider({ children }) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );
    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(themeOptions(mode)), [mode]);

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
