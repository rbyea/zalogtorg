$(document).ready(function () {
  $('.slider-index').slick({
    dots: true,
    fade: true,
    arrows: false,

  });

  if ($('.reviews-slider__item').length) {
    $('.reviews-slider__item').matchHeight();
  }

  if ($('.catalog__item_footer').length) {
    $('.catalog__item_footer').matchHeight({
      byRow: 0
    });
  }



  $('.reviews-slider').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: $('.arrow-l'),
    nextArrow: $('.arrow-r'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.tab-widget__link').click(function (e) {
    e.preventDefault();

    var tabWidget = $(this).closest('.tab-widget');
    tabWidget.find('.tab-widget__link').removeClass('active');
    $(this).addClass('active');
    tabWidget.find('.tab').removeClass('active');
    if ($(this).attr('href') != "#") {
      tabWidget.find('.tab').eq($(this).attr('href')).addClass('active');
    } else {

      tabWidget.find('.tab').eq($(this).index()).addClass('active');
    }
  })
  if ($('.select_js').length) {
    $('.select_js').select2({
      width: '100%',
      height: '100%',
      minimumResultsForSearch: -1
    });
  }

  $('#selected').change(function () {
    // $('.product_offset_top').eq($(this).val()).toggleClass('active');
    var Eq = $(this).val();
    console.log(Eq);
    var el = $(this).closest('.tab-widget');
    el.find('.tab').removeClass('active');
    el.find('.tab').eq(Eq).addClass('active');
    $('html, body').animate({
      scrollTop: $(el.find('.catalog__item')).offset().top
    }, 500);
    // $('.match-height').matchHeight();
  });

});