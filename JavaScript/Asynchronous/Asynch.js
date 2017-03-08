function showProfile(profile){
    document.getElementById('profile').innerHTML= profile;
}

function getUserProfileAsyn(username, password, callback){
    setTimeout(function(){
        var profile = '<h1>Trent</h1><h2>Custer</h2><h2>tbcuster</h2>';
        callback(profile);
    }, Math.random() * 2000 + 1000);
}

getUserProfileAsyn('Trent', 'custertb', showProfile);




function showWords(capitalize){
    document.getElementById('capitalize').innerHTML=capitalize;
}

function getWords(word1, word2, word3, callback){
    setTimeout(function() {
    var capitalize = '<h1>test</h1><h1>these</h1><h1>words</h1>';
    callback(capitalize);
}, Math.random() * 2000 + 1000);
}

getWords('test', 'these','words', showWords);

function capitalizeFirstLetter(array, callback){
    setTimeout(capitalizeFirstLetter, Math.random() * 2000 + 1000);

    function capitalizeFirstLetter(array){
       for (var index = 0; index < array.length; index++){
           var word = array[index];
           var capitalizedWord = word[0].toUpperCase() + word.substr(1);
           array[index] = capitalizedWord;
       }
    }
}

var myArray = ['banana', 'apple', 'orange', 'pear'];

function display(array){
    document.getElementById('array').innerHTML= myArray.toString();

}

document.getElementById('array').innerHTML= myArray.toString();

capitalizeFirstLetter(myArray, display);