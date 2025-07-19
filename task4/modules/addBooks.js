const books = require("../data/data");

function addBooks(title,author){
const newbook={
id:books.length+1,
title:title,
author:author,
}
books.push(newbook);
console.log(`Book ${title} is added`)
}
module.exports=addBooks;