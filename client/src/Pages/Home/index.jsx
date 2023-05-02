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
    </div>
  );
}