// Where is the circle
var x, y;
// Here is a slider
var slider;
// Here's a label
var text;
var a;

function setup() {
  a = 0;
  createCanvas(720, 400);
  text = createDiv("Slide this to change the velocity")
  text.position(20,290);
  // Starts at the left side
  x = 0;
  // Starts halfway up
  y = height/2;
  // the slider has a range of 0 to 10, and starts at 1

  slider = createSlider(0, 10, 1);
  slider.position(20,320);
}

function draw() {
  background(120);

  // Draw a circle
  noStroke();
  fill(20,20,200);
  ellipse(x, y, 24, 50);

  // change the x position each time we redraw
  x = x + slider.value();
  // y is not moving
  y = y + 2;

  // Reset when it hits the right side.
  if (x > width) {
    x = 0;
  }
  if (y > height) {
    y = 0;
  }


}
