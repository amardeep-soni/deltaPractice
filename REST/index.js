const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "amardeep",
        content: "Learning Backend"
    },
    {
        username: "amar",
        content: "Learning Frontend"
    },
    {
        username: "amar",
        content: "Learning UI/UX"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})