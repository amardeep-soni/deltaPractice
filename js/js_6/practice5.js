// Q. Create a function that returns the concatenation of all strings in an array.

function concatenation(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        str += element + ", "
    }
    if (str.endsWith(", ")) {
        str = str.slice(0, str.length - 2)
    }
    console.log(str);
}
let arr = ["Apple", "Banana", "Mango"];
concatenation(arr)