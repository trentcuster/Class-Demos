var string = 'hello world!';

setInterval(function(){
    var lastLetter = string[string.length -1];
    string = lastLetter + string.substring(0, string.length - 1);
    document.getElementById('helloworld').innerText = string;
},200);

