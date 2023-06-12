import { useLoginMutation } from '../../../API/auth-operations';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledFormInsight,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledError,
  StyledInputWrap,
  StyledIconError,
  StyledIconChecked,
  StyledSpan,
  StyledSpanText,
} from './LoginForm.styled';
import { Icon } from '@mui/material';
import { FiLogIn } from 'react-icons/fi';
import { setUserInfo } from 'API/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoginForm = () => {
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const { error, data } = await login(values);

      if (error) {
        alert(error.data.message);
        return;
      }

      const { refreshToken, token, user } = data;

      dispatch(setUserInfo(user));

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));

      setIsLoading(false);
      resetForm();
    } catch (error) {
      setIsLoading(false);
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      })}
      onSubmit={handleSubmit}
    >
      {formik => (
        <StyledFormInsight>
          <StyledTitle>Log In</StyledTitle>
          <StyledLabel isError={formik.errors.email && formik.touched.email}>
            Email
          </StyledLabel>
          <StyledInputWrap>
            <StyledInput
              type="email"
              name="email"
              placeholder="Your e-mail..."
            />
            {formik.errors.email && formik.touched.email && (
              <StyledIconError color="red" />
            )}
            {formik.touched.email && !formik.errors.email && (
              <StyledIconChecked color="green" />
            )}
          </StyledInputWrap>
          <StyledError name="email" component="div" />
          <StyledLabel
            isError={formik.errors.password && formik.touched.password}
          >
            Password
          </StyledLabel>
          <StyledInputWrap>
            <StyledInput
              type="password"
              name="password"
              placeholder={'\u2022'.repeat(7)}
            />
            {formik.errors.password && formik.touched.password && (
              <StyledIconError color="red" />
            )}
            {formik.touched.password && !formik.errors.password && (
              <StyledIconChecked color="green" />
            )}
          </StyledInputWrap>
          <StyledError name="password" component="div" />
          <StyledButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress sx={{ color: 'white' }} />
              </Box>
            ) : (
              <StyledSpan>
                <StyledSpanText>Log In</StyledSpanText>

                <Icon
                  component={FiLogIn}
                  sx={{ width: '20px', height: '20px' }}
                />
              </StyledSpan>
            )}
          </StyledButton>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default LoginForm;
