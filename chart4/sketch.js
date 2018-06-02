// Based on: Daniel Shiffman's Particles code & textToPoints instruction


var vehicles = [];


function preload() {
  services = loadJSON("service.json");
}



function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < services.data.length; i++) {
    var number = services.data[i].number;
    var kor = services.data[i].kor;
    var country = services.data[i].country;
    var percentage = ((services.data[i].kor)/2975)*100;
    vehicles.push(new Vehicle(
      number,
      services.data[i].number_word.toString(),
      kor,
      country,
      percentage));
  }

  lang = createSelect();
  lang.option('kor')
  lang.option('reorder');

}



function draw(){
  background(color("#ac89ff"));
  // var baseline = height - height/6;
  lang.position(80, 80);
  for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
if (lang.value() == "reorder"){
  noFill()
  stroke(color("#a280ff"))
  ellipse(600, 300, 560, 560);
      v.update();
      v.show1();
      v.behaviors1()
    } else{
      noFill()
      stroke(255,0,0)
      ellipse(600, 300, 560, 560);
        v.update();
        v.show0()
        v.behaviors0()
    }
}
}
