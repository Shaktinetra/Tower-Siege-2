class Polygon {
    constructor(x, y) {
        var options= {
            restitution: 0.4,
            density: 1.5,
            isStatic: false
        }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);

        this.image = loadImage("pentagon.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
        noFill();
    }
        }
