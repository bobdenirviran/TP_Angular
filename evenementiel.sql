-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 26 Mars 2018 à 09:03
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `evenementiel`
--

-- --------------------------------------------------------

--
-- Structure de la table `binds`
--

CREATE TABLE `binds` (
  `id_user_bind` int(11) NOT NULL,
  `id_event_bind` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `binds`
--

INSERT INTO `binds` (`id_user_bind`, `id_event_bind`) VALUES
(1, 6),
(1, 7),
(2, 6),
(2, 9);

-- --------------------------------------------------------

--
-- Structure de la table `categs`
--

CREATE TABLE `categs` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categs`
--

INSERT INTO `categs` (`id`, `label`) VALUES
(1, 'Sortie'),
(2, 'Festival'),
(3, 'Exposition');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `datedeb` datetime NOT NULL,
  `datefin` datetime NOT NULL,
  `place` varchar(255) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `id_categ` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `events`
--

INSERT INTO `events` (`id`, `name`, `datedeb`, `datefin`, `place`, `latitude`, `longitude`, `id_categ`) VALUES
(6, 'Ete 66', '2018-03-25 00:00:00', '2018-03-31 00:00:00', 'DÃ©partement 66', 42, 2, 2),
(7, 'visa pour l\'image', '2018-03-13 00:00:00', '2018-03-21 00:00:00', 'perpignan', 42.5, 2.5, 2),
(8, 'test 1', '2018-03-23 11:29:27', '2018-03-31 00:00:00', 'perpignan', 42, 2.5, 1),
(9, 'test 2', '2018-12-31 18:34:32', '2019-02-05 00:00:00', 'canet', 42, 2.5, 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'Pierre', 'starwars'),
(2, 'root', 'root');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `binds`
--
ALTER TABLE `binds`
  ADD PRIMARY KEY (`id_user_bind`,`id_event_bind`),
  ADD KEY `id_user_bind` (`id_user_bind`),
  ADD KEY `id_event_bind` (`id_event_bind`);

--
-- Index pour la table `categs`
--
ALTER TABLE `categs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categ` (`id_categ`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categs`
--
ALTER TABLE `categs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `binds`
--
ALTER TABLE `binds`
  ADD CONSTRAINT `binds_ibfk_1` FOREIGN KEY (`id_user_bind`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `binds_ibfk_2` FOREIGN KEY (`id_event_bind`) REFERENCES `events` (`id`);

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`id_categ`) REFERENCES `categs` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
