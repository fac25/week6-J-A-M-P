import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import cardStyles from "./card.module.css";

export default function Card({ book, home, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const { title, author, genre, id, price, blurb } = book;
  const path = title.replaceAll(" ", "-").toLowerCase();
  const content = (
    <section
      className={`${styles.card} ${cardStyles.card} ${
        !home && cardStyles.single
      }`}
    >
      <Image src={book.src} width={100} height={100} />

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
      <div>
        <span>Quantity: </span>
        <div className={cardStyles["card-quantity-container"]}>
          <button
            className={cardStyles["card-button"]}
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <p>{quantity}</p>
          {/* {<input id="amount" onChange={(e) => setQuantity(Number(e.target.value))<} value={quantity} min="0" type="number" />} */}
          <button
            className={cardStyles["card-button"]}
            onClick={(e) => {
              e.preventDefault();
              quantity > 1 && setQuantity(quantity - 1);
            }}
          >
            -
          </button>
        </div>
        <button
          className={cardStyles["card-button"]}
          onClick={(e) => {
            e.preventDefault();
            addToCart({ cart, setCart, title, quantity, book });
          }}
        >
          Add to Basket
        </button>
      </div>
      {!home && <p>description: {blurb}</p>}
    </section>
  );
  return (
    <>{home ? <Link href={`/books/${book.id}`}>{content}</Link> : content}</>
  );
}

function addToCart({ cart, setCart, title, quantity, book }) {
  const newCart = [...cart];
  const foundItem = newCart.find((item) => item.title === title);
  if (!foundItem) {
    setCart([...cart, { ...book, quantity }]);
    localStorage.setItem(
      "shoppingBasket",
      JSON.stringify([...cart, { ...book, quantity }])
    );
    return;
  }

  foundItem.quantity += quantity;
  setCart(newCart);
  localStorage.setItem("shoppingBasket", JSON.stringify(newCart));
}
