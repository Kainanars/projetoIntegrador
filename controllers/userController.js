const model = require('../models/cadastroUsers')

const bcrypt = require('bcrypt')

async function post (req, res){
    const {name, email, password, phone, gender, birth_date, cidade, estado, endereco} = req.body 
    const hashedPassword = bcrypt.hashSync(password, 12);

    const address = `${cidade} ${estado} ${endereco}`

    await model.insertUser({name, email, password:hashedPassword, phone, gender, birth_date, address })

 res.redirect('/login')
}

module.exports = {
    post
}