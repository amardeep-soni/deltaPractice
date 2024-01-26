const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Shriom'
})
connection.connect();

//  to create table
// let query = 
// `CREATE TABLE users (
//     id VARCHAR(50) PRIMARY KEY,
//     username VARCHAR(50) UNIQUE,
//     email VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) NOT NULL
// )`;

//  to insert single data
// let query = 'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)';
// let user = ["123", "amar", "amar@gmail.com", "amar"];

//  to insert multiple data
// let query = 'INSERT INTO users (id, username, email, password) VALUES ?';
// let users = [
//     ["124", "anup", "anup@gmail.com", "anup"],
//     ["125", "deep", "deep@gmail.com", "deep"],
// ];

// to insert data in bulk using faker (fake data generator)
let query = 'INSERT INTO users (id, username, email, password) VALUES ?';
let users = [];
for (let i = 0; i < 100; i++) {
    users.push(getRandomUser());
}

try {
    connection.query(query, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();