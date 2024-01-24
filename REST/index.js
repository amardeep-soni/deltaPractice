const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

let posts = []
// let counter = 1;

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

// opening form page
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// saving form data with unique id
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4(); // generates unique id
    posts.push({ id, username, content });
    // counter++;
    res.redirect("/posts");
    // res.send("added successfully")
})

// view individual post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id == id);
    res.render("show.ejs", { post });
});

// get edit form
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id == id);
    res.render("edit.ejs", { post });
})

// edit the form
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => p.id == id);
    post.content = newContent;
    res.redirect("/posts");
})

// delete the post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id != id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})