var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);

var userInput = prompt("User, guess a number between 1 and 10");


if (userInput == randomNumber){
    console.log("Well done! The correct answer was " + randomNumber + "!")
}
else{
    console.log("Wrong! The correct answer was " + randomNumber + "!")
}
