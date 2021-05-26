const Sequelize = require('sequelize')
const configDatabase = require('../config/database')
const db = new Sequelize(configDatabase)

async function insertUser(user) {
   await db.query("insert into users (name, email, password) values (:name, :email, :password)", {
     replacements: {
       name: user.name,
       email: user.email,
       password: user.password,
       
     }
   })
   }

   module.exports = {
       insertUser
   }