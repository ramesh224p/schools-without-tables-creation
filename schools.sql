-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.21 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.6098
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for school
DROP DATABASE IF EXISTS `schools`;
CREATE DATABASE IF NOT EXISTS `schools` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `schools`;

-- Dumping structure for table school.classroom
DROP TABLE IF EXISTS `classroom`;
CREATE TABLE IF NOT EXISTS `classroom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class_room` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `student` int DEFAULT NULL,
  `subject` int DEFAULT NULL,
  `faculty` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_classroom_students` (`student`) USING BTREE,
  KEY `FK_classroom_subjects` (`subject`),
  KEY `FK_classroom_facultys` (`faculty`),
  CONSTRAINT `FK_classroom_facultys` FOREIGN KEY (`faculty`) REFERENCES `facultys` (`id`),
  CONSTRAINT `FK_classroom_students` FOREIGN KEY (`student`) REFERENCES `students` (`id`),
  CONSTRAINT `FK_classroom_subjects` FOREIGN KEY (`subject`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table school.classroom: ~0 rows (approximately)
DELETE FROM `classroom`;
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
INSERT INTO `classroom` (`id`, `class_room`, `student`, `subject`, `faculty`, `created_date`, `modified_date`) VALUES
	(1, 'class 1', 1, 1, 1, '2021-03-17 20:07:01', '2021-03-17 20:07:50'),
	(2, 'class 2', 2, 2, 2, '2021-03-17 20:09:08', '2021-03-17 20:10:21');
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;

-- Dumping structure for table school.facultys
DROP TABLE IF EXISTS `facultys`;
CREATE TABLE IF NOT EXISTS `facultys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `faculty_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table school.facultys: ~0 rows (approximately)
DELETE FROM `facultys`;
/*!40000 ALTER TABLE `facultys` DISABLE KEYS */;
INSERT INTO `facultys` (`id`, `faculty_name`, `created_date`, `modified_date`) VALUES
	(1, 'ramesh', '2021-03-17 20:07:12', '2021-03-17 20:07:12'),
	(2, 'dathu', '2021-03-17 20:09:16', '2021-03-17 20:56:48');
/*!40000 ALTER TABLE `facultys` ENABLE KEYS */;

-- Dumping structure for table school.students
DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table school.students: ~0 rows (approximately)
DELETE FROM `students`;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `name`, `created_date`, `modified_date`) VALUES
	(1, 'laasya', '2021-03-17 20:07:31', '2021-03-17 20:07:31'),
	(2, 'swetha', '2021-03-17 20:09:33', '2021-03-17 20:09:33');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping structure for table school.subjects
DROP TABLE IF EXISTS `subjects`;
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Modified_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subject_name` (`subject_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table school.subjects: ~0 rows (approximately)
DELETE FROM `subjects`;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` (`id`, `subject_name`, `created_date`, `Modified_date`) VALUES
	(1, 'telugu', '2021-03-17 19:05:15', '2021-03-17 19:05:15'),
	(2, 'computer', '2021-03-17 20:09:41', '2021-03-17 20:09:41'),
	(3, 'social', '2021-03-17 20:58:34', '2021-03-17 20:58:34');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
