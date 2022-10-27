import styles from "./cartbtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cartbtn({ setDisplayCart }) {
  function toggleDisplayCart() {
    return setDisplayCart((prevState) => !prevState);
  }
  return (
    <>
      <button
        className={styles.btn}
        aria-label="shopping cart"
        onClick={toggleDisplayCart}
      >
        <FontAwesomeIcon icon={faShoppingCart} size={"2x"} />
      </button>
    </>
  );
}
