import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
`;

export const IconStyled = styled(Icon)`
  stroke: #111;
  transition: linear 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const BtnStyled = styled.button`
  background-color: transparent;
  border: none;
`;
export const BtnStyledText = styled.span`
  margin-right: 4px;
  width: 67px;
  text-align: left;
`;
export const BtnWrap = styled.div`
  background-color: transparent;
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  flex-direction: column;

  width: 110px;

  top: -20px;
  right: -65px;
  border: transparent;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: Medium;
  font-size: 12px;
`;
export const BtnMoveWrap = styled.button`
  background-color: #fff;
  border: none;
  z-index: 13;
  padding: 0 2px;
`;

export const LabelStyled = styled.div`
  cursor: pointer;
  padding: 10px 0;
  transition: scale 0.3s ease-in, background-color 0.3s ease-in;
  &:hover,
  &:focus {
    scale: 1.05;
    background-color: #e3f3ff;
  }
`;
