class Vehicle {

  constructor(number, kor, kor_visit, en, en_visit) {
    this.en_vec = createVector(width / 4 - 200 * sin(number * 2), height / 2 - 200 * cos(number * 2));
    this.en_tar = createVector(width / 4 - 200 * sin(number * 2), height / 2 - 200 * cos(number * 2));
    this.kor_vec = createVector((width / 4) * 3 - 200 * sin(number * 2), height / 2 - 200 * cos(number * 2));
    this.kor_tar = createVector((width / 4) * 3 - 200 * sin(number * 2), height / 2 - 200 * cos(number * 2));
    this.number = number;
    this.kor = kor;
    this.en = en;
    this.kor_visit = kor_visit;
    this.en_visit = en_visit;
    this.kor_size = kor_visit / 12
    this.en_size = en_visit / 12

    this.vel = createVector();
    this.vel.mult(0.1);
    this.acc = createVector();
    this.maxspeed = 3;
    this.maxforce = 2;
    this.en_center = createVector(width / 4 - 240 * sin(number * 25), height / 2 - 240 * cos(number * 25));
    this.kor_center = createVector(width / 4 - 240 * sin(number * 25), height / 2 - 240 * cos(number * 25));
  }

  update() {
    this.en_vec.add(this.vel);
    this.kor_vec.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.vel.mult(0.95);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  behaviors0() {
    var arrive0 = this.arrive0(this.en_tar);
    var arrive1 = this.arrive0(this.kor_tar);
    arrive0.mult(1);
    arrive1.mult(1);
    this.applyForce(arrive0)
    this.applyForce(arrive1);
  }

  behaviors1() {
    var arrive0 = this.arrive(this.en_vec);
    var arrive1 = this.arrive(this.kor_vec);
    arrive0.mult(1);
    arrive1.mult(1);
    this.applyForce(arrive0)
    this.applyForce(arrive1);
  }

  arrive0(en_tar) {
    let desired = p5.Vector.sub(this.en_tar, this.en_vec);
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


  arrive(en_tar) {
    let desired = p5.Vector.sub(this.en_center, this.en_vec);
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

  show0() {
    noStroke()
    fill(255)
    textAlign(CENTER);
    textSize(20);
    text("Keywords | EN", width / 4, height / 2);
    text("Keywords | KOR", (width / 4) * 3, height / 2);

    noFill();
    stroke(0, 0, 255);
    ellipse(width / 4, 300, 560, 560);
    stroke(255, 0, 0);
    ellipse((width / 4) * 3, 300, 560, 560);

    noStroke()
    if (mouseX >= this.en_vec.x && mouseX <= this.en_vec.x + 30 &&
      mouseY >= this.en_vec.y && mouseY <= this.en_vec.y + 30 ||
      mouseX >= this.kor_vec.x && mouseX <= this.kor_vec.x + 30 &&
      mouseY >= this.kor_vec.y && mouseY <= this.kor_vec.y + 30) {
      fill(255, 0, 255);
      ellipse(this.en_vec.x, this.en_vec.y, this.en_size, this.en_size);
      ellipse(this.kor_vec.x, this.kor_vec.y, this.kor_size, this.kor_size);
      fill(255, 255, 255);
      textAlign(CENTER, CENTER);
      textSize(14);
      text(this.en + " | " + this.en_visit, this.en_vec.x, this.en_vec.y);
      text(this.kor + " | " + this.kor_visit, this.kor_vec.x, this.kor_vec.y);
    } else {
      fill('rgba(0,0,255, 0.5)');
      ellipse(this.en_vec.x, this.en_vec.y, this.en_size, this.en_size);
      fill('rgba(255,0,0, 0.5)');
      ellipse(this.kor_vec.x, this.kor_vec.y, this.kor_size, this.kor_size);
      fill(255, 255, 255);
      textAlign(CENTER, CENTER);
      textSize(12);
      text(this.en, this.en_vec.x, this.en_vec.y);
      text(this.kor, this.kor_vec.x, this.kor_vec.y);
    }
  }

  show1() {
    noStroke()
    fill(255)
    textAlign(CENTER);
    textSize(20);
    text("Keywords | EN", width / 4, height / 2);
    text("Keywords | KOR", (width / 4) * 3, height / 2);

    noFill();
    stroke(0, 0, 255);
    ellipse(width / 4, 300, 560, 560);
    stroke(255, 0, 0);
    ellipse((width / 4) * 3, 300, 560, 560);

    noStroke()
    if (mouseX >= width / 4 - 180 * sin(this.number * 19) && mouseX <= width / 4 - 180 * sin(this.number * 19) + 30 &&
      mouseY >= height / 2 - 180 * cos(this.number * 19) && mouseY <= height / 2 - 180 * cos(this.number * 19) + 30 ||
      mouseX >= (width / 4) * 3 - 180 * sin(this.number * 19) && mouseX <= (width / 4) * 3 - 180 * sin(this.number * 19) + 30 &&
      mouseY >= height / 2 - 180 * cos(this.number * 19) && mouseY <= height / 2 - 180 * cos(this.number * 19) + 30) {
        noFill()
        stroke(255)
        line(this.kor_vec.x-50, this.kor_vec.y, this.en_vec.x+50, this.en_vec.y)
        stroke('rgba(255,0,0, 0.5)');
        ellipse(this.kor_vec.x, this.kor_vec.y, this.kor_size, this.kor_size);
        stroke('rgba(0,0,255, 0.5)');
        ellipse(this.en_vec.x, this.en_vec.y, this.en_size, this.en_size);

        noStroke()
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(14);
        text(this.en + " | " + this.en_visit, this.en_vec.x, this.en_vec.y);
        text(this.kor + " | " + this.kor_visit, this.kor_vec.x, this.kor_vec.y);
        fill(0,0,255)
        text(this.number, width / 4 - 180 * sin(this.number * 19), height / 2 - 180 * cos(this.number * 19));
        fill(255,0,0)
        text(this.number, (width / 4) * 3 - 180 * sin(this.number * 19), height / 2 - 180 * cos(this.number * 19));
    } else {
      noFill()
      stroke('rgba(255,0,0, 0.5)');
      ellipse(this.kor_vec.x, this.kor_vec.y, this.kor_size, this.kor_size);
      stroke('rgba(0,0,255, 0.5)');
      ellipse(this.en_vec.x, this.en_vec.y, this.en_size, this.en_size);

      noStroke()
      fill('rgba(255,255,255, 0.5)');
      textAlign(CENTER, CENTER);
      textSize(12);
      text(this.en, this.en_vec.x, this.en_vec.y);
      text(this.kor, this.kor_vec.x, this.kor_vec.y);
      fill(255)
      text(this.number, width / 4 - 180 * sin(this.number * 19), height / 2 - 180 * cos(this.number * 19));
      text(this.number, (width / 4) * 3 - 180 * sin(this.number * 19), height / 2 - 180 * cos(this.number * 19));
    }
  }
}
