/*
  Miscellaneous JavaScript for the main personal page. See tile.js file for the
  JavaScript for the flashing tiles in the main page masthead.
*/

$(function() {
  // Smooth scroll:
  $('a[href*=#]:not([href=#])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({ scrollTop: target.offset().top }, 1000);
      return false;
    }
  });
});
