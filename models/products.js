let products = [
  {
    id:1,
    nameProduct: "Televisão",
    descriptionProduct: "50 polegadas",
    category: "Televisão",
    price: 99999,
    anuncio: "Apenas dinheiro"

  },
  {
  id:2,
    nameProduct: "Computador",
    descriptionProduct: "Core i5",
    category: "Computador",
    price: 88888,
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
      return Number(obj.id) === Number(product.id);
    })
    products[index] = product;

    return products[index];
  }


  function removeProducts(productid){
    products = products.filter((product) => Number(product.id) !== Number(productid))
    return products
  }
  
  module.exports = {
    getProducts: getProducts,
    insertProduct: insertProduct,
    updateProduct: updateProduct,
    removeProducts: removeProducts
  };
  
  