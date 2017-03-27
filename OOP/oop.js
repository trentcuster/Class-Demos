

function Shape(){
    this.name = 'Shape';
    this.toString = function(){
        return this.name;
    };
}

function twoD(){
    this.name = '2D Shape'
}

function triangle(side, height){
    this.name = 'Triangle'
    this.side = side;
    this.height = height;
    this.getArea = function(){
        return this.side * this.height / 2;
    };
}

twoD.prototype = new Shape();
triangle.prototype = new twoD();

var myshape = new triangle(5 ,10);
console.log(myshape.getArea());

