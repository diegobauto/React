-- Eliminar la base de datos si existe
DROP DATABASE IF EXISTS aprendizaje_virtual_db;

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS aprendizaje_virtual_db;

-- Usar la base de datos
USE aprendizaje_virtual_db;

-- Tabla para almacenar los tutoriales
CREATE TABLE tutoriales (
    id_tutorial INT PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT,
    titulo VARCHAR(255) NOT NULL,
    estado_publicacion ENUM('visible', 'oculto') NOT NULL DEFAULT 'visible'
);

-- Tabla para almacenar información de usuarios (puede ser útil para rastrear quién creó los tutoriales y sus detalles)
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255)
);

-- Tabla para almacenar los detalles de los tutoriales
CREATE TABLE detalles (
    id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Un tutorial tiene únicamente un detalle de tutorial
    id_tutorial INT NOT NULL UNIQUE,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_tutorial) REFERENCES Tutoriales(id_tutorial) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Insertar 5 usuarios por defecto
INSERT INTO
    usuarios (nombre, correo_electronico)
VALUES
    ('Usuario 1', 'usuario1@gmail.com'),
    ('Usuario 2', 'usuario2@gmail.com'),
    ('Usuario 3', 'usuario3@gmail.com'),
    ('Usuario 4', 'usuario4@gmail.com'),
    ('Usuario 5', 'usuario5@gmail.com');