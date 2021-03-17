const cadastroProdutos = require("../models/cadastroProdutos");


function newProduct (req, res) {
  const newProduct = req.body;
  cadastroProdutos.insertProduct(newProduct);
  res.redirect("/cadastroProdutos");
  
}

  module.exports = {
      newProduct:newProduct,
  }
