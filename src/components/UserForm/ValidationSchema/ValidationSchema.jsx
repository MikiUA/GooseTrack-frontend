import * as Yup from 'yup';

const originalDate = new Date();
export const formattedDate = originalDate.toISOString().slice(0, 10);

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name must be at least 1 characters')
    .max(16, 'Name must be at most 16 characters'),

  phone: Yup.string().max(18, 'Phone must be at most 18 characters'),
  birthday: Yup.date().max(originalDate, 'Birthday must be earlier than today'),
  skype: Yup.string().max(20, 'Skype must be at most 20 characters'),
  email: Yup.string().email('Invalid email'),
});
