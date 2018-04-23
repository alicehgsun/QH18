class Vehicle {

  constructor(week, week_word, en, kor) {
    this.en_freq = map(en, 0, 2000, 400, 0)
    this.kor_freq = map(kor, 0, 2000, 400, 0)
    this.kor_value = kor;
    this.en_value = en;
    this.en = createVector(week, this.en_freq);
    this.kor = createVector(week, this.kor_freq);
    this.week_word = week_word;
    this.week = week / 80;
    this.en_size = en / 20;
    this.kor_size = kor / 20;
    this.target = createVector(week, this.en_freq);
    this.target2 = createVector(week, this.kor_freq);
    this.center = createVector(week, 300);;

    this.vel = createVector();
    this.vel.mult(0.1);
    this.acc = createVector();
    this.maxspeed = 3;
    this.maxforce = 2;
  }

  update() {
    this.en.add(this.vel);
    this.kor.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.vel.mult(0.95);

  }

  applyForce(f) {
    this.acc.add(f);
  }

  show0() {
    fill(0, 0, 255)
    noStroke();
    ellipse(this.en.x, this.en.y, this.en_size, this.en_size);
    fill(255)
    textSize(12);
    textAlign(CENTER);
    text(this.week_word, this.en.x, 540);

    fill(255, 0, 0)
    ellipse(this.kor.x, this.kor.y, this.kor_size, this.kor_size);

    fill(100, 0, 255)
    text("EN | " + this.en_value, this.en.x, this.en.y - this.en_size);
    fill(180, 0, 100)
    text("KOR | " + this.kor_value, this.kor.x, this.kor.y - this.kor_size);

    if (mouseX >= this.en.x && mouseX <= this.en.x + this.en_size &&
      mouseY >= this.en.y && mouseY <= this.en.y + this.en_size) {
      fill(0, 0, 255)
      text("EN | " + this.en_value, this.en.x, this.en.y - this.en_size);
    } else if (mouseX >= this.kor.x && mouseX <= this.kor.x + this.kor_size + 10 &&
      mouseY >= this.kor.y && mouseY <= this.kor.y + this.kor_size + 10) {
      fill(255, 0, 0)
      text("KOR | " + this.kor_value, this.kor.x, this.kor.y - this.kor_size);
      }
  }

  show1() {
    fill(0, 0, 255)
    ellipse(this.en.x, this.en.y, this.en_size, this.en_size);
    textAlign(CENTER);
    textSize(this.en_size / 2);
    text(this.en_value, this.en.x, 200);
    fill(255)
    textSize(12);
    text(this.week_word, this.en.x, 540);


    fill(color("#d24dff"))
    ellipse(this.kor.x, this.kor.y, this.kor_size, this.kor_size);

  }

  show2() {
    fill(color("#4d4dff"))
    ellipse(this.en.x, this.en.y, this.en_size, this.en_size);

    fill(255, 0, 0)
    ellipse(this.kor.x, this.kor.y, this.kor_size, this.kor_size);
    textAlign(CENTER);
    textSize(this.kor_size * 2);
    text(this.kor_value, this.kor.x, 200)
    fill(255)
    textSize(12);
    text(this.week_word, this.en.x, 540);
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

  behaviors2() {
    var arrive2 = this.arrive2(this.center);
    arrive2.mult(1);
    this.applyForce(arrive2);
  }

  arrive0(target) {
    let desired = p5.Vector.sub(this.target, this.en);
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
    let desired = p5.Vector.sub(this.center, this.en);
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

  arrive2(target) {
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
