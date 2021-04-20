const express = require('express');
const controller = require('../controllers/products');
const router = express.Router();
const middlewares = require('../middlewares/products');
const model = require('../models/products');
const products = model.getProducts();
const auth = require('../middlewares/auth') // Esse é o middleware para authenticar se o usuário está logado. 

// Criando o produto

router.get('/create', auth.auth, function(req, res) {
    res.render('productsCreate', { errorMessage: req.query.errorMessage, sucessMessage: req.query.sucessMessage });
});

router.post("/", middlewares.validateBody, controller.newProduct);

// Listando Produtos

router.get('/', auth.auth, (req, res, next) => {
    const products = model.getProducts();
    res.render('productsList', { products: products });

    // Rota de detalhes de produtos

    router.get('/:id',  function(req, res) {
        var productid = req.params.id;
        var product = products.find(item => item.id == productid)
        res.render('productsDetails', { product: product });
    });

router.get('/edit/:id',  function(req, res){
    var productid = req.params.id;
    var product = model.getProducts(productid);
    res.render("productEdit", {product: product})
})
});

router.put('/', function(req, res){
    const product = req.body;
    model.updateProduct(product);
    res.redirect("/products");
})

router.delete('/delete/:id' , function(req, res){
    const product = req.body;
    model.removeProducts(product.id);
    res.redirect("/products");
})

module.exports = router;