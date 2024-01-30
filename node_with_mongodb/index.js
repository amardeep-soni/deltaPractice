const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection to mongodb successs full");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
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
User.insertMany([
    {name: "doe", email: "doe@gmail.com", age: 15},
    {name: "joy", email: "joy@gmail.com", age: 52},
]).then((res) => {
    console.log(res);
})