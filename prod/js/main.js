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

  if ($('.catalog__item_imgae').length) {
    $('.catalog__item_imgae').matchHeight({
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


  $('.product-slider').slick({
    slidesToShow: 4,
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


  $('.catalog_star').click(function () {
    $(this).toggleClass('active');
  })

  $('.hamburger--emphatic').click(function () {
    $(this).toggleClass('is-active');
  })

  if ($(window).width() < 1200) {
    $('.slider-leaders').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })
  }

  $('.toggler-trigger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.toggler').find('.toggler__content').stop().slideToggle();
    $(this).closest('.toggler').toggleClass('active');
  });

  $('.header-mobile__head .arrow').click(function (e) {
    e.preventDefault();
    $(this).closest('.header-mobile__mask').removeClass('active');
    $(this).closest('.header-wrapper').find('.close-column-js').toggleClass('close');
    $(this).closest('.toggler').removeClass('close');
  });

  $('.header-mobile__head .hamburger').click(function (e) {
    e.preventDefault();
    $(this).closest('.toggler').removeClass('close');
    $(this).closest('.header-mobile__mask').removeClass('active');
    $(this).closest('.header-wrapper').find('.close-column-js').removeClass('close');
    $(this).closest('.header-mobile').find('.hamburger--emphatic').removeClass('is-active');
  });

  $('.header-mobile__catalog').click(function (e) {
    e.preventDefault();
    $(this).closest('.header-wrapper').find('.header-mobile__mask').addClass('active');
  });

  $('.close-js').click(function (e) {
    e.preventDefault();
    $(this).closest('.close-column-js').addClass('close');
    $(this).closest('.toggler').addClass('close');
  });

  if ($('#map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [45.027731074575456, 38.974307],
        zoom: 17
      }, {
        searchControlProvider: 'yandex#search'
      }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Где нас найти?',
          balloonContent: 'Россия, г. Краснодар, ул Карасунская, д 86, 2 этаж'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../images/map-icon.png',
          // Размеры метки.
          iconImageSize: [37, 37],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        });

      myMap.geoObjects
        .add(myPlacemark);
    });

  }

});

let headerBgOne = document.getElementById('scene');
let headerBgTwo = document.getElementById('scene2');
let headerBgThree = document.getElementById('scene3');


let headerBgOneInstance = new Parallax(headerBgOne);
let headerBgTwoInstance = new Parallax(headerBgTwo);
let headerBgThreeInstance = new Parallax(headerBgThree);
