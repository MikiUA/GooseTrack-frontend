//UserForm
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
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
import { getUserInfo, setUserInfo } from 'API/userSlice';
import { Box, CircularProgress } from '@mui/material';
import {
  formattedDate,
  validationSchema,
} from './ValidationSchema/ValidationSchema';

const UserForm = ({ data }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [date, setDate] = useState('');
  const userInfo = useSelector(getUserInfo);
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
    avatar: formData.avatarUrl,
  };

  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged = !Object.is(formData, data);

    setIsFormChanged(isChanged);
  }, [data, formData]);

  const handleSubmit = async formData => {
    try {
      setIsLoading(true);
      formData.birthday = date;

      const { data } = await updateUserInfo(formData);
      console.log(data);
      if (data) {
        dispatch(setUserInfo(data));
      }

      setIsLoading(false);
      setIsFormChanged(false);
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
                        <use href={`${sprite}#icon-add`}></use>
                      </AddSwg>
                    </AddButton>
                  </AddLabel>
                </ImgWrap>
                <UserWrap>
                  <UserName>{userInfo.name}</UserName>
                  <User>User</User>
                </UserWrap>
              </AvatarWrap>
              <InputWrap>
                <div>
                  <Label htmlFor="name" iserror={errors.name && touched.name}>
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
                      iserror={errors.name && touched.name}
                    />
                    {errors.name && touched.name && <StyledIconError />}
                    {!errors.name && touched.name && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="name" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    iserror={errors.phone && touched.phone}
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
                      iserror={errors.phone && touched.phone}
                    />
                    {errors.phone && touched.phone && <StyledIconError />}
                    {!errors.phone && touched.phone && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="phone" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="birthday"
                    iserror={errors.birthday && touched.birthday}
                  >
                    Birthday:
                  </Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['DatePicker']}
                      sx={{ padding: '0px' }}
                    >
                      <DateInput
                        id="birthday"
                        name="birthday"
                        value={dayjs(formData.birthday)}
                        onChange={e => setDate(e.format('YYYY-MM-DD'))}
                        format="DD/MM/YYYY"
                        maxDate={dayjs(formattedDate)}
                        slots={{
                          openPickerIcon: KeyboardArrowDownIcon,
                        }}
                        textField={params => <TextField {...params} />}
                        iserror={errors.birthday && touched.birthday}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <ErrorInputValue name="birthday" component="div" />
                </div>

                <div>
                  <Label
                    htmlFor="skype"
                    iserror={errors.skype && touched.skype}
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
                      iserror={errors.skype && touched.skype}
                    />
                    {errors.skype && touched.skype && <StyledIconError />}
                    {!errors.skype && touched.skype && <StyledIconChecked />}
                  </div>
                  <ErrorInputValue name="skype" component="div" />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    iserror={errors.email && touched.email}
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
                      iserror={errors.email && touched.email}
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
