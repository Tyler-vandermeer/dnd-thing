class Grid {
    constructor(size) {
        this.tiles = [];
        
        for(var i = 0; i < windowHeight / size; i++) {
            let temp = []
            for(var j = 0; j < (windowWidth - sidePanelSize) / size; j++) {
                temp.push(new Tile(j * size, i * size, size))
            }
            this.tiles.push(temp);
        }
    }

    draw() {
        for (var row of this.tiles) {
            for(var tile of row) {
                tile.draw();
            }
        }
    }
}