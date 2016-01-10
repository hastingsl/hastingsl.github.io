// JavaScript responsible for main page flashing tiles.

$(function() {

  // Randomly assigns colors to tiles:
  var colors = ["rgb(51, 122, 183)", "rgb(92, 184, 92)", "rgb(91, 192, 222)", "rgb(240, 173, 78)", "rgb(217, 83, 79)"];
  for(var i = 0; i < 100; i++)
    $("#tile-" + i).css("background-color", colors[getRandomNumber(colors.length)]);

  setInterval(animate, 1000);

});

function animate() {

  // Removes the lighten and darken classes on elements possessing these classes.
  remove("dark");
  remove("light");

  // Darkens and lightens 20 tiles.
  for(var i = 0; i < 10; i++) {
    changeColor("dark");
    changeColor("light");
  }

}

/* Randomly chooses an overlay tile to darken or lighten by adding the class
  passed to the function. */
function changeColor(transition) {
  $("#overlay-" + getRandomNumber(100)).addClass(transition);
}

/* Generates a random integer less than the upper limit passed to the function. */
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

/* Iterates over every element possessing the class name passed to the function
  and removes the class. */
function remove(className) {
  $("." + className).each(function(index) {
    $("#" + $(this).attr("id")).removeClass(className);
  });
}
