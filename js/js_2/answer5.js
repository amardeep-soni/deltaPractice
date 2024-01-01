let num1 = 89;
let num2 = 84;
let num3 = 115;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is greater`);
    } else {
        console.log(`${num3} is greater`);
    }
} else {
    if (num2 > num3) {
        console.log(num2, "is greater");
    } else {
        console.log(num3, "is greater");
    }
}