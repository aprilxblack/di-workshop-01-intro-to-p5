function setup() {
  createCanvas(400, 400)
  background(255, 255, 255)
}

function draw() {
  x = 30;
  y = 30;
  if (keyIsPressed) {
    strokeWeight(0);
    if(key == 'r'){
      fill(255, 0, 0);
    }
    if (key == 'g'){
      fill(0, 255, 0);
    }
    if (key == 'b'){
      fill(0, 0, 255);
    }
    if (key == 'e'){
      fill(255,255,255);
    }
    if(key=='t'){
      x=0;
      y=0;
      triangle(mouseX, mouseY, mouseX-20, mouseY+20, mouseX-20, mouseY-20)
    }
    if(key=='l'){
      x=60;
      y=60;
    }
  
  } else {
    x = 30;
    y = 30;
    fill(0, 0, 0)
    strokeWeight(0);
   
   
  }
  
  ellipse(mouseX, mouseY, x,y)
}
