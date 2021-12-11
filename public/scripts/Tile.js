class Tile {
    constructor(id, x, y, size, type) {
        this.id = id;
        this.pos = createVector(x, y);
        this.size = size;
        this.type = type;
        this.tileImage = null;
    }

    draw() {
        if (this.type !== TILE_TYPE_PALETTE || this.tileImage !== null) {
            if (this.tileImage !== null)
                image(this.tileImage, this.pos.x, this.pos.y, this.size, this.size)

            strokeWeight(2);
            stroke(this.tileImage !== null ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.5)');
            noFill();
            square(this.pos.x, this.pos.y, this.size);
        }
    }

    setImage(img) {
        this.tileImage = img;
        this.draw();
    }

    collidesWith(x, y) {
        return isBetweenXValue(x) && isBetweenYValue(y);
    }

    isBetweenYValue(y) {
        return this.pos.y <= y && y <= this.pos.y + this.size;
    }

    isBetweenXValue(x) {
        return this.pos.x <= x && x <= this.pos.x + this.size;
    }
}