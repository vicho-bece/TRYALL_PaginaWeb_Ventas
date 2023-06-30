-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-06-2023 a las 19:47:03
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
-- Base de datos: `basedatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `Codigo` varchar(100) NOT NULL,
  `NombreProducto` varchar(1000) NOT NULL,
  `Fabricante` varchar(1000) NOT NULL,
  `Stock` int(255) NOT NULL,
  `Precio` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`Codigo`, `NombreProducto`, `Fabricante`, `Stock`, `Precio`) VALUES
(' EVP20-12-I1', 'Batería VRLA-AGM 12V, 20Ah', 'B&B Bateries', 5, 1000),
('3020-01107-0', 'Resistencia Shunt 10A/100mV', 'Murata', 10, 3200),
('BES M18MIPOC80B-BV0', 'Sensor de proximidad inductivo', 'Balluff', 3, 10000),
('EM111', 'Medidor de Energía eléctrica monofásico', 'Carlo Gavazzi', 20, 12345),
('GSD8', 'Medidor de agua caliente', 'B-Meter', 1, 50000),
('TCF100RN', 'Fusible 100A', 'Bussmann', 0, 500);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`Codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
