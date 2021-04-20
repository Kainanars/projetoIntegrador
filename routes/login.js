const express = require('express'); 
const app = require('../app');
const router = express.Router(); 

const controller = require('../controllers/loginController'); 
const middleware = require('../middlewares/login'); 

// Rota GET: localhost:3000/login 

router.get('/' , controller.get); 

// Rota Post: 

router.post('/', middleware.authenticateEmptyFields, controller.post); 


module.exports = router