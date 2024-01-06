let country = ["Australia", "Germany", "United States of America"]

// by storing string 

function longestCountry(arr) {
    let longestCountryName = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (longestCountryName.length < element.length) {
            longestCountryName = element;
        }
    }
    return longestCountryName;
}
console.log(longestCountry(country));

// by storing array index

function longestCountry2(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (arr[index].length < element.length) {
            index = i;
        }
    }
    return arr[index];
}
console.log(longestCountry2(country));