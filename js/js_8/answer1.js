let arr = [5, 3, 2, 5, 1];
let square = arr.map((el) => el * el)
// console.log(square);
let sum = square.reduce((acc, el) => acc + el, 0) // 0 is initial value
// console.log(sum);
let average = sum / arr.length;
console.log(average);