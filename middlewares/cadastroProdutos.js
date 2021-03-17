function validateBody(req, res, next) {
    const newProduct = req.body;
    console.log(newProduct)
    if (newProduct.nameProduct.trim() === "" || newProduct.descriptionProduct.trim() === ""){
      res.redirect('cadastroProdutos?errorMessage=Erro: é necessario preencher todos os campos')

    }
    next();
  }
  
  module.exports = {
    validateBody: validateBody
  };
  