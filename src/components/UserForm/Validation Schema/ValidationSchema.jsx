import * as Yup from 'yup';

const originalDate = new Date();
export const formattedDate = originalDate.toISOString().slice(0, 10);

export const validationSchema = Yup.object().shape({
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
