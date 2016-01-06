/* JavaScript to generate and darken/lighten the colored tiles at random. */

// Object representing tile color:
function tile_color(background, border) {
  this.background = background;
  this.border = border;
}

// Array of possible tile colors:
var tile_colors = [];
// Add colors to array:
// Dark blue:
tile_colors.push(new tile_color("rgb(51, 122, 183)", "rgba(51, 122, 183, 0.5)"));
// Green:
tile_colors.push(new tile_color("rgb(92, 184, 92)", "rgba(92, 184, 92, 0.5)"));
// Teal:
tile_colors.push(new tile_color("rgb(91, 192, 222)", "rgba(91, 192, 222, 0.5)"));
// Orange:
tile_colors.push(new tile_color("rgb(240, 173, 78)", "rgba(240, 173, 78, 0.5)"));
// Red:
tile_colors.push(new tile_color("rgb(217, 83, 79)", "rgba(217, 83, 79, 0.5)"));

$(function(){
7
  // Generate tiles:
  for(var i = 0; i < 100; i++) {
    $("#tile-holder").append('<div class="tile" id="id-' + i + '"></div>');
    var color_index = Math.floor(Math.random() * (tile_colors.length));
    var color_obj = tile_colors[color_index];
    $("#id-" + i).css("background-color", color_obj.background);
  }

});
