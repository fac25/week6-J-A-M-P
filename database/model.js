import db from "./db.js";

const list_all_books = db.prepare(/*sql*/ `
    SELECT * FROM books
`);

export function listAllBooks() {
  return list_all_books.all();
}


