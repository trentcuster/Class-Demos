var bookmark = "";

function dynamicpop(id) {

    if(bookmark != "" && bookmark != id){
    document.getElementById(bookmark).style.display = "none";
}

    var theelement=document.getElementById(id);
    var visible = theelement.style.display;

    if(visible == "none"){
        theelement.style.display = "block";
        bookmark = id;
    }
    else{
        theelement.style.display = "none";
    }
}

var addItem = (function(){
    var cartItems= 0;
    return function () { return cartItems += 1;}
})();