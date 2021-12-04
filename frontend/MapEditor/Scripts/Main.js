let grid;
let tilePalette;
let brush;

// let images = [];

let img;

let gridLength;
let gridWidth;
let sidePanelSize = 300;

function prelaod() {
    img = loadImage('Tiles/TempGrass.png');
}

function setup() {


    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    imageMode(CENTER);

    gridLength = windowHeight;
    gridWidth = windowWidth - 300;

    grid = new Grid(25, 25, gridWidth, gridLength, 50);
    grid.draw();

    // images.push(loadImage('../Tiles/TempGrass.png'));

    tilePalette = new Grid(gridWidth + 100, 75, 100, 500, 50, tileTypePalette);

    // tilePalette.addImg("../");

    tilePalette.draw();

    brush = new Brush();
    console.log(img);
    // image(img, 10, 10, 50, 50);
}

function mouseClicked() {
    if (mouseX <= gridWidth) {
        let tile = grid.getTile(mouseX, mouseY);
        console.log(tile);
    } else {
        let tile = { ...tilePalette.getTile(mouseX, mouseY) };
        if (tile !== null)
            brush.setTile(tile);

        console.log(brush);
    }
}