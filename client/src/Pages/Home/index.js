import "./style.css";

export default function HomePage({ children }) {
  return (
    <>
      <form class='searching-line'>
        <input type="search" placeholder="Искать здесь..." />
        <button class='find' type="submit">Найти</button>
      </form>

      <div class="container mt-5">
        <div class="row">{children}</div>
      </div>
    </>
  );
}
