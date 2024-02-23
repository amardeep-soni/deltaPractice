const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    reqired: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
    set: (v) =>
      v === ""
        ? "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
