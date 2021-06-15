CREATE TABLE products ( 
    product_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    und INTEGER UNSIGNED DEFAULT 0 NOT NULL,
    type VARCHAR(20) NOT NULL,
    category VARCHAR(100) NOT NULL,
    payment VARCHAR(50) NOT NULL,
    price INTEGER DEFAULT 0 NOT NULL,
    photo_product LONGBLOB
)


INSERT INTO `products`( `name`, `description`, `und`, `type`, `category`, `payment`, `price`) VALUES ( 'Console Playstation 5 Ps5 Sony Branco', 'Especificações:
Marca Sony
Modelo: PS5
Versão é japonesa, mas funciona perfeitamente no Brasil
Capacidade do SSD: 825GB
Quantidade de controles: 1
Tipo de controle: DualSense
Conexões: HDMI - Blu-ray
Recursos especiais:
Ray Tracing - E/S integrada - HDR - Saída em 8K - Tempest 3D AudioTech
Voltagem: Bivolt
Peso aproximado: 4,5kg
Dimensões: 39cm x 10,4cm x 26cm
Conteúdo da embalagem
1x Console PS5
1x Controle DualSense
1x Cabo HDMI
1x Base
1x Cabo de energia
1x Cabo USB

Garantia 90 dias
Venda condicionada a existência de produto em estoque', '5','Físico', 'Games e Consoles', 'Apenas Dinheiro', '9044.93'  )

-- Tabela de usuários: 

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (200) NOT NULL,  
   email VARCHAR(100) NOT NULL, 
   password VARCHAR(100) NOT NULL 
)

-- PARA ACRESCENTAR novas colunas na tabela de usuários: 
ALTER TABLE users 
ADD COLUMN phone VARCHAR (255),
ADD COLUMN gender CHAR (1),
ADD COLUMN birth_date DATE,
ADD COLUMN address VARCHAR (255); 

-- Criar tabela intermediária usuários produtos
CREATE TABLE products_users(
    user_id INT, 
    product_id INT
);

ALTER TABLE products_users ADD CONSTRAINT products_fk FOREIGN KEY (product_id) REFERENCES products(product_id); 
ALTER TABLE products_users ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users(id); 
