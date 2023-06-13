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
  margin-left: 4px;
`;
export const BtnWrap = styled.div`
  background-color: transparent;
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  flex-direction: column;
  gap: 5px;
  width: 110px;

  top: -50px;
  right: -55px;
  border: transparent;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: Medium;
  font-size: 12px;
`;

export const LabelStyled = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #e3f3ff;
  transition: box-shadow 0.3s ease-in;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 4px #1565c0;
  }
`;
