var size = 45;
var cs = [
  '#936FAB', '#C09BD8', '#F2C9E7', '#FAE1EA', '#CFB4BE', '#a689bd'
]



function setup() {
  createCanvas(800, 800)
  background(150)
  noStroke()
}


function draw() {

  for (let i = -11, j = -1; j < 50; j +=3,i+=6) {
   tenGroup(i,j);
  }
   for (let i = -9, j = 5; j < 50; j +=3,i+=6) {
   tenGroup(i,j);
  }
   for (let i = -7, j = 11; j < 50; j +=3,i+=6) {
   tenGroup(i,j);
  }
  for (let i = -13, j = -7; j < 50; j +=3,i+=6) {
   tenGroup(i,j);
  }
  for (let i = -15, j = -13; j < 50; j +=3,i+=6) {
   tenGroup(i,j);
  }
}

function tenGroup(i,j){
   fill(cs[0]);
    drawTen(i, j);
    fill(cs[1]);
    drawTen(i + 2, j + 1);
    fill(cs[2]);
    drawTen(i + 3, j - 1);
    fill(cs[3]);
    drawTen(i + 4, j + 2);
    fill(cs[4]);
    drawTen(i + 5, j);
    fill(cs[5]);
    drawTen(i + 7, j + 1);
}


function drawTen(i, j) {
  //horizontal rect
  rect(i * size, (j + 1) * size, 3 * size, size);
  //vertical rect
  rect((i + 1) * size, j * size, size, 3 * size); 
}