function setup() {
    createCanvas(400, 400);
  background(200, 100, 300);
}

function draw() {
  fill(255, 0, 0);
  triangle(mouseX, mouseY, mouseX-20, mouseY+8, mouseX-20, mouseY-8);
}

