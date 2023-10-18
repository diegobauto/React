-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 05:14:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `euforia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditorio`
--

CREATE TABLE `auditorio` (
  `id_auditorio` int(11) NOT NULL COMMENT 'Identificador del auditorio',
  `fk_num_unidad` int(11) NOT NULL COMMENT 'Número de la unidad a la que pertenece el recurso',
  `fk_id_recurso` int(11) NOT NULL COMMENT 'Identificación del recurso',
  `aforo` smallint(6) NOT NULL COMMENT 'Cantidad de personas que pueden ocupar el auditorio'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de recurso auditorio';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula`
--

CREATE TABLE `aula` (
  `id_aula` int(11) NOT NULL COMMENT 'Identificador del aula',
  `fk_num_unidad` int(11) NOT NULL COMMENT 'Número de la unidad a la que pertenece el recurso',
  `fk_id_recurso` int(11) NOT NULL COMMENT 'Identificación del recurso',
  `cantidad_puestos` smallint(6) NOT NULL COMMENT 'Cantidad de puestos/aforo del aula',
  `material_puestos` varchar(25) NOT NULL COMMENT 'Nombre del material de los puestos: madera, plástico, etc.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de recurso aula, lugar en el que se da a clase';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patio`
--

CREATE TABLE `patio` (
  `id_patio` int(11) NOT NULL COMMENT 'Identificador del patio',
  `fk_num_unidad` int(11) NOT NULL COMMENT 'Número de la unidad a la que pertenece el recurso',
  `fk_id_recurso` int(11) NOT NULL COMMENT 'Identificación del recurso',
  `tipo_patio` varchar(25) NOT NULL COMMENT 'Define la especialización del patio, por ejemplo, el deporte para el cual se utiliza'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de recurso patio, en el que se hace deporte';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `id_prestamo` int(11) NOT NULL COMMENT 'Identificador del préstamo',
  `fecha_inicio` datetime NOT NULL COMMENT 'Fecha de inicio del préstamo',
  `fecha_entrega` datetime NOT NULL COMMENT 'Fecha de entrega del préstamo',
  `fk_id_reserva` int(11) NOT NULL COMMENT 'Identificador de la reserva asociada',
  `fk_id_admin_entrega` int(11) NOT NULL COMMENT 'Identificador del administrador que entregó',
  `fk_id_admin_devolucion` int(11) DEFAULT NULL COMMENT 'Identificador del administrador de devolución'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Registro del préstamo de un recurso físico. En el que se entrega el recurso físico a un usuario';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE `recurso` (
  `id_recurso` int(11) NOT NULL COMMENT 'Identificador del recurso físico',
  `nombre` varchar(50) NOT NULL COMMENT 'Nombre del recurso físico',
  `descripcion` varchar(50) NOT NULL COMMENT 'Información que describe el recurso físico',
  `tipo_recurso` varchar(25) NOT NULL COMMENT 'Tipo del recurso físico',
  `fk_numero_unidad` int(11) NOT NULL COMMENT 'Número de la unidad a la que pertenece el recurso'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Recurso físico perteneciente a una unidad';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL COMMENT 'Identificador de la reserva',
  `fecha_reserva` date NOT NULL COMMENT 'Fecha en la que se realizó la reserva',
  `fecha_inicio_reserva` datetime NOT NULL COMMENT 'Fecha y hora en la que inicia la reserva del recurso físico',
  `fecha_fin_reserva` datetime NOT NULL COMMENT 'Fecha y hora en la que termina la reserva del recurso físico',
  `fk_id_usuario` int(11) DEFAULT NULL COMMENT 'Identificador del usuario que realiza la reserva',
  `fk_id_recurso` int(11) DEFAULT NULL COMMENT 'Identificador del recurso físico reservado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Datos del proceso en el que se anticipa el uso de un recurso físico';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tokens`
--

INSERT INTO `tokens` (`id`, `token`) VALUES
(59, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MDI2NywiZXhwIjoxNjk3NDkzODY3fQ.paxcP2vK1MbwPsVP6jmIvjZpLZZXI9AqkYk5PGQ5PaE'),
(67, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMCwiZXhwIjoxNjk3NDk0ODAwfQ.0i-LJWI9TtwIyQN3sY5Fq9jgsnanFfUD7dK9gC-Ho_A'),
(68, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMSwiZXhwIjoxNjk3NDk0ODAxfQ.9N34HiUCH8dPrEGKeC1PwhlJxhgvm6SHGphx1fsQYg8'),
(69, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMiwiZXhwIjoxNjk3NDk0ODAyfQ.lN1XuZO5DUgKyCCxjn_9tt5IvUhNsvYiqnu0K6BZ8-U'),
(70, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMiwiZXhwIjoxNjk3NDk0ODAyfQ.lN1XuZO5DUgKyCCxjn_9tt5IvUhNsvYiqnu0K6BZ8-U'),
(71, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMiwiZXhwIjoxNjk3NDk0ODAyfQ.lN1XuZO5DUgKyCCxjn_9tt5IvUhNsvYiqnu0K6BZ8-U'),
(72, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTIwMiwiZXhwIjoxNjk3NDk0ODAyfQ.lN1XuZO5DUgKyCCxjn_9tt5IvUhNsvYiqnu0K6BZ8-U'),
(73, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTI2OSwiZXhwIjoxNjk3NDk0ODY5fQ.v89GtD7fEGqfLaOLCTMW8Uy-4Kvp9YXOjGw2sIXP9q4'),
(74, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTI5NiwiZXhwIjoxNjk3NDk0ODk2fQ.Vh1hTW6-kAh1rzVAmqw49x84RMBbkmlcXUV29nSKDQo'),
(76, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTQ0NywiZXhwIjoxNjk3NDk1MDQ3fQ.k_37bsOLeWLCmfBwq_n3G61LHA8Lik6ba8irJ5S0Sdo'),
(77, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTQ0OSwiZXhwIjoxNjk3NDk1MDQ5fQ.D1X9FsZquNyDDl-iZa2WHEc_D4R33vzt473rR_sNjFw'),
(78, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTQ1MCwiZXhwIjoxNjk3NDk1MDUwfQ.8zF-PGPGj9j-8wFvwQZAZFbkvAG0T1NtFMqE4-MFEgY'),
(79, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MTQ4MiwiZXhwIjoxNjk3NDk1MDgyfQ.yFd9ImexLCt0SsHs4rcF8dbNBAPDDQnugBwwYsB-G3I'),
(80, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ5MjE1MywiZXhwIjoxNjk3NDk1NzUzfQ.ouATaoa00bVxTjWth4-DTM5v93vKqo51l_7EHvx_L00'),
(85, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3Niwibm9tYnJlIjoicHJ1ZWJhIiwiY29ycmVvIjoicHJ1ZWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NzU1NTA5MiwiZXhwIjoxNjk3NTU4NjkyfQ.MXUSF___6fxh-7bbCjyY25Qn9iy4TeBt12F4Vk6f-GA'),
(86, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo4Mywibm9tYnJlIjoiZXVmb3JpYSIsImNvcnJlbyI6ImV1Zm9yaWFAZ21haWwuY29tIiwiaWF0IjoxNjk3NTU1OTg4LCJleHAiOjE2OTc1NTk1ODh9.3AeQnOgAnIm94mEx9na7al2OJaHQrt6HXeO4MZCiBc8'),
(87, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo4Mywibm9tYnJlIjoiZXVmb3JpYSIsImNvcnJlbyI6ImV1Zm9yaWFAZ21haWwuY29tIiwiaWF0IjoxNjk3NTk1MjE3LCJleHAiOjE2OTc1OTg4MTd9.7SFx9s2R0-kQIux16diCELlqJ00z04qiWFFuAHc-zXo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `id_unidad` int(11) NOT NULL COMMENT 'Identificador de la unidad',
  `nombre` varchar(50) NOT NULL COMMENT 'Nombre de la unidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Unidades en las que se prestan recursos físicos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL COMMENT 'Identificador del usuario',
  `correo` varchar(100) NOT NULL COMMENT 'Correo electrónico único del usuario',
  `nombre` varchar(50) NOT NULL COMMENT 'Nombre del usuario',
  `contrasena` varchar(128) NOT NULL COMMENT 'Hash seguro de la contraseña del usuario (almacenada de forma segura)',
  `rol` enum('usuario','administrador') NOT NULL DEFAULT 'usuario' COMMENT 'Rol del usuario (usuario o administrador)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Información de los usuarios de la aplicación y administradores';

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `correo`, `nombre`, `contrasena`, `rol`) VALUES
(76, 'prueba@gmail.com', 'prueba', '$2b$10$PJMB7UvGV1bPGewe1lKwAu7jYl0gqSyqOETCqtalRlDU.FkL2FRGa', 'usuario'),
(77, 'juan@gmail.com', 'juan', '$2b$10$tU44guE1obSg.BXUjrEU/.le4lEASupExmDVTazVZd6EZIPEIeqgS', 'usuario'),
(78, 'prueba22@gmail.com', 'prueba22', '$2b$10$plq6aTinCiGCp.I/Y5kPKOArOw3Jt.J/blAOENYv1fkN7PeW7M0CW', 'usuario'),
(79, 'prueba33@gmail.com', 'prueba33', '$2b$10$F7qWIJ9OJ6TJCR5wqNvwyeXhXshXfbh6AiFBUO4xsEvfMcVTDuMte', 'usuario'),
(80, 'prueba44@gmail.com', 'prueba44', '$2b$10$/GJ57qjB6WDeHhwjvkl5JuDf2UwjfBJxe.37KRT3yyAkNtMfH05Fu', 'usuario'),
(81, 'asd@corre', 'asdasda', '$2b$10$uduzHtzACb3uSG07rV3P4O17HkJBe2WYJhMmEC1GUWRMD0p6qQUdK', 'usuario'),
(83, 'euforia@gmail.com', 'euforia', '$2b$10$u4mpH9gXuXK.SrpFXuLyE.8F0VYLvmA0XrNI5ZRZKi5PcUyxA3Qby', 'administrador'),
(84, 'john@example.com', 'John Doe', '$2b$10$VK7GsVr0Qf9hF9XAcivBQ.d1liK/xKkEMnx202X25THQ1faX6oOz.', 'usuario'),
(85, 'fulanito@example.com', 'Fulanito', '$2b$10$gT0XTAl1vnNVzUWxVmuF.OuRuU4W61NBAEAfxfgZmpABYY56cF60a', 'usuario'),
(86, 'test@test.com', 'test', '$2b$10$dL7RAM/HjaCULM7OaA3sZOl0DkPokC9JoueTK4zkj2EUFy8xaJRKm', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditorio`
--
ALTER TABLE `auditorio`
  ADD PRIMARY KEY (`id_auditorio`),
  ADD KEY `FK_Auditorio_Unidad` (`fk_num_unidad`),
  ADD KEY `FK_Auditorio_Recurso` (`fk_id_recurso`);

--
-- Indices de la tabla `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`id_aula`),
  ADD KEY `FK_Aula_Unidad` (`fk_num_unidad`),
  ADD KEY `FK_Aula_Recurso` (`fk_id_recurso`);

--
-- Indices de la tabla `patio`
--
ALTER TABLE `patio`
  ADD PRIMARY KEY (`id_patio`),
  ADD KEY `FK_Patio_Unidad` (`fk_num_unidad`),
  ADD KEY `FK_Patio_Recurso` (`fk_id_recurso`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id_prestamo`),
  ADD KEY `FK_Prestamo_Reserva` (`fk_id_reserva`),
  ADD KEY `FK_Prestamo_Usuario_Entrega` (`fk_id_admin_entrega`),
  ADD KEY `FK_Prestamo_Usuario_Devolucion` (`fk_id_admin_devolucion`);

--
-- Indices de la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`id_recurso`),
  ADD KEY `FK_Recurso_Unidad` (`fk_numero_unidad`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `FK_Reserva_Usuario` (`fk_id_usuario`),
  ADD KEY `FK_Reserva_Recurso` (`fk_id_recurso`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`id_unidad`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auditorio`
--
ALTER TABLE `auditorio`
  MODIFY `id_auditorio` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del auditorio';

--
-- AUTO_INCREMENT de la tabla `aula`
--
ALTER TABLE `aula`
  MODIFY `id_aula` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del aula';

--
-- AUTO_INCREMENT de la tabla `patio`
--
ALTER TABLE `patio`
  MODIFY `id_patio` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del patio';

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `id_prestamo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del préstamo';

--
-- AUTO_INCREMENT de la tabla `recurso`
--
ALTER TABLE `recurso`
  MODIFY `id_recurso` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del recurso físico';

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de la reserva';

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `unidad`
--
ALTER TABLE `unidad`
  MODIFY `id_unidad` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de la unidad';

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del usuario', AUTO_INCREMENT=87;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auditorio`
--
ALTER TABLE `auditorio`
  ADD CONSTRAINT `FK_Auditorio_Recurso` FOREIGN KEY (`fk_id_recurso`) REFERENCES `recurso` (`id_recurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Auditorio_Unidad` FOREIGN KEY (`fk_num_unidad`) REFERENCES `unidad` (`id_unidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `aula`
--
ALTER TABLE `aula`
  ADD CONSTRAINT `FK_Aula_Recurso` FOREIGN KEY (`fk_id_recurso`) REFERENCES `recurso` (`id_recurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Aula_Unidad` FOREIGN KEY (`fk_num_unidad`) REFERENCES `unidad` (`id_unidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `patio`
--
ALTER TABLE `patio`
  ADD CONSTRAINT `FK_Patio_Recurso` FOREIGN KEY (`fk_id_recurso`) REFERENCES `recurso` (`id_recurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Patio_Unidad` FOREIGN KEY (`fk_num_unidad`) REFERENCES `unidad` (`id_unidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `FK_Prestamo_Reserva` FOREIGN KEY (`fk_id_reserva`) REFERENCES `reserva` (`id_reserva`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Prestamo_Usuario_Devolucion` FOREIGN KEY (`fk_id_admin_devolucion`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Prestamo_Usuario_Entrega` FOREIGN KEY (`fk_id_admin_entrega`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD CONSTRAINT `FK_Recurso_Unidad` FOREIGN KEY (`fk_numero_unidad`) REFERENCES `unidad` (`id_unidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `FK_Reserva_Recurso` FOREIGN KEY (`fk_id_recurso`) REFERENCES `recurso` (`id_recurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Reserva_Usuario` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
