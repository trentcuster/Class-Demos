var loadedDiv = document.getElementById("loaded");
loadedDiv.style.cursor="pointer";
loadedDiv.onclick = function(){
    loadedDiv.innerText = "Just changed it to red";
    loadedDiv.style.color = "red";
};

var myMass= 84; //kg

var squareSide = 5;
var triangleSide1 = 1;
var triangleSide2 = 5;
var triangleSide3 = 7;
var radius = 3454;

var gravityMoon = 1.622;
var gravityEarth = 9.807;
var gravityJupiter = 24.74;

var perimeterSquare = squareSide * 4;
var perimeterTriangle = triangleSide1 + triangleSide2 + triangleSide3;
var circumference = 2 * radius * Math.PI;

var weightEarth = gravityEarth * myMass;
var weightMoon = gravityMoon * myMass;
var weightJupiter = gravityJupiter * myMass;
