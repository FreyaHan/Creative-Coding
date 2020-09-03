let particles = [];
let squiggliness = 1/60; // 弯曲度参数
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  colorMode(HSB, 360,100,100,100);
  generateParticle();
}

function draw() {
  
 for (let p of particles) {
    p.draw();
    p.move();
  }
}

function generateParticle() {
    particles = [];
  let num = 700;
  let length = 1;
  for (let i = 0; i<num; i++){
 let a = map (i,0,num,-PI,PI);
    let x_ = width/2+length*cos(a);
    let y_ = height/2+length*sin(a);
    let s_ = 1;
    let c_ = color(random(183,245),random(70,90),random(60,90),100);
    particles.push(new Particle(x_,y_,s_,c_));
    
  }

}

function Particle(x_, y_, s_, c_) {
  this.x = x_;
  this.y = y_;
  this.size = s_;
  this.color = c_;

  this.draw = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  this.move = function() {
    let angle = atan2(this.y-height/2, this.x-width/2);
    angle += noise(this.x*squiggliness, this.y*squiggliness);
    this.dist = 1;
    let v = p5.Vector.fromAngle(angle,this.dist);
    this.x += v.x;
    this.y += v.y;
  }

}