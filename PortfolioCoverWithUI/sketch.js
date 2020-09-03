let input_c1,input_c2;
let button_apply, button_UI;
let label_c1,label_c2,label_pattern;
let sel;
let c1,c2;
let colorCode1 = '#e9405e';
let colorCode2 = '#4cc9f0';
let r = 0; // noise line counter
let pg;
let hide = false; // indicator of visibility of UI


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  
  pg = createGraphics (windowWidth,windowHeight);
  
  //color1 input
  input_c1 = createInput(colorCode1);
  input_c1.position (60,10);
  input_c1.style ('width','80px');
  label_c1 = createSpan('Color1');
   label_c1.position(10,10);
  
  //color2 input
   input_c2 = createInput(colorCode2);
  input_c2.position (60,40);
  input_c2.style ('width','80px');
  label_c2 = createSpan('Color2');
   label_c2.position(10,40);
  
  //apply color button
  button_apply = createButton('Apply Color');
  button_apply.position(60, 70);
  button_apply.mousePressed(resetBg);
  
  //pattern selector
  sel = createSelect();
  sel.position(60, 100);
  sel.option('pattern1');
  sel.option('pattern2');
  sel.option('pattern3');
 label_pattern = createSpan('Pattern');
  label_pattern.position(10,100);
  
  //UI visibility button
  button_UI = createButton('Hide UI (click any area to show again)');
  button_UI.position (10,130);
  button_UI.mousePressed(hideUI);
  
  //refresh setup
  resetBg();  

}

function resetBg(){
  colorCode1 = input_c1.value();
  colorCode2 = input_c2.value();
   c1 = color(colorCode1);
   c2 = color(colorCode2);
  for (var w = 0; w < width; w += 5){
    for (var h = 0; h < height; h += 5){
      let c = lerpColor(c1, c2, (w + h) / (width + height));
      fill(c);
      rect(w, h, 5, 5);
    }
  }
  r =0 ; // reset noise line
}

function setPattern(pg){
  let p = sel.value();
pg.clear();
  for (let i = 0; i < height; i += 3) {
      pg.stroke(255, 255*noise(r*0.02+i*0.01)*0.02);
    
    if ( p == 'pattern1'){
 pg.line(r+i/20, sin(radians(r+i))*50+i, r, cos(radians(r))*80+i+100);
      
    }if ( p == 'pattern2'){
  pg.line(r+i/20, sin(radians(r+i))*-30+i, r, cos(radians(r))*-80+i+100);
      
  } else{
     pg.line(r+i/20, sin(radians(r+i))*-20+i, r, cos(radians(r))*30+i+100);
  }
  
	}
	r++;
}

function draw() {
  image(pg,0,0);
  setPattern(pg);
  sel.changed(resetPattern);
}

function resetPattern(){
  resetBg();
  r=0;
  
}

function mousePressed(){
	if ( hide )
		showUI();
	hide = !hide;
}

function showUI(){
  sel.style('visibility', 'initial');
  label_pattern.style('visibility', 'initial');
  label_c2.style('visibility', 'initial');
  input_c1.style('visibility', 'initial');
  input_c2.style('visibility', 'initial');
  button_apply.style('visibility', 'initial');
  button_UI.style('visibility', 'initial');
}

function hideUI(){
  sel.style('visibility', 'hidden');
   label_pattern.style('visibility', 'hidden');
  label_c1.style('visibility', 'hidden');
  label_c2.style('visibility', 'hidden');
  input_c1.style('visibility', 'hidden');
  input_c2.style('visibility', 'hidden');
  button_apply.style('visibility', 'hidden');
  button_UI.style('visibility', 'hidden');
}


