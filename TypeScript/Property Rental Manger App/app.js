function getAllHouses() {
    var houses = [
        { id: 1, address: 111, numRooms: 1, numBaths: 1, squareFeet: 1111, available: false },
        { id: 2, address: 222, numRooms: 2, numBaths: 2, squareFeet: 2222, available: true },
        { id: 3, address: 333, numRooms: 3, numBaths: 3, squareFeet: 3333, available: true },
        { id: 4, address: 444, numRooms: 4, numBaths: 4, squareFeet: 4444, available: false }
    ];
    return houses;
}
function logFirstAvailable(houses) {
    if (houses === void 0) { houses = getAllHouses(); }
    var numberOfHouses = houses.length;
    var firstAvailable;
    for (var _i = 0, houses_1 = houses; _i < houses_1.length; _i++) {
        var currentHouse = houses_1[_i];
        if (currentHouse.available) {
            firstAvailable = currentHouse.id;
            break;
        }
    }
    console.log('Total houses ' + numberOfHouses);
    console.log('First Available house is ' + firstAvailable);
}
logFirstAvailable();
