var width,
    height,
    currentState,
    frames = 0,
    thehero;

var states = {
    splash: 0,
    game: 1,
    score: 2
};
var canvas;
var renderingContext;

function Hero(){
    this.x = 20;
    this.y = 20;

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0, 1, 2, 1];

    this.rotation = 0;
    this.radius = 12;

    this.gravity = 0.25;
    this._jump = 4.6;

    this.update = function () {
        var h = currentState === states.splash ? 10 : 5;
        this.frame += frames % h === 0 ? 1 : 0;
        this.frame %= this.animation.length;
    }

    this.draw = function(renderingContext){
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var h = this.animation[this.frame];
        link[h].draw(renderingContext, 140, 100);

        renderingContext.restore();
    }
}

function main() {
    windowSetup();
    canvasSetup();
    currentState = states.splash;
    document.body.appendChild(canvas);

    loadGraphics();
    thehero = new Hero();
}

function windowSetup(){
    var windowWidth = $(window).width();
    console.log(windowWidth);
    if(windowWidth < 500){
        width = 320;
        height = 430;
    }
    else {
        width = 400;
        height = 430;
    }
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
    img.src = "Images/linksheet_360.png";
    img.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = "#8BE4DF";

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
    thehero.update();
}

function render() {
    renderingContext.fillRect(0, 0, width, height);
    thehero.draw(renderingContext);

}

