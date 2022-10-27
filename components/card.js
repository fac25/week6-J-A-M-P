import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

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
          <button onClick={() => addToCart({ cart, setCart, title, quantity, book })}>Add to Basket</button>
        </section>
        {!home && <p>description: {blurb}</p>}
      </section>
    </>
  );

}


function addToCart({ cart, setCart, title, quantity, book }) {
  const newCart = [...cart]
  const foundItem = newCart.find(item => item.title === title)
  if (!foundItem) {

    setCart([...cart, { ...book, quantity }])
    localStorage.setItem('shoppingBasket', [...cart, { ...book, quantity }])
    // set local storage to current cart
    // localStorage.setItem

    //setItem(keyName, keyValue) 
    return
  }

  foundItem.quantity += quantity
  setCart(newCart)
  localStorage.setItem('shoppingBasket', newCart)

  // set local storage to current cart
}

// When user clicks addToCart
// 