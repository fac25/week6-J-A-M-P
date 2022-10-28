import Card from "../../components/card";
import Cart from "../../components/cart";
import styles from "../../styles/Home.module.css";

import Link from "next/link";
import { getBookData, allBooks } from "../../lib/data";

export async function getStaticPaths() {
  const paths = allBooks.map((book) => {
    return {
      params: {
        bookID: `${book.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const book = getBookData(params.bookID);

  return {
    props: {
      book,
    },
  };
}

export default function BookPage({ book, cart, setCart }) {
  return (
    <>
      <main className={styles.main}>
        <Card book={book} cart={cart} setCart={setCart} />
        <Cart cart={cart} />
        <Link href="/">Back to home</Link>
      </main>
    </>
  );
}
