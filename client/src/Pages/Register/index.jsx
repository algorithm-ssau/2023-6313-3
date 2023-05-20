import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import styles from './style.module.css';
import * as validation from './validationSchema.js';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '../../redux/api/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [register, { isLoading: isLoadingRegister }] =
    useRegisterUserMutation();
  const [login, { isLoading: isLoadingLogin }] = useLoginUserMutation();

  const registerFormik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validation.registerSchema,
    onSubmit: async (values) => {
      await register(values)
        .unwrap()
        .then((response) => {
          console.log(response);
          dispatch(setCredentials(response.data));
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: 'Error',
            description: error.data.detail,
            status: 'error',
            duration: 5000,
          });
        });
    },
  });

  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation.loginSchema,
    onSubmit: async (values) => {
      await login(values)
        .unwrap()
        .then((response) => {
          console.log(response);
          dispatch(setCredentials(response));
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: 'Error',
            description: error.data.detail,
            status: 'error',
            duration: 5000,
          });
        });
    },
  });

  return (
    <RegisterForm registerFormik={registerFormik} loginFormik={loginFormik} />
  );
}

function RegisterForm({ registerFormik, loginFormik }) {
  return (
    <div className={styles['body']}>
      <div className={styles['main']}>
        <input
          className={styles['input']}
          type='checkbox'
          id={styles['chk']}
          aria-hidden='true'
        />

        <div className={styles['signup']}>
          <form onSubmit={registerFormik.handleSubmit}>
            <label
              className={styles['label']}
              htmlFor={styles['chk']}
              aria-hidden='true'
            >
              Регистрация
            </label>
            <input
              className={styles.input}
              name='username'
              type='text'
              placeholder='Имя пользователя'
              onChange={registerFormik.handleChange}
              value={registerFormik.values.username}
            />
            <label className={styles['error_label']}>
              {registerFormik.errors.username
                ? registerFormik.errors.username
                : ''}
            </label>

            <input
              className={styles.input}
              type='email'
              name='email'
              placeholder='Почта'
              onChange={registerFormik.handleChange}
              value={registerFormik.values.email}
            />
            <label className={styles['error_label']}>
              {registerFormik.errors.email ? registerFormik.errors.email : ''}
            </label>

            <input
              className={styles.input}
              type='password'
              name='password'
              placeholder='Пароль'
              onChange={registerFormik.handleChange}
              value={registerFormik.values.password}
            />
            <label className={styles['error_label']}>
              {registerFormik.errors.password
                ? registerFormik.errors.password
                : ''}
            </label>

            <button className={styles['button']} type='submit'>
              Регистрация
            </button>
          </form>
        </div>
        <div className={styles['login']}>
          <form onSubmit={loginFormik.handleSubmit}>
            <label
              className={styles['label']}
              htmlFor={styles['chk']}
              aria-hidden='true'
            >
              Вход
            </label>
            <input
              className={styles.input}
              type='text'
              name='username'
              placeholder='Имя пользователя'
              onChange={loginFormik.handleChange}
              value={loginFormik.values.username}
            />
            <label className={styles['error_label']}>
              {loginFormik.errors.username ? loginFormik.errors.username : ''}
            </label>

            <input
              className={styles.input}
              type='password'
              name='password'
              placeholder='Пароль'
              onChange={loginFormik.handleChange}
              value={loginFormik.values.password}
            />
            <label className={styles['error_label']}>
              {loginFormik.errors.password ? loginFormik.errors.password : ''}
            </label>

            <button className={styles['button']} type='submit'>
              Вход
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
