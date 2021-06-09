const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);


//let products = [
//  {
//    id:1,
//    nameProduct: "Televisão",
//    descriptionProduct: "O design sofisticado da Smart TV Samsung Crystal UHD 58TU7020 com exclusiva tela sem bordas aparentes proporciona elegância ao seu ambiente",
//    category: "Televisão",
//    price: 99999,
//    anuncio: "Apenas dinheiro"
//
//  },
//  { 
//    id:2,
//    nameProduct: "Computador",
//    descriptionProduct: "Core i5",
//    category: "Computador",
//    price: 88888,
//    anuncio: "Apenas dinheiro"
//  }
//];
  


 // function getProducts() {
 //   return products;
 // }
//
async function getProducts() {
  let searchQuery = "select * from products;";
  const result = await db.query(searchQuery, { type: Sequelize.QueryTypes.SELECT});
return result;
}
  
async function getProductById(product_id) {
  const result = await db.query("select * from products where product_id = :productId;", {
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
      productId: product_id
    }
  });
  return result[0];
}
async function insertProduct(product, image) {
  await db.query("insert into products (name, description, und , type, category, payment, price, photo_product) values (:nameProduct, :descriptionProduct, :und, :type, :category, :payment, :price, :photoProduct)", {
    replacements: {
      nameProduct: product.nameProduct,
      descriptionProduct: product.descriptionProduct,
      und: product.und,
      type: product.type,
      category: product.category,
      price: product.price,
      payment: product.payment,
      photoProduct: image,
      id: product.id
    }

  })
  }


 async function updateProduct(product, image) {
   await db.query("update products set name = :nameProduct, description = :descriptionProduct, und = :und, type = :type, category = :category, payment = :payment, price = :price, photo_product = :photoProduct  where product_id = :id", {
     replacements: {
       nameProduct: product.nameProduct,
       descriptionProduct: product.descriptionProduct,
       und: product.und,
       type: product.type,
       category: product.category,
       price: product.price,
       payment: product.payment,
       photoProduct: image,
       id: product.id
     }

   })
 }

async function removeProducts(productId) {
  await db.query("delete from products where product_id = :id", {
    replacements: {
      id: productId
    }
  })
}
  
  module.exports = {
    getProducts: getProducts,
    insertProduct: insertProduct,
    updateProduct: updateProduct,
    removeProducts: removeProducts,
    getProductById: getProductById
  };
  