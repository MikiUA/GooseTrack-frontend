import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const IconStyled = styled(Icon)`
  stroke: #111;
  transition: linear 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.1;
    stroke: #3e85f3;
  }
`;

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 375px) {
    gap: 10px;
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
export const ChouseCat = styled.div`
  position: absolute;
  /* background-color: var(--primary-background-color); */
  flex-direction: column;
  gap: 12px;
  width: 100px;

  top: -50px;
  right: -45px;
  border: transparent;
  border-radius: 8px;

  font-family: Inter;
  font-style: Medium;
  font-size: 12px;
`;
export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
export const LabelStyled = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover,
  &:focus {
    scale: 1.1;
    stroke: #3e85f3;
  }
`;
