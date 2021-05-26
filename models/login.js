
const Sequelize = require('sequelize')
const configDatabase = require('../config/database')
const db = new Sequelize(configDatabase)


async function getUser(credentials){
    const response = await db.query("SELECT * FROM users where email = :email", {
        type: Sequelize.QueryTypes.SELECT, 
        replacements: {
            email: credentials.email
        }
    })
    console.log('resposta do banco: ', response)
    return response[0]
}

module.exports = {
    getUser: getUser, 
}