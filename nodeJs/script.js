const fruits = require("./inside");

console.log(fruits);


console.log("---------------------------");

// to run the below line wright node <fileName> args1 args2

console.log("Displaying arguments name with node js");

const args = process.argv;

for (let i = 2; i < args.length; i++) {
    const element = args[i];
    console.log("Hello and Welcome ", element);
    
}