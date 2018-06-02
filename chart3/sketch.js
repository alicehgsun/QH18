// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var week;
var vehicles = [];

function preload() {
  weeks = loadJSON("week.json");
}



function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < weeks.data.length; i++) {
    var week = weeks.data[i].week
    var en = weeks.data[i].en
    var kor = weeks.data[i].kor
    vehicles.push(new Vehicle(
      week * (width / 14),
      weeks.data[i].date.toString(),
      en,
      kor));
  }
// 1200/15 * 2/1 = (width * week) / 15

  lang = createSelect();
  lang.option('all')
  lang.option('en');
  lang.option('kor');

}



function draw(){
  background(color("#ac89ff"));

  lang.position(60, 40);
  for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
if (lang.value() == "en"){
      v.update();
      v.show1();
      v.behaviors1()
    } else if (lang.value() == "kor"){
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
