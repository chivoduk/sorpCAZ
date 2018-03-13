
window.onload = function() {

  // open/close blind if click
  jQuery(document).ready(function($) {

    /* select by id */
    $('[data-block]').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
      }
      else {
        $('[data-block]').removeClass('is-active');
        $(this).addClass('is-active');
      }
    });
  
  });

  
  

  // Toggle Mobile Nav
  (function() {
    var toggler = $(".primary-nav .nav-toggler");
    var menu = $(".primary-nav .nav-holder");
    toggler.on("click", function() {
      menu.slideToggle();
    });
  })();

};