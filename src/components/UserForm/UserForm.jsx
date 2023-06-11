//UserForm
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  Container,
  Label,
  Input,
  InputWrap,
  ButtonWrap,
  FormWrap,
  AvatarWrap,
  AddButton,
  AddLabel,
  Img,
  UserWrap,
  UserName,
  User,
  ImgWrap,
  DateInput,
  AvatarSwg,
  AvatarSwgBox,
  AddSwg,
  ErrorInputValue,
  StyledIconError,
  StyledIconChecked,
} from './UserForm.styled';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import sprite from 'images/svg/sprite.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from 'formik-mui';
import { useUpdateUserInfoMutation } from 'API/userInfo';
import { setUserInfo } from 'API/userSlice';
import { Box, CircularProgress } from '@mui/material';

const UserForm = ({ data }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const originalDate = new Date();
  const formattedDate = originalDate.toISOString().slice(0, 10);

  console.log('state:', data);

  const [formData, setFormData] = useState({
    name: data?.name || 'User Name',
    email: data?.email || 'email@mail.com',
    phone: data?.phone || '38 (000) 111 22 33',
    skype: data?.skype || 'Add a skype number',
    birthday: data?.birthday || formattedDate,
    avatarUrl: data?.avatarUrl || null,
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
      formData.avatarUrl !== data.avatarUrl;

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

  console.log('local state:', formData);
  console.log('state:', data);
  console.log(isFormChanged);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Name must be at least 1 characters')
      .max(16, 'Name must be at most 16 characters')
      .required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    birthday: Yup.date()
      .max(originalDate, 'Birthday must be earlier than today')
      .required('Birthday is required'),
    skype: Yup.string().required('Skype is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = async (formData, action) => {
    try {
      setIsLoading(true);

      console.log(formData);

      const { data } = await updateUserInfo(
        formData // тут мають бути дані з форми
      );

      // ? використовувати FormData()
      //   const userFormData = new FormData();
      //   userFormData.append('name', formData.name);
      //   userFormData.append('email', formData.email);
      //   userFormData.append('avatar', formData.avatarUrl);
      //   userFormData.append('birthday', formData.birthday);
      //   userFormData.append('skype', formData.skype);
      //   console.log('userFormData', userFormData);

      //   const { data } = await updateUserInfo(
      //     userFormData // тут мають бути дані з форми
      //   );

      //   if (error) {
      //     alert(error.data.message);
      //     return;
      //   }

      dispatch(setUserInfo(data));

      setIsLoading(false);
      setIsFormChanged(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error occurred during form submission:', error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Container elevation={3}>
      <FormWrap>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form autoComplete="off">
              <AvatarWrap>
                <ImgWrap>
                  {!formData.avatarUrl ? (
                    <AvatarSwgBox>
                      <AvatarSwg>
                        <use href={`${sprite}#icon-ph_user`}></use>
                      </AvatarSwg>
                    </AvatarSwgBox>
                  ) : (
                    <Img src={formData.avatarUrl} alt="Avatar" />
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
                          avatarUrl: URL.createObjectURL(file),
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
                  <Label htmlFor="name" isError={errors.name && touched.name}>
                    User Name:
                  </Label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder={formData.name}
                      as={Input}
                      error={false}
                      onChange={handleChange}
                      value={formData.name}
                      isError={errors.name && touched.name}
                    />
                    {errors.name && touched.name && <StyledIconError />}
                    {!errors.name && touched.name && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="name" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    isError={errors.phone && touched.phone}
                  >
                    Phone:
                  </Label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder={formData.phone}
                      as={Input}
                      isError={errors.phone && touched.phone}
                    />
                    {errors.phone && touched.phone && <StyledIconError />}
                    {!errors.phone && touched.phone && <StyledIconChecked />}
                  </div>

                  <ErrorInputValue name="phone" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="birthday"
                    isError={errors.birthday && touched.birthday}
                  >
                    Birthday:
                  </Label>

                  {/* <Base variant input bitrhday */}
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
                        // slotProps={{
                        //   popper: {
                        //     sx: {},
                        //   },
                        // }}
                        renderInput={params => <TextField {...params} />}
                        isError={errors.birthday && touched.birthday}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <ErrorInputValue name="birthday" component="div" />
                </div>

                <div>
                  <Label
                    htmlFor="skype"
                    isError={errors.skype && touched.skype}
                  >
                    Skype:
                  </Label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      type="text"
                      id="skype"
                      name="skype"
                      placeholder={formData.skype}
                      as={Input}
                      isError={errors.skype && touched.skype}
                    />
                    {errors.skype && touched.skype && <StyledIconError />}
                    {!errors.skype && touched.skype && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="skype" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    isError={errors.email && touched.email}
                  >
                    Email:
                  </Label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder={formData.email}
                      as={Input}
                      isError={errors.email && touched.email}
                    />
                    {errors.email && touched.email && <StyledIconError />}
                    {!errors.email && touched.email && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="email" component="div" />
                </div>
              </InputWrap>
              <ButtonWrap>
                <StyledButton
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting || !isFormChanged || isLoading}
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
