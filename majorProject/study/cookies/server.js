const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

// save cookies
app.get("/saveCookies", (req, res) => {
  res.cookie("greet", "namaste");
  res.cookie("madeIn", "India");
  res.cookie("name", "Amardeep");
  res.send("sent you some cookies!");
});

app.get("/getCookies", (req, res) => {
  console.log(req.cookies);
  let { name = "Anonymous" } = req.cookies;
  res.send("Hlo, " + name);
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
