// JavaScript responsible for main page flashing tiles
$(function () {
  var colors = ['#5bc0de', '#337ab7', '#5cb85c', '#f0ad4e', '#d9534f']
  for (var i = 0; i < 100; i++) {
    $('#tile-' + i).css('background-color', colors[getRandomNumber(colors.length)])
  }
  setInterval(animate, 1000)
})

function animate () {
  // Removes the lighten and darken classes on elements possessing these classes.
  remove('dark')
  remove('light')
  // Darkens and lightens 20 tiles.
  for (var i = 0; i < 10; i++) {
    changeColor('dark')
    changeColor('light')
  }
}

function changeColor (transition) {
  $('#overlay-' + getRandomNumber(100)).addClass(transition)
}

function getRandomNumber (upperLimit) {
  return Math.floor(Math.random() * upperLimit)
}

function remove (className) {
  $('.' + className).each(function (index) {
    $('#' + $(this).attr('id')).removeClass(className)
  })
}
