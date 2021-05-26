const model = require('../models/cadastroUsers')

const bcrypt = require('bcrypt')

async function post (req, res){
    const {name, email, password} = req.body 
    const hashedPassword = bcrypt.hashSync(password, 12);

    await model.insertUser({name, email, password:hashedPassword})

 res.redirect('/login')
}

module.exports = {
    post
}