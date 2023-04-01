import "./style.css";

export default function HomePage({ children }) {
  return (
    <>
      <div class="container mt-5">
        <div class="row">{children}</div>
      </div>
    </>
  );
}
