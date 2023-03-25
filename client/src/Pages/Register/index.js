import styles from "./style.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm password" />
        </form>
      </div>
    </div>
  );
}
