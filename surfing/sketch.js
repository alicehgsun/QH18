// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var font;
var vehicles = [];
var bounds;

function preload() {
  font = loadFont('Noto Serif 700.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  var points = font.textToPoints('Surfing', windowWidth/18, windowHeight/2.5, windowHeight/4,
  {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    vehicles.push(new Vehicle(pt.x, pt.y));
  }
  var points = font.textToPoints('Bilingually', windowWidth/6, windowHeight/1.4, windowHeight/4,
  {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    vehicles.push(new Vehicle(pt.x, pt.y));
  }

  bounds = font.textBounds('particles', 50, 180);
}


function draw() {
  background(color("#ac89ff"));
  if (mouseIsPressed) {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      fill(255);
      v.shatter();
      v.show();
    }
  } else {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      fill(random(100,255), 255, random(100,255));
      v.update();
      v.show();
      v.behaviors();
    }
  }
  push()
  textSize(100);
  text("🏄", mouseX, mouseY);
  pop()
}
