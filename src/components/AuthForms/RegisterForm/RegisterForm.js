import { Box, Container } from '@mui/material';
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-mui';
import {Link, StyledButton, StyledHeader, StyledTypography} from './styledMui'
import { useRegistrationMutation } from 'API/auth-operations';
import LoginIcon from '@mui/icons-material/Login';
import * as Yup from 'yup';


  const initialRegisterValues = {
    name: '',
    email: '',
    password: ''
  };

const RegisterForm = () => {
  const [register] = useRegistrationMutation();

  const handleSubmit = (values, { resetForm }) => { register(values); resetForm(); };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  return (
    <Container >
      <Box sx={{ textAlign:'start', display: "flex", flexDirection: "column", width:470,backgroundColor:'#fff',ml:'auto',mr:'auto',padding:'40px 24px',borderRadius:2,outline:'1px solid red'}} >
        <StyledHeader >Sign Up</StyledHeader>
        <Box >
          <Formik initialValues={initialRegisterValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={{width:'100%'}} >
              <StyledTypography >Name</StyledTypography>
              <Field  component={TextField} name="name"  fullWidth variant="outlined" type="text" placeholder=' Enter your name' />
              <StyledTypography >Email</StyledTypography>
              <Field   component={TextField} name="email" fullWidth variant="outlined" type="email" placeholder='Enter email' />
              <StyledTypography >Password</StyledTypography>
              <Field  component={TextField} name="password" fullWidth variant="outlined" placeholder='Enter password' type="Enter password" />
              <Box mt={8}>
                <StyledButton fullWidth variant="contained" type="submit" endIcon={<LoginIcon />} >Sign Up</StyledButton>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
      <Link to="/login">Log In</Link>
     </Container>
  );
};

export default RegisterForm;