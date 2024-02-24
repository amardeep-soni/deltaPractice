var express = require("express");
var app = express();
var mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

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
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("I am root");
});

// middleware for schema validation handling
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//  index route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
  })
);

// new form route
app.get(
  "/listings/new",
  wrapAsync(async (req, res) => {
    res.render("listings/new.ejs");
  })
);

// show route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  })
);

// create route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // let { title, description, image, price, location, country } = req.body; -- when we use Listing[name] then we don't need to write this much

    // req.body.listing --- it will give object and we pass this object in creating instance of Listing
    // if (!req.body.listing) {
    //   next(new ExpressError(400, "Bad Request! Send form data"));
    // }

    // throwing schema validation error with joy
    // let result = listingSchema.validate(req.body);
    // if (result.error) {
    //   throw new ExpressError(400, result.error);
    // }
    let newListing = new Listing(req.body.listing);

    // sending individual schema error is is not nicely
    // if (!newListing.description) {
    //   next(new ExpressError(400, "Description not send"));
    // }
    // if (!newListing.title) {
    //   next(new ExpressError(400, "Description not send"));
    // }
    await newListing.save();
    res.redirect("/listings");
  })
);

// edit form route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// update route
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    // if (!req.body.listing) {
    //   next(new ExpressError(400, "Bad Request! Send form data"));
    // }
    // let result = listingSchema.validate(req.body);
    // if (result.error) {
    //   throw new ExpressError(400, result.error);
    // }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

// delete route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

// Reviews
// Post Route
app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
  })
);

// when no any route matches
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something error occured" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(3000, () => {
  console.log(`Server is listening to port 3000`);
});
