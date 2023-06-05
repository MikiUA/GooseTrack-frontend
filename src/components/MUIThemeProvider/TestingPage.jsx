import ThemeSwitcher from "./ThemeSwitcher";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";


export default function TestingPage({ children }) {
    return (
        <Box display='block'>
            <ThemeSwitcher />
            <Button variant="contained">Contained</Button>
        </Box>
    )
}