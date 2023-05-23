import * as Yup from 'yup';

export const addCarSchema = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(8, 'Pasword must be 8 or more characters')
    .matches(/[0-9]/, 'Password must contain at least one digit'),
});
