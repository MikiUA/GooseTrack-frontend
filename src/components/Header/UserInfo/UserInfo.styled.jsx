import styles from 'styled-components';
import { Avatar, styled } from '@mui/material';

export const StyledUserBox = styles.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 17px;
  }
`;

export const StyledLink = styles.a`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;


  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    margin-left: 14px;
  }
`;
