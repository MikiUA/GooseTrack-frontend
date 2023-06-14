import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const TaskFormButtonWrap = styled.div`
    display: flex;
    width: 100%;
`

export const TaskFormButton = styled.button`
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px 8px 20px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    height: 42px;
    color: #ffffff;
    background-color: #3e85f3;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
        background-color: #1565c0;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

export const IconStyled = styled(Icon)`
    stroke: #fff;
    fill: #fff;
    margin-right: 8px;
`