var width,
    height,
    currentState,
    frames = 0,
    ogroup,
    thehero;

var states = {
    splash: 0,
    game: 1,
    score: 2
};
var canvas;
var renderingContext;

function OctoGroup(){
    this.collection = [];
    this.reset = function () {
        this.collection = [];
    }

    this.add = function () {
        this.collection.push(new Octorock());
    }
    this.update = function () {
        if(frames % 100 === 0){ //add an octorock every 100 frames
            this.add();
        }
        for(var i = 0, len = this.collection.length; i < len; i ++){
            var octorock = this.collection[i];

            if(i === 0){
                octorock.detectCollision();
            }

            octorock.x -= 2; //movement
            if(octorock.x < -octorock.width){ //if the distance between enemy and end of canvas is equal, stop tracking
                this.collection.splice(i, 1);
                i --;
                len --;
            }
        }

    }
    this.draw = function () {
        for (var i = 0, len = this.collection.length; i < len; i ++){
            var octorock = this.collection[i];
            octorock.draw();
        }
    }

}

function Octorock(){
    this.x = 400;
    this.y = 355;
    this.width = octorockSprite.width;
    this.height = octorockSprite.height;

    this.detectCollision = function () {
        if (this.x <= (thehero.x + thehero.width) && this.x >= thehero.x){
            console.log("you're dead");
        }
    }

    this.draw = function () {
        octorockSprite.draw(renderingContext, this.x, this.y);
    }
}

function Hero(){
    this.x = -60;
    this.y = 170;
    this.width = 45;
    this.height = 55;

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0, 1, 2, 1];

    this.rotation = 0;
    this.radius = 12;

    this.gravity = 0.25;
    this._jump = 4.6;
    this.jumpcount = 2;

    this.jump = function(){
        if(this.jumpcount > 0) {
            this.velocity = -this._jump;//negative y is up because canvas up left corner is 0,0. -this.jump moves him up on jump
            this.jumpcount--;
        }
    }

    this.update = function () {
        var h = currentState === states.splash ? 10 : 7;//every 10 browser frames = 1 hero frames
        this.frame += frames % h === 0 ? 1 : 0;
        this.frame %= this.animation.length;

        if(currentState === states.splash){
           this.updateIdleHero();
        }
        else{
            this.updatePlayingHero();
        }

    }
    this.updateIdleHero = function (){
        //this.y = 250;
    }

    this.updatePlayingHero = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        //check to see if hit the ground and stay there
        if(this.y >= 170){
            this.y = 170;
            this.jumpcount = 2;
            this.velocity = this._jump;
        }
    };

    this.draw = function(renderingContext){
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var h = this.animation[this.frame];
        link[h].draw(renderingContext, 160, this.y);

        renderingContext.restore();
    }
}

function onpress(evt){
    console.log("click happened");

    switch (currentState){
        case states.splash:
            thehero.jump();
            currentState = states.game;
            break;

        case states.game:
            thehero.jump();
            break;
    }
}

function main() {
    windowSetup();
    canvasSetup();
    currentState = states.splash;
    document.body.appendChild(canvas);

    loadGraphics();
    thehero = new Hero();
    ogroup = new OctoGroup();
}

function windowSetup(){
    var inputEvent = "touchstart";
    var windowWidth = $(window).width();
    console.log(windowWidth);
    if(windowWidth < 500){
        width = 320;
        height = 430;
    }
    else {
        width = 400;
        height = 430;
        inputEvent = "mousedown";//changing for touchscreen or click for big screen
    }
    //listener for jump function
    document.addEventListener(inputEvent,onpress);//canvas.addEvent...to make click/touch only in canvas
}

function canvasSetup() {
    canvas = document.createElement('canvas');
    canvas.style.border = "3px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    var img = new Image();
    img.src = "Images/linksheet.png";
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = "#3DB0DD";

        //link[0].draw(renderingContext, 50, 50);
        gameLoop();

    };

}


function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update(){
    frames ++;
    if(currentState === states.game){
        ogroup.update();
    }
    thehero.update();

}

function render() {
    renderingContext.fillRect(0, 0, width, height);
    backgroundSprite.draw(renderingContext, 0, 200);
    //octorockSprite.draw(renderingContext, 220, 342);
    ogroup.draw(renderingContext);
    thehero.draw(renderingContext);
}

