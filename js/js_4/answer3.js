let number = 287152;

let sum = 0;
let copy = number;
while (copy != 0) {
    sum += copy % 10;
    copy = Math.floor(copy / 10);
}
console.log(sum);