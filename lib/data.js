import { listAllBooks, getBook } from "../database/model.js";
const allBooks = listAllBooks();

function getBookData(title) {
  console.log(getBook(title));
  return getBook(title);
}

export { allBooks, getBookData };
