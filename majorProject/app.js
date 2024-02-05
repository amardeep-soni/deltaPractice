var express = require("express");
var app = express();
var mongoose = require("mongoose");
const Listing = require("../models/listing.js");

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

app.get('/testListing', async (req, res) => {
  let sampleListing = new Listing({
    title: "Ganesh Villa",
    description: "By the beach",
    price: 1200,
    location: "Calgangute, Goa",
    country: "India"
  });

  await sampleListing.save();
  console.log("Sample was saved");
  res.send("Successful Testing");
});

app.listen(3000, () => {
  console.log(`Server is listening to port 3000`);
});
