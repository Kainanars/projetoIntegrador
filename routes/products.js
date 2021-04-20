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
    res.render('productsList', { products: products });

    // Rota de detalhes de produtos

    router.get('/:id',  function(req, res) {
        var productid = req.params.id;
        var product = products.find(item => item.id == productid)
        res.render('productsDetails', { product: product });
    });

router.get('/edit/:id',  function(req, res){
    var productid = req.params.id;
    var product = products.find(item => item.id == productid)
    res.render('productEdit', {product: product})
})
});

router.get('/delete/:id' , function(req, res){
    var productid = req.params.id;
    var product = products.filter(item => item.id != productid)
    console.log(product)
    res.render('productsList', {products: product})
});
module.exports = router;