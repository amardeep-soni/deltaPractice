const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("viws", path.join(__dirname, "views"));
app.set("view engine", "ejs");


main()
  .then(() => {
    console.log("connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
app.use(express.static(path.join(__dirname, "public")));
// home route
app.get("/", (req, res) => {
  res.send("I am working");
});

// index route
app.get("/chats", async (req, res) => {
  let allChats = await Chat.find();
  res.render("index.ejs", { allChats });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
