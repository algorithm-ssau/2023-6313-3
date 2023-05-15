import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(8, 'Pasword must be 8 or more characters'),
});

export default validateSchema;
