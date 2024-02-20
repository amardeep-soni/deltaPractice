const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connecteion successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/realtionDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false, // when not given this it will mongodb treat it as a documet
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "doe",
    addresses: [
      {
        location: "2218 Baker Street",
        city: "London",
      },
    ],
  });

  user1.addresses.push({ location: "P32 Wall Street", city: "London" });
  let result = await user1.save();
  console.log(result);
};
addUsers();
