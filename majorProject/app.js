var express = require("express");
var app = express();
var mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1/wonderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("I am root");
});

//  index route
app.get("/listings", async (req, res) => {
  let listings = await Listing.find();
  res.render("listings/index.ejs", { listings });
});

// show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

app.listen(3000, () => {
  console.log(`Server is listening to port 3000`);
});
