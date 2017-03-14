
if (!db.get('cart')){
    db.save('cart', []);
}


var cart = db.get('cart');

if (cart.length){
    var candyList = '';

    cart.forEach(function (candy) {
        candyList = candyList + '<li' + candy.name + '</li';
    })
    document.getElementById('cart').innerText = candyList;
}

document.getElementById('add').onclick = function () {
    var candyName = document.getElementById('candyName').valueOf()
    var candy = {name: candyName};
    var cart = db.get('cart');

    cart.push(candy);

    db.update('cart', cart);
};

