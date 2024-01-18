var figlet = require("figlet");

// we use node js process argument to take user input and print that with figlet

var args = process.argv;

for (let i = 2; i < args.length; i++) {
  const element = args[i];
  figletPrint(element);
}

function figletPrint(params) {
  figlet(params, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}