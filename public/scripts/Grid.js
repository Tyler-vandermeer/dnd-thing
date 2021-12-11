class Grid {
    constructor(xOff, yOff, width, height, tileSize, tileType = TYLE_TYPE_GRID) {
        this.tiles = [];
        
        for(var i = 0; i < Math.floor(height / tileSize); i++) {
            let temp = []
            for(var j = 0; j < Math.floor(width / tileSize); j++) {
                temp.push(new Tile(`${i}${j}`, j * tileSize + xOff, i * tileSize + yOff, tileSize, tileType))
            }
            this.tiles.push(temp);
        }
    }

    addImg(tileImage) {
        this.iterateTiles((t) => {
            if (t.tileImage === null){
                t.tileImage = tileImage;
                return true;
            }
        });
    }
    
    getTile(x, y) {
        let row = this.tiles.filter(r => r.some(t => t.isBetweenYValue(y)))[0];
        if (row === undefined)
            return null;

        return row.filter(c => c.isBetweenXValue(x))[0];
    }

    draw() {
        this.iterateTiles(x => x.draw());
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