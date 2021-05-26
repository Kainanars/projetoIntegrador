   
// Função que verifica se algum campo do login está vazio: 
function authenticateEmptyFields (req, res, next){
    const fields = req.body;
    if(fields.email.trim() === '' || fields.password.trim() === '') {
       return res.redirect('/login?emptyField=true')
    }
    return next(); 
}

module.exports = {authenticateEmptyFields: authenticateEmptyFields}; 