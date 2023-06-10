import styled from 'styled-components';

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19px;
`;

export const TaskFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TaskFormLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: rgba(52, 52, 52, 0.8);
  margin-bottom: 8px;
  /* @media screen and (min-width: 768px) {
  }
  @media screen and(min-width: 1440px) {
  } */
`;
export const TaskFormInputWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin-top: 18px;
`;
export const TaskFormLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskFormCheckboxWrap = styled.div`
  display: flex;
  gap: 26px;
  align-self: flex-start;
  margin: 16px 0 32px;
`;

export const TaskFormButtonWrap = styled.div`
  display: flex;
  gap: 14px;
`;

export const TaskFormButtonAdd = styled.button`
  width: 135px;
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
  width: 135px;
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
`;

export const TaskFormButtonAddSpan = styled.span`
  margin-right: 10px;
`;

export const TaskFormButtonCancel = styled.button`
  width: 135px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 20px;
  border: none;
  width: 118px;
  height: 42px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #111111;
  background-color: #efefef;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #dad7d7;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
