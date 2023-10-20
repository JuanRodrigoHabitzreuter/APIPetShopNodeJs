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

CREATE TABLE atendimentos (
id INT AUTO_INCREMENT PRIMARY KEY,
cachorro Varchar(255) NOT NULL
data VARCHAR(255) NOT NULL,
hora VARCHAR(255),
valor BOOLEAN,
atendimento_id INT,
FOREIGN KEY (atendimento_id) REFERENCES atendimento(id)
);

INSERT INTO clientes (nome, telefone) VALUES ('João da Silva', 987651234);
INSERT INTO clientes (nome, telefone) VALUES ('Maria Souza', 998877665);
INSERT INTO clientes (nome, telefone) VALUES ('Pedro Santos', 987123456);

INSERT INTO cachorros (nome, raca, cliente_id)
VALUES (‘Pingo’, ‘viralata’, 1);

INSERT INTO atendimentos (data, hora, valor, concluido) VALUES ('2022-12-23', '15:45', 150.00, 'true');


SELECT nome, raca
FROM cachorros
WHERE cliente_id = 1;

jwt- autenticação

token

header: tipo de cripotografia e qual o hash
payloud: a carga login e senha
signatire: segredo para fazer a decodoficação

bcrypt: biblioteca para proteger as informações no banco

model e repositorio não precisa fazer para administrador