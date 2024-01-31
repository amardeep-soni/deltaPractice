const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection to mongodb successs full");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// adding schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// define model and bind collection with schema (creating a collction in mongodb)
const User = mongoose.model("User", userSchema);

// adding data to mongodb

// // create instence first of user
// const user1 = new User({
//     name: "Bob",
//     email: "bob@gmail.com",
//     age: 29
// });

// // to save the data in collection
// user1.save().then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// to insert many data at once
// User.insertMany([
//     {name: "doe", email: "doe@gmail.com", age: 15},
//     {name: "joy", email: "joy@gmail.com", age: 52},
// ]).then((res) => {
//     console.log(res);
// })

// .find() -- it returns an array of matching all filter

// to fetch all data without filter
// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// to fetch all data with filter
// User.find({age: {$gt : 20}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// .findOne() -- it returns document of first matched filter

// User.findOne({ _id: "65b8bdd3fa20a80dbc290542" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// or if we are filtering by id we can do with findOne() but we can also do by method .findById()

// User.findById("65b8bdd3fa20a80dbc290542")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

