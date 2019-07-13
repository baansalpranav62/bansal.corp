let points = [];



function setup() {

    let canvas = createCanvas(window.innerWidth, window.innerHeight);

    canvas.parent('header');

    for (let i = 0; i < 50; i++) {

        points.push(new Point(random(0, window.width), random(0, window.height)));

    }   

}



function draw() {

    background('#353839');

    points.forEach(point => {

        point.draw();

    });

}



function windowResized() {

    resizeCanvas(window.innerWidth, window.innerHeight);

    points = [];

    for (let i = 0; i < 50; i++) {

        points.push(new Point(random(0, window.width), random(0, window.height)));

    }   

}



class Point {

    constructor(x, y) {

        this.x = x;

        this.y = y;

        this.radius = 50;

        this.angle = random(0, 360);

        if (round(random(0, 1)) < 1) {

            this.color = color(255, 105, 180);

        }

        else {

            this.color = color(0, 255, 255);

        }

    }

    draw() { 

        let dx = this.x + (this.radius * cos(radians(this.angle))), 

            dy = this.y + (this.radius * sin(radians(this.angle)));

        strokeWeight(0.3);

        stroke(211, 211, 211);

        line(dx, dy, this.x - this.radius * 50 * cos(radians(this.angle)), this.y - this.radius * 50 * sin(radians(this.angle)));

        fill(this.color);

        ellipse(dx, dy, 3, 3);

        this.angle += 0.1;

        if (this.angle == 360) {

            this.angle = 0;

        }

    }

}