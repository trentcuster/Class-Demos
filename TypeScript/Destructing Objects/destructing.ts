let medals: string [] = ['gold','silver','bronze'];

// let first: string = medals[0];
// let second: string = medals[1];
// let third: string = medals[2];

let [first, second, third] = medals;

console.log(`first: ${first} second: ${second} third: ${third}`);

let person = {
    name: 'Audrey',
    address: '123 Main Street',
    phone: '555-1212'
};

//let name: string = person.name;
//let address: string = person.address;
//let phone: string = person.phone;

/*
let { name, address, phone } = person;

console.log(`name: ${name} address: ${address} phone: ${phone}`);*/
