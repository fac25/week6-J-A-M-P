import Card from "../../components/card";
import Cart from "../../components/cart";
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
      <Card book={book} cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </>
  );
}
