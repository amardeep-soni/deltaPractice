function getMin(arr) {
    let min = arr.reduce((acc, el) => {
        if (acc < el) {
            return acc;
        } else {
            return el;
        }
    });
    console.log(min);
}
let nums = [10, 20, 30, 1];
getMin(nums);