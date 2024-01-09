// Q. Create a new array in which it includes the words containing uppercase

let names = ["Amardeep", "Anup", "shyam", "Aashutosh", "amar"];

let uppercaseNames = names.filter((name) => name[0] == name[0].toUpperCase());
console.log(uppercaseNames);