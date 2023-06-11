import styled, { keyframes } from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const fadeInAnimation = keyframes`
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
`;

export const ModalStyle = styled.div`
  max-width: 300px;
  width: 85%;
  min-height: 335px;
  max-height: 80vh;
  background-color: #ffffff;
  padding: 48px 18px 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  animation: ${fadeInAnimation} 0.3s ease-in;

  @media (min-width: 375px) {
    max-width: 395px;
  }

  @media (min-width: 768px) {
    max-width: 395px;
    height: auto;
    padding: 40px 28px;
  }
`;

export const StyledIcon = styled(IoIosClose)`
  position: absolute;
  top: 19px;
  right: 19px;
  transition: all 250ms;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover,
  &:focus {
    fill: red;
  }
`;
