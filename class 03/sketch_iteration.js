let circleSize = 20
let rectangleSize = 20

function setup() {
  createCanvas(500, 1000)
  angleMode(DEGREES)
  noStroke()
}

function draw() {
  background(250)
  noStroke()
  fill(100)

  for (let i = 0; i < 7; i++) {
    circle(
      100 + i*circleSize*2, // X
      50, // Y
      circleSize // SIZE
    )
  }

  for (let i = 1; i <= 10; i++) {
    fill(i*25)
    rect(
      100 + i*rectangleSize, // X
      75,
      rectangleSize,
      i * rectangleSize
    )
  }

  stroke(0)
  for (let i = 0; i < 10; i++) {
    line(
      50 + (i*rectangleSize), // X1
      300, // Y1
      50, // X2
      300 + 10*rectangleSize // Y2
    )
    line(
      250 + (10*rectangleSize) - (i*rectangleSize), // X1
      300, // Y1
      250, // X2
      300 + i*rectangleSize // Y2
    )
  }

  fill(255)
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill((x+y)*10)
      square(
        50 + x*rectangleSize, // X
        550 + y*rectangleSize,
        rectangleSize
      )
    }
  }

  stroke(0)
  for (let i = 0; i < 50; i++) {
    line(
      300 + i*3,
      550,
      300 + i*3,
      850
    )
  }
  translate(300, 550)
  rotate(0.1*frameCount % 30)
  for (let i = 0; i < 50; i++) {
    line(
      i*3,
      0,
      i*3,
      300
    )
  }

}
