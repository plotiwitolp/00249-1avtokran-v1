!function(e){e(document).ready((function(){e(".cities__list").slick({infinite:!0,slidesToShow:7,slidesToScroll:1,prevArrow:e(".cities__slider-prev"),nextArrow:e(".cities__slider-next"),responsive:[{breakpoint:1001,settings:{slidesToShow:5}},{breakpoint:801,settings:{slidesToShow:4}},{breakpoint:601,settings:{slidesToShow:3}}]}),e(".topsingle__img-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:e(".topsingle__slider-prev"),nextArrow:e(".topsingle__slider-next")}),e(".header-nav__mob-btn").on("click",(function(){e(this).toggleClass("active"),e(".header-nav nav").toggleClass("active")}))}))}(jQuery);