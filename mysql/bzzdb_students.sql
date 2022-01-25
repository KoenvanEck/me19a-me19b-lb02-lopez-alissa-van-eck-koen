create table students
(
    studentID        int          not null
        primary key,
    studentFirstName varchar(50)  not null,
    studentLastName  varchar(50)  not null,
    phone            varchar(50)  not null,
    email            varchar(100) not null,
    grades           int          not null,
    year             int          not null,
    teacher          int          not null,
    constraint teacher_fk1
        foreign key (teacher) references teachers (teacherID)
)
    charset = utf8;

INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (1, 'Koen', 'van Eck', '+41795387869', 'vaneckk@bzz.ch', 5, 2019, 101);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (2, 'Alissa', 'Lopez', '+41799455484', 'rosaa@bzz.ch', 6, 2019, 102);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (3, 'Daniele', 'Reich', '+41763063734', 'reichd@bzz.ch', 4, 2017, 104);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (4, 'Fabio', 'Bauleo', '+41795549269', 'bauleof@bzz.ch', 3, 2020, 101);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (5, 'Andrin', 'Bachmann', '+41767250865', 'bachmanna2@bzz.ch', 5, 2021, 103);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (6, 'Noel', 'Koller', '+41792062401', 'kollern@bzz.ch', 6, 2018, 104);
INSERT INTO bzzdb.students (studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher) VALUES (7, 'Leon', 'Schlangen', '+41791012345', 'schlangenl@bzz.ch', 6, 2018, 101);
