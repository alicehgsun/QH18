// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var month;
var vehicles = [];

function preload() {
  months = loadJSON("month.json");
}



function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < months.data.length; i++) {
    var month = months.data[i].month
    var en = months.data[i].en
    var kor = months.data[i].kor
    vehicles.push(new Vehicle(
      month * (width / 4),
      months.data[i].month_word.toString(),
      en,
      kor));
  }

  lang = createSelect();
  lang.option('EN & KOR');
  lang.option('EN');
  lang.option('KOR');

}



function draw(){
  background(color("#ac89ff"));
  lang.position(60, 40);
  push();
  textSize(12);
  textAlign(LEFT);
  noStroke();
  fill(255,255,0);
  text("EN", 190, 54);
  ellipse(180, 50, 10,10);
  fill(0, 255, 255);
  text("KOR", 250, 54);
  ellipse(240, 50, 10,10);
  pop();
  for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
if (lang.value() == "EN"){
      v.update();
      v.show1();
      v.behaviors1()
    } else if (lang.value() == "KOR"){
      v.update();
      v.show2()
      v.behaviors2()
    } else{
      v.update();
      v.show0()
      v.behaviors0()
    }
}
}
