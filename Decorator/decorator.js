var pizza = {};

pizza.decorate = function (){
    console.log('Dough & Tomato Sauce');
};

pizza.getDecorator = function (deco){
    pizza[deco].prototype = this;
    return new pizza[deco];
};

pizza.Pepperoni = function () {
    this.decorate = function () {
        this.Pepperoni.prototype.decorate();
        console.log("Put on some Pepperoni");
        $(".pizzabox").append("<img style='position: absolute;' src = 'pepperoni_360.png'/>")
    };
};

pizza.Mushroom = function () {
    this.decorate = function () {
        this.Mushroom.prototype.decorate();
        console.log("Put on some Mushrooms");
        $(".pizzabox").append("<img style='position: absolute' src = 'mushrooms_360.png'/>")

    };
};

pizza.Cheese = function () {
    this.decorate = function () {
        this.Cheese.prototype.decorate();
        console.log("Put on some Cheese");
    };
};

function addIngredient(ingredName) {
    pizza = pizza.getDecorator(ingredName);
    pizza.decorate();
}

//pizza = pizza.getDecorator('Pepperoni');
//pizza = pizza.getDecorator('Cheese');

//pizza.decorate();