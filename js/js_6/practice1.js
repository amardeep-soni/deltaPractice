// Q Create a function to roll a dice & always display the value of the dice (1 to 6)

function rollDice() {
    let diceResult = Math.floor(Math.random() * 6) + 1

    console.log(diceResult);
}
rollDice();