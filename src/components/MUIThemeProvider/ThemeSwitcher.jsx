import { useTheme } from "@mui/material/styles";
import { useToggleDarkMode } from "./MUIThemeProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ThemeSwitcher() {
    const theme = useTheme();
    const toggleDarkMode = useToggleDarkMode();
    return (
        <Box
            sx={{
                display: 'block',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                border: '1px solid',
                borderColor: 'palette.primary'
            }}>
            {theme.palette.mode} mode
            <Button onClick={toggleDarkMode} variant="contained"> switch </Button>
        </Box>
    )
}