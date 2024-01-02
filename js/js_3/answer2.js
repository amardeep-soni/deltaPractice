let arr = [7, 9, 0, -2];
let n = 3;

let newArr = arr.slice(-n);
console.log(newArr);
// or
let newArr2 = arr.slice(arr.length - n);
console.log(newArr2);