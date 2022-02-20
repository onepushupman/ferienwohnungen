if ($(window).width() < 600) {
  // jQuery lightSlider Cover
  $(document).ready(function () {
    $("#light-slider").lightSlider({
      item: 2,
      autoWidth: false,
      slideMove: 1, // slidemove will be 1 if loop is true
      slideMargin: 0,

      addClass: "",
      mode: "slide",
      useCSS: true,
      cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
      easing: "linear", //'for jquery animation',////

      speed: 400, //ms'
      auto: true,
      pauseOnHover: false,
      loop: true,
      slideEndAnimation: true,
      pause: 8000,

      keyPress: false,
      controls: true,
      prevHtml: "",
      nextHtml: "",

      rtl: false,
      adaptiveHeight: false,

      vertical: false,
      verticalHeight: 500,
      vThumbWidth: 100,

      thumbItem: 10,
      pager: false,
      gallery: false,
      galleryMargin: 5,
      thumbMargin: 5,
      currentPagerPosition: "middle",

      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      swipeThreshold: 40,

      responsive: [],

      onBeforeStart: function (el) {},
      onSliderLoad: function (el) {},
      onBeforeSlide: function (el) {},
      onAfterSlide: function (el) {},
      onBeforeNextSlide: function (el) {},
      onBeforePrevSlide: function (el) {},
    });
    AOS.init({
      disable: window.innerWidth < 991,
    }); // initializing aos scroll
  });
} else {
  // jQuery lightSlider Cover
  $(document).ready(function () {
    $("#light-slider").lightSlider({
      item: 3,
      autoWidth: false,
      slideMove: 1, // slidemove will be 1 if loop is true
      slideMargin: 0,

      addClass: "",
      mode: "slide",
      useCSS: true,
      cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
      easing: "linear", //'for jquery animation',////

      speed: 400, //ms'
      auto: true,
      pauseOnHover: false,
      loop: true,
      slideEndAnimation: true,
      pause: 8000,

      keyPress: false,
      controls: true,
      prevHtml: "",
      nextHtml: "",

      rtl: false,
      adaptiveHeight: false,

      vertical: false,
      verticalHeight: 500,
      vThumbWidth: 100,

      thumbItem: 10,
      pager: false,
      gallery: false,
      galleryMargin: 5,
      thumbMargin: 5,
      currentPagerPosition: "middle",

      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      swipeThreshold: 40,

      responsive: [],

      onBeforeStart: function (el) {},
      onSliderLoad: function (el) {},
      onBeforeSlide: function (el) {},
      onAfterSlide: function (el) {},
      onBeforeNextSlide: function (el) {},
      onBeforePrevSlide: function (el) {},
    });
    AOS.init({
      disable: window.innerWidth < 991,
    }); // initializing aos scroll
  });
}

// jQuery lightSlider Brands
$(document).ready(function () {
  $("#light-slider-brands").lightSlider({
    item: 5,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 0,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: true,
    pauseOnHover: false,
    loop: true,
    slideEndAnimation: true,
    pause: 8000,

    keyPress: false,
    controls: true,
    prevHtml: "",
    nextHtml: "",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
});

// allows us to choose what this file will export if another file will try to import it.
// export default lightSLider
