class Vehicle {
    Drive() {
        console.log('Vehicle called');
        return this;
    }
}

class Car extends Vehicle {
    CarryPeople() {
        console.log('Car CarryPeople called');
        return this;
    }
    FillUp(){
        console.log('Car FillUp called');
        return this;
    }

}


class Truck extends Vehicle {
    CarryCargo() {
        console.log('Truck CarryCargo Called');
        return this;
    }
}

var honda = new Car();
honda.Drive()
    .CarryPeople()
    .FillUp();

