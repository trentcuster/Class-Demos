var RPS = ["rock", "paper", "scissors"];


function computerOutput(){
    var randomNum = (Math.floor(Math.random() * 3));
    if (randomNum === 0){
        console.log(RPS[0])
    }
    else if(randomNum === 1){
        console.log(RPS[1])
    }
    else {
        console.log(RPS[2])
    }

}

function rockbtn() {
    console.log("Rock" + computerOutput());
}
function paperbtn() {
    document.getElementById("paper").innerHTML = "Paper"
}
function scissorsbtn() {
    document.getElementById("scissors").innerHTML = "Scissors"
}

/*
function rockuser() {
    rockbtn();
    computerOutput();
}

function paperuser() {
    paperbtn();
    computerOutput();
}

function scissoruser() {
    scissorsbtn();
    computerOutput();
}
*/

