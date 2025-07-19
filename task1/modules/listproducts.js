const products=require("../data/products");
const cart=require("../data/cart");


function listproducts(){
    if(!cart.length){
    console.error("nothing to show");
    }
    console.log("============CART============");
    cart.forEach((product)=>{
    console.log(`Name: ${product.name} \t Price: ${product.price}`)
    })
}
module.exports = listproducts;