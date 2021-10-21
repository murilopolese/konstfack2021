let bigStripeSize
let smallStripeSize

function setup() {
    createCanvas(400, 600)
    background(250)

    bigStripeSize = 150
    smallStripeSize = 100
    stripeSize = bigStripeSize + smallStripeSize

    noStroke()
    for (let i = 0; i < 3; i++) {
      // Background for small stripe
      noStroke()
      fill('#086d8c')
      rect(
        0,
        i * stripeSize,
        width,
        smallStripeSize
      )

      // Black staircase
      fill(0)
      stroke('#d23902')
      strokeWeight(4)
      beginShape()
      vertex(
        0,
        i * stripeSize + smallStripeSize
      )
      vertex(
        0,
        i * stripeSize + (smallStripeSize/2)
      )

      let stairSize = 20
      for(let x = 0; x < 20; x++) {
        if ((x % 2) == 0) {
          vertex(
            x*stairSize,
            i * stripeSize + (smallStripeSize/2) - 5
          )
        }
        if ((x % 2) == 1) {
          vertex(
            x*stairSize,
            i * stripeSize + (smallStripeSize/2) + 5
          )
        }

      }

      vertex(
        width,
        i * stripeSize + (smallStripeSize/2)
      )
      vertex(
        width,
        i * stripeSize + smallStripeSize
      )

      endShape(CLOSE)

      // White triangles "teeth"
      let triangleSize = 40
      noStroke()
      fill(255)
      for (let x = 0; x < 10; x++) {
        triangle(
          x * triangleSize, //  X1
          i * stripeSize, //  Y1
          (x * triangleSize) + triangleSize, //  X2
          i * stripeSize, //  Y2
          (x * triangleSize), //  X3
          i * stripeSize + triangleSize //  Y3
        )

        triangle(
          x * triangleSize, //  X1
          (i * stripeSize) + smallStripeSize, //  Y1

          (x * triangleSize) + triangleSize, //  X2
          (i * stripeSize) + smallStripeSize, //  Y2

          (x * triangleSize) + triangleSize, //  X3
          (i * stripeSize) + smallStripeSize - triangleSize //  Y3
        )
      }

      // Background for big stripe
      noStroke()
      fill(100)
      rect(
        0,
        (i * stripeSize) + smallStripeSize,
        width,
        bigStripeSize
      )
    }
}
