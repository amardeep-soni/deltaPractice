let favourite = "kgf";

let guess = prompt("Write movie name")
let guessCounter = 1;

console.log("Type quit to quit the game.");
while (favourite != guess) {
    guessCounter++;
    if (guess == 'quit') {
        console.log("You quit the game");
        break;
    }
    guess = prompt("Guess worng. Please try again");
}
if (guess == favourite) {
    console.log(`You guessed it in ${guessCounter} Gusses`);
}