let avg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum/arr.length;
    return avg;
}
console.log(avg([20, 30, 40, 50]));