var numPlayers = 4;
var numHoles = 18;

$(function(){
    for(var c =1; c <= numHoles; c++){
        $(".rightBox").append("<div class = 'col"+ c + "'> hole " + c +"</di>");
    }

    for(var p = 1; p <= numPlayers; p++){
        $(".leftbox").append("<div class='playername'>player" + p + "</div>");
        for(var h = 1; h <= numHoles; h++){
            $(".col" + h).append("<input class='holebox' type='text' id='player" + p + "hole" + h + "'/>");
        }
    }

});