import { useTheme } from "@mui/material/styles";
import { useToggleDarkMode } from "./MUIThemeProvider";
import { StyledToggleThemeBox } from "./TestingPage.styled";
import Button from "@mui/material/Button";

export default function ThemeSwitcher() {
    const theme = useTheme();
    const toggleDarkMode = useToggleDarkMode();
    return (
        <StyledToggleThemeBox>
            {theme.palette.mode} mode <Button onClick={toggleDarkMode} variant="outlined"> switch </Button>
        </StyledToggleThemeBox>
    )
}