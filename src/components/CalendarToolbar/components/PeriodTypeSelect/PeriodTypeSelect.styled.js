import { styled } from '@mui/material/styles';
import { styled as styledMui } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#cae8ff',
  borderRadius: theme.spacing(1),
  width: ' 152px',
  height: '34px',
}));

export const StyledLink = styledMui(Button)(({ theme }) => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  padding: 0,
  height: 34,
  width: 76,
  border: 'none',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.29,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.customLightBlueButton.background
      : theme.palette.background.paper,
  color: theme.palette.customLightBlueButton.text,
  borderRight: `0 solid ${theme.palette.primary.main}`,
  '&:first-of-type': {
    borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`,
  },
  '&:last-of-type': {
    borderRadius: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`,
    borderLeft: `0 solid ${theme.palette.primary.main}`,
  },
  '&:hover': {
    boxShadow: `4px 2px 16px ${theme.palette.primary.dark}`,
    // transform: 'scale(1.07)',
  },
  '&:disabled':
    theme.palette.mode === 'light'
      ? {
          backgroundColor: '#C0E0Ff',
          color: theme.palette.customLightBlueButton.text,
        }
      : {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
        },
}));
