const books = require("../data/data");
const addBooks = require("./addBooks");
const deleteBooks = require("./deleteBooks");
const listBooks = require("./listBooks");
const searchBooks = require("./searchBooks");


addBooks("book3", "author3");
deleteBooks(2);
listBooks();
searchBooks("author1");