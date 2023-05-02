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
          <h1 className={styles["data1"]}>Телефон</h1>

          <h1 className={styles["data2"]}>e-mail</h1>
          <a href="#" className={styles["info"]}>
            О пользователе
          </a>
        </div>

        <div className={styles["container_center"]}>
          
        </div>

        <div className={styles["container"]}>
          <h1 className={styles["favourites"]}>Избранное</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
