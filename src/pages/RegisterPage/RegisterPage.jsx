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
        src={require('images/logIn+signup/Log-in-Img.png')}
        srcset="images/logIn+signup/Log-in-Img.png, images/logIn+signup/Log-in-Img@2x.png 2x"
        alt="Goose"
      />
    </StyledDiv>
  );
};
export default RegisterPage;