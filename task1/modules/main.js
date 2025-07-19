const products=require("../data/products");
const addToCart = require("./addToCart");
const calcCart = require("./calcCart");
const deleteProducts = require("./deleteproducts");
const listproducts=require("./listproducts");

addToCart("short", 500);
addToCart("shoes", 500);
listproducts();
calcCart();
deleteProducts("short");
listproducts();