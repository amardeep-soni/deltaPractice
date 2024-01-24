const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = []
let counter = 1;

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
    posts.push({ id: counter.toString(), username, content });
    counter++;
    res.redirect("/posts");
    // res.send("added successfully")
})

// view individual post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id == id);
    res.render("show.ejs", { post });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})