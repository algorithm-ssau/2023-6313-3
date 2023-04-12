import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import SearchField from "../../components/SearchField";

import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div className={styles["body"]}>
      <Navbar />
      <SearchField />
      <div className="container mt-5">
        <div className="row">
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
        </div>
      </div>
      <div className={styles["hr"]}></div>
      <footer className={styles["footer"]}>
        
         
        <a href="#" className={styles["brand"]}>
          Auto.Ru
        </a>

        <ul className={styles["social"]}>
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#">
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
      <div className={styles["hr"]}></div>
    </div>
  );
}
