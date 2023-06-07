//LoginForm
//AuthNanigate

// import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
// import { AuthNavigate } from '../../components/AuthNavigate';
// import { StyledDiv, StyledLoginFormWrapper } from './LoginPage.styled';
// import { StyledImg } from './LoginPage.styled';

const LoginPage = () => {
  const redirectRegister = '/register';
  return (
    <StyledDiv>
      <StyledLoginFormWrapper>
        <LoginForm />
        <AuthNavigate redirect={redirectRegister} nameLink="Sign up" />
      </StyledLoginFormWrapper>
      <StyledImg
        src={require('images/logIn+signup/Log-in-Img.png')}
        srcset="images/logIn+signup/Log-in-Img.png, images/logIn+signup/Log-in-Img@2x.png 2x"
        alt="Goose"
      />
    </StyledDiv>
  );
};

// export default LoginPage;
