let products = [
  {
    id:99999,
    nameProduct: "Produto teste",
    descriptionProduct: "Novo Produto",
    category: "Produto",
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

  function updateProduct(product){
    const index = products.findIndex((obj) => {
      return parseInt(obj.id) === parseInt(product.id);
    })
    products[index] = product;

    return products[index];
  }


  function removeProducts(productid){
    products = products.filter((product) => parseInt(product.id) !== parseInt(productid))
  }
  
  module.exports = {
    getProducts: getProducts,
    insertProduct: insertProduct,
    updateProduct: updateProduct,
    removeProducts: removeProducts
  };
  
  