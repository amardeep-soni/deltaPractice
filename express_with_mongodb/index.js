const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("viws", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// home route
app.get("/", (req, res) => {
  res.send("I am working");
});

// index route
app.get("/chats", async (req, res) => {
  let allChats = await Chat.find();
  res.render("index.ejs", { allChats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  const newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date()
  });

  newChat
    .save()
    .then((res2) => {
      res.redirect("/chats");
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
