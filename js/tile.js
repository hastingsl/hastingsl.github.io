/* JavaScript to generate and darken/lighten the colored tiles at random. */

$(function(){
  generate_tiles();
  setInterval(animate_tiles, 1000);
});

function animate_tiles() {

  // Return dark tiles to normal:
  $(".darken").each(function(index) {
    $("#" + $(this).attr("id")).removeClass("darken");
  });

  // Return light tiles to normal:
  $(".lighten").each(function(index) {
    $("#" + $(this).attr("id")).removeClass("lighten");
  });

  for(var i = 0; i < 10; i++) {
    // Lighten random tile:
    lighten();
    // Darken random tile:
    darken();
  }

}

function darken() {
  var item_id = "#overlay-" + get_random_num(100);
  console.log(item_id);
  if($(item_id).hasClass("darken") || $(item_id).hasClass("lighten")) {
    darken();
  }
  else {
    console.log("something");
    $(item_id).addClass("darken");
  }
}

function generate_tiles() {
  // Array of possible tile colors:
  var tile_colors = ["rgb(51, 122, 183)", "rgb(92, 184, 92)", "rgb(91, 192, 222)", "rgb(240, 173, 78)", "rgb(217, 83, 79)"];
  for(var i = 0; i < 100; i++) {
    // Adds grid of tiles:
    $("#tile-holder").append('<div class="tile" id="tile-' + i + '"></div>');
    // Adds grid of overlay tiles to lighten/darken:
    $("#overlay-grid").append('<div class="overlay-tile tile" id="overlay-' + i + '"></div>');
    var color = tile_colors[get_random_num(tile_colors.length)];
    // Randomly assigns color to each tile:
    $("#tile-" + i).css("background-color", color);
  }
}

function get_random_num(upper_limit) {
  return Math.floor(Math.random() * upper_limit);
}

function lighten() {
  var item_id = "#overlay-" + get_random_num(100);
  if($(item_id).hasClass("darken") || $(item_id).hasClass("lighten")) {
    lighten();
  }
  else {
    $(item_id).addClass("lighten");
  }
}
