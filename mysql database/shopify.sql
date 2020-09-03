-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-09-03 11:45:52
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `shopify`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone_number` int(15) NOT NULL,
  `link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`username`, `password`, `email`, `phone_number`, `link`) VALUES
('user1', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'use1@email.com', 12345678, 'user1');

-- --------------------------------------------------------

--
-- 資料表結構 `clicked_record`
--

CREATE TABLE `clicked_record` (
  `username` varchar(20) NOT NULL,
  `link` varchar(100) NOT NULL,
  `clicked_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `clicked_record`
--

INSERT INTO `clicked_record` (`username`, `link`, `clicked_time`) VALUES
('user1', 'user1', '2020-09-03 13:14:24'),
('user1', 'user1', '2020-09-03 13:27:26'),
('user1', 'user1', '2020-09-03 13:27:46'),
('user1', 'user1', '2020-09-03 13:28:58'),
('user1', 'user1', '2020-09-03 13:37:26'),
('user1', 'user1', '2020-09-03 13:38:29'),
('user1', 'user1', '2020-09-03 14:19:52'),
('user1', 'user1', '2020-09-03 14:42:15'),
('user1', 'user1', '2020-09-03 16:34:30');

-- --------------------------------------------------------

--
-- 資料表結構 `transaction_record`
--

CREATE TABLE `transaction_record` (
  `order_number` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `link` varchar(100) NOT NULL,
  `transaction_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `transaction_record`
--

INSERT INTO `transaction_record` (`order_number`, `username`, `link`, `transaction_time`) VALUES
(1006, 'user1', 'user1', '2020-09-03 14:20:54'),
(1008, 'user1', 'user1', '2020-09-03 14:42:51');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`);

--
-- 資料表索引 `transaction_record`
--
ALTER TABLE `transaction_record`
  ADD PRIMARY KEY (`order_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
