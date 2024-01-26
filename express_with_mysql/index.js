const express = require('express');
const mysql = require('mysql2');

var app = express();
const port = 3000

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Shriom'
})
connection.connect();

let query = "SHOW TABLES";
try {
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});