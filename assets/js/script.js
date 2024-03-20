(function ($) {
  $(document).ready(function () {
    // START document ready
    $('.cities__list').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      prevArrow: $('.cities__slider-prev'),
      nextArrow: $('.cities__slider-next'),
    });
    // END document ready
  });
})(jQuery);
