let canvas;

let particles = [];

let colors;

let title = "StarField";
let subtitle = "By Yash Patel";

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);

    colors = [color(0, 150, 136, 200), color(255, 143, 0, 200), color(250, 250, 250, 200)];

    for (i = 0; i < 500; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    background(21, 35, 45);

    push();

    translate(mouseX, mouseY);

    for (particle of particles) {
        particle.update();
        particle.render();
    }

    pop();

    textAlign(CENTER, CENTER);
    textSize(72);

    fill(255);
    text(title, width / 2, height / 3);

    fill(255, 150);
    text(title, width / 2 - 3, height / 3 + 3);

    fill(255, 100);
    text(title, width / 2 - 6, height / 3 + 6);

    fill(255, 50);
    text(title, width / 2 - 9, height / 3 + 9);


    stroke(255, 200);
    strokeWeight(2);
    line(width / 2 - 100, height / 2 - 50, width / 2 + 100, height / 2 - 50);

    noStroke();
    textSize(36);

    fill(255);
    text(subtitle, width / 2, height / 2);

    fill(255, 150);
    text(subtitle, width / 2 - 2, height / 2 + 2);

    fill(255, 100);
    text(subtitle, width / 2 - 4, height / 2 + 4);

    fill(255, 50);

    text(subtitle, width / 2 - 6, height / 2 + 6);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.color = random(colors);

    }

    update() {

        this.z = this.z - 10;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    render() {
        noStroke();
        fill(this.color);

        let r = map(this.z, 0, width, 20, 0);

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        ellipse(sx, sy, r);
    }
}