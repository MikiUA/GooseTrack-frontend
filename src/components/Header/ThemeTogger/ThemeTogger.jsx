import { StyledButton } from './ThemeTogger.styled';
import { useTheme } from '@mui/material/styles';
import { useToggleDarkMode } from '../../MUIThemeProvider/MUIThemeProvider';
import { StyledIcon } from './ThemeTogger.styled';

export const ThemeTogger = () => {
  const theme = useTheme();
  const toggleDarkMode = useToggleDarkMode();

  return (
    <StyledButton onClick={toggleDarkMode}>
      {theme.palette.mode === 'light' && <StyledIcon name="icon-moon" />}
      {theme.palette.mode === 'dark' && <StyledIcon name="icon-sun" />}
    </StyledButton>
  );
};
