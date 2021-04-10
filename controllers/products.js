const { render } = require("../app");
const products = require("../models/products");


function newProduct(req, res) {
    const newProduct = req.body;
    console.log(newProduct)

    products.insertProduct(newProduct);
    res.redirect('/products/create?sucessMessage=Seu anuncio foi cadastrado com sucesso!');

}

module.exports = {
    newProduct: newProduct,
    productsEdit: productsEdit
}