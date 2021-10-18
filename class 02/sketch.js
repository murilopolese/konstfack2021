let rotationAngle = 40
let rotationAngle2 = 40

// murilopolese@gmail.com

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
}

function draw() {

  background('#c74839') // white
  noStroke()
  fill('#e0d7cc')
  arc(
    width*0.5, // x center
    height*0.5, // y center
    width*0.5, // width
    height*0.5, // height
    rotationAngle, // start
    rotationAngle+180 // end
  )


  fill('#618cb7') // blue
  arc(
    width*0.5, // x center
    height*0.5, // y center
    width*0.5, // width
    height*0.5, // height
    rotationAngle+180, // start
    rotationAngle // end
  )

  fill('#e3c066') // yellow
  arc(
    width*0.5, // x center
    height*0.5, // y center
    width*0.35, // width
    height*0.35, // height
    rotationAngle2+180, // start
    rotationAngle2 // end
  )

  fill('#ea9580') // pink
  arc(
    width*0.5, // x center
    height*0.5, // y center
    width*0.2, // width
    height*0.2, // height
    rotationAngle+180, // start
    rotationAngle // end
  )

  fill('#2c2c2c') // black
  arc(
    width*0.5, // x center
    height*0.5, // y center
    width*0.35, // width
    height*0.35, // height
    rotationAngle2, // start
    rotationAngle2+180 // end
  )


  rotationAngle = rotationAngle + 1
  rotationAngle2 = rotationAngle2 - 1
}
