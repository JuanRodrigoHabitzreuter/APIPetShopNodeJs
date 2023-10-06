# Conectando com banco de dados/ORM e MySql

CREATE DATABASE petshop;

CREATE TABLE clientes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
telefone VARCHAR(15) NOT NULL UNIQUE,
);
CREATE TABLE cachorros (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
raca VARCHAR(255),
cliente_id INT,
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes (nome, telefone) VALUES ('João da Silva', 987651234);
INSERT INTO clientes (nome, telefone) VALUES ('Maria Souza', 998877665);
INSERT INTO clientes (nome, telefone) VALUES ('Pedro Santos', 987123456);

INSERT INTO cachorros (nome, raca, cliente_id)
VALUES (‘Pingo’, ‘viralata’, 1);

SELECT nome, raca
FROM cachorros
WHERE cliente_id = 1;