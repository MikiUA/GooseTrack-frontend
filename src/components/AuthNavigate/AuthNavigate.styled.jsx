import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  display: block;
  margin-top: 18px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }

  :hover,
  :focus {
    color: #290b78;
  }
`;
