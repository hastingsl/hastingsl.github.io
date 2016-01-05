/*Miscellaneous JavaScript for the main personal page. See tile_animation file
for the JavaScript for the flashing tile animation at the top of the page.*/

$(function() {
  // Smooth scroll:
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-10, scrollLeft:target.offset().left-10
        }, 1000);
        return false;
      }
    }
  });
});
