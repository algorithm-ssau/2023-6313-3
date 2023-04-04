import styles from "./style.module.css";

export default function RegisterPage() {
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
          <form>
            <label
              className={styles["label"]}
              htmlFor={styles["chk"]}
              aria-hidden="true"
            >
              Регистрация
            </label>
            <input
              className={styles.input}
              type="text"
              name="txt"
              placeholder="Имя пользователя"
              required=""
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Почта"
              required=""
            />
            <input
              className={styles.input}
              type="password"
              name="pswd"
              placeholder="Пароль"
              required=""
            />
            <button className={styles["button"]}>Регистрация</button>
          </form>
        </div>
        <div className={styles["login"]}>
          <form>
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
              required=""
            />
            <input
              className={styles.input}
              type="password"
              name="pswd"
              placeholder="Пароль"
              required=""
            />
            <button className={styles["button"]}>Вход</button>
          </form>
        </div>
      </div>
    </div>
  );
}
