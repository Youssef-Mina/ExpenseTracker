const books = require("../data/data");

function searchBooks(author) {
  const index = books.findIndex((book) => book.author === author);

  if (index < 0) {
    console.error(`Book by author "${author}" not found.`);
    return;
  }

  const book = books[index];
  console.log(`ID: ${book.id} \t Title: ${book.title} \t Author: ${book.author}`);
}
module.exports = searchBooks;
