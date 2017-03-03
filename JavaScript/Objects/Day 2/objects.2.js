var btnarray =["Start Game", "Settings", "Quit Game"];

function Game(){
    this.addButton= function(){

        for(var i=0; i < btnarray.length; i++){

            document.getElementById("gamecontainer").innerHTML += "<a class= 'mybtn' href= '#'>"+ btnarray[i] + "</a>";
        }


       // document.getElementById("gamecontainer").innerHTML += "<a href='#'>My Button</a>";
    };
}

var mygame = new Game();

