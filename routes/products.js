const express = require('express');
const controller = require('../controllers/products');
const router = express.Router();
const middlewares = require('../middlewares/products');
const modelProducts = require('../models/products');
const auth = require('../middlewares/auth'); // Esse é o middleware para authenticar se o usuário está logado. 

// Criando o produto

router.get('/create', auth.auth, function(req, res) {
    res.render('productsCreate', { errorMessage: req.query.errorMessage, sucessMessage: req.query.sucessMessage });
});

//router.post("/", middlewares.validateBody, controller.newProduct);
router.post("/",  async function (req, res) {
    const product = req.body;
    await modelProducts.insertProduct(product);
    res.redirect("/products");
  });

// Listando Produtos

router.get('/', auth.auth, async (req, res, next) => {
    const products = await modelProducts.getProducts();
res.render('productsList', { products: products });

    

    // Rota de detalhes de produtos

router.get('/:id', async function(req, res) {
        var productId = req.params.id;
        var product = await modelProducts.getProductById(productId);
        res.render('productsDetails', { product: product });
});


router.get('/edit/:id', async  function(req, res){
    var productId = req.params.id;
    var product = await modelProducts.getProductById(productId);
    res.render('productEdit', {product: product})
})
});

router.delete('/delete/:id' , async function(req, res){
    const product = req.body;

    await modelProducts.removeProducts(product.id);
    res.redirect("/products");
});

router.put("/", async function (req, res) {
    var product = req.body;
    console.log(product)
    await modelProducts.updateProduct(product);
    res.redirect("/products");
  });


  


module.exports = router;