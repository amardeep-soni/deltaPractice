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