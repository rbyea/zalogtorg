$(document).ready(function () {
  $('.slider-index').slick({
    dots: true,
    fade: true,
    arrows: false,
  });

  $('.btn_blue').click(function () {
    $('.popup__content_image .slick-slider').slick('setPosition');
  });


  if ($('.reviews-slider__item').length) {
    $('.reviews-slider__item').matchHeight();
  }
  if ($('.basket-mobile__item').length) {
    $('.basket-mobile__item').matchHeight();
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


  if ($('.phone').length) {
    $(".phone").mask("+7(999) 999-99-99");
  }

  // if ($('.popup-trigger').length) {
  //   $('.popup-trigger').magnificPopup({
  //     type: 'inline',
  //     callbacks: {
  //       open: function () {
  //         $('.popup__content_image .slick-slider').slick('setPosition');
  //       },
  //     }
  //   });
  // }


  if ($('input[name="files"]').length) {

    $('input[name="files"]').fileuploader({

      thumbnails: {
        removeConfirmation: false,
      }
    });

  }

  $('.popup-trigger').click(function (e) {
    e.preventDefault();
    $.magnificPopup.open({
      items: {
        src: $('#popup-req'),
      },
      type: 'inline',
      midClick: true,
      callbacks: {
        open: function () {
          $('.popup__content_image').not('.slick-initialized').slick({
            arrows: true,
          });
          // $('.popup__content_image .slick-slider').slick('setPosition');
        },
      },
    });
  })
  if ($('.popup-dow').length) {
    $('.popup-dow').magnificPopup({
      type: 'inline'
    });
  }

  // $("#sidebar").stick_in_parent();

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
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      ,
      {
        breakpoint: 450,
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

  $('.header__navbar_hover').click(function (e) {
    e.preventDefault();

    $(this).closest('body').find('.header__navbar_widget').toggleClass('active');

  })

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".header__navbar_widget , .header__navbar_hover"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
    }
  });

  $('#selected').change(function () {
    // $('.product_offset_top').eq($(this).val()).toggleClass('active');
    var Eq = $(this).val();
    console.log(Eq);
    var el = $(this).closest('.tab-widget');
    el.find('.tab').removeClass('active');
    el.find('.tab').eq(Eq).addClass('active');
    $('html, body').animate({
      scrollTop: $(el.find('.catalog__title')).offset().top
    }, 500);
    // $('.match-height').matchHeight();
  });


  $('.catalog_star').click(function () {
    $(this).toggleClass('active');
  })

  $('.hamburger--emphatic').click(function () {
    $(this).toggleClass('is-active');
  })


  if ($(window).width() < 991) {
    $('.togglers-trigger').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).closest('.togglers').find('.togglers__content').stop().slideToggle();
      $(this).closest('.togglers').toggleClass('active');
    });
  }

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

  $('.card-slider').slick({
    slidesToShow: 1,
    fade: true,
    asNavFor: '.card-slider-nav',
    arrows: false,
  })

  $('.card-slider-nav').slick({
    focusOnSelect: true,
    slidesToShow: 5,
    arrows: false,
    asNavFor: '.card-slider',
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  })


  $('.card-slider').slick();

  $('.close-js').click(function (e) {
    e.preventDefault();
    $(this).closest('.close-column-js').addClass('close');
    $(this).closest('.toggler').addClass('close');
  });

  $('.sidebar__trigger').click(function (e) {
    e.preventDefault();
    $(this).closest('.page__sidebar').toggleClass('active');

  })

  if ($('.minus').length) {
    $(".minus").click(function () {
      numbers = +$(this).closest(".list-quantity").find("input").val();
      result = numbers - 1;
      if (result < 1) {
        result = 1;
      }
      $(this).closest(".list-quantity").find("input").val(result);
      return true;
    });
  }
  if ($('.plus').length) {
    $(".plus").click(function () {
      numbers = +$(this).closest(".list-quantity").find("input").val();
      result = numbers + 1;
      $(this).closest(".list-quantity").find("input").val(result);
      return true;
    });
  }

});

if ($('#scene, #scene2, #scene3').length) {

  let headerBgOne = document.getElementById('scene');
  let headerBgTwo = document.getElementById('scene2');
  let headerBgThree = document.getElementById('scene3');


  let headerBgOneInstance = new Parallax(headerBgOne);
  let headerBgTwoInstance = new Parallax(headerBgTwo);
  let headerBgThreeInstance = new Parallax(headerBgThree);

}


