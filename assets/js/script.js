(function ($) {
  $(document).ready(function () {
    // START document ready
    // start
    $('.cities__list').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      prevArrow: $('.cities__slider-prev'),
      nextArrow: $('.cities__slider-next'),
      responsive: [
        {
          breakpoint: 1001,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
    // end
    // start
    $('.header-nav__mob-btn').on('click', function () {
      $(this).toggleClass('active');
      $('.header-nav nav').toggleClass('active');
    });
    // end
    // END document ready
  });
})(jQuery);
