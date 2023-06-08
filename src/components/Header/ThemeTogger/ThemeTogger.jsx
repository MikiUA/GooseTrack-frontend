import Icon from '../../../utils/Icon/Icon';
import { useTheme } from '@mui/material/styles';
import { useToggleDarkMode } from '../../MUIThemeProvider/MUIThemeProvider';
import { StyledToggleThemeBox } from './ThemeTogger.styled';

export const ThemeTogger = () => {
  const theme = useTheme();
  const toggleDarkMode = useToggleDarkMode();

  return (
    <StyledToggleThemeBox onClick={toggleDarkMode}>
      {theme.palette.mode == 'light' && <Icon name="icon-moon" />}
      {theme.palette.mode == 'dark' && <Icon name="icon-sun" />}
    </StyledToggleThemeBox>
  );
};
