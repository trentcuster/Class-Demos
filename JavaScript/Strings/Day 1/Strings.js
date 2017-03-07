// JavaScript Document
var currentstring = '';

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring = currentstring + theletter; // We need to concatenate the strings together.
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring.toLowerCase(); // I want you to make it print to the page in lower case.

}

function checkmyAnswer(instring) {
    var otheranswer = currentstring.substr(2);  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}

