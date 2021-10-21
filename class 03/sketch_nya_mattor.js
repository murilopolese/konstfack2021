let ballX = 100
let ballY = 100

let speedX = 2
let speedY = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  background(0)
  noStroke()

  for (let y = 0; y < height/10; y += 1) {
    for (let x = 0; x < width/10; x += 1) {
      if (y%4 == 0) {
        if ((x+3) % 10 < 5) {
          fill(0)
        } else {
          fill(255, 0, 0)
        }
      }
      if (y%4 == 1) {
        if ((x+3) % 10 == 2) {
          fill(0)
        } else {
          fill(255, 0, 0)
        }
      }
      if (y%4 == 2) {
        if ((x+3) % 10 < 5) {
          fill(0)
        } else {
          fill(255)
        }
      }
      if (y%4 == 3) {
        if ((x+3) % 10 == 2) {
          fill(0)
        } else {
          fill(255, 0, 0)
        }
      }
      rect(x*10, y*10, 10)
    }
  }

}
