import * as Yup from 'yup';

export const addCarSchema = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});
