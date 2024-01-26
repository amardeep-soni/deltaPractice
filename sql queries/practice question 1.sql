CREATE DATABASE college;

USE college;

CREATE TABLE Teacher (
	id INT PRIMARY KEY,
    name VARCHAR(100),
    subject VARCHAR(50),
    salary INT
);

INSERT INTO Teacher
(id, name, subject, salary) VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physic", 75000);

SELECT * FROM Teacher WHERE salary >= 55000;

ALTER TABLE Teacher
CHANGE COLUMN salary ctc INT;

SET SQL_SAFE_UPDATES = 0;

UPDATE Teacher
SET ctc = ctc + ( ctc * 0.25);

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(100) DEFAULT "Gurgaon";

ALTER TABLE Teacher
DROP COLUMN ctc;

SELECT * FROM Teacher;
