let myText = 'KONSTFACK_2021'
let fonts = [
  'Andale Mono',
  'Arial',
  'Avenir',
  'Big Caslon',
  'Bodoni 72',
  'Chalkboard'
]

function setup() {
  createCanvas(500, 500)
  frameRate(1)
}

function draw() {

  background(0)

  fill(255)
  for (let y = 0; y < 10; y++) {
    for (let i = 0; i < myText.length; i++) {
      textFont(random(fonts))
      textSize(random(10, 32))

      text(
        myText[i], // TXT
        32 + (i * 24), // X
        100 + (y * 32) // Y
      )
    }
  }

}
