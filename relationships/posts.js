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
  email: String,
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  let user1 = await new User({
    username: "rahul",
    email: "rahul@gmail.com",
  });
  let result = await user1.save();
  console.log(result);
};

// addUser();

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

const addPost = async () => {
  let user = await User.findOne({ username: "rahul" });

  let result = await Post.insertMany([
    {
      content: "Hello",
      likes: 25,
      user: user,
    },
    {
      content: "Bye bye",
      likes: 52,
      user: user,
    },
  ]);
  console.log(result);
};
// addPost();

const allPosts = async () => {
  let posts = await Post.find();
  console.log(posts);
};
// allPosts();

const allPostsWithUser = async () => {
  let posts = await Post.find().populate("user");
  console.log(posts);
};
// allPostsWithUser();
