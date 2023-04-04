import Navbar from "../../components/Navbar.js";
import Card from "../../components/Card.js";
import SearchField from "../../components/SearchField.js";

import "./style.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SearchField />
      <div class="container mt-5">
        <div class="row">
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
          <Card title={"Марка и модель"} price={2000000} />
        </div>
      </div>
    </>
  );
}
