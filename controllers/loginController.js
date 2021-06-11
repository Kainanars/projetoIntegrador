const loginModel = require('../models/login')
const bcrypt = require('bcrypt')

function get(req, res){
    const emptyField = req.query.emptyField
    res.render('login', {error: false, emptyField} ); 
}

async function post(req, res) {
   const user = await loginModel.getUser(req.body)

    const {email, password} = req.body
    const comparePassword = bcrypt.compareSync(password, user.password);
     if (user === undefined || !comparePassword) {
        return res.render('login', {error: true, emptyField: false})
    } 
    req.session.user = user; 

     res.redirect('/products')
}

module.exports = {
    get:get, 
    post:post, 
}