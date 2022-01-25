-- User/Admin erstellen
create user '1admin'@'localhost' identified WITH mysql_native_password by 'admin';

-- User löschen
drop user '1admin'@'localhost';

-- User/Admin erstellen
create user '1admin'@'localhost' identified WITH mysql_native_password by 'admin';

-- Alle User anzeigen
select * from mysql.user;

-- Datenbanken anzeigen
show databases;

-- Datenbank erstellen
create database if not exists bzzDB;

-- Datenbanken anzeigen
show databases;

-- Datenbank löschen
drop database bzzDB;

-- Datenbanken anzeigen
show databases;

-- Datenbank erstellen
create database if not exists bzzDB;

-- Datenbanken anzeigen
show databases;

-- Rechte hinzufügen
GRANT all privileges ON bzzDB.* TO '1admin'@'localhost';

-- Rechte entnehmen
REVOKE all privileges on bzzDB.* FROM '1admin'@'localhost';

-- Rechte hinzufügen
GRANT all privileges ON bzzDB.* TO '1admin'@'localhost';

-- Rechte anzeigen
show grants for '1admin'@'localhost';

-- Datenbank auswählen
use bzzDB;

-- Tabellen löschen
DROP TABLE if exists `students`;
DROP TABLE if exists `teachers`;

-- Tabellen erstellen

-- Tabelle 'teachers' kreieren
CREATE TABLE if not exists `teachers` (
	`teacherID` int(20) NOT NULL,
	`teacherFirstName` varchar(50) NOT NULL,
	`teacherLastName` varchar(50) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`email` varchar(100) NOT NULL,
	PRIMARY KEY (`teacherID`)
)	ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabelle 'students' kreieren
CREATE TABLE if not exists `students` (
	`studentID` int(10) NOT NULL,
	`studentFirstName` varchar(50) NOT NULL,
	`studentLastName` varchar(50) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`email` varchar(100) NOT NULL,
	`grades` int(10) NOT NULL,
	`year` int(4) NOT NULL,
	`teacher` int(20) NOT NULL,
	PRIMARY KEY (`studentID`),
	CONSTRAINT `teacher_fk1` FOREIGN KEY (`teacher`) REFERENCES `teachers` (`teacherID`)
)	ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabellen anzeigen
show tables;

-- Daten von Tabellen anzeigen
select * from students;
select * from teachers;

-- Daten für die Tabellen
insert into `teachers`(`teacherID`,`teacherFirstName`,`teacherLastName`,`email`,`phone`) values
                                                                                                (101,'Daniel','Garavaldi','+41791234567','daniel.garavaldi@bzz.ch'),
                                                                                                (102,'Gertrud','Landolt','+41784523832','gertrud.landolt@bzz.ch'),
                                                                                                (103,'Markus','Meier','+41441234567','markus.meier@bzz.ch'),
                                                                                                (104,'Manfred','Markusson','+41789876543','manfred.markusson@bzz.ch');

insert into `students`(`studentID`,`studentFirstName`,`studentLastName`,`phone`,`email`,`grades`,`year`,`teacher`) values
                                                                                                                          (01,'Koen','van Eck','+41795387869','vaneckk@bzz.ch','5','2019','101'),
                                                                                                                          (02,'Alissa','Lopez','+41799455484','rosaa@bzz.ch','6','2019','102'),
                                                                                                                          (03,'Daniele','Reich','+41763063734','reichd@bzz.ch','4','2017','104'),
                                                                                                                          (04,'Fabio','Bauleo','+41795549269','bauleof@bzz.ch','3','2020','101'),
                                                                                                                          (05,'Andrin','Bachmann','+41767250865','bachmanna2@bzz.ch','4.5','2021','103'),
                                                                                                                          (06,'Noel','Koller','+41792062401','kollern@bzz.ch','5.5','2018','104');

-- Daten von Tabellen anzeigen
select * from students;
select * from teachers;