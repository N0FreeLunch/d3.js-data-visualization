let numBalls = 0;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls = [];

let ballId = 0;

let initSecond = 0;
let initMinute = 0;

let previousSecond = 0;
let previousMinute = 0;

let secondBallSize = 10;
let tenSecondBallSize = 20;
// let minBallSize = 60;

function setup() {
  createCanvas(720, 400);
  previousSecond = second();
  previousMinute = minute();

  initSecond = previousSecond;
  initMinute = previousMinute;

  noStroke();
  fill(255, 204);
}

function draw() {
  background(0);
  if(previousSecond != second() || previousMinute != minute()) {
    numBalls++;
    previousSecond = second();
    previousMinute = minute();

    let defineBallSize = 0;

    if((initSecond - previousSecond) % 10 == 0) {
      defineBallSize = tenSecondBallSize;
    }else {
      defineBallSize = secondBallSize;
    }

    // if(previousSecond == initSecond) {
    //   balls = [];
    //   defineBallSize = minBallSize;
    // }

    balls.push(new Ball(
      random(width),
      random(height),
      defineBallSize,
      ballId++,
      balls
    ));
  }

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}


class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
