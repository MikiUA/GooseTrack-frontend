//RegisterForm
//AuthNavigate

import { Helmet } from 'react-helmet';
// import { Button } from '@mui/base';
import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
// import SectionTitle from 'components/SectionTitle/SectionTitle';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
       </Helmet>
      {/* <Button title="Sing Up"></Button> */}
        <RegisterForm />
    
     </div>
  );
};
export default RegisterPage;