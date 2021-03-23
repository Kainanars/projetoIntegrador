const express = require('express');
const controller = require('../controllers/products');
const router = express.Router();
const middlewares = require('../middlewares/products');
const model = require('../models/products');
const products = model.getProducts();
console.log(products)

  // Criando o produto

router.get('/create', function(req, res) {
    res.render('productsCreate', {errorMessage: req.query.errorMessage, sucessMessage: req.query.sucessMessage} );
  });

router.post( "/", middlewares.validateBody ,controller.newProduct );

// Listando Produtos

router.get('/', (req,res,next)=>{
  res.render('productsList', { products: products });
  
  // Rota de detalhes de produtos
  
router.get('/:id', function(req, res) {
    var productid= req.params.id;
    var product = products.find(item=>item.id==productid)
    res.render('productsDetails', { product: product });
  });
  
  
});


module.exports = router;





