-- Eliminar la base de datos si ya existe
DROP DATABASE IF EXISTS auth_db;

-- Crear la base de datos
CREATE DATABASE auth_db;

-- Usar la base de datos
USE auth_db;

-- Crear la tabla de los usuarios
CREATE TABLE `users` (
    `id_user` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(250) NOT NULL,
    PRIMARY KEY (`id_user`),
    UNIQUE (`email`)
) ENGINE = InnoDB;