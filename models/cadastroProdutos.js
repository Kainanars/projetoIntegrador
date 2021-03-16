const products = [{
  
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
  
  