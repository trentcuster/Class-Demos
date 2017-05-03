var width = 900;
var height = 500;
var canvas;
var renderingContext;
var frames;
var myphantom;

var currentState;
var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};

var thebomb;
var weaponLive = false;
var holes;


function main(){
    windowSetup();
    canvasSetup();

    currentState = states.Splash;

    document.getElementById("canvasbox").appendChild(canvas);

    myphantom = new Hero();
    loadGraphics();
}

function windowSetup(){
    document.addEventListener("keydown", onpress);
    document.addEventListener("keyup", removeMotion);
}

function canvasSetup(){
    canvas = document.createElement("canvas");
    canvas.style.border = "2px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");

}

function Holecgroup() {
    this.collection = [];

    this.add = function () {
        this.collection.push(new Hole());
    };

    this.draw = function () {
        for(var i = 0; i < this.collection; i ++){
            var myhole = this.collection[i];
            myhole.draw();
        }
    }
}

function Hole() {
    this.x = thebomb.x - 20;
    this.y = 414;

    this.draw = function () {
        holeSprite.draw(renderingContext, this.x, this.y);
    }
}

function Bomb() {
    this.x = myphantom.x;
    this.y = myphantom.y + 20;
    this.velocity = 2;
    this._jump = 4.6;
    this.gravity = 0.35;

    this.jump = function () {
        this.velocity = -this._jump;
    };
    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if(this.y >= 385){
            weaponLive = false;
        }
    }
    this.draw = function () {
        bombSprite.draw(renderingContext, this.x, this.y);
    }
}

function addbomb() {
    if(!weaponLive) {
        weaponLive = true;
        thebomb = new Bomb();
        thebomb.jump();
    }
}

function removeMotion(evt){
    myphantom._direction = "";
}

function onpress(evt){
    switch(evt.keyCode){
        case 37:
            myphantom._direction = "left";
            break;
        case 39:
            myphantom._direction = "right";
            break;
    }
}

function Hero(){
    this.x = 250;
    this.y = 14;
    this.width = 100;
    this.height = 100;
    this._direction = "";
    this.friction = 0.94;
    this.maxspeed = 6;
    this.velX = 0;



    this.update = function(){
        if(currentState === states.Splash){
            this.updatePlayingHero();
        }

    };

    this.updatePlayingHero =function(){
        if(this._direction === "left"){
            if(this.velX > -this.maxspeed){
                this.velX --;
            }
        }
        if(this._direction === "right"){
            if(this.velX  < this.maxspeed){
                this.velX ++;
            }
        }
        this.velX *= this.friction;
        this.x += this.velX;
    };
    this.draw = function(renderingContext){
        renderingContext.save();
        phantom.draw(renderingContext, this.x, this.y);
        renderingContext.restore();
    }
}


function loadGraphics(){
    var img = new Image();
    img.src = "spriteSheet.png";
    img.onload = function(){
        initSprites(this);
        gameLoop();
    };
}

function gameLoop(){
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update(){
    myphantom.update();
    if(weaponLive){
        thebomb.update();
    }
}

function render(){
    backgroundSprite.draw(renderingContext, 0, 0);
    myphantom.draw(renderingContext);
    if(weaponLive){
        thebomb.draw();
    }
}
