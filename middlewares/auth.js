// Função que valida se o usuário está logado para poder acessar certas páginas do sistema: 

function auth (req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login'); 
    }
    return next(); 
}

module.exports = {auth: auth}; 
// A fazer:
// Terminar de implementar esse middleware nas rotas necessárias. 
// Testar ver se está tudo certinho e fazer o commit e o push. 