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
      month * (width / 5.2),
      months.data[i].month_word.toString() + "\nen",
      en,
      kor));
  }

  lang = createSelect();
  lang.option('all')
  lang.option('en');
  lang.option('kor');

}



function draw(){
  background(0);
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
