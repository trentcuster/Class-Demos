
var userOutput = [];
var userInput = prompt('user input');


function outputArray(){
    userOutput.push(userInput);
    userOutput = userInput.split('');

    console.log(userOutput);
}

