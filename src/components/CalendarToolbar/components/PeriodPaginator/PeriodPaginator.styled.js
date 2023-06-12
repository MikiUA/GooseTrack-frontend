import styled from '@emotion/styled';
import { styled as styledMui } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const PeriodPaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: space-between;
`;

export const DateField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 30px;
  color: white;
  background-color: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.29;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styledMui(Button)(({ theme }) => `
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 36px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  font-size: 18px;
  background-color: ${theme.palette.background.paper};
  color:${theme.palette.text.primary};
  cursor: pointer;

  &:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }

  &:nth-of-type(2) {
    border-radius: 0px 8px 8px 0px;
    border-left: none;
  }

  &:nth-of-type(2):hover {
    border-left: 1px solid rgba(220, 227, 229, 0.8);
  }

  &:hover {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    transform: scale(1.05);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`);
