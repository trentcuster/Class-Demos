function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomeIndex;

    while (0 !== currentIndex){
        randomeIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomeIndex];
        array[randomeIndex] =temporaryValue;
    }
    return array;
}

var arr = [2,11,37, 42]
arr = shuffle(arr);
console.log(arr);

