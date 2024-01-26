const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Shriom'
})
connection.connect();

try {
    connection.query("SHOW TABLES", (err, result) => {
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