const express = require("express");
const app = express();
const session = require("express-session");

let sessionOptions = {
  secret: "mySupersecretString",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You sent request ${req.session.count} times.`);
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  res.send("You registered");
});
app.get("/hello", (req, res) => {
  res.send(`hello, ${req.session.name}`);
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
