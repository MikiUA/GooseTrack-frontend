import styled from 'styled-components';
import Icon from '../../../utils/Icon/Icon';

export const StyledButton = styled.button`
  display: block;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  margin-left: 19px;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin-left: 26px;
  }
`;

export const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
