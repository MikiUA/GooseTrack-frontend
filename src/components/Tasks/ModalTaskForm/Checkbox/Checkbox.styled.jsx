import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxStyle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: ${prop => `1px solid ${prop.color}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${prop => (prop.checked ? `${prop.color}80` : prop.color)};
`;
export const InnerCircleStyle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${prop => prop.color};
  border: ${prop => (prop.checked ? '1px solid #ffffff' : 'none')};
`;

export const CheckboxSpan = styled.span`
  margin-left: 5px;
  font-family: 'Inter';
  font-weight: 600;
`;
