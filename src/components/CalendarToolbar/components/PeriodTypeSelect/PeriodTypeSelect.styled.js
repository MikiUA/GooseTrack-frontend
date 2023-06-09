// import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   background-color: #cae8ff;
//   border-radius: 8px;
// `;

// export const StyledLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   height: 34px;
//   width: 76px;

//   text-transform: none;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.29;
//   color: #3e85f3;
//   border-right: 1px solid rgba(62, 133, 243, 0.2);

//   &:first-of-type {
//     border-radius: 8px 0px 0px 8px;
//   }

//   &:last-of-type {
//     border-radius: 0px 8px 8px 0px;
//     border-left: 1px solid rgba(62, 133, 243, 0.2);
//   }

//   &:hover {
//     box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
//     transform: scale(1.07);
//   }
// `;
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  border: 'none',
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
