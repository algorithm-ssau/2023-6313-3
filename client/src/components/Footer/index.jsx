<<<<<<< HEAD
import styles from "./style.module.css";

export default function Footer(){
    return(
        <footer className={styles["footer"]}>
        <div className={styles["hr1"]}></div>

        <ul className={styles["social"]}>
          <li>
            <a href="#" className={styles["facebook"]}>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className={styles["twitter"]}>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className={styles["vk"]}>
              <ion-icon name="logo-vk"></ion-icon>
            </a>
            <a href="#" className={styles["instagram"]}>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className={styles["menu"]}>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О проекте</a>
          </li>
          <li>
            <a href="#">Помощь</a>
          </li>
          <li>
            <a href="#">Разместить рекламу</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <p>©2023 Auto.Ru | All Rights Reserved</p>
      </footer>
    )
}
=======
import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['hr1']}></div>

      <ul className={styles['social']}>
        <li>
          <a href='#' className={styles['facebook']}>
            <ion-icon name='logo-facebook'></ion-icon>
          </a>
          <a href='#' className={styles['twitter']}>
            <ion-icon name='logo-twitter'></ion-icon>
          </a>
          <a href='#' className={styles['vk']}>
            <ion-icon name='logo-vk'></ion-icon>
          </a>
          <a href='#' className={styles['instagram']}>
            <ion-icon name='logo-instagram'></ion-icon>
          </a>
        </li>
      </ul>
      <ul className={styles['menu']}>
        <li>
          <a href='#'>Главная</a>
        </li>
        <li>
          <a href='#'>О проекте</a>
        </li>
        <li>
          <a href='#'>Помощь</a>
        </li>
        <li>
          <a href='#'>Разместить рекламу</a>
        </li>
        <li>
          <a href='#'>Контакты</a>
        </li>
      </ul>
      <p>©2023 Auto.Ru | All Rights Reserved</p>
    </footer>
  );
}
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
