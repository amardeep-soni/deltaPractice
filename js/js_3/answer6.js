let arr = [5, 6, 8, 9];

let element = 8;

if (arr.includes(element)) {
    console.log(element + " Exists in array");
} else {
    console.log(element + " Doesn't exists in array");
}

// or

if (arr.indexOf(element) != -1) {
    console.log(element + " Exists in array");
} else {
    console.log(element + " Doesn't exists in array");
}