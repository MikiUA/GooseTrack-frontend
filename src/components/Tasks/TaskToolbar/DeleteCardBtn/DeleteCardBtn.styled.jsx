import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';


export const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0);
`

export const IconStyled = styled(Icon)`
        stroke: #111;
        transition: linear 0.3s;

        &:hover,
        &:focus {
            stroke: #3e85f3;
        }
`