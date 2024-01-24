const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = []

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

// opening form page
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// saving form data
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
    // res.send("added successfully")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})