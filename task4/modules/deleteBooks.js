const books = require("../data/data");

function deleteBooks(id) {
  const index = books.findIndex((book) => book.id === id); 

  if (index < 0) {
    console.error(`Book with ID ${id} not found.`);
    return;
  }

  books.splice(index, 1);
  console.log(`Book with ID ${id} deleted`);
}

module.exports = deleteBooks;
