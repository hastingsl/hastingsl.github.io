/*
  Miscellaneous JavaScript for main personal page.
  See tile.js file for main page mastead flashing tiles.
*/

$(function () {
  // Smooth scroll:
  $('a[href*=#]:not([href=#])').click(function () {
    var target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    if (target.length) {
      $('html,body').animate({ scrollTop: target.offset().top }, 1000)
      return false
    }
  })
})
