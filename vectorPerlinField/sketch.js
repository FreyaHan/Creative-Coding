let scal = 20;
let cols, rows;
let xoff, yoff;
let zoff = 0;
let particles = [];
let flowfield;


function setup() {
  createCanvas(400, 400);
  let cols = floor(width / scal);
  let rows = floor(height / scal);
  flowfield = new Array(cols * rows);

  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }


}

function draw() {
  background(220);


  xoff = 0;
  for (let x = 1; x < cols; x++) {
    yoff = 0;
    for (let y = 1; y < rows; y++) {

      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let index = x + y * cols;
      let v = p5.Vector.fromAngle(angle);
      // flowfield[index] = v;

      push();
      translate(x*scal, y*scal);
      rotate(v.heading());
      stroke(0,30);
      strokeWeight(1);
      line(0,0,scal,0);
      pop();

      yoff += 0.1;

    }
    xoff += 0.1;
    zoff += 0.0009;
  }
  for (let i = 0; i < particles.length; i++) {
    // particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    


  }

}