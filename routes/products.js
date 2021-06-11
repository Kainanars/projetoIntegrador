const express = require('express');
const controller = require('../controllers/products');
const router = express.Router();
const modelProducts = require('../models/products');
const auth = require('../middlewares/auth'); // Esse é o middleware para authenticar se o usuário está logado. 
var multer = require('multer');
var path = require('path');
const fs = require('fs')

    
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/uploads");
    },
    filename: function(req, file, cb){
        cb(null, 'uploads' + Date.now() + path.extname(file.originalname));
    }
})
var upload = multer({storage});
// Criando o produto

router.get('/create', auth.auth, function(req, res) {
    res.render('productsCreate', { errorMessage: req.query.errorMessage, sucessMessage: req.query.sucessMessage });
});

//router.post("/", middlewares.validateBody, controller.newProduct);
router.post("/", upload.single('photoProduct'),  async function (req, res, file) {
  //  const base64 = fs.readFileSync(req.file.path, "base64")
    console.log(`meu id de usuario ${req.session.user.id} `)
    const image = req.file.filename
    console.log('-------------------------->>>>>>>>>>>>>>>>>>>>>>>> ' + req.file)
    const product = req.body;
    await modelProducts.insertProduct(product, image, req.session.user.id);
    res.redirect("/products");
  });

// Listando Produtos

router.get('/', auth.auth, async (req, res, next) => {
    const products = await modelProducts.getProducts();
res.render('productsList', { products: products });
});
    

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


router.delete('/delete/:id' , async function(req, res){
    const product = req.body;

    await modelProducts.removeProducts(product.id);
    res.redirect("/products");
});

router.put("/", upload.single('photoProduct'), async function (req, res) {
    const image = req.file.filename;
    var product = req.body;
    console.log(product)
    await modelProducts.updateProduct(product, image);
    res.redirect("/products");
  }); 

  //Listando meus produtos: 
  router.get('/me', auth.auth, async (req, res, next) => {
    const products = await modelProducts.getProducts();
res.render('myProducts', { products: products });
  });

  


module.exports = router;