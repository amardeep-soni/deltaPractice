const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(() => {
    console.log("connection Successfull");
  }).catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "alice",
    to: "bob",
    msg: "Hello!",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "jane",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Doe",
    to: "Doe",
    msg: "what are you doing?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats).then((res) => {
  console.log(res);
});
