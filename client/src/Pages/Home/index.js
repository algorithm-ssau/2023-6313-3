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
    </div>
  );
}
