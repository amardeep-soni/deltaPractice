const express = require('express');
const path = require('path');
const mysql = require('mysql2');
var methodOverride = require('method-override');

var app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

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

app.get("/user", (req, res) => {
    let query = `SELECT * FROM users`;
    try {
        connection.query(query, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render("users.ejs", { data });
        });
    } catch (err) {
        console.log(err);
        res.send("Something error occured in DB");
    }
});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let query = `Select  * FROM users WHERE id = '${id}'`;
    try {
        connection.query(query, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Something error occured in DB");
    }
});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    let query = `Select * FROM users WHERE id = '${id}'`;
    try {
        connection.query(query, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (user.password == password) {
                query = `UPDATE users SET username = ? where id = ?`;
                let datas = [username, id];
                try {
                    connection.query(query, datas, (err, result) => {
                        if (err) throw err;
                        res.redirect('/user');
                    });
                } catch (err) {
                    res.send("Something error occured");
                }
            } else {
                res.send("Password is wrong");
            }
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