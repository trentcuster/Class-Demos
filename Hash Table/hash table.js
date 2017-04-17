
var hashTable = {};

var data = {
    name: 'john smith',
    data: {phone: '801-123-4567'}
};

hashTable[data.name] = data;

var john = hashTable['john smith'];

console.log(john);

