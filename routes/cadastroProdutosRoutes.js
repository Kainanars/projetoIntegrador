var express = require('express');
const CadastroProdutosController = require('../controllers/CadastroProdutosController');
var router = express.Router();

router.get('/', CadastroProdutosController.viewPage);

module.exports = router;