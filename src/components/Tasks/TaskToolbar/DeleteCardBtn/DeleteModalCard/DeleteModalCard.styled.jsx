import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #3e85f3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: 14px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 20px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: linear 0.3s;
`;

export const DeleteBtn = styled(Button)`
  display: flex;
  width: 135px;
  height: 42px;
  padding: 8px 16px 8px 20px;
  border: none;
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

export const CancelBtn = styled(Button)`
  width: 135px;
  height: 42px;
  padding: 8px 16px 8px 20px;
  border: none;
  height: 42px;
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
