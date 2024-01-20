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