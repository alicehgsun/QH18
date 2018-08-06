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
    var percentage = ((services.data[i].kor) / 2975) * 100;
    vehicles.push(new Vehicle(
      number,
      services.data[i].number_word.toString(),
      kor,
      country,
      percentage));
  }

  lang = createSelect();
  lang.option('KOR')
  lang.option('ALIGN');

}



function draw() {
  background(color("#ac89ff"));
  // var baseline = height - height/6;
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
    if (lang.value() == "ALIGN") {
      noFill()
      stroke(color("#a280ff"))
      ellipse(600, 300, 560, 560);
      v.update();
      v.show1();
      v.behaviors1()
    } else {
      noFill()
      stroke(0, 255, 255)
      ellipse(600, 300, 560, 560);
      v.update();
      v.show0()
      v.behaviors0()
    }
  }
}
