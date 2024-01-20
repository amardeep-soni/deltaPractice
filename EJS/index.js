const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

// if we are starting server from outside of EJS
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about", (req, res) => {
    res.send("This is about page");
})

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

//  sending value to ejs file

app.get("/rollDice", (req, res) => {
    var diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal });

    // we can also use this when have to send key value and if the key value is same then direct value
    // res.render("rollDice.ejs", { diceVal: diceVal });
})

//  sending value to ejs file with params
app.get("/profile/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.render("profile.ejs", { username, id })
})
app.get("/search", (req, res) => {
    let { q } = req.query;
    res.render("search.ejs", { q })
})

app.get("/statement/:fruit", (req, res) => {
    let { fruit } = req.params;
    res.render("statement.ejs", { fruit })
})

app.get("/loops", (req, res) => {
    let data = ['apple', 'mango', 'pineaplle']
    res.render("loops.ejs", { data })
})