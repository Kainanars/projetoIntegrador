const Sequelize = require('sequelize')
const configDatabase = require('../config/database')
const db = new Sequelize(configDatabase)

async function insertUser(user) {
   await db.query(`insert into users (name, email, password, phone, gender, birth_date, address) 
   values (:name, :email, :password, :phone, :gender, :birth_date, :address)`, {
     replacements: {
       name: user.name,
       email: user.email,
       password: user.password,
       phone: user.phone,
       gender: user.gender, 
       birth_date: user.birth_date,
       address: user.address
     }
   })
   }

   module.exports = {
       insertUser
   }