class Tile {
    constructor(x, y, size) {
        this.pos = createVector(x, y);
        this.size = size;
    }

    draw() {
        strokeWeight(2);
        stroke(0);
        square(this.pos.x, this.pos.y, this.size);
    }
}