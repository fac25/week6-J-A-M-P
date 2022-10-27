import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

//** if title exists in cart update quantity
// BUG - min value 0

export default function Card({ book, home, cart, setCart }) {
  const [quantity, setQuantity] = useState(0)
  const { title, author, genre, id, price, blurb } = book
  const path = title.replaceAll(" ", "-").toLowerCase();
  return (
    <>
      <section className={styles.card}>
        {home ? (
          <Link href={`/books/${id}`}>
            <Image src={`/images/east-of-eden.jpg`} width={100} height={100} />
          </Link>
        ) : (
          <Image src={`/images/east-of-eden.jpg`} width={100} height={100} />
        )}

        <h2>{title}</h2>
        <p>
          <span>Author:</span> {author}
        </p>
        <p>
          <span>Genre:</span> {genre}
        </p>
        <p>
          <span>Price:</span> {price}
        </p>
        <section>
          <label htmlFor="amount">Quantity: </label>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <p>{quantity}</p>
          {/* {<input id="amount" onChange={(e) => setQuantity(Number(e.target.value))<} value={quantity} min="0" type="number" />} */}
          <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</button>
          <button onClick={() => setCart([...cart, { ...book, quantity }])}>Add to Basket</button>
          {console.log(cart)}
        </section>
        {!home && <p>description: {blurb}</p>}
      </section>
    </>
  );
}
