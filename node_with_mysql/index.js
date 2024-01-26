const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

let query = 'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)';
let user = ["123", "amar", "amar@gmail.com", "amar"];

try {
    connection.query(query, user, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();

const getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

// console.log(getRandomUser());