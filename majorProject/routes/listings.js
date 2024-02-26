var express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

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

//  index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
  })
);

// new form route
router.get(
  "/new",
  wrapAsync(async (req, res) => {
    res.render("listings/new.ejs");
  })
);

// show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  })
);

// create route
router.post(
  "/",
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
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// update route
router.put(
  "/:id",
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
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

module.exports = router;
