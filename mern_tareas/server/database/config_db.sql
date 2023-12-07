CREATE DATABASE tareas_db;

USE tareas_db;

-- tabla tareas
CREATE TABLE tareas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    hecho BOOLEAN NOT NULL DEFAULT 0,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);