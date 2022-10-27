import { listAllBooks, getBook } from "../database/model.js";
const allBooks = listAllBooks();

function getBookData(title) {
  return getBook(title);
}

export { allBooks, getBookData };
