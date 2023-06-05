import { useTheme } from "@mui/material/styles";
import { useToggleDarkMode } from "./MUIThemeProvider";

import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { StyledToggleThemeBox } from "./TestingPage.styled";


export default function TestingPage({ fullpage = false, children }) {
    const theme = useTheme();
    const toggleDarkMode = useToggleDarkMode();
    if (!fullpage) return (
        <StyledToggleThemeBox>
            {theme.palette.mode} mode <Button onClick={toggleDarkMode} variant="outlined"> switch </Button>
        </StyledToggleThemeBox>
    )
    return (
        <Box display='block'>
            <StyledToggleThemeBox>
                {theme.palette.mode} mode <Button onClick={toggleDarkMode} variant="outlined"> switch </Button>
            </StyledToggleThemeBox>
            <Button variant="contained">Contained</Button>
        </Box>
    )
}