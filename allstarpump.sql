-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生時間： 2016 年 06 月 07 日 13:21
-- 伺服器版本: 5.5.42
-- PHP 版本： 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `Allstarpump`
--

-- --------------------------------------------------------

--
-- 資料表結構 `aCompany`
--

CREATE TABLE `aCompany` (
  `firmName` varchar(10) NOT NULL,
  `componentId` varchar(10) NOT NULL,
  `componentName` varchar(20) NOT NULL,
  `componentQuantity` int(3) NOT NULL,
  `address` varchar(30) NOT NULL,
  `phoneNo` int(10) NOT NULL,
  `personIC` varchar(5) NOT NULL,
  `lendOT` datetime NOT NULL,
  `returnT` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `Assemble`
--

CREATE TABLE `Assemble` (
  `firmA` varchar(10) NOT NULL,
  `firmB` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `bCompany`
--

CREATE TABLE `bCompany` (
  `firmName` varchar(10) NOT NULL,
  `pumpId` varchar(20) NOT NULL,
  `pumpUsage` text NOT NULL,
  `pumpQuantity` int(3) NOT NULL,
  `pumpCategory` varchar(50) NOT NULL,
  `pumpType` varchar(30) NOT NULL,
  `pumpFlow` int(10) NOT NULL,
  `address` varchar(30) NOT NULL,
  `phoneNo` int(10) NOT NULL,
  `personIC` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `account` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `module`
--

CREATE TABLE `module` (
  `moduleId` varchar(20) NOT NULL,
  `moduleUsage` text NOT NULL,
  `moduleQuantity` int(3) NOT NULL,
  `currentLocation` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
