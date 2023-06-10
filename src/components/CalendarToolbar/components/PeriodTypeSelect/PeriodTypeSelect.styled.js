import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#cae8ff',
  borderRadius: theme.spacing(1),
  width: ' 152px',
  height: '34px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 34,
  width: 76,
  border: 'none',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.29,
  color: '#3e85f3',
  borderRight: `1px solid ${theme.palette.primary.main}`,
  '&:first-of-type': {
    borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`,
  },
  '&:last-of-type': {
    borderRadius: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`,
    borderLeft: `1px solid ${theme.palette.primary.main}`,
  },
  '&:hover': {
    boxShadow: `4px 2px 16px ${theme.palette.secondary.main}`,
    transform: 'scale(1.07)',
  },
  '&.active': {
    backgroundColor: '#3E85F333',
  },
}));
