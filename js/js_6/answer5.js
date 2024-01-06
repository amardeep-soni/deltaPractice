function generateRandom(start, end) {
    let diff = end - start;
    let random = Math.floor(Math.random() * diff) + start;
    return random;
}
console.log(generateRandom(5, 10));