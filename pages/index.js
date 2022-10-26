import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import allBooks from "../lib/data.js";

// operates only on the sever side
export async function getStaticProps({ params }) {
  const booksData = allBooks;

  return {
    props: {
      booksData,
    },
  };
}


const mockData = [
  {
    id: 1,
    src: "/images/east-of-eden.jpg",
    title: "East from Eden",
    author: "John Steinbeck",
    genre: "Novel",
    price: "£4.99",
    blurb:
      "East of Eden brings to life the intricate details of two families, the Trasks and the Hamiltons, and their interwoven stories. The Hamilton family in the novel is said to be based on the real-life family of Samuel Hamilton, Steinbeck's maternal grandfather. A young John Steinbeck also appears briefly in the novel as a minor character.",
  },
  {
    id: 2,
    src: "/images/east-of-eden.jpg",
    title: "East from Eden",
    author: "John Steinbeck",
    genre: "Novel",
    price: "£4.99",
    blurb:
      "East of Eden brings to life the intricate details of two families, the Trasks and the Hamiltons, and their interwoven stories. The Hamilton family in the novel is said to be based on the real-life family of Samuel Hamilton, Steinbeck's maternal grandfather. A young John Steinbeck also appears briefly in the novel as a minor character.",
  },
];
export default function Home({ booksData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>JAMP on a book</title>
        <meta name="description" content="A bookstore" />
      </Head>
      <main className={styles.main + " " + styles.grid}>
        {booksData.map((book) => (
          <Card book={book} key={book.id} home />
        ))}
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
