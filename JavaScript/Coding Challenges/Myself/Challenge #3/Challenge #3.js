var randomMonth = Math.floor((Math.random() * 12) + 1);

var randomDay = Math.floor((Math.random() * 31) + 1);

var randomYear = Math.floor((Math.random() * 100) + 2017);

if(randomMonth = 2 && randomDay > 28){
    randomDay = 28;
    randomMonth = 2;
}
else if (randomMonth = 4 && randomDay > 30){
    randomDay = 30;
    randomMonth = 4;

}
else if (randomMonth = 6 && randomDay > 30){
    randomDay = 30;
    randomMonth = 6;

}
else if (randomMonth = 9 && randomDay > 30){
    randomDay = 30;
    randomMonth = 9;

}
else if (randomMonth = 11 && randomDay > 30){
    randomDay = 30;
    randomMonth = 11;

}
else {
    randomDay = Math.floor((Math.random() * 31) + 1);
    randomMonth= Math.floor((Math.random()* 12) + 1);
}




console.log(randomDay + "/" + randomMonth + "/" + randomYear);