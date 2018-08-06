var vehicles = [];
var keywords;

function preload() {
  keywords = loadJSON("keywords.json");
}

function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < keywords.data.length; i++){
    var number = keywords.data[i].number;
    var kor = keywords.data[i].kor;
    var en = keywords.data[i].en;
    var kor_visit = keywords.data[i].kor_visit;
    var en_visit = keywords.data[i].en_visit;
    vehicles.push(new Vehicle(number, kor, kor_visit, en, en_visit));
  }

  lang = createSelect();
  lang.option('EN & KOR')
  lang.option('ALIGN');
}

function draw() {
  background(color("#ac89ff"))
  lang.position(60, 40);
  push();
textSize(12);
textAlign(LEFT, BASELINE);
noStroke();
fill(255, 255, 0);
text("EN", 190, 54);
ellipse(180, 50, 10, 10);
fill(0, 255, 255);
text("KOR", 250, 54);
ellipse(240, 50, 10, 10);
pop();
  for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
if (lang.value() == "ALIGN"){
      v.update();
      v.show1();
      v.behaviors1()
    } else{
      v.update();
      v.show0()
      v.behaviors0()
    }
}
}
