create table teachers
(
    teacherID        int          not null
        primary key,
    teacherFirstName varchar(50)  not null,
    teacherLastName  varchar(50)  not null,
    phone            varchar(50)  not null,
    email            varchar(100) not null
)
    charset = utf8;

INSERT INTO bzzdb.teachers (teacherID, teacherFirstName, teacherLastName, phone, email) VALUES (101, 'Daniel', 'Garavaldi', 'daniel.garavaldi@bzz.ch', '+41791234567');
INSERT INTO bzzdb.teachers (teacherID, teacherFirstName, teacherLastName, phone, email) VALUES (102, 'Gertrud', 'Landolt', 'gertrud.landolt@bzz.ch', '+41784523832');
INSERT INTO bzzdb.teachers (teacherID, teacherFirstName, teacherLastName, phone, email) VALUES (103, 'Markus', 'Meier', 'markus.meier@bzz.ch', '+41441234567');
INSERT INTO bzzdb.teachers (teacherID, teacherFirstName, teacherLastName, phone, email) VALUES (104, 'Manfred', 'Markusson', 'manfred.markusson@bzz.ch', '+41789876543');
