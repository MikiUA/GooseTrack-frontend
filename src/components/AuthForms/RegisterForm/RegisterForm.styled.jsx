

import {
  Button,
  Typography,
  Container,
  styled,
  Box,
 
} from '@mui/material';




import { Link as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
width: 53px;
height: 24px;
margin-left:auto;
margin-right:auto;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
text-decoration-line: underline;
color: #3E85F3;
text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
flex: none;
order: 1;
flex-grow: 0;
`

export const StyledContainer = styled(Container)`
width:100%;
height:100%;
align-items:center;
text-align:center;
background-color:#DCEBF7;

`

export const StyledTypography = styled(Typography)`
font-family: 'Inter';
margin-bottom:8px;
margin-top:24px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: #111111;
`;
export const StyledHeader = styled(Typography)`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #3E85F3;
text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;


export const StyledButton = styled(Button)`
text-transform: none;
border-radius:16px;
padding:14px 0;
font-family:'Inter';
font-size:14px;
font-weight:600;
`;


export const StyledBox = styled(Box)`
  min-width: 335px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: left;
  text-align: left;
  border-radius: 8px;
  padding: 40px 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 155px;

  @media screen and (min-width: 768px) {
    width: 480px; 
    padding: 40px;
  }

`;


