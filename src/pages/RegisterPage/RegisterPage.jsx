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
        src={require('../../images/page/Img/elements.png')}
        srcset="../../images/page/Img/elements.png, ../../images/page/Img/elements.png 2x"
        alt="Goose"
      />
    </StyledDiv>
  );
};
export default RegisterPage;