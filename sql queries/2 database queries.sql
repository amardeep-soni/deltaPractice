-- it will throw error because collage database is already created
CREATE DATABASE college;

-- it will create database if not exist and if exist it will throw warning
CREATE DATABASE IF NOT EXISTS college;
CREATE DATABASE IF NOT EXISTS xyz;

-- it will throw error as database is not exist to delete
DROP DATABASE cpp;

-- it will delete database if exist and if not exist it will throw warning
DROP DATABASE IF EXISTS cpp;
DROP DATABASE IF EXISTS xyz;

-- show all databases
SHOW DATABASES;

-- show all tables (to show tables of database we have first to use that database)
USE COLLEGE;
SHOW TABLES;