class Vehicle {

  constructor(number, x_word, kor, country, percentage) {
    this.kor_value = kor;
    this.number = number;
    this.kor = createVector(width/2 - 200*sin(number*4), height/2 - 200*cos(number*4));
    this.target = createVector(width/2 - 200*sin(number*4), height/2 - 200*cos(number*4));
    this.x_word = x_word;
    this.kor_size = kor/7;
    this.center = createVector(width/2 - 200*sin(number*4), 300);
    if (country == "korea"){
      this.r = 255;
      this.g = 0;
      this.b = 0;
    } else if (country == "us"){
      this.r = 0;
      this.g = 0;
      this.b = 255;
    } else {
      this.r = 160;
      this.g = 160;
      this.b = 160;
    }
    this.percentage = round(percentage)
    ;

    this.vel = createVector();
    this.vel.mult(0.1);
    this.acc = createVector();
    this.maxspeed = 3;
    this.maxforce = 2;
  }

  update() {
    this.kor.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.vel.mult(0.95);
  }

  applyForce(f) {
  this.acc.add(f);
}

  show0() {
    strokeWeight(1.5);
    fill(this.r, this.g, this.b)
    ellipse(this.kor.x, this.kor.y, this.kor_size, this.kor_size);
    noStroke()
    fill(255)
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Services | KOR", width/2, height/2);
    textSize(12);
    text(this.x_word, this.kor.x, this.kor.y);
  }

  show1() {
    noStroke()
    fill(color("#ac89ff"))
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Services | KOR", width/2, height/1.3);

    strokeWeight(1.5);
    stroke(this.r, this.g, this.b)
    noFill();
    ellipse(width/2-this.number*130+500, this.kor.y, this.kor_size, this.kor_size);
    textAlign(CENTER);
    noStroke()
    fill(255)
    var mapped = map(this.kor_size, 0, 120, 10, 25 )
    textSize(mapped);
    text(this.x_word, width/2-this.number*130+500, 200);
    textSize(12);
    text(this.percentage + "%", width/2-this.number*130+500, 400);
  }


  behaviors0() {
    var arrive0 = this.arrive0(this.target);
    arrive0.mult(1);
    this.applyForce(arrive0);
  }

  behaviors1() {
    var arrive = this.arrive(this.center);
    arrive.mult(1);
    this.applyForce(arrive);
  }


  arrive0(target) {
  let desired = p5.Vector.sub(this.target, this.kor);
  var d = desired.mag();
  let speed = this.maxspeed;
  if (d < 120) {
    speed = map(d, 0, 120, 0, this.maxspeed);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}


  arrive(target) {
  let desired = p5.Vector.sub(this.center, this.kor);
  var d = desired.mag();
  let speed = this.maxspeed;
  if (d < 120) {
    speed = map(d, 0, 120, 0, this.maxspeed);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

}
