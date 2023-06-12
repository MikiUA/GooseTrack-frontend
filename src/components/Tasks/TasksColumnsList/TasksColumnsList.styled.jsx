import styled from 'styled-components';


export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: auto;
    padding: 0 0 34px 0;
    margin: -16px 0 0 -16px;
    list-style: none;
    max-height: 432px;

    @media screen and (min-width: 768px) {
        max-height: 568px;
        padding-bottom: 150px;
        justify-content: space-between;
    }

    @media screen and (min-width: 1440px) {
        max-height: 568px;
        padding-bottom: 0;
        justify-content: space-between;
    }

    &::-webkit-scrollbar {
        height: 12px;
        border-radius: 12px;
        background-color: #F2F2F2;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color: #E7E5E5;
    }
`
