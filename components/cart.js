import styles from "./cart.module.css";

const quantity = 5;
const selectedBooks = [
  {
    title: "The No-Show",
    author: "Beth O'Leary",
    price: 1,
  },
  {
    title: "The Course of True Love (and First Dates)",
    author: "Cassandra Clare",
    price: 8,
  },
  {
    title: "We Need to Talk About Kevin",
    author: "Lionel Shriver",
    price: 1,
  },
];

export default function Cart() {
  return (
    <>
      <section className={styles.cart}>
        <h3 className={styles["title"]}>Checkout Items</h3>
        <ul>
          {selectedBooks.map((selectedBook) => (
            <li className={styles.item} key={selectedBook.title}>
              <span>{selectedBook.title}</span>
              <span>{selectedBook.author}</span>
              <span>{selectedBook.price}</span>
              <span>{quantity}</span>
            </li>
          ))}
        </ul>
        <button className={styles.button}>Checkout</button>
      </section>
    </>
  );
}
