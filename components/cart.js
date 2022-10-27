import styles from "./cart.module.css";
import { useState } from "react";
import Cartbtn from "./cartbtn";
export default function Cart({ cart }) {
  const [displayCart, setDisplayCart] = useState(false);
  return (
    <>
      <Cartbtn setDisplayCart={setDisplayCart} />
      {displayCart && (
        <section className={styles.cart}>
          <h3 className={styles["title"]}>Checkout Items</h3>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((selectedBook) => (
                  <li className={styles.item} key={selectedBook.title}>
                    <span>{selectedBook.title}</span>
                    <span>{selectedBook.author}</span>
                    <span>price: £{selectedBook.price}</span>
                    <span>quantity: {selectedBook.quantity}</span>
                    <span>{`${selectedBook.quantity} x £${
                      selectedBook.price
                    } = £${selectedBook.quantity * selectedBook.price} `}</span>
                  </li>
                ))}
              </ul>
              <div>
                total: £
                {cart.reduce(
                  (sum, current) => (sum += current.quantity * current.price),
                  0
                )}
              </div>
            </>
          ) : (
            <p>Shopping cart is empty...</p>
          )}

          <button className={styles.button}>Checkout</button>
        </section>
      )}
    </>
  );
}
