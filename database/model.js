import db from "./db.js";

const list_all_books = db.prepare(/*sql*/ `
    SELECT * FROM books
`);

export function listAllBooks() {
  return list_all_books.all();
}
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
const insert_book = db.prepare(/*sql*/ `
  INSERT INTO books (title, author, genre, price, blurb, src)
  VALUES ($title, $author, $genre, $price, $blurb, $src)
`);

export function insertBook({ title, author, genre, price, blurb, src }) {
  return insert_book.run({
    title,
    author,
    genre,
    price,
    blurb,
    src,
  });
}
