import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import styled from 'styled-components';

export const StyledForm = styled(Formik)`
  max-width: 335px;
`;
export const StyledFormInsight = styled(Form)`
  width: 287px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: left;
  text-align: left;
  border-radius: 8px;
  padding: 40px 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 40px;
  }
  @media (max-width: 375px) {
    width: fit-content;
  }
`;

export const StyledTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #3e85f3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;
export const StyledLabel = styled.label`
  color: ${props => (props.isError ? 'red' : 'black' || 'inherit')};
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 8px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const StyledIconError = styled(RiErrorWarningLine)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
export const StyledIconChecked = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledInput = styled(Field)`
  display: flex;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  padding: 14px;
  &::placeholder {
    color: #dce3e5;
  }
  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
    border-color: black;
  }
  &:invalid {
    border-color: red;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`;

export const StyledButton = styled.button`
  width: 287px;
  height: 46px;
  margin-top: 32px;
  width: 100%;
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  &:hover,
  :focus {
    transform: scale(1.02);
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

export const StyledSpanText = styled.p`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledError = styled(ErrorMessage)`
  margin-top: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #da1414;
`;
