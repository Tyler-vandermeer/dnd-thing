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

    getTile(x, y) {
        let row = this.tiles.filter(r => r.some(t => t.isBetweenYValue(y)))[0];
        return row.filter(c => c.isBetweenXValue(x))[0];
    }

    draw() {
        this.iterateTiles(x => {x.draw(); });
    }

    iterateTiles(func) {
        for (var row of this.tiles) {
            for(var tile of row) {
                if (func(tile))
                    return;
            }
        }
    }
}