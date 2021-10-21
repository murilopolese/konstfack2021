let ballX = 100
let ballY = 100
let speedX = 2
let speedY = 1

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(150)

  for (let y = 0; y < 50; y += 1) {
    for (let x = 0; x < 50; x += 1) {
      if (((y*10)+x) % 3 == 0) {
        square(
          x*20,
          y*20,
          20
        )
      }

    }
  }

}
