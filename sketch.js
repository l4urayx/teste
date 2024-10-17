function setup() {
    createCanvas(600, 600);
    background("lightblue");
  }
  
  function draw() {
    fill("purple");
   
    if(mouseIsPressed){
      circle(mouseX, mouseY, 50);
    }
  }