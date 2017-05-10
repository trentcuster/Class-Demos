let newBookIDs = [10, 20];

let allBookIDs = [1, 2, 3, ...newBookIDs];

//allBookIDs = [1,2,3,10,20]

console.log(allBookIDs);

let myTuple: [number, string] = [10, 'Macbeth'];

myTuple[1] = 'Hamlet'; // ERROR
myTuple[0] = 20; // ERROR
myTuple[2] = 'Hamlet';
myTuple[3] = 20;
//myTuple[3] will still have to be a number or a string

console.log(myTuple);