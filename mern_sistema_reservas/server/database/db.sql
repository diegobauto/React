DROP DATABASE IF EXISTS sistema_reservas_db ;

CREATE DATABASE sistema_reservas_db;

USE sistema_reservas_db;

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    rol ENUM("usuario", "empleado") NOT NULL DEFAULT "usuario"
); 

-- Recursos
CREATE TABLE recursos (
    id_recurso INT PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(255) NOT NULL, 
    descripcion TEXT NOT NULL,
    capacidad INT NOT NULL
);

CREATE TABLE auditorios (
    id_recurso INT, 
    tipo_sillas ENUM("Madera", "Plástico", "Metal") NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);

CREATE TABLE laboratorios (
    id_recurso INT,
    tipo_mesas ENUM("Metal", "Acrílico") NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);

CREATE TABLE salones (
    id_recurso INT,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);
-- 

CREATE TABLE horarios_recursos (
    id_horario INT PRIMARY KEY AUTO_INCREMENT,
    dia_semana ENUM("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo") NOT NULL,  
    hora_apertura TIME NOT NULL,
    hora_cierre TIME NOT NULL
    CHECK (hora_apertura < hora_cierre),
    id_recurso INT,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);

CREATE TABLE unidades (
    id_unidad INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    tiempo_min INT NOT NULL
    CHECK (tiempo_min >= 30 )
);

CREATE TABLE horarios_unidades (
    id_horario INT PRIMARY KEY AUTO_INCREMENT,
    dia_semana ENUM("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo") NOT NULL,  
    hora_apertura TIME NOT NULL,
    hora_cierre TIME NOT NULL
    CHECK (hora_apertura < hora_cierre),
    id_unidad INT,
    FOREIGN KEY (id_unidad) REFERENCES unidades(id_unidad) ON DELETE CASCADE
);

CREATE TABLE prestamos (
    id_prestamo INT PRIMARY KEY AUTO_INCREMENT,
    hora_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hora_devolucion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    CHECK (hora_entrega < hora_devolucion),
    fallo boolean NOT NULL,
    id_recurso INT
);

CREATE TABLE reservas (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_final TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    CHECK (fecha_inicio < fecha_final),
    id_recurso INT
);

CREATE TABLE unidades_recursos (
    id_unidad INT,
    id_recurso INT,
    FOREIGN KEY (id_unidad) REFERENCES unidades(id_unidad) ON DELETE CASCADE,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);

CREATE TABLE usuarios_reservas (
    id_usuario INT,
    id_reserva INT,
    calificacion INT NOT NULL
    CHECK ( 0 <= calificacion <= 5 ),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva) ON DELETE CASCADE
);

CREATE TABLE usuarios_prestamos (
    id_empleado_entrega INT,
    id_empleado_devuelve INT,
    id_prestamo INT,
    FOREIGN KEY (id_empleado_entrega) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_empleado_devuelve) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_prestamo) REFERENCES prestamos(id_prestamo) ON DELETE CASCADE
);