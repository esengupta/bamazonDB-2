DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(6,2) NULL,
  stock_quantity INT (5) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Google Home", "Electronics", 40 , 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 140 , 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Alexa", "Electronics", 80 , 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Night-Lamp", "Home", 80 , 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carpet", "Home", 50 , 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fish Tank", "Home", 30 , 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tea", "Kitchen", 10 , 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "kitchen", 8 , 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wok", "Kitchen", 11 , 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dinner Set", "Kitchen", 30 , 45);


SELECT * FROM products



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
