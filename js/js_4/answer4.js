let num = 7;

let fact = 1;
for (let i = num; i >= 0; i--) {
    if (i == 0) {
        fact *= 1;
    }else{
        fact *= i;
    }
}
console.log(fact);