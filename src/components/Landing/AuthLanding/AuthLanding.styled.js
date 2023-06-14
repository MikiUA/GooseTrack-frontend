import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Icon from '../../../utils/Icon/Icon';

export const CustomIcon = styled(Icon)`
  margin-left: 8px;
  width: 16px;
  height: 16px;
  stroke: #3e85f3;
 `;

export const StyledHeader = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3e85f3;
  padding-top: 50px;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: 44px;
  line-height: 1.09;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
    margin-bottom: 40px;
  }
`;

export const Span = styled.span`
  font-style: italic;
`;

export const StyledPicture = styled.picture`
  width: 142px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const ImgLogo = styled.img`
 width: 142px;

@media screen and (min-width: 768px) {
  width: 150px;
}
`

export const StyledImgAuthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const AuthBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 230px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const StyledAuthButton = styled(NavLink)`
  width: 131px;
  height: 46px;
  color: #3e85f3;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  text-decoration: none;
  letter-spacing: -0.02em;
  background: #ffffff;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    

  &:hover,
  &:focus {
    fill: #ff6c00;
    background-color: #ff6c00;
    color: #ffffff;    
  }

   &:hover .login-span, 
   &:hover {
    stroke: #ffffff;
  } 

  &:focus .login-span, 
  &:focus {
    stroke: #ffffff;
  } 
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  text-decoration-line: underline;
  color: #ffffff;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff6c00;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
