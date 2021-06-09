const express = require('express'); 
const app = require('../app');
const router = express.Router(); 

const controller = require('../controllers/loginController'); 
const middleware = require('../middlewares/login'); 

// Rota GET: localhost:3000/login 

router.get('/' , controller.get); 

// Rota Post: 

router.post('/', middleware.authenticateEmptyFields, controller.post); 

// Para fazer logout: 
router.get('/logout',(req,res)=>{
    req.session.destroy(function (err) {
      res.redirect('/'); 
     });
  })



module.exports = router