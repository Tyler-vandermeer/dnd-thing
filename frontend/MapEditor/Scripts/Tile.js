class Tile {
    constructor(x, y, size, type) {
        this.pos = createVector(x, y);
        this.size = size;
        this.type = type;
        this.tileImage = null;
    }

    draw() {
        strokeWeight(2);
        stroke('rgba(0,0,0,0.15)');
        noFill();
        square(this.pos.x, this.pos.y, this.size);
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