function supplymap(){

    for (var i = 0; i < 42; i++) {
        var toprandom = Math.floor(Math.random() * 961);
        var leftrandom = Math.floor(Math.random() * 961);

        document.getElementById("themap").innerHTML += "<img src ='marker.png' style = 'left:" + leftrandom + "px; top: " + toprandom + "px;' />";
    }
}