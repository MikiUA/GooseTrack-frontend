import styled from 'styled-components';


export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-top: 16px;
    padding: 25px 18px 10px 18px;
    min-width: calc(100% - 40px);
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.5);
    background-color: #fff;

    @media screen and (min-width: 376px) {
        min-width: 335px;
    }

    @media screen and (min-width: 768px) {
        min-width: calc(100% / 2 - 56px);
        padding: 25px 23px 32px 20px;
    }

    @media screen and (min-width: 1440px) {
        min-width: calc(100% / 3 - 56px);
        padding: 25px 23px 28px 20px;
    }
`;