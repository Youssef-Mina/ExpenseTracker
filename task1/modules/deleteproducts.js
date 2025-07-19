const products=require("../data/products");
const cart=require("../data/cart");

function deleteProducts(name) {
  const index = cart.findIndex((product) => product.name === name);

  if (index === -1) {
    console.error(`Product with name "${name}" not found.`);
    return;
  }

  cart.splice(index, 1);
  console.log(`Product with name "${name}" deleted.`);
}
  

module.exports=deleteProducts;