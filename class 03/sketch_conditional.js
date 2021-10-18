let ballX = 100
let ballY = 100
let ballSpeedX = 3
let ballSpeedY = 1
let rectangleSize = 20

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
  noStroke()
}

function draw() {
  background(250)
  fill(100)
  stroke(0)

  line(width/2, 0, width/2, height)
  if (ballX > width/2) {
    text('Ball is on the RIGHT', 100, 50)
  } else {
    text('Ball is on the LEFT', 100, 50)
  }

  ballX += ballSpeedX
  ballY += ballSpeedY

  if (ballX > width || ballX < 0) {
    ballSpeedX *= -1
  }
  if (ballY > height || ballY < 0) {
    ballSpeedY *= -1
  }
  circle(ballX, ballY, 50)

  fill(255)
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      if (((y+10)+x) % 3 == 0) {
        fill(0)
      } else {
        fill(255)
      }
      square(
        100 + x*rectangleSize, // X
        150 + y*rectangleSize, // Y
        rectangleSize // Size
      )
    }
  }

}
