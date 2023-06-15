import styles from 'styled-components';
import Icon from 'utils/Icon/Icon';
import { styled } from '@mui/material';


export const Button = styles.button`
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
`

export const IconStyled = styled(Icon)(
    ({ theme }) => `
        stroke: ${theme.palette.mode === 'dark' ? '#FFFFFF' : '#111'} ;
        transition: linear 0.3s;

        &:hover,
        &:focus {
            stroke: #3e85f3;
        }
`)