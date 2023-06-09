import { useTheme } from "@mui/material/styles";
import { useToggleDarkMode } from "./MUIThemeProvider";
import Button from "@mui/material/Button";
import { StyledThemeSwitcherBox } from "./ThemeTestPage.styled";

export default function ThemeSwitcher() {
    const theme = useTheme();
    const toggleDarkMode = useToggleDarkMode();
    return (
        <StyledThemeSwitcherBox>
            {theme.palette.mode} mode
            <Button onClick={toggleDarkMode} variant="contained" sx={{ marginLeft: '10px' }}> switch </Button>
        </StyledThemeSwitcherBox>
    )
}