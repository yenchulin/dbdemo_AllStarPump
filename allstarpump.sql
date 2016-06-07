-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- 主機: 127.0.0.1
-- 產生時間： 2016-06-07 16:10:49
-- 伺服器版本: 10.1.10-MariaDB
-- PHP 版本： 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `allstarpump`
--

-- --------------------------------------------------------

--
-- 資料表結構 `acompany`
--

CREATE TABLE `acompany` (
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
-- 資料表結構 `assemble`
--

CREATE TABLE `assemble` (
  `firmA` varchar(10) NOT NULL,
  `firmB` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `bcompany`
--

CREATE TABLE `bcompany` (
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

--
-- 資料表的匯出資料 `member`
--

INSERT INTO `member` (`account`, `password`) VALUES
('123', '123'),
('333', '333'),
('eee', 'eee');

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

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `acompany`
--
ALTER TABLE `acompany`
  ADD PRIMARY KEY (`firmName`),
  ADD UNIQUE KEY `componentId` (`componentId`);

--
-- 資料表索引 `assemble`
--
ALTER TABLE `assemble`
  ADD PRIMARY KEY (`firmA`,`firmB`),
  ADD UNIQUE KEY `firmB` (`firmB`),
  ADD UNIQUE KEY `firmA` (`firmA`);

--
-- 資料表索引 `bcompany`
--
ALTER TABLE `bcompany`
  ADD PRIMARY KEY (`firmName`),
  ADD UNIQUE KEY `pumpId` (`pumpId`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`account`);

--
-- 資料表索引 `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`moduleId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
