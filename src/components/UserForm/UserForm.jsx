import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import sprite from 'images/svg/sprite.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from 'formik-mui';
import { Box, CircularProgress } from '@mui/material';
import {
  AddButton,
  AddLabel,
  AddSwg,
  AvatarSwg,
  AvatarSwgBox,
  AvatarWrap,
  ButtonWrap,
  Container,
  DateInput,
  FormWrap,
  Img,
  ImgWrap,
  InputWrap,
  Label,
  StyledButton,
  User,
  UserName,
  UserWrap,
} from './UserForm.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserInfoMutation } from 'API/userInfo';
import { setUserInfo } from 'API/userSlice';

const UserForm = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const originalDate = new Date();
  const formattedDate = originalDate.toISOString().slice(0, 10);

  const [formData, setFormData] = useState({
    name: data?.name || 'User Name',
    email: data?.email || 'email@mail.com',
    phone: data?.phone || '38 (000) 111 22 33',
    skype: data?.skype || 'Add a skype number',
    birthday: data?.birthday || formattedDate,
    avatar: data?.avatarUrl || null,
  });
  const initialValues = {
    name: formData.name,
    email: formData.email,
    skype: formData.skype,
    phone: formData.phone,
    birthday: formData.birthday,
    avatar: formData.avatar,
  };
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged =
      formData.name !== data.name ||
      formData.email !== data.email ||
      formData.phone !== data.phone ||
      formData.skype !== data.skype ||
      formData.birthday !== data.birthday ||
      formData.avatar !== data.avatarUrl;

    setIsFormChanged(isChanged);
  }, [
    data.avatarUrl,
    data.birthday,
    data.email,
    data.name,
    data.phone,
    data.skype,
    formData,
  ]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    birthday: Yup.date().required('Birthday is required'),
    skype: Yup.string().required('Skype is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const handleSubmit = async (formData, { setIsFormChanged }) => {
    try {
      setIsLoading(true);

      console.log(formData);

      const { data } = await updateUserInfo(
        formData // тут мають бути дані з форми
      );

      // ? використовувати FormData()
      // const userFormData = new FormData();
      // userFormData.append('name', values.name);
      // userFormData.append('email', values.email);
      // userFormData.append('avatar', values.avatar);
      // userFormData.append('birthday', values.birthday);
      // userFormData.append('skype', values.skype);
      // console.log(userFormData);

      // if (error) {
      //   alert(error.data.message);
      //   return;
      // }

      dispatch(setUserInfo(data));

      setIsLoading(false);
      // setIsFormChanged(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <Container elevation={3}>
      <FormWrap>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <AvatarWrap>
                <ImgWrap>
                  {!formData.avatar ? (
                    <AvatarSwgBox>
                      <AvatarSwg>
                        <use href={`${sprite}#icon-ph_user`}></use>
                      </AvatarSwg>
                    </AvatarSwgBox>
                  ) : (
                    <Img src={formData.avatar} alt="Avatar" />
                  )}

                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={e => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          avatar: URL.createObjectURL(file),
                        });
                      }
                    }}
                    style={{ display: 'none' }}
                  />
                  <AddLabel htmlFor="avatar">
                    <AddButton variant="outlined" component="svg">
                      <AddSwg>
                        <use href={`${sprite}#icon-plus`}></use>
                      </AddSwg>
                    </AddButton>
                  </AddLabel>
                </ImgWrap>
                <UserWrap>
                  <UserName>{formData.name}</UserName>
                  <User>User</User>
                </UserWrap>
              </AvatarWrap>
              <InputWrap>
                <div>
                  <Label htmlFor="name">User Name:</Label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder={formData.name}
                    error={false}
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone:</Label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder={formData.phone}
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div>
                  <Label htmlFor="birthday">Birthday:</Label>
                  {/* <Field
                    type="date"
                    id="birthday"
                    name="birthday"
                    placeholder={formData.birthday}
                    as={Input}
                  /> */}

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['DatePicker']}
                      sx={{ padding: '0px' }}
                    >
                      <DateInput
                        id="birthday"
                        name="birthday"
                        value={dayjs(formData.birthday)}
                        onChange={newValue =>
                          setFormData({
                            ...formData,
                            birthday: newValue.format('YYYY-MM-DD'),
                          })
                        }
                        format="DD/MM/YYYY"
                        maxDate={dayjs(formattedDate)}
                        slots={{
                          openPickerIcon: KeyboardArrowDownIcon,
                        }}
                        renderInput={params => <TextField {...params} />}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <ErrorMessage name="birthday" component="div" />
                </div>

                <div>
                  <Label htmlFor="skype">Skype:</Label>
                  <Field
                    type="text"
                    id="skype"
                    name="skype"
                    placeholder={formData.skype}
                  />
                  <ErrorMessage name="skype" component="div" />
                </div>
                <div>
                  <Label htmlFor="email">Email:</Label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder={formData.email}
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </InputWrap>
              <ButtonWrap>
                <StyledButton
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting || !isFormChanged}
                >
                  {/* Save changes */}
                  {isLoading ? (
                    <Box sx={{ display: 'flex' }}>
                      <CircularProgress sx={{ color: 'white' }} />
                    </Box>
                  ) : (
                    <span>Save changes</span>
                  )}
                </StyledButton>
              </ButtonWrap>
            </Form>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};

export default UserForm;
