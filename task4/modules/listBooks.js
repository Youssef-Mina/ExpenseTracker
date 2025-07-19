const books = require("../data/data");

function listBooks(){
    if(!books.length){
        console.error("nothing to show");
    }
    console.log("##################### BOOKS #####################");
    books.forEach((book)=>{
    console.log(`ID: ${book.id} \t Title: ${book.title} \t Author: ${book.author} `)
    })
}
module.exports=listBooks;