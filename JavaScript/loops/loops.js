// loops are a way to iterate through an array

var fruits = ['banana', 'pear', 'apple', 'orange'];

var snack;

for (var fruitIndex =0; fruitIndex < fruits.length; fruitIndex++) {
    if (fruits[fruitIndex] === 'orange') {
        snack = fruits[fruitIndex];
        break;
    }
}

for ( var fruitIndex = fruits.length -1; fruitIndex >= 0; fruitIndex-- ){
    if (fruits[fruitIndex] === 'orange') {
        snack = fruits[fruitIndex];
        break;
    }
}

fruits.forEach();

    function iterationOverFruits(fruit, fruitIndex) {
        if(fruit === 'apple') {
            snack= fruit;
        }
    }

    var returnedFruit = iterationOverFruits('banana');

    var returnedFruit = iterationOverFruits('orange');

    var done = false;
    fruitIndex = 0;
    while(!done) {
        snack = fruits[fruitIndex];
        {
            done = true;
        }
        fruitIndex++
    }
