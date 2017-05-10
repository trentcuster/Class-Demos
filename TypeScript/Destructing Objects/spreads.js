var newBookIDs = [10, 20];
var allBookIDs = [1, 2, 3].concat(newBookIDs);
//allBookIDs = [1,2,3,10,20]
console.log(allBookIDs);
var myTuple = [10, 'Macbeth'];
myTuple[1] = 'Hamlet'; // ERROR
myTuple[0] = 20; // ERROR
myTuple[2] = 'Hamlet';
myTuple[3] = 20;
//myTuple[3] will still have to be a number or a string
console.log(myTuple);
