let arr = [5, 7, 90, 10, 40, 5];

let largest = 0;
for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (largest < num) {
        largest = num;
    }
}
console.log(largest);