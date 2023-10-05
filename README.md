# Conectando com banco de dados/ORM e MySql

CREATE DATABASE petshop;

CREATE TABLE cliente (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
telefone VARCHAR(15) NOT NULL UNIQUE,
);
CREATE TABLE cachorro (
id INT AUTO_INCREMENT PRIMARY KEY,
raca VARCHAR(255) NOT NULL,
cliente VARCHAR(255) NOT NULL UNIQUE
);
INSERT INTO clientes (nome, telefone)
VALUES ('João da Silva', 987651234);
INSERT INTO cachorros (nome, raca,cliente)
VALUES (‘Pingo’, ‘viralata’, ‘João da Silva’);

