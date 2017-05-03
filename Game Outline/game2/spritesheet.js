var backgroundSprite;
var bombSprite;
var phantom;

function Sprite(img, x, y, width, height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function(renderingContext, x, y){
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img){
    phantom = new Sprite(img, 0, 250, 95, 100);
    holeSprite = new Sprite(img, )
    bombSprite = new Sprite(img, 0, 350, 80, 80);
    backgroundSprite = new Sprite(img, 100, 0, 900, 500);
}
