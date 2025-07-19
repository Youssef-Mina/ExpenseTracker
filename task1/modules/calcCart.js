const products=require("../data/products");
const cart=require("../data/cart");

function calcCart(){
let result=0;
cart.forEach((product)=>{
result+=product.price;
})
console.log(`your total is ${result}`);
}

module.exports=calcCart;