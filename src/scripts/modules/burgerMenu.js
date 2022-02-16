// Remove .active class from navbar when in burger menu
jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 992) {
      $(".activeNavbarPagination")
        .removeClass("active")
        .addClass("text-dark shadow-sm border border-2"); //Changing Navigation styles in mobile view
    } else if (ww >= 993) {
      $(".activeNavbarPagination")
        .addClass("active")
        .removeClass("text-dark shadow-sm border border-2"); //Making it normal again for big view
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

//   export default burgerMenu
