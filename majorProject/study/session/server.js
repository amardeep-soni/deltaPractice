const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

let sessionOptions = {
  secret: "mySupersecretString",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;

  if (name === "anonymous") {
    req.flash("error", "user not registered");
  } else {
    req.flash("success", "user registered successfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("welcome.ejs", { name: req.session.name });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
