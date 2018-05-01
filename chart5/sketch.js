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
  lang.option('all')
  lang.option('reorder');
}

function draw() {
  background(color("#7c4dff"))
  lang.position(80, 80);
  for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
if (lang.value() == "reorder"){
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
