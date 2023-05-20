import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Favourite from "../../components/Favourite";

export default function ProfilePage() {
  return (
    <div className={styles['body']}>
      <Navbar />

      <div className={styles['wrap']}>
        <div className={styles['container']}>
          <h1 className={styles['profile']}>Профиль</h1>
          <img
            className={styles['photo']}
            src='https://hombex.com/assets/img/icon_profile.png'
            alt=''
          />
          <h1 className={styles['name']}>Василий</h1>
          <h1 className={styles['number']}>Телефон: +7(937)xxx-xx-xx</h1>

          <h1 className={styles['mail']}>e-mail: xxxxxx@mail.ru</h1>

          <a href='#' className={styles['info']}>
            О пользователе
          </a>
        </div>

        <div className={styles['container_like']}>
          <h1 className={styles['favourites']}>Избранное</h1>

          <div className={styles['wrap-favourite']}>
            <Favourite />

            <Favourite />

            <Favourite />

            <Favourite />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
