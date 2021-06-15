const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);
const fs = require('file-system')


async function getProducts() {
  let searchQuery = "select * from products;";
  const result = await db.query(searchQuery, { type: Sequelize.QueryTypes.SELECT});
return result;
}

async function getMyProducts(userId) {
  let searchQuery = "select * from products pc inner join products_users PU on (pc.product_id=pu.product_id) where pu.user_id =:userId";
  const result = await db.query(searchQuery, { 
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
        userId: userId,
      } 
  });
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

async function ownerProduct(product_id) {
  const ownerId = await db.query("select user_id from products_users where product_id = :productId;", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        productId: product_id
      }
 });
 return ownerId[0]
}

async function phoneOwner(userId){
  const phone = await db.query("SELECT phone FROM users WHERE id = :userId;", {
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
      userId: userId
    }
});
 return phone;
}

async function insertProduct(product, image, userId) {
  const newProduct = await db.query("insert into products (name, description, und , type, category, payment, price, photo_product) values (:nameProduct, :descriptionProduct, :und, :type, :category, :payment, :price, :photoProduct)", {
    type: Sequelize.QueryTypes.INSERT,
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
  });
   await db.query("insert into products_users (user_id, product_id) values (:userId, :productId)",{
   replacements: {
     userId: userId,
     productId: newProduct[0]
   } 
  }
   )
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
  });
  //fs.rmdirSync()
  //cadastrar função FS paremoer arquivo de imagem do sitema

}
  
  module.exports = {
    getProducts: getProducts,
    insertProduct: insertProduct,
    updateProduct: updateProduct,
    removeProducts: removeProducts,
    getProductById: getProductById,
    getMyProducts: getMyProducts,
    ownerProduct: ownerProduct,
    phoneOwner: phoneOwner
 
  };