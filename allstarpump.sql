-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- 主機: 127.0.0.1
-- 產生時間： 2016-06-06 19:25:37
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
  `廠商名稱` varchar(10) NOT NULL,
  `零件代碼` varchar(10) NOT NULL,
  `零件名稱` varchar(20) NOT NULL,
  `零件數量` int(3) NOT NULL,
  `地址` varchar(30) NOT NULL,
  `電話` int(10) NOT NULL,
  `負責人` varchar(5) NOT NULL,
  `借出時間` datetime NOT NULL,
  `歸還時間` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `assemble`
--

CREATE TABLE `assemble` (
  `廠商A名稱` varchar(10) NOT NULL,
  `廠商B名稱` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `bcompany`
--

CREATE TABLE `bcompany` (
  `廠商名稱` varchar(10) NOT NULL,
  `馬達型號` varchar(20) NOT NULL,
  `馬達用途` text NOT NULL,
  `馬達數量` int(3) NOT NULL,
  `馬達類型` varchar(50) NOT NULL,
  `馬達形式` varchar(30) NOT NULL,
  `馬達流量` int(10) NOT NULL,
  `地址` varchar(30) NOT NULL,
  `電話` int(10) NOT NULL,
  `負責人` varchar(5) NOT NULL
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
  `模具機型` varchar(20) NOT NULL,
  `模具用途` text NOT NULL,
  `模具數量` int(3) NOT NULL,
  `目前所在` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `acompany`
--
ALTER TABLE `acompany`
  ADD PRIMARY KEY (`廠商名稱`),
  ADD UNIQUE KEY `零件代碼` (`零件代碼`),
  ADD UNIQUE KEY `零件名稱` (`零件名稱`);

--
-- 資料表索引 `assemble`
--
ALTER TABLE `assemble`
  ADD PRIMARY KEY (`廠商A名稱`,`廠商B名稱`),
  ADD KEY `bcomForeignKey` (`廠商B名稱`);

--
-- 資料表索引 `bcompany`
--
ALTER TABLE `bcompany`
  ADD PRIMARY KEY (`廠商名稱`),
  ADD UNIQUE KEY `馬達型號` (`馬達型號`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`account`),
  ADD UNIQUE KEY `password` (`password`);

--
-- 資料表索引 `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`模具機型`);

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `assemble`
--
ALTER TABLE `assemble`
  ADD CONSTRAINT `acomForeignKey` FOREIGN KEY (`廠商A名稱`) REFERENCES `acompany` (`廠商名稱`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `bcomForeignKey` FOREIGN KEY (`廠商B名稱`) REFERENCES `bcompany` (`廠商名稱`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
