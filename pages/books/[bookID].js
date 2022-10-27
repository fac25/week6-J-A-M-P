import Card from "../../components/card";
import { getBookData, allBooks } from "../../lib/data";
// query database -- return one entrie row
/**
 * Get a specific book from the database by using a title
 * Use it in bookID.js
 * Display the book in the created page.
 */
// working inside this file!
// get staticpaths to  - will return an array of possible routes

// get static props .... ?

export async function getStaticPaths() {
  const paths = allBooks.map((book) => {
    // const formattedBook = book.title.replaceAll(" ", "-").toLowerCase();
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

export default function BookPage({ book }) {
  return <Card book={book} />;
}
