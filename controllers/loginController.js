const loginModel = require('../models/login')

function get(req, res){
    const emptyField = req.query.emptyField
    res.render('login', {error: false, emptyField} ); 
}

async function post(req, res) {
   const user = await loginModel.getUser(req.body)

    const {email, password} = req.body
     if (user === undefined || password !== user.password) {
        return res.render('login', {error: true, emptyField: false})
    } 
    req.session.user = user; 

     res.redirect('/')
}

module.exports = {
    get:get, 
    post:post, 
}