const express = require('express');
const controller = require('../controllers/cadastroProdutos');
const router = express.Router();
const middlewares = require('../middlewares/cadastroProdutos');


router.get('/', (req,res,next)=>{
    console.log(req.query)
    res.render('cadastroProdutos', {errorMessage: req.query.errorMessage});
});

router.post( "/", middlewares.validateBody ,controller.newProduct );


module.exports = router;





