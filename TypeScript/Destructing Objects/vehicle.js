var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
    }
    Vehicle.prototype.Drive = function () {
        console.log('Vehicle called');
        return this;
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    Car.prototype.CarryPeople = function () {
        console.log('Car CarryPeople called');
        return this;
    };
    Car.prototype.FillUp = function () {
        console.log('Car FillUp called');
        return this;
    };
    return Car;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        _super.apply(this, arguments);
    }
    Truck.prototype.CarryCargo = function () {
        console.log('Truck CarryCargo Called');
        return this;
    };
    return Truck;
}(Vehicle));
var honda = new Car();
honda.Drive()
    .CarryPeople()
    .FillUp();
