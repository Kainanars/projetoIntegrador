const funcao = require('../models/login')

function get(req, res){
    const emptyField = req.query.emptyField
    res.render('login', {error: false, emptyField} ); 
}

function post(req, res) {
    const {login, password} = req.body
    const user = funcao.authenticateUser(login, password)
    if (user === undefined) {
        return res.render('login', {error: true, emptyField: false})
    }
    req.session.user = user; 
     res.redirect('/')
}

module.exports = {
    get:get, 
    post:post, 
}