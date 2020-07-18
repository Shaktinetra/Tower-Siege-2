class Polygon {
    constructor(x, y) {
        var options= {
            restitution: 0.4,
            density: 1.5
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);

        this.image = loadImage("pentagon.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 20, 20);
        noFill();
    }
        }
