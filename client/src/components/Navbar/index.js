import styles from "./style.module.css";

export default function Navbar() {
  return (
    <nav className={"navbar " + styles["navbar"]}>
      
      <div className={"container " + styles["container"]}>
      
        <a href="#" className={"navbar-brand " + styles["navbar-brand"]}>
          Auto.Ru
        </a>
        <div className={"navbar-wrap " + styles["navbar-wrap"]}>
          <ul className={"navbar-menu " + styles["navbar-menu"]}>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <a href="#" className={"profile " + styles["profile"]}>
            Личный кабинет
          </a>
        </div>
      </div>
    </nav>
  );
}
