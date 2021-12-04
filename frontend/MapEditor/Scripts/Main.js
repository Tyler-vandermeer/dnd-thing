let grid;
let tileWidth = 5;
let tileCount = 100;
let tileOffset = -(tileWidth * tileCount) / 2;
let sidePanelSize = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);
    grid = new Grid(50);
    grid.draw();
}