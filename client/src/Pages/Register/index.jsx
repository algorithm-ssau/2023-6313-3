import { useFormik } from "formik";

import styles from "./style.module.css";
import validateSchema from "./validationSchema.js";

export default function RegisterPage() {
  const registerFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
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
            >
              Регистрация
            </label>
            <input
              className={styles.input}
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
            </label>

            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Почта"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.email}
            />
            <label className={styles["error_label"]}>
              {registerFormik.errors.email ? registerFormik.errors.email : ""}
            </label>

            <input
              className={styles.input}
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
              Регистрация
            </button>
          </form>
        </div>
        <div className={styles["login"]}>
          <form onSubmit={loginFormik.handleSubmit}>
            <label
              className={styles["label"]}
              htmlFor={styles["chk"]}
              aria-hidden="true"
            >
              Вход
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Почта"
              onChange={loginFormik.handleChange}
              value={loginFormik.values.email}
            />
            <label className={styles["error_label"]}>
              {loginFormik.errors.email ? loginFormik.errors.email : ""}
            </label>

            <input
              className={styles.input}
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
              Вход
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
