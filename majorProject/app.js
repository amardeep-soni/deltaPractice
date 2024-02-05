var express = require("express");
var app = express();
var mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1/wonderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.send("I am root")
});

app.listen(3000, () => {
  console.log(`Server is listening to port 3000`);
});
