//RegisterForm
//AuthNavigate


import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate';
import { StyledDiv } from './RegisterPage.styled'; 
import { StyledImg } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledDiv>
      <RegisterForm />
      <AuthNavigate redirect={'/login'} nameLink="Log In" />

      <StyledImg
        src={require('../../images/logIn+signup/sign-up-img.png')}
        srcset=" src/images/logIn+signup/sign-up-img.png, src/images/logIn+signup/sign-up-img@2x.png"
        alt="Goose"
      />
    </StyledDiv>
  );
};
export default RegisterPage;