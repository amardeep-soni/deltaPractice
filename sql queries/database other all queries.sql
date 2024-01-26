-- CREATE DATABASE instagram;

USE instagram;

-- create a table users
CREATE TABLE users (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 13), -- CONSTRAINT CHECK(age >= 13)
    PRIMARY KEY  (id)
);


SELECT * from users;

-- create a table posts with foregin key user id
CREATE TABLE posts (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- insert values in table instagram
INSERT INTO users 
(id, age, name, email, followers, following)
VALUES
(1, 20, "anup", "anup@gmail.com", 2000, 1500),
(2, 30, "mohan", "mohan@gmail.com", 20, 100),
(3, 20, "sohan", "sohan@gmail.com", 200, 10),
(4, 20, "manoj", "manoj@gmail.com", 220, 150);

-- seeing constrants in action
INSERT INTO users 
(id, age, name, email) VALUES
(5, 15, "amar", "amar@gmail.com");



-- *****  SELECT Queries *****

-- get users data of id, name, email and age column only
SELECT id, name, email, age FROM users;

-- get users all data column
SELECT * FROM users;

-- select age column of users (it have many repeated tuple/rows)
SELECT age FROM users;

-- get the age column data with unique value only no repeated
SELECT DISTINCT age FROM users;

-- select query by where calues
SELECT * FROM users WHERE followers >= 200;

SELECT name, age FROM users WHERE age >= 25;


-- select all data from users
SELECT * from users;

-- and operator
SELECT * from users where followers >= 200 AND age >= 20;

-- or operator
SELECT * from users where followers >= 200 OR age >= 20;

-- between operator
SELECT name, followers FROM users WHERE followers BETWEEN 200 AND 250;

-- in operator 
SELECT name, email FROM users WHERE email IN ("amar@gmail.com", "manoj@gmail.com", "rohan@gmail.com");

-- not operator
SELECT name, email FROM users WHERE email NOT IN ("amar@gmail.com", "manoj@gmail.com", "rohan@gmail.com");

-- limit the rows returned
SELECT * FROM USERS LIMIT 2;

-- sort data in ascending order
SELECT id, name, followers FROM USERS ORDER BY followers ASC;

-- sort data in descending order
SELECT id, name, followers FROM users ORDER BY followers DESC;

-- -- Aggregate functions
-- count of all the rows of student equal to 20 in our table
SELECT count(age) FROM users where age = 20;

-- sum of all the followers in the table
SELECT SUM(followers) FROM users;

-- average followers of users in table
SELECT AVG(age) FROM users;

-- maximum followers of the user
SELECT MAX(followers) FROM users;

-- minimum AGE of the user
SELECT MIN(age) FROM users;

-- select age by grouping 
SELECT age
FROM users
GROUP BY age;

-- select age by grouping with that age count
SELECT age, count(age)
FROM users
GROUP BY age;

-- select age by grouping with the max followers
SELECT age, max(followers)
FROM users
GROUP BY age;

-- selecting name, age by grouping with the max followers gives error as name is not in group by
SELECT name, age, max(followers)
FROM users
GROUP BY age;


-- select age by grouping with the max followers with having greater than 100 followers
SELECT age, max(followers)
FROM users
GROUP BY age
HAVING max(followers) >= 100;


--  ***** UPDATE Queries ********

-- to enable update in first time
SET SQL_SAFE_UPDATES = 0;

-- to update the following of all the users of 20
UPDATE users 
SET following = 5000
WHERE age = 20;

--  ***** Delete Queries ********

-- Delete the data with id 5
DELETE FROM users WHERE id = 5;



--  ****  Alter Queries  ********

-- added city column
ALTER TABLE users
ADD COLUMN city VARCHAR(100);

-- remove the city column from table
ALTER TABLE users
DROP COLUMN city;


-- change table name from users to instaUsers
ALTER TABLE users
RENAME TO instaUsers;

-- now thid will give error as users table is not present
SELECT * FROM users;

SELECT * FROM instaUsers;


-- changing column name followers to subscribers
ALTER TABLE users
CHANGE COLUMN followers subscribers INT DEFAULT 0;

-- changing constraints 
ALTER TABLE users
MODIFY subscribers INT DEFAULT 5;

-- add data without subscribers to see if default value is set or not
INSERT INTO users 
(id, age, name, email) VALUES
(7, 18, "deep", "deep@gmail.com");


-- ******** truncate  ************

-- first delete the relation table
DROP TABLE posts;

TRUNCATE TABLE users;

SELECT * FROM users;