import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import SearchField from "../../components/SearchField";

import styles from "./style.module.css";
import { cars } from "../../fake-db/fakeCars";

export default function HomePage() {
  return (
    <div className={styles["body"]}>
      <Navbar />
      <SearchField />
      <div className="container mt-5">
        <div className={'row'} >
          {cars.map((car) => (
            <Card key={car.id} title={car.name} price={car.price} imageUrl={car.imageUrl} />
          )
          )}
        </div>
      </div>

      
      
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
      
    </div>
  );
}