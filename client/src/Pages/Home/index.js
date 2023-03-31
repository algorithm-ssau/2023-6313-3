import "./style.css";

export default function HomePage() {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <a href="#" class="navbar-brand">
            Auto.Ru
          </a>
          <div class="navbar-wrap">
            <ul class="navbar-menu">
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

            <a href="#" class="callback">
              Личный кабинет
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
