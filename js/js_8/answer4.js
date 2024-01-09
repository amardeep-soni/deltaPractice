const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((el) => el * 2)
]
let res1 = doubleAndReturnArgs([1, 2, 3], 4, 8);
let res2 = doubleAndReturnArgs([2], 10, 4);

console.log(res1);
console.log(res2);