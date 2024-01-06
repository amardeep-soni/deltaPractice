// Q. Create a Function that prints the multiplication table of a number

function multiplication(num) {
    for (let i = 1; i <= 10; i++) {
        let result = `${num} * ${i} = ${num * i}`;
        console.log(result);
    }
}
multiplication(17)