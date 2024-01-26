CREATE TABLE students (
	roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO students
(roll_no, name, city, marks) VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM students;


SELECT * FROM students WHERE marks > 75;

SELECT DISTINCT city FROM students;
SELECT city FROM student GROUP BY city;


SELECT city, MAX(marks) FROM students GROUP BY city;

 SELECT AVG(marks) FROM students;
 
ALTER TABLE students ADD COLUMN grade CHAR;
UPDATE students SET grade = "O" WHERE marks >= 80;
UPDATE students SET grade = "A" WHERE marks >= 70 AND marks < 80;
UPDATE students SET grade = "B" WHERE marks >= 60 AND marks < 70;
