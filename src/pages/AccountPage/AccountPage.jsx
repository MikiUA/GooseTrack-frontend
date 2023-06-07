//UserForm
import React, { useState } from 'react';
//eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import Joi from 'joi';
// import { updateUser } from 'actions/authActions';
import icon from 'images/logIn+signup/Log-in-Img.png';
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
} from './AccountPage.styled';

const UserForm = () => {
  //eslint-disable-next-line
  const dispatch = useDispatch();

  const currentUser = { name: 'Name', email: 'mail@gmail.com' };

  //! При створені стора змінити currentUser на строку нижче
  // const currentUser = useSelector(state => state.auth.user);

  const originalDate = new Date();
  const formattedDate = originalDate.toISOString().slice(0, 10);

  const [formData, setFormData] = useState({
    name: currentUser?.name || 'User Name',
    email: currentUser?.email || 'email@mail.com',
    phone: currentUser?.phone || '38 (000) 111 22 33',
    skype: currentUser?.skype || 'Add a skype number',
    birthday: currentUser?.birthday || formattedDate,
    avatar: currentUser?.avatar || icon,
  });

  const initialValues = {
    name: formData.name,
    email: formData.email,
    skype: formData.skype,
    phone: formData.phone,
    birthday: formData.birthday,
    avatar: formData.avatar,
  };

  //   const schema = Joi.object({
  //     name: Joi.string().required().label('Name'),
  //     email: Joi.string().email().required().label('Email'),
  //   });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // const { error } = schema.validate(values, { abortEarly: false });
    // if (error) {
    //   // Обробка помилок та виведення пуш-повідомлень
    //   // ...
    //   setSubmitting(false);
    //   return;
    // }
    // dispatch(updateUser(values))
    //   .then(() => {
    //     // Оновлюємо глобальний стейт після успішної відповіді
    //     resetForm();
    //   })
    //   .catch(error => {
    //     // Обробляємо помилку та виводимо пуш-повідомлення
    //   })
    //   .finally(() => {
    //     setSubmitting(false);
    //   });
  };

  return (
    <Container elevation={3}>
      <FormWrap>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <AvatarWrap>
                <ImgWrap>
                  <Img src={formData.avatar} alt="Avatar" />
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
                    <AddButton variant="outlined" component="span">
                      +
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
                    as={Input}
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
                    as={Input}
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div>
                  <Label htmlFor="birthday">Birthday:</Label>
                  <Field
                    type="date"
                    id="birthday"
                    name="birthday"
                    placeholder={formData.birthday}
                    as={Input}
                  />
                  <ErrorMessage name="birthday" component="div" />
                </div>
                <div>
                  <Label htmlFor="skype">Skype:</Label>
                  <Field
                    type="text"
                    id="skype"
                    name="skype"
                    placeholder={formData.skype}
                    as={Input}
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
                    as={Input}
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </InputWrap>
              <ButtonWrap>
                <StyledButton
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save changes
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
