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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("I am root");
});

//  index route
app.get("/listings", async (req, res) => {
  let listings = await Listing.find();
  res.render("listings/index.ejs", { listings });
});

// new form route
app.get("/listings/new", async (req, res) => {
  res.render("listings/new.ejs");
});

// show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// create route
app.post("/listings", async (req, res) => {
  // let { title, description, image, price, location, country } = req.body; -- when we use Listing[name] then we don't need to write this much

  // req.body.listing --- it will give object and we pass this object in creating instance of Listing
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings")
});

app.listen(3000, () => {
  console.log(`Server is listening to port 3000`);
});
