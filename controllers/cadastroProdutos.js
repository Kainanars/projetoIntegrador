const cadastroProdutos = require("../models/cadastroProdutos");

function newProduct (req, res) {
  const newProduct = req.body;

  cadastroProdutos.insertProduct(newProduct);
  console.log(newProduct.descriptionProduct)
  res.redirect("/cadastroProdutos");
}

  module.exports = {
      newProduct:newProduct,
  }
