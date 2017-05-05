
function getAllHouses () {
    let houses = [
        { id: 1, address: 111, numRooms: 1, numBaths: 1, squareFeet: 1111, available: false, typeOfDwelling: [typeOfDwelling.rambler]},
        { id: 2, address: 222, numRooms: 2, numBaths: 2, squareFeet: 2222, available: true, typeOfDwelling: [typeOfDwelling.twostory]},
        { id: 3, address: 333, numRooms: 3, numBaths: 3, squareFeet: 3333, available: true, typeOfDwelling: [typeOfDwelling.duplex]},
        { id: 4, address: 444, numRooms: 4, numBaths: 4, squareFeet: 4444, available: false, typeOfDwelling: [typeOfDwelling.twostory]}
    ];
    enum typeOfDwelling {
        rambler,
        twostory,
        duplex
    }
    return houses;
}

function logFirstAvailable(houses = getAllHouses()): void{
    let numberOfHouses: number = houses.length;
    let firstAvailable: number;
    for(let currentHouse of houses){
        if(currentHouse.available){
            firstAvailable = currentHouse.id;
            break;
        }
    }
    console.log('Total houses ' + numberOfHouses);
    console.log('First Available house is '+ firstAvailable);
}

logFirstAvailable();

function getHousesByTypeOfDwelling (houses = getAllHouses()): void{
    let numberOfHouses: number = houses.length;
    let firstFound: number;
    for(let currentHouse of houses){
        if(currentHouse.)
    }
}