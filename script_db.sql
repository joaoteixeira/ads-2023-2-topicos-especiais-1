DROP DATABASE IF EXISTS api_contato_bd;
CREATE DATABASE api_contato_bd;
USE api_contato_bd;

CREATE TABLE categorias (
	id_cat int not null auto_increment primary key,
    nome varchar(200) null
);

INSERT INTO categorias (nome) VALUES ("Familia"), ("Amigos"), ("Trabalho");

SELECT * FROM categorias;

CREATE TABLE contatos (
    id_con INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    data_nasc DATE NULL,
    telefone VARCHAR(50) NULL,
    email VARCHAR(300) NULL,
    id_cat_fk int NOT NULL,
    PRIMARY KEY (id_con),
    FOREIGN KEY (id_cat_fk) REFERENCES categorias(id_cat)
);


insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (1, 'Janean', '1989-11-10', '(958) 9869715', 'jmcmechan0@liveinternet.ru', 1);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (2, 'Marcellus', '1989-07-26', '(339) 5286103', 'mgammidge1@icq.com', 2);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (3, 'Christie', '1995-05-24', '(414) 3824107', 'csmees2@1und1.de', 3);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (4, 'Karna', '1997-01-03', '(460) 2689416', 'kantosch3@yahoo.com', 1);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (5, 'Silva', '1991-01-26', '(497) 1224627', 'smattioli4@bloglines.com', 2);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (6, 'Chevy', '1984-07-18', '(688) 9867791', 'cwigsell5@ihg.com', 3);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (7, 'Sada', '1986-09-23', '(194) 4611905', 'sholleworth6@baidu.com', 1);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (8, 'Bernard', '1992-01-11', '(458) 7307718', 'bmathwin7@tinyurl.com', 2);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (9, 'Rakel', '1989-03-02', '(496) 6857885', 'rpavlasek8@lycos.com', 3);
insert into contatos (id_con, nome, data_nasc, telefone, email, id_cat_fk) values (10, 'Hildy', '1998-06-11', '(283) 1399623', 'hgeindre9@ustream.tv', 1);

SELECT con.*, cat.nome categoria FROM contatos con, categorias cat WHERE id_cat = id_cat_fk;
