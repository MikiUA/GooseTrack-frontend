import styled from '@emotion/styled';

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled.a`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 76px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: rgba(62, 133, 243, 1);
  background-color: rgba(227, 243, 255, 1);
  border-right: 1px solid rgba(62, 133, 243, 0.2);

  &:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }

  &:last-of-type {
    border-radius: 0px 8px 8px 0px;
    border-left: 1px solid rgba(62, 133, 243, 0.2);
  }

  &:hover {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    transform: scale(1.07);
  }
`;
