const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection to mongodb successs full");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}