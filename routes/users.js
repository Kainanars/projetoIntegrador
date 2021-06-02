var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Cadastrar novos usuários
// /users/cadastro
router.get('/cadastro', function(req, res){
  res.render('cadastroUsuarios')
})

router.post('/cadastro', userController.post)

module.exports = router;
