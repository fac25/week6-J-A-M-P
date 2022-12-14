import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Cart from "../components/cart";
import Cartbtn from "../components/cartbtn";
import styles from "../styles/Home.module.css";
import { allBooks } from "../lib/data.js";

import React, { useState } from "react";

// operates only on the sever side
export async function getStaticProps({ params }) {
  const booksData = allBooks;
  return {
    props: {
      booksData,
    },
  };
}

export default function Home({ booksData, cart, setCart }) {
  const [books, setBooks] = useState(booksData);

  const search = (event) => {
    const searchTitle = event.target.value.toLowerCase();
    const searchResult = booksData.filter((book) => {
      const lowercaseTitle = book.title.toLowerCase();
      return lowercaseTitle.includes(searchTitle);
    });

    setBooks(searchResult);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>JAMP on a book</title>
        <meta name="description" content="A bookstore" />
      </Head>

      <main className={styles.main + " " + styles.grid}>
        <input
          onKeyDown={search}
          type="text"
          placeholder="Search By Title..."
        ></input>

        {books.map((book) => (
          <Card book={book} cart={cart} setCart={setCart} key={book.id} home />
        ))}
        <Cart cart={cart} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
