drop database if EXISTS shop;
CREATE database if NOT EXISTS shop;
use shop;

DROP TABLE IF EXISTS Product ;
CREATE TABLE Product (id_Product INT AUTO_INCREMENT NOT NULL,
name_Product VARCHAR(50),
description_Product TEXT,
price_Product VARCHAR(50),
PRIMARY KEY (id_Product)) ;

DROP TABLE IF EXISTS Basket ;
CREATE TABLE Basket (id_Basket INT AUTO_INCREMENT NOT NULL,
user_id_user INT,
PRIMARY KEY (id_Basket)) ;

DROP TABLE IF EXISTS Catalog ;
CREATE TABLE Catalog (id_Catalog INT AUTO_INCREMENT NOT NULL,
name_Catalog VARCHAR(50),
PRIMARY KEY (id_Catalog)) ;

DROP TABLE IF EXISTS User ;
CREATE TABLE User (id_User INT AUTO_INCREMENT NOT NULL,
name_User VARCHAR(50),
surname_User VARCHAR(50),
basket_id_basket INT,
PRIMARY KEY (id_User)) ;

DROP TABLE IF EXISTS TVA ;
CREATE TABLE TVA (id_TVA INT AUTO_INCREMENT NOT NULL,
tax_TVA VARCHAR(50),
PRIMARY KEY (id_TVA)) ;

DROP TABLE IF EXISTS Image ;
CREATE TABLE Image (id_Image INT AUTO_INCREMENT NOT NULL,
url_Image VARCHAR(1000),
id_Product INT,
PRIMARY KEY (id_Image)) ;

DROP TABLE IF EXISTS contient ;
CREATE TABLE contient (id_Catalog INT AUTO_INCREMENT NOT NULL,
id_Product INT NOT NULL,
PRIMARY KEY (id_Catalog,
 id_Product)) ;

DROP TABLE IF EXISTS price_tax ;
CREATE TABLE price_tax (id_TVA INT AUTO_INCREMENT NOT NULL,
id_Product INT NOT NULL,
PRIMARY KEY (id_TVA,
 id_Product)) ;

DROP TABLE IF EXISTS basket_line ;
CREATE TABLE basket_line (id_Product INT AUTO_INCREMENT NOT NULL,
id_Basket INT NOT NULL,
quantity_Add VARCHAR(50),
PRIMARY KEY (id_Product,
 id_Basket)) ;

ALTER TABLE Basket ADD CONSTRAINT FK_Basket_user_id_user FOREIGN KEY (user_id_user) REFERENCES User (id_User);

ALTER TABLE User ADD CONSTRAINT FK_User_basket_id_basket FOREIGN KEY (basket_id_basket) REFERENCES Basket (id_Basket);
ALTER TABLE Image ADD CONSTRAINT FK_Image_id_Product FOREIGN KEY (id_Product) REFERENCES Product (id_Product);
ALTER TABLE contient ADD CONSTRAINT FK_contient_id_Catalog FOREIGN KEY (id_Catalog) REFERENCES Catalog (id_Catalog);
ALTER TABLE contient ADD CONSTRAINT FK_contient_id_Product FOREIGN KEY (id_Product) REFERENCES Product (id_Product);
ALTER TABLE price_tax ADD CONSTRAINT FK_price_tax_id_TVA FOREIGN KEY (id_TVA) REFERENCES TVA (id_TVA);
ALTER TABLE price_tax ADD CONSTRAINT FK_price_tax_id_Product FOREIGN KEY (id_Product) REFERENCES Product (id_Product);
ALTER TABLE basket_line ADD CONSTRAINT FK_basket_line_id_Product FOREIGN KEY (id_Product) REFERENCES Product (id_Product);
ALTER TABLE basket_line ADD CONSTRAINT FK_basket_line_id_Basket FOREIGN KEY (id_Basket) REFERENCES Basket (id_Basket);

insert into Product(name_Product,description_Product,price_Product) values
("product_1","blablabla bla bla bla bla","20"),
("product_2","blablabla bla bla bla bla","30"),
("product_3","blablabla bla bla bla bla","50"),
("product_4","blablabla bla bla bla bla","20"),
("product_5","blablabla bla bla bla bla","30"),
("product_6","blablabla bla bla bla bla","50"),
("product_7","blablabla bla bla bla bla","20"),
("product_8","blablabla bla bla bla bla","30"),
("product_9","blablabla bla bla bla bla","50"),
("product_10","blablabla bla bla bla bla","20"),
("product_11","blablabla bla bla bla bla","30"),
("product_12","blablabla bla bla bla bla","50"),
("product_13","blablabla bla bla bla bla","20"),
("product_14","blablabla bla bla bla bla","30"),
("product_15","blablabla bla bla bla bla","50"),
("product_16","blablabla bla bla bla bla","20"),
("product_17","blablabla bla bla bla bla","30"),
("product_18","blablabla bla bla bla bla","50"),
("product_19","blablabla bla bla bla bla","20"),
("product_20","blablabla bla bla bla bla","30");
insert into Catalog(name_Catalog) values
("winter"),
("autumn");

insert into Image (url_Image, id_Product) values
("https://via.placeholder.com/150x150",1),
("https://via.placeholder.com/150x150",2),
("https://via.placeholder.com/150x150",3),
("https://via.placeholder.com/150x150",4),
("https://via.placeholder.com/150x150",5),
("https://via.placeholder.com/150x150",6),
("https://via.placeholder.com/150x150",7),
("https://via.placeholder.com/150x150",8),
("https://via.placeholder.com/150x150",9),
("https://via.placeholder.com/150x150",10),
("https://via.placeholder.com/150x150",11),
("https://via.placeholder.com/150x150",12),
("https://via.placeholder.com/150x150",13),
("https://via.placeholder.com/150x150",14),
("https://via.placeholder.com/150x150",15),
("https://via.placeholder.com/150x150",16),
("https://via.placeholder.com/150x150",17),
("https://via.placeholder.com/150x150",18),
("https://via.placeholder.com/150x150",19),
("https://via.placeholder.com/150x150",20);
describe Product;
describe Catalog;
describe Image;
select * from Image;
select * from Catalog;