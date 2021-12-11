let grid;
let tilePalette;
let brush;

let paletteTiles = [];

let img;

let gridLength;
let gridWidth;
let sidePanelSize = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

    gridLength = windowHeight;
    gridWidth = windowWidth - 300;

    grid = new Grid(0, 0, gridWidth, gridLength, 50);
    grid.draw();

    tilePalette = new Grid(gridWidth + 100, 75, 100, 500, 50, TILE_TYPE_PALETTE);

    brush = new Brush();

    loadTiles();
}

function mouseClicked() {
    if (mouseX <= gridWidth) {
        let tile = grid.getTile(mouseX, mouseY);

        if (brush.img !== null && tile !== null) {
            tile.setImage(brush.img);
        }
    } else {
        let tile = { ...tilePalette.getTile(mouseX, mouseY) };

        if (tile !== null) {   
            brush.setTile(tile);
        }
    }
}

function loadTiles() {
    loadImage('/images/Tiles/TempGrass.png', addToPalette, (ev) => console.log(ev));
}

function addToPalette(img) {
    paletteTiles.push(img);
    if (paletteTiles.length === PALETTE_TILE_COUNT)
        renderPalette();
}

function renderPalette() {
    for (var tile of paletteTiles) {
        tilePalette.addImg(tile);
    }

    tilePalette.draw();
}