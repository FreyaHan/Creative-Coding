var skyColor, cloudColor, furtherC, closeC, mistC;

function setup() {
  createCanvas(800, 600);
  smooth();
  colorMode(HSB, 360, 100, 100, 100);

}

function draw() {
  noLoop();
  background(230, 25, 90);
  sky();
  clouds();
  mountain();
}

function sky() {
  for (let i = 0; i < height / 3; i++) {
    var a1 = map(i, 0, height / 3, 200, 0);
    strokeWeight(2);
    skyColor = color(222, 47, 81, a1);
    stroke(skyColor);
    line(0, i, width, i);

  }
}

function clouds() {
  var begin = random(50); // changes the begin of noise each time
//每做一次x的循环，要把y循环都做一遍。 每当做一个新的x的
// 每当做一个新的x的循坏，y就要归零就要归零归零零
  let xoff = 0;
  for (let x = 0; x < width; x += 2) {
    let yoff = 0;
    for (let y = 0; y < height / 3; y += 2) {

      var a2Max = map(y, 0, height / 3, 300, 0); // the clouds become transparent as they become near to the mountains
      var a2 = map(noise(begin + h, begin + k), 0.4, 1, 0, a2Max); //2D noise
      var a3 = map(noise(begin + h + 100, begin + k + 100), 0.4, 1, 0, a2Max); //2D noise yellow cloud

      noStroke();
      cloudColor1 = color(207, 27, 81, a2);
      fill(cloudColor1);
      ellipse(x, y, 3);
      cloudColor2 = color(36, 53, 80, a3);
      fill(cloudColor2);
      ellipse(x, y, 1);


      yoff += 0.07;
    }
    xoff += 0.01;
  }
}

function mountain() {
  // determine different y positions of mountain
  let y0 = width - 550; // y position of first mountain line
  let i0 = 30; // initial interval

  let cy = [];
  for (let j = 0; j < 10; j++) {
    cy[9 - j] = y0;
    y0 -= i0 / (j + 1);
  }



  // draw mountain
  let xoff = 0;

  for (let j = 0; j < 10; j++) {
    let a = random(-width / 2, width / 2); //random discrepancy between the sin waves
    let b = random(-width / 2, width / 2); //random discrepancy between the second sin waves
    let c = random(2, 5); // random amplitude for the second sin wave
    let d = random(30, 40); //noise function amplitude
    let e = random(-width / 2, width / 2); //adds a discrepancy between the noise of each mountain      

    for (let x1 = 0; x1 < width; x1++) {
      //float y = noise(xoff)*height + sin(xoff)*height/9; most normal noise line
      y1 = cy[j];
      y1 += 5 * j * sin(2 * xoff / j + a);
      //first sin wave oscillates according to j (the closer the mountain, the bigger the amplitude and smaller the frequency) 
      y1 += c * j * sin(5 * xoff / j + b);
      //second sin wave has a random medium amplitude (affects more the further mountains) and bigger frequenc 
      y1 += d * j * noise(1.5 * xoff / j + e);
      //first noise function adds randomness to the mountains, amplitude depends on a random number and increases with j, frequenc
      y1 += 1.5 * j * noise(7 * xoff);
      //second noise function simulates the canopy, it has high frequency and small amplitude depending on j so it is smoother on the further mountains

      strokeWeight(2);


      furtherC = color(230, 45, 92, 100); //purplish unsaturated light bluse for the further mountains
      closeC = color(210, 81, 47, 100);
      stroke(lerpColor(furtherC, closeC, j / 9));
      line(x1, y1, x1, height);

      xoff += 0.02;
    }

    //ADD MIST 
    for (let i = height; i > cy[j]; i -= 3) {
      let alfa = map(i, cy[j], height, 0, 360 / (j + 1)); //alfa is begins bigger for the further mountains      
      strokeWeight(3); //interval of 3 for faster rendering

      mistC = color(36,30,95, alfa);
      stroke(mistC);
      line(0, i, width, i);
    }
  }
}

function mousePressed() {
  loop();
}