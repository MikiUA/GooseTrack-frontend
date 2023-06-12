import styled from 'styled-components';

export const List = styled.ul`
    overflow-y: auto;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 12px;
        background-color: #F2F2F2;   
    };

    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color: #E7E5E5;
    };
`;
