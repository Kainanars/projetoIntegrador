  

// A fazer: 
//Criar uma autenticação para campos vazios 
// Criar um erro diferente para campos vazios e para usuários inválidos.
// Implementar o middleware na rota post 

function authenticateEmptyFields (req, res, next){
    const fields = req.body;
    if(fields.login.trim() === '' || fields.password.trim() === '') {
       return res.redirect('/login?emptyField=true')
    }
    return next(); 
}

module.exports = {authenticateEmptyFields: authenticateEmptyFields}; 