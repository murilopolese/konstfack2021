window.addEventListener('load', function() {
  button = document.querySelector('button')
  button.addEventListener('click', function() {
    document.body.innerHTML += `<p>Clicked</p>`
  })
})
