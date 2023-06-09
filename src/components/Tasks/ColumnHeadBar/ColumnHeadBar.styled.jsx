import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        margin-bottom: 35px;
    }
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    margin: 0;

    @media screen and (min-width: 768px) {
        line-height: 24px;
    }
`;