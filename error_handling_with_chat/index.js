const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
var methodOverride = require("method-override");
var ExpressError = require("./ExpressError");

app.set("viws", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

// add form route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// show route
app.get("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, "Chat not found"); // by default next is not called when throwing error in async await
      return next(new ExpressError(404, "Chat not found"));
    }
    res.render("show.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// add route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, msg, to } = req.body;
    const newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// edit form route
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      return next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// edit route
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { msg: newMsg } = req.body;
    // msg came from body and we store that in newMsg
    let { id } = req.params;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true } // for running validation check
      // for giving the updated document
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// destroy route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// error handler middleware
app.use((err, req, res, next) => {
  let { status = 500, message } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
