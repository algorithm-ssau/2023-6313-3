import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProfilePage() {
  return (
    <div className={styles["body"]}>
      <Navbar />

      <div className={styles["wrap"]}>
        <div className={styles["container"]}>
          <h1 className={styles["profile"]}>Профиль</h1>
          <img
            className={styles["photo"]}
            src="http://placehold.it/300x300"
            alt=""
          />
          <h1 className={styles["name"]}>Василий</h1>
          <h1 className={styles["number"]}>Телефон</h1>

          <h1 className={styles["mail"]}>e-mail</h1>
          <h1 className={styles["add"]}>Добавить объявление</h1>
          
          <a href="#" className={styles["info"]}>
            О пользователе
          </a>
        </div>

        <div className={styles["container_like"]}>
          <h1 className={styles["favourites"]}>Избранное</h1>

          <div className={styles["favourite"]}>
            <div className={styles["photo-favourite"]}>
              <img
                src="http://placehold.it/300x200"
                alt=""
              />
            </div>
            <div className={styles["info-favourite"]}>
              <h3>Марка и модель</h3>
              <h3>2.000.000</h3>
            </div>
            <div className={styles["buttons-favourite"]}>
              <h1 className={styles["best-price"]}>Справедливая цена</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
