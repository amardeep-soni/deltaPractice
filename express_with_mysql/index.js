const express = require('express');
const path = require('path');
const mysql = require('mysql2');

var app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Shriom'
})
connection.connect();

app.get("/", (req, res) => {
    let query = `SELECT COUNT(*) FROM users`;
    try {
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result); 
            // we get array and inside object then our count
            let count = result[0]['COUNT(*)'];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Something error occured in DB");
    }
});


// connection.end();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});