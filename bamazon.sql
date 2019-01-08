DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM  products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shampoo", "beauty", 4.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 8", "Electronics", 350.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Airpods", "Electronics", 159.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "beauty", 1.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("garden hose", "home improvement", 21.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shovel", "home_improvement", 10.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's t-shirt", "clothing", 7.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("woman's t-shirt", "clothing", 10.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("unisex hoodie", "clothing", 24.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sweatpants", "clothing", 10.99, 2);