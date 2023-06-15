import { List, styled } from '@mui/material';

export const ListStyled = styled(List)(
    ({ theme }) => `
    overflow-y: auto;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 12px;
        background-color: ${theme.palette.mode === 'dark' ? '#21222C' : '#F2F2F2'};   
    };

    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color: ${theme.palette.mode === 'dark' ? '#2D3037' : '#E7E5E5'};
    };
`);
