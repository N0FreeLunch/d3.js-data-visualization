const canvasWidth = 720;
const canvasHeight = 450;
const dotSize = 5;

const minimunDistance = canvasWidth/10;
// 켄버스 가로 사이즈의 10분의 1사이즈

const adjustMargin = canvasWidth/10/2;
// 켄버스 가로 사이즈의 10분의 1사이즈의 반

const xCoor = function (number) {
  return number*minimunDistance - adjustMargin;
}

const yCoor = function (number) {
  return number*minimunDistance - adjustMargin
}


let previousSecond = 0;

function setup () {
  // 처음 화면을 세팅할 때

  previousSecond = second();

  // https://p5js.org/reference/#/p5/createCanvas
  createCanvas(canvasWidth, canvasHeight);

  // https://p5js.org/reference/#/p5/background
  background(51);

  // https://p5js.org/reference/#/p5/frameRate
  // frameRate(60);

  fill(255);

  // https://p5js.org/reference/#/p5/noStroke
  noStroke();

  // 참고
  // for (var i = 1; i <= 10; i++) {
  //   circle(i*minimunDistance - adjustMargin, 1*minimunDistance - adjustMargin, dotSize, dotSize);
  // }

  // https://p5js.org/reference/#/p5/circle
   circle(xCoor(1), yCoor(1), dotSize, dotSize);
   circle(xCoor(2), yCoor(1), dotSize, dotSize);
   circle(xCoor(3), yCoor(1), dotSize, dotSize);
   circle(xCoor(4), yCoor(1), dotSize, dotSize);
   circle(xCoor(5), yCoor(1), dotSize, dotSize);
   circle(xCoor(6), yCoor(1), dotSize, dotSize);
   circle(xCoor(7), yCoor(1), dotSize, dotSize);
   circle(xCoor(8), yCoor(1), dotSize, dotSize);
   circle(xCoor(9), yCoor(1), dotSize, dotSize);
   circle(xCoor(10), yCoor(1), dotSize, dotSize);

   for (var i = 1; i <= 10; i++) {
      circle(xCoor(i), yCoor(2), dotSize, dotSize);
   }

   for (var i = 1; i <= 10; i++) {
      circle(xCoor(i), yCoor(3), dotSize, dotSize);
   }

   for (var i = 1; i <= 10; i++) {
      circle(xCoor(i), yCoor(4), dotSize, dotSize);
   }

   for (var i = 1; i <= 10; i++) {
      circle(xCoor(i), yCoor(5), dotSize, dotSize);
   }

   for (var i = 1; i <= 10; i++) {
      circle(xCoor(i), yCoor(6), dotSize, dotSize);
   }


}


function draw () {
  // 화면을 그릴 때 frame 만큼 그린다.
  // p5js 기본 프레임이 30프레임이라서 30번 draw가 실행이 된다.
  // 프레임이 30이기 때문에 1 초에 draw가 30번 실행이 된다.
  // 1초 -> 2초가 되면 draw의 내부 로직을 실행한다.
  // 1초에 29번 내부 로직을 실행하지 않고
  // 1초에 1번만 내부 로직을 실행한다.

  // console.log(second());
  if(previousSecond === second()) {
    // 저장한 시간이랑 현재시간이 같다면 초가 변하지 않았다.
    // 1초에서 1초가 되었을 때는 선을 그리지 말라
    // 1초에서 2초가 되었을 때는
    // 29번 내부 로직을 실행하지 않고

    // 1.03, 1.06, 1.09 .... // 어차피 1초이므로 실행하지 말라
    // 2 // 1에서 2초가 되었을 때는 실행
    // 2.03, 2.06 // 2초에서 2초니까 실행하지 말라.
    return;
  }

  previousSecond = second();

  const xCoorRan = function () {
    return Math.ceil(random(0, 10));
  };

  const yCoorRan = function () {
    return Math.ceil(random(0, 6));
  };

  line(xCoor(xCoorRan()), yCoor(yCoorRan()), xCoor(xCoorRan()), yCoor(yCoorRan()));
  // https://p5js.org/reference/#/p5/line
  stroke(255);

}
