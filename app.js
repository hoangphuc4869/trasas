var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
});

$(window).load(function () {
  $("#slider").nivoSlider({
    effect: "random",
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 1000,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: false,
    controlNav: false,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: "Prev",
    nextText: "Next",
    randomStart: false,
    beforeChange: function () {},
    afterChange: function () {},
    slideshowEnd: function () {},
    lastSlide: function () {},
    afterLoad: function () {},
  });
});
