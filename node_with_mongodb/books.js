const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection to mongodb successs full");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// adding schema with validation
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 5,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [5, 'Price should not be less than 5'],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: [String],
  language: {
    type: String,
    enum: ["English", "Hindi"],
  },
});

const Book = mongoose.model("Book", bookSchema);

// showing validation error nicely
let book1 = new Book({
  title: "this is title",
  author: "Amar",
  price: -500,
  discount: 5,
  category: ["physic", "engineering"],
  language: "Hindi",
});

book1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });


// we can only use language provided not other
// let book1 = new Book({
//   title: "this is title",
//   author: "Amar",
//   price: 20,
//   discount: 5,
//   category: ["physic", "engineering"],
//     // language: "Nepali" // it throws error because nepali is not in enum
//     language: "Hindi" // it don't throw error
// });

// we can save the array in the value
// let book1 = new Book({
//   title: "this is title",
//   author: "Amar",
//   price: 20,
//   discount: 5,
//   category: ['physic', 'engineering']
// });

// discount should be automatically put 0 when not passed
// let book1 = new Book({
//   title: "this is title",
//   author: "Amar",
//   price: 20,
// });

// title should be greater than 5 letter
// let book1 = new Book({
//   title: "this",
//   author: "Amar",
//   price: 20,
// });

// title should be less than 10 letter
// let book1 = new Book({
//   title: "this is title for the title",
//   author: "Amar",
//   price: 20,
// });

// it will nicely saved
// let book1 = new Book({
//   title: "Angular",
//   author: "Amar",
//   price: 20,
// });

// it will throw error as title is required field
// let book1 = new Book({
//   author: "Amar",
//   price: 20,
// });

// it will not throw error as author is not required
// let book1 = new Book({
//   title: "Angular",
//   price: 20,
// });

// it will throw error as type is number but we are sending string
// let book1 = new Book({
//   title: "Angular",
//   price: "asfd",
// });

// it will not throw error as type is number but we are sending string and in type cast it will convert to number
// let book1 = new Book({
//   title: "Angular",
//   price: "500",
// });

// book1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// working validators with update (as when we not set to true for runValidators our validation will not work)
// Book.findByIdAndUpdate(
//   "65bb6af7da08d4b399a8e424",
//   { price: -500 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
