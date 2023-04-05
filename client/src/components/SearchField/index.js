import styles from "./style.module.css";

function SearchField() {
  return (
    <form className={styles["searching-line"]}>
      <input
        className={styles["input"]}
        type="search"
        placeholder="Искать здесь..."
      />
      <button
        className={styles["find"]}
        type="submit"
        onClick={(e) => e.preventDefault()}
      >
        Найти
      </button>
    </form>
  );
}

export default SearchField;
