const products = require("../models/products");


function newProduct (req, res) {
  const newProduct = req.body;
  console.log(newProduct)
  
  products.insertProduct(newProduct);
  res.redirect("/products");
  
}

  module.exports = {
      newProduct:newProduct,
  }
