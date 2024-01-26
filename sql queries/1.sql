-- to create database select and run 
CREATE DATABASE college;

-- we have to use the database first to say where to create a table
USE college;

-- to create a table in the databse used
CREATE TABLE student (
 roll_no INT,
 name NVARCHAR(50),
 age INT
);

-- to insert values in student table
INSERT INTO student VALUES
(1001, "amardeep", "23"),
(1002, "anup", "20");

-- to view the table
SELECT * from student;