 /* function reverseString(str) {
   var splitString = str.split("");

   var reverseArray = splitString.reverse();

   var joinArray = reverseArray.join("");

   return joinArray;
}

reverseString("hello"); */

var array1 = ['apple', 'cat','banana'];

function reverseStrings(arrayOfStrings){
    arrayOfStrings.forEach(function (string, index) {
        arrayOfStrings[index] = reverseString(string);
    });
    function reverseString(string){
        var reversedString = '';
        for (var i = string.length - 1; i >= 0; i--) {
            reversedString = reversedString + string[i];

        }
        return reversedString;
    }
    
}

