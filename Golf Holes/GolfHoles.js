var numPlayers = 4;
var numHoles = 18;

$(function(){
    for(var c =1; c <= numHoles; c++){
        $(".rightBox").append("<div class = 'col"+ c + "'> hole " + c +"</div>");
    }

    for(var p = 1; p <= numPlayers; p++){
        for(var h = 1; h <= numHoles; h++){
            $(".col" + h).append("<input class='holebox' type='text' id='player" + p + "hole" + h + "'/>");
        }
    }

});