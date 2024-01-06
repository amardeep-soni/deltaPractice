// Q. Create a function that returns the sum of numbers from 1 to n.

function numberSum(num) {
    let sum = 0;
    for (let i = 1; i <= num ; i++) {
        sum += i;
    }
    console.log(sum);
}
numberSum(5)