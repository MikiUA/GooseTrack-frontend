import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const Button = styled.button`
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: 12px;
    text-align: center;
    border-radius: 8px;
    border: 1px dashed #3E85F3;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    cursor: pointer;
    background-color: #E3F3FF;
`;

export const ButtonIcon = styled.button`
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0);
`

export const ButtonIconStyled = styled(Icon)`
        stroke: #111;
        transition: linear 0.3s;

        &:hover,
        &:focus {
            stroke: #3e85f3;
        }
`
export const ButtonIconStyledPlus = styled(Icon)`
        margin-right: 8px;
        stroke: #111;
        transition: linear 0.3s;

        &:hover,
        &:focus {
            stroke: #3e85f3;
        }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    color: #111;
`