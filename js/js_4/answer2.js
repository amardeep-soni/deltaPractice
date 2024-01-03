let number = 281752;

let length = number.toString().length;
console.log(length);

// or

let copy = number;
let count = 0;

while (copy != 0) {
    count++;
    copy = Math.floor(copy / 10)
}
console.log(count);