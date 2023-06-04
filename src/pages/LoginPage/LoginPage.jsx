//LoginForm
//AuthNanigate

import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
import {
  StyledDiv,
  StyledLoginFormWrapper,
  StyledNavLink,
} from './LoginPage.styled';
import { StyledImg } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledDiv>
      <StyledLoginFormWrapper>
        <LoginForm />
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
      </StyledLoginFormWrapper>
      <StyledImg
        src={require('../../images/page/Desktop/gooseinrocket_desk@1x.png')}
        srcset="../../images/page/Desktop/gooseinrocket_desk@1x.png, ../../images/page/Desktop/gooseinrocket_desk@2x.png 2x"
        alt="Goose"
      />
    </StyledDiv>
  );
};

export default LoginPage;
