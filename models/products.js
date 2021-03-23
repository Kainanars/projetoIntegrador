const products = [
  {
    id:99999,
    nameProduct: "Produto teste",
    descriptionProduct: "Novo Produto",
    price: 99999,
    anuncio: "Apenas dinheiro"

  }
];
  
  function getProducts() {
    return products;
  }
  
  function insertProduct(product) {
    products.push(product);
  }
  
  module.exports = {
    getProducts: getProducts,
    insertProduct: insertProduct,
  };
  
  