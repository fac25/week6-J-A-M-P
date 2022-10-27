import styles from "./cartbtn.module.css";

export default function Cartbtn() {
  return (
    <>
      <button className={styles.btn} aria-label="shopping cart"> 🛒</button>
    </>
  );
}
