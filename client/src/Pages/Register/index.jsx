<<<<<<< HEAD
import { useFormik } from "formik";

import styles from "./style.module.css";
import validateSchema from "./validationSchema.js";

export default function RegisterPage() {
  const registerFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
=======
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';
import validateSchema from './validationSchema.js';

export default function RegisterPage() {
  const navigate = useNavigate();
  const registerFormik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
<<<<<<< HEAD
=======
      navigate('/profile');
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
    },
  });

  const loginFormik = useFormik({
    initialValues: {
<<<<<<< HEAD
      email: "",
      password: "",
=======
      email: '',
      password: '',
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
<<<<<<< HEAD
=======
      navigate('/profile');
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
    },
  });

  return (
<<<<<<< HEAD
    <div className={styles["body"]}>
      <div className={styles["main"]}>
        <input
          className={styles["input"]}
          type="checkbox"
          id={styles["chk"]}
          aria-hidden="true"
        />

        <div className={styles["signup"]}>
          <form onSubmit={registerFormik.handleSubmit}>
            <label
              className={styles["label"]}
              htmlFor={styles["chk"]}
              aria-hidden="true"
=======
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
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
            >
              Регистрация
            </label>
            <input
              className={styles.input}
<<<<<<< HEAD
              name="username"
              type="text"
              placeholder="Имя пользователя"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.username}
            />
            <label className={styles["error_label"]}>
              {registerFormik.errors.username
                ? registerFormik.errors.username
                : ""}
=======
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
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
            </label>

            <input
              className={styles.input}
<<<<<<< HEAD
              type="email"
              name="email"
              placeholder="Почта"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.email}
            />
            <label className={styles["error_label"]}>
              {registerFormik.errors.email ? registerFormik.errors.email : ""}
=======
              type='email'
              name='email'
              placeholder='Почта'
              onChange={registerFormik.handleChange}
              value={registerFormik.values.email}
            />
            <label className={styles['error_label']}>
              {registerFormik.errors.email ? registerFormik.errors.email : ''}
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
            </label>

            <input
              className={styles.input}
<<<<<<< HEAD
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.password}
            />
            <label className={styles["error_label"]}>
              {registerFormik.errors.password
                ? registerFormik.errors.password
                : ""}
            </label>

            <button className={styles["button"]} type="submit">
=======
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
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
              Регистрация
            </button>
          </form>
        </div>
<<<<<<< HEAD
        <div className={styles["login"]}>
          <form onSubmit={loginFormik.handleSubmit}>
            <label
              className={styles["label"]}
              htmlFor={styles["chk"]}
              aria-hidden="true"
=======
        <div className={styles['login']}>
          <form onSubmit={loginFormik.handleSubmit}>
            <label
              className={styles['label']}
              htmlFor={styles['chk']}
              aria-hidden='true'
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
            >
              Вход
            </label>
            <input
              className={styles.input}
<<<<<<< HEAD
              type="email"
              name="email"
              placeholder="Почта"
              onChange={loginFormik.handleChange}
              value={loginFormik.values.email}
            />
            <label className={styles["error_label"]}>
              {loginFormik.errors.email ? loginFormik.errors.email : ""}
=======
              type='email'
              name='email'
              placeholder='Почта'
              onChange={loginFormik.handleChange}
              value={loginFormik.values.email}
            />
            <label className={styles['error_label']}>
              {loginFormik.errors.email ? loginFormik.errors.email : ''}
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
            </label>

            <input
              className={styles.input}
<<<<<<< HEAD
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={loginFormik.handleChange}
              value={loginFormik.values.password}
            />
            <label className={styles["error_label"]}>
              {loginFormik.errors.password ? loginFormik.errors.password : ""}
            </label>

            <button type="submit" className={styles["button"]}>
=======
              type='password'
              name='password'
              placeholder='Пароль'
              onChange={loginFormik.handleChange}
              value={loginFormik.values.password}
            />
            <label className={styles['error_label']}>
              {loginFormik.errors.password ? loginFormik.errors.password : ''}
            </label>

            <button type='submit' className={styles['button']}>
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
              Вход
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
