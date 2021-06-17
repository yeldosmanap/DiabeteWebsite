-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 10 2021 г., 02:27
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `den_prezent`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `token`) VALUES
(1, 'example@mail.ru', '123', '[Q3*J?cj;56=f4rF}?d<C/a.8U=VT7btbHe[zXHA8*8%R^,t,d?jR*4f5%A{K^v^V\\~9^U4MZh(-`7:$M{Mu`phdXu\'`}[+n)wz/y$?E&*?pQTbh.R3kFR>t?qVS<QvYRpq5BF`,V75[TjRm_h\\sA7eRZ#r86t>q{e*j`7xXDsJ_%BU{H!\\tbz_S(d\'[Qq}>;M&W]p=p3]u_*sPHty_FAaWNguF%k6E$3vMng/S=3^K$8q\\#pc],<WPs4t<{4v52'),
(3, 'ex2@mail.ru', '123', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
