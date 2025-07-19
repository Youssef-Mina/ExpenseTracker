const products=require("../data/products");
const cart=require("../data/cart");


function addToCart(name,price){
const newProducts={
    name:name,
    price:price
}
cart.push(newProducts);
console.log(`Product ${name} is added and it costs ${price}`);
}
 module.exports=addToCart;