-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- 主機: localhost:8889
-- 產生時間： 2016 年 06 月 12 日 11:35
-- 伺服器版本: 5.5.42
-- PHP 版本： 7.0.0

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

--
-- 資料表的匯出資料 `acompany`
--

INSERT INTO `acompany` (`firmName`, `componentId`, `componentName`, `componentQuantity`, `address`, `phoneNo`, `personIC`, `lendOT`, `returnT`) VALUES
('世東貿易有限公司', '373', '入口殼磨損環', 9, '台灣新北市樹林區西圳街1段203巷36-1號', 977302029, '張世東', '2012-01-21 06:23:45', '2016-03-21 13:11:32'),
('優和國際企業有限公司', '22', '半開放式葉輪', 33, '台灣台北市中山區龍江路387巷9號1樓', 923394828, '李悠河', '2014-05-13 13:48:21', '2015-11-09 08:47:35'),
('強頂貿易有限公司', '171', '後磨損盤', 47, '台灣新北市土城區慶祥街96巷5號', 984875263, '林強頂', '2013-02-20 08:13:27', '2016-03-14 06:39:26'),
('義豐有限公司', '06', '軸系組立圖', 21, '台灣新北市板橋區陽明街七○巷八號', 922818394, '黃義峰', '2014-02-05 03:04:09', '2015-12-22 03:29:18');

-- --------------------------------------------------------

--
-- 資料表結構 `assemble`
--

CREATE TABLE `assemble` (
  `firmA` varchar(10) NOT NULL,
  `firmB` varchar(10) NOT NULL,
  `required quantity` int(3) NOT NULL
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

--
-- 資料表的匯出資料 `bcompany`
--

INSERT INTO `bcompany` (`firmName`, `pumpId`, `pumpUsage`, `pumpQuantity`, `pumpCategory`, `pumpType`, `pumpFlow`, `address`, `phoneNo`, `personIC`) VALUES
('義豐有限公司', 'L20220', '清水', 15, '單級單吸汞', '直立式同軸', 210, '台灣新北市板橋區陽明街七○巷八號', 922818394, '黃義峰');

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
  `acompanyName` varchar(11) NOT NULL,
  `moduleUsage` text NOT NULL,
  `moduleQuantity` int(3) NOT NULL,
  `quantityOwned` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `module`
--

INSERT INTO `module` (`moduleId`, `acompanyName`, `moduleUsage`, `moduleQuantity`, `quantityOwned`) VALUES
('wTL2-0', '世東有限公司', '前段導輪', 7, 10);

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
  ADD PRIMARY KEY (`moduleId`),
  ADD UNIQUE KEY `acompanyName` (`acompanyName`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
