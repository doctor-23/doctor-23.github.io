"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $lang = $(document).find('html').attr('lang');

var removeSpaces = function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}; // получаем стили css


function getStyle(elem) {
  if (window.getComputedStyle) return getComputedStyle(elem, null);else return elem.currentStyle;
} // обновление корзины в шапке


function updateSmallBasket(el) {
  $('.menu-basket > a').attr('data-quantity', el);

  if (el > 0) {
    $('.menu-basket').addClass('active');
  }

  if (el === 0) {
    $('.menu-basket').removeClass('active');
  }
} // обновление изрбранного в шапке


function updateSmallFavorite(el) {
  $('.menu-favorite > a').attr('data-quantity', el);

  if (el > 0) {
    $('.menu-favorite').addClass('active');
  }

  if (el === 0) {
    $('.menu-favorite').removeClass('active');
  }
}

function scroll(el) {
  $('html, body').stop().animate({
    scrollTop: $(el).offset().top - 60
  }, 800);
} // слайдер общий


function ordinarySlider(el) {
  // слайдер популярного
  $(el).slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    draggable: false,
    dots: true,
    dotsClass: 'dots-slider',
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true,
    responsive: [{
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
} // выбор количества


function choiceQuantity() {
  var parent = $(document).find('.quantity-wrapper');
  parent.on('click', '.arrow-minus', function (e) {
    e.preventDefault();
    var num = $(this).closest('.quantity-wrapper').find('.quantity__num'),
        val = num.val(),
        min = num.attr('min'),
        valNum = parseInt(val);

    if (valNum - 1 > -1) {
      num.val(valNum - 1);
      $(this).closest('.quantity-wrapper').find('.arrow-plus').removeClass('disable');
    }

    if (valNum - 1 < 0) {
      $(this).addClass('disable');
    }

    if (valNum - 1 === 0) {
      $(this).closest('.product-wrapper').addClass('product-wrapper_delete');
    }
  }).on('click', '.arrow-plus', function (e) {
    e.preventDefault();
    var num = $(this).closest('.quantity-wrapper').find('.quantity__num'),
        val = num.val(),
        max = num.attr('max'),
        valNum = parseInt(val);

    if (valNum + 1 <= max) {
      num.val(valNum + 1);
      $(this).closest('.quantity-wrapper').find('.arrow-minus').removeClass('disable');
    }

    if (valNum + 1 > max) {
      $(this).addClass('disable');
    }

    if (valNum + 1 > 0) {
      $(this).closest('.product-wrapper').removeClass('product-wrapper_delete');
    }
  });
} // аккордион


function commonAcco() {
  $(function () {
    var customAcco = function customAcco(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var dropdownlink = this.el.find('.accordion-submenu__link');
      dropdownlink.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown);
    };

    customAcco.prototype.dropdown = function (e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.accordion-submenu').not($next).slideUp().parent().removeClass('open');
      }
    };

    var customAcco = new customAcco($('.accordion'), false);
  }); // высота карточек аккордиона в деталке

  if ($('section').is('.detail')) {
    var accoItem = $('section.detail').find('.accordion .accordion__item .accordion-submenu'),
        accoItemArr = [];
    accoItem.each(function () {
      var accoItemHeight = $(this).outerHeight();
      accoItemArr.push(accoItemHeight);
    });
    var maxHeight = Math.max.apply(null, accoItemArr);
    accoItem.css('height', maxHeight);
  } // конец

} // слайдер в деталке


function detailSlider() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.pictures_main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.pictures_nav-slider'
    });
    $('.pictures_nav-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.pictures_main-slider',
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true // centerMode: true,
      // focusOnSelect: true

    }); // зум на фото в деталке

    var driftImgs = document.querySelectorAll('.picture_zoom');
    var driftPane = document.querySelectorAll('.picture_zoom_container');
    driftImgs.forEach(function (driftImg, index) {
      new Drift(driftImg, {
        paneContainer: driftPane[index],
        inlinePane: false
      });
    });
  }

  if (window.matchMedia('(max-width: 767.99px)').matches) {
    $('.pictures_main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      arrows: true,
      // appendArrows: $('.pictures_main-slider-dots-slider'),
      appendDots: $('.pictures_main-slider-dots-slider'),
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true
    });
    $('.semilar-product__slider-mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      arrows: true,
      appendArrows: $('.semilar-product__slider-dots-slider'),
      appendDots: $('.semilar-product__slider-dots-slider'),
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true
    });
  }

  $('.detail').find('.card-reviews__quantity a').on('click', function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    scroll(anchor);
  });
  $(document).find('.btn-detail-scroll').on('click', function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    scroll(anchor);
  });
} // маска номера телефона


function phoneMaskLanguage(lang) {
  var phoneInput = $('input[data-mask=""]');

  switch (lang) {
    case 'en':
      phoneInput.inputmask({
        mask: '+44 (999) 999-99-99'
      });
      break;

    case 'de':
      phoneInput.inputmask({
        mask: '+49 (999) 999-999-99'
      });
      break;

    case 'fr':
      phoneInput.inputmask({
        mask: '+33 (9) 99-99-99-99'
      });
      break;

    case 'it':
      phoneInput.inputmask({
        mask: '+84 (999) 999-999-99'
      });
      break;

    case 'es':
      phoneInput.inputmask({
        mask: '+34 (999) 999-999'
      });
      break;

    case 'ru':
      phoneInput.inputmask({
        mask: '+7 (999) 999-99-99'
      });
      break;

    default:
      phoneInput.inputmask({
        mask: '+7 (999) 999-99-99'
      });
  }
}

function emailMask() {
  var emailInput = $('input[data-mask-email=""]');
  emailInput.inputmask({
    mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
    greedy: false,
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace('mailto:', '');
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: 'lower'
      }
    }
  });
}

function policyAgreementCheck() {
  var policy = $(document).find('.policy-wrapper input'),
      agreement = $(document).find('.agreement-wrapper input');

  if (policy.prop('checked')) {
    policy.parent().find('.policy-checkbox').removeClass('not-check');
  } else {
    policy.parent().find('.policy-checkbox').addClass('not-check');
  }

  if (agreement.prop('checked')) {
    agreement.parent().find('.agreement-checkbox').removeClass('not-check');
  } else {
    agreement.parent().find('.agreement-checkbox').addClass('not-check');
  }
} // var isNotDesktop = userPlatform !== 'Win32' && userPlatform !== 'Linux i686' && userPlatform !== 'mac68k' && userPlatform !== 'MacPPC' && userPlatform !== 'MacIntel' && userPlatform !== 'SunOS' && userPlatform !== 'HP - UX' && userPlatform !== 'Win16' && userPlatform !== 'Linux i686 on x86_64' && userPlatform !== 'Linux i686 X11' && userPlatform !== 'Linux ppc64' && userPlatform !== 'Linux x86_64 X11';


$(document).ready(function () {
  // скрыть строку информации
  $(document).on('click', '.inf-str .svg-ico', function () {
    $(this).closest('.inf-str').addClass('hide');
  }); // плавающая шапка

  if (!$('section').is('.detail')) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('body').addClass('nav_scroll');
      } else {
        $('body').removeClass('nav_scroll');
      }
    });
  } // маска номера телефона


  phoneMaskLanguage($lang); // галка в политике конфиденциальности

  policyAgreementCheck(); // закрыть выбор языка в любой области

  var change_lang = document.querySelector('.left-top__select');
  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_changeLang = target == change_lang || change_lang.contains(target);
    var its_changeLang_is_open = change_lang.hasAttribute('open');

    if (!its_changeLang && its_changeLang_is_open) {
      $('.left-top__select').removeAttr('open');
    }
  }); // кастомный select

  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.select:not(.left-top__select)').on('click', '.select-input_wrapper', function () {
      var content = $(this).html();
      $(this).closest('.select').find('.select-title').html(content);
      $(this).closest('.select').removeClass('open'); // выбор страны в личном кабинете

      if ($(this).closest('.select').hasClass('personal__data-address__select-country')) {
        if ($(this).find('input').val() !== 'ru') {
          $(document).find('.personal__data-address__select-city').hide();
        } else {
          $(document).find('.personal__data-address__select-city').show();
        }

        var selectCountryVal = $(this).find('input').val();
        $('#personal_country').val(selectCountryVal);
      }

      if ($(this).closest('.select').hasClass('personal__data-address__select-city')) {
        var selectCityVal = $(this).find('input').val();
        $('#personal_city').val(selectCityVal);
      }
    });
    $('body').on('click', '.select .select-title', function () {
      console.log('click');
      $('.select').removeClass('open');
      $(this).closest('.select').toggleClass('open');
    });
  }

  if (window.matchMedia('(max-width: 767.99px)').matches) {
    $('.select:not(.left-top__select, .top_filter__select) .select-input_wrapper').on('click', function () {
      var content = $(this).html();
      $(this).closest('.select').find('.select-title').html(content);
      $(this).closest('.select').removeClass('open'); // выбор страны в личном кабинете

      if ($(this).closest('.select').hasClass('personal__data-address__select-country')) {
        if ($(this).find('input').val() !== 'ru') {
          $(document).find('.personal__data-address__select-city').hide();
        } else {
          $(document).find('.personal__data-address__select-city').show();
        }

        var selectCountryVal = $(this).find('input').val();
        $('#personal_country').val(selectCountryVal);
      }

      if ($(this).closest('.select').hasClass('personal__data-address__select-city')) {
        var selectCityVal = $(this).find('input').val();
        $('#personal_city').val(selectCityVal);
      }
    });
    $('body').on('click', '.select:not(.top_filter__select) .select-title', function () {
      $('.select').removeClass('open');
      $(this).closest('.select').toggleClass('open');
    });
  } // закрывает кастомный select в любой области


  $(function () {
    var i = 0;
    $('.select').each(function () {
      i++;
      $(this).attr('data-name', 'wrapper__touch' + i);
    });
    $('[data-name=" + i + "]').ready(function () {
      var thisAttr = $(this).find('.select_wrapper').parent();
      $(this).find('.wrapper__touch').click(function (event) {
        $('.wrapper__touch').not(this).parent().removeClass('open');
        $(this).parent().toggleClass('open');
      });
      $(document).on('click touchstart', function (e) {
        if (!$(e.target).closest(thisAttr).length) {
          thisAttr.removeClass('open');
        }
      });
    });
  }); // hamburger menu

  $(document).on('click', '.hamburger', function () {
    $('.header-mobile').toggleClass('open');
  }); // mobile submenu

  $('.mobile-main-menu__list').on('click', '.svg-ico', function () {
    $(this).toggleClass('arrow-top');
    $(this).parent().toggleClass('open-submenu');
  }); // mobile search

  $(document).on('click', '#show-search_mobile', function () {
    $('.hidden-search').addClass('open');
  });
  $(document).on('click', '#hide-search_mobile', function () {
    $('.hidden-search').removeClass('open');
  }); // все что связано с поиском

  var search_containers = $('.search-container, .search-popular'),
      search_formContainer = document.querySelector('.search-container'),
      search_popularContainer = document.querySelector('.search-popular'); // открываем поиск

  function toggleSearch() {
    search_containers.toggleClass('scale');
    $('body').toggleClass('no-scroll');
  }

  $('#show-search').on('click', function (e) {
    e.stopPropagation();
    toggleSearch();
  }); // закрываем поиск

  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_formContainer = target == search_formContainer || search_formContainer.contains(target);
    var its_popularContainer = target == search_popularContainer || search_popularContainer.contains(target);
    var formContainer_is_scale = search_formContainer.classList.contains('scale');

    if (!its_formContainer && !its_popularContainer && formContainer_is_scale) {
      toggleSearch();
    }
  }); // ввод в поле поиска

  $('#search-form').on('keyup', 'input[type="search"]', function () {
    if ($(this).val().length > 0) {
      $(this).closest('.search-container').addClass('keyup_form');
    } else {
      $(this).closest('.search-container').removeClass('keyup_form');
    }
  }).on('click', '.svg-close', function () {
    $(this).closest('.search-container').find('input[type="search"]').val('');
    $(this).closest('.search-container').removeClass('keyup_form');
  }); // конец поиска
  // высота dropdown & dropside в меню шапке

  function headerDropdownHeight() {
    var parentDropdown = $(document).find('.menu-categories__dropdown');
    parentDropdown.each(function () {
      var drodownHeight = $(this).outerHeight(),
          heightArr = [],
          dropsideHeight,
          dropside;
      heightArr.push(drodownHeight);
      $(this).find('.dropdown-menu .dropdown-menu__item_with_dropside').each(function () {
        dropside = $(this).find('.dropside-menu');

        if (dropside) {
          dropsideHeight = dropside.outerHeight();
          dropsideHeight = dropsideHeight + 24;
          heightArr.push(dropsideHeight);
        }
      });
      var maxHeight = Math.max.apply(null, heightArr);

      if (heightArr[0] !== maxHeight) {
        $(this).css('height', maxHeight);
        $(this).find('.dropdown-menu .dropdown-menu__item_with_dropside').each(function () {
          dropside = $(this).find('.dropside-menu');

          if (dropside) {
            dropsideHeight = dropside.outerHeight() + 24;
            var dropsideHeightTrue = heightArr.filter(function (element) {
              return element === dropsideHeight;
            });

            if (!dropsideHeightTrue) {
              $(this).find('.dropside-menu').css('height', maxHeight);
            }
          }
        });
      } else {
        $(this).find('.dropside-menu').css('height', maxHeight - 24);
      } // if (dropsideHeight > drodownHeight) {
      //     $(this).css('height', dropsideHeight)
      // }
      //
      // if (dropsideHeight < drodownHeight) {
      //     $(this).find('.dropside-menu').css('height', drodownHeight)
      // }

    });
  }

  headerDropdownHeight(); // конец
  // слайдер на главной

  $('.main_slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    arrows: true,
    appendArrows: $('.dots-slider-big'),
    appendDots: $('.dots-slider-big'),
    infinite: true,
    prevArrow: '<a class = "arrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99982 0.444458L0.481121 7.96316L7.99982 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00018 0.444458L8.51888 7.96316L1.00018 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  });
  $('.main_slider-small').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    arrows: true,
    appendArrows: $('.dots-slider-small'),
    appendDots: $('.dots-slider-small'),
    infinite: true,
    prevArrow: '<a class = "arrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99982 0.444458L0.481121 7.96316L7.99982 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00018 0.444458L8.51888 7.96316L1.00018 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  }); // слайдер популярного

  ordinarySlider('.ordinary-slider');
  $('.popular-desktop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    arrows: true,
    appendArrows: $('.dots-slider-desktop-popular'),
    appendDots: $('.dots-slider-desktop-popular'),
    infinite: true,
    prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true,
    responsive: [{
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }); // слайдер популярного мобильная версия

  $('.popular-mobile-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    arrows: true,
    appendArrows: $('.dots-slider-mobile-popular'),
    appendDots: $('.dots-slider-mobile-popular'),
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  }); // перед выгрузкой на бой удалить

  if ($('.detail-image_product-slider .catalog__card').length > 4) {
    ordinarySlider('.detail-image_product-slider');
  } // слайдер "создай свой образ"
  // перед выгрузкой на бой удалить


  function createImageSlider() {
    $('.create_image-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 300,
      draggable: false,
      dots: true,
      dotsClass: 'dots-slider',
      arrows: true,
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true,
      responsive: [{
        breakpoint: 992.98,
        settings: {
          appendArrows: $('.dots-slider-images'),
          appendDots: $('.dots-slider-images')
        }
      }, {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          appendArrows: $('.dots-slider-images'),
          appendDots: $('.dots-slider-images')
        }
      }]
    });
  }

  createImageSlider(); // конец слайдера
  // слайдер "отзывов на главной

  var reviewSliderOnMain = $('.reviews-slider');

  function reviewSliderOnMainFunc() {
    reviewSliderOnMain.slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      speed: 300,
      draggable: false,
      arrows: true,
      infinite: true,
      // centerMode: true,
      // centerPadding: '54px',
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true,
      responsive: [{
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          variableWidth: true
        }
      }, {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  reviewSliderOnMainFunc(); // if (window.matchMedia('(max-width: 767.99px)').matches) {

  reviewSliderOnMain.on('click', '.read_more', function (e) {
    e.preventDefault();
    var parent = $(this).closest('.reviews-slider__item');
    parent.addClass('open-text-review');
    $(this).hide();
    parent.find('.hide_more').css('display', 'block');
  }).on('click', '.hide_more', function (e) {
    e.preventDefault();
    var parent = $(this).closest('.reviews-slider__item');
    parent.removeClass('open-text-review');
    $(this).hide();
    parent.find('.read_more').css('display', 'block');
    reviewSliderOnMain.slick('unslick');
    reviewSliderOnMainFunc();
  }); // }
  // копировать промокод

  function copyToClipboard(str) {
    var area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = str;
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
  } // копировать промокод "страница 404"


  $('.promocode-copy').on('click', function (e) {
    e.preventDefault();
    copyToClipboard($(this).data('promo'));
    $(this).text('Cкопировано');
    $(this).find('.copy').hide();
    $(this).find('.copied').show();
  }); // копировать промокод "Личный кабинет"

  $('.personal__data-promocodes-item__link-copy').on('click', function (e) {
    e.preventDefault();
    copyToClipboard($(this).closest('.personal__data-promocodes-item').find('.personal__data-promocodes-item__text b').text());
    $(this).find('.copy').hide();
    $(this).find('.copied').show();
  }); // переключение табов "создай свой образ" на главной

  $('.create_image-tabs').on('click', 'li a', function (e) {
    e.preventDefault();
    var id = $(this).data('sectid');
    $.ajax({
      url: '/local/services/ajax/images.php',
      type: 'post',
      data: {
        'SECTION_ID': id
      },
      success: function success(succsess) {
        var sliderCont = $('section.create_image').find('.create_image-slider_wrapper');
        sliderCont.replaceWith(succsess);
        createImageSlider();
      },
      error: function error() {// alert('ошибка')
      }
    });
  }); // слайдер категорий товаров на главной

  function categoriesSlider(el) {
    $(el).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      arrows: true,
      appendArrows: $('.dots-slider-categories'),
      appendDots: $('.dots-slider-categories'),
      prevArrow: '<a class="arrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99982 0.444458L0.481121 7.96316L7.99982 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class="arrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00018 0.444458L8.51888 7.96316L1.00018 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true
    });
  }

  function categoriesSliderOnMainMobile(el) {
    $(el).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      arrows: true,
      appendArrows: $('.dots-slider-categories_mobile'),
      appendDots: $('.dots-slider-categories_mobile'),
      prevArrow: '<a class="arrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99982 0.444458L0.481121 7.96316L7.99982 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class="arrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00018 0.444458L8.51888 7.96316L1.00018 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true
    });
  }

  categoriesSlider('.categories-slider');
  categoriesSliderOnMainMobile('.categories-slider_mobile'); // слайдер блога на главной

  $('.blog-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    arrows: true,
    appendArrows: $('.dots-slider-blog'),
    appendDots: $('.dots-slider-blog'),
    infinite: true,
    prevArrow: '<a class = "arrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99982 0.444458L0.481121 7.96316L7.99982 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00018 0.444458L8.51888 7.96316L1.00018 15.5556" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  }); // фильтр каталога

  function catalogFilter() {
    // аккордеон для фильтра в каталоге
    $(function () {
      var catalogAcco = function catalogAcco(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var dropdownlink = this.el.find('.accordion-submenu__link');
        dropdownlink.on('click', {
          el: this.el,
          multiple: this.multiple
        }, this.dropdown);
      };

      catalogAcco.prototype.dropdown = function (e) {
        var $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
      };

      var catalogAcco = new catalogAcco($('.filter__accordion'), false);
    }); // конец
    // фильтр диапазона цен
    // const priceRange = $('#price_range')[0];

    var priceMin = $('#minPrice');
    var priceMax = $('#maxPrice');
    var priceInputs = [document.getElementById('minPrice'), document.getElementById('maxPrice')];
    var priceRange = document.getElementById('price_range');

    if (priceRange) {
      noUiSlider.create(priceRange, {
        start: [priceMin.val(), priceMax.val()],
        connect: true,
        step: 1,
        range: {
          'min': [parseInt(priceMin.val())],
          'max': [parseInt(priceMax.val())]
        }
      });
      priceRange.noUiSlider.on('update', function (values, handle) {
        priceInputs[handle].value = Math.round(values[handle]);
      });

      var setRangeSlider = function setRangeSlider(i, value) {
        var arr = [null, null];
        arr[i] = value;
        priceRange.noUiSlider.set(arr);
      };

      priceInputs.forEach(function (el, index) {
        el.addEventListener('change', function (e) {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    } // единая высота контейнера hover карточки каталога


    if (window.matchMedia('(min-width: 992px)').matches) {
      var _HeightCatalogCardHoverContainer = function _HeightCatalogCardHoverContainer() {
        var catalogCard = $(document).find('.catalog__card');

        if (catalogCard.length > 0) {
          catalogCard.each(function () {
            var notHoverContainer = $(this).find('.not-hover_container').outerHeight(),
                hoverContainer = $(this).find('.hover_container').outerHeight(); // console.log(hoverContainer, notHoverContainer)

            $(this).find('.hover_container').css('height', notHoverContainer - 20);
          });
        }
      };

      _HeightCatalogCardHoverContainer();
    } // слайдер рекомендаций


    function reccomendedSlider() {
      $('.recommended-desktop').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        dots: true,
        dotsClass: 'dots-slider',
        arrows: true,
        infinite: true,
        prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
        nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
        swipe: true
      });
      $('.recommended-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        dots: true,
        appendArrows: $('.dots-slider-recommended'),
        appendDots: $('.dots-slider-recommended'),
        arrows: true,
        infinite: true,
        prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
        nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
        swipe: true
      });
    }

    reccomendedSlider(); // показать/скрыть фильтр

    if (window.matchMedia('(min-width: 768px)').matches) {
      $(document).on('click', '#show_filters', function () {
        if ($(this).closest('.catalog').hasClass('show-filter')) {
          $(this).find('.left_filter__open-text').text('Показать Фильтры');
        } else {
          $(this).find('.left_filter__open-text').text('Скрыть Фильтры');
        }

        $(this).closest('.catalog').toggleClass('show-filter');
        $('.recommended-slider').slick('unslick');
        catalogCardHeightOnHover();
        reccomendedSlider();
        HeightCatalogCardHoverContainer();
      });
    }

    if (window.matchMedia('(max-width: 767.99px)').matches) {
      $(document).on('click', '#show_filters', function () {
        $(this).closest('.catalog').addClass('show-filter');
      });
      $(document).on('click', '#hide_filters', function () {
        $(this).closest('.catalog').removeClass('show-filter');
      });
    }
  }

  catalogFilter(); // модалки

  var $modalCatalog = $(document).find('.catalog__card .buy-btn');
  var $modalCatalogStockOut = $(document).find('.catalog__card.stock_out .more-btn');
  var $modalGridSizes = $(document).find('.content-size_table');
  var $modalDetail = $(document).find('section.detail .buy-btn');
  var $modalFastBuy = $(document).find('.fast_buy-btn');
  var $modalShare = $(document).find('.icon-share');
  var $modalPreOrder = $(document).find('.btn-pre-order');
  var $modalAddReview = $(document).find('.btn-add-review:not(.modal .btn-add-review)');
  var $modalBasket = $(document).find('.menu-basket, .personal__inf-basket');
  var $modalFeedback = $(document).find('.callback');
  var $modalForgotPass = $(document).find('.forgot-pass');
  var $modalChangePass = $(document).find('.btn-change_pass_open');
  var $modalComment = $(document).find('.btn-comment');
  var $modalSale = $(document).find('.detail-sales__item, .product-sales__item'); // let $modalSizesClose = $(document).find('#modal-sizes .modal-close');
  // let $modal = $(document).find('.modal:not(#modal-sizes)');
  // инит слайдера рекомендванных в модалке

  $('.ordinary-slider__modal').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    draggable: false,
    dots: true,
    dotsClass: 'dots-slider',
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true,
    responsive: [{
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2
      }
    }]
  }); // модалка акции

  $modalSale.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-about_sale').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  });

  if ($('section').is('.detail')) {
    $modalGridSizes.click(function (e) {
      e.preventDefault();
      $('#overlay').fadeIn(215, function () {
        $('#modal-sizes').css('display', 'block').animate({
          opacity: 1
        }, 100);
      });
    });
    $modalDetail.on('click', function (e) {
      e.preventDefault();
      $('#overlay').fadeIn(215, function () {
        $('#modal-added').css('display', 'block').animate({
          opacity: 1
        }, 100);
      });
    });
    $modalFastBuy.on('click', function (e) {
      e.preventDefault();
      $('#overlay').fadeIn(215, function () {
        $('#modal-one_click').css('display', 'block').animate({
          opacity: 1
        }, 100);
      });
    });
  } // модалка поделиться


  $modalShare.on('click', function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-share').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // модалка предзаказа

  $modalPreOrder.on('click', function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-pre_order').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // модалка добавить в корзину из каталога

  $modalCatalog.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-catalog').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // каталог модалка предзаказа

  $modalCatalogStockOut.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-catalog__stock_out').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // добавить отзыв

  $modalAddReview.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-review').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // модалка комментария

  $modalComment.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-comment').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // модалка корзины

  $modalBasket.on('click', function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-basket').addClass('scale');
      $('body').addClass('no-scroll');
    });
  }); // модалка обратной связи

  $modalFeedback.click(function (e) {
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-feedback').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  });
  $modalForgotPass.click(function (e) {
    e.preventDefault();
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-get_pass').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  });
  $modalChangePass.click(function (e) {
    e.preventDefault();
    e.preventDefault();
    $('#overlay').fadeIn(215, function () {
      $('#modal-change_pass').css('display', 'block').animate({
        opacity: 1
      }, 100);
    });
  }); // $modalGridSizes.click(function (e) {
  //     e.preventDefault();
  //
  //     $('#modal-sizes')
  //         .css('display', 'block')
  //         .animate({
  //             opacity: 1
  //         }, 100);
  // });
  //
  // ($modalSizesClose).on('click', function () {
  //     $('#modal-sizes').animate({
  //         opacity: 0
  //     }, 100, function () {
  //         $(this).css('display', 'none');
  //     });
  // });

  $('.modal-close, #overlay, .btn-continue').click(function () {
    $('.modal:not(#modal-basket)').animate({
      opacity: 0
    }, 100, function () {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(215);
    });
    $('#modal-basket').removeClass('scale');
    $('body').removeClass('no-scroll'); // $('#header').removeClass('scale');
    // $('.burgerMenu').removeClass('open');
  }); // закрыть модалку корзины

  $modalBasket.on('click', '.modal-close, .btn-continue', function (e) {
    e.preventDefault();
    $('#modal-basket').removeClass('scale');
    $('body').removeClass('no-scroll');
    $('#overlay').fadeOut(215);
  }); // добавление картинок

  $('#review_photo').on('change', function (e) {
    var filesGallery = e.target.files,
        filesLength = filesGallery.length,
        modal = $('#modal-review');

    if (filesLength > 0) {
      modal.find('.add-photo').hide();
      modal.find('.added-photo').css('display', 'flex');
      modal.find('.added-quantity').text(filesLength);
    }
  });
  $('#modal-review').on('click', '.added-remove', function (e) {
    e.preventDefault();
    var modal = $('#modal-review');
    modal.find('.add-photo').show();
    modal.find('.added-photo').hide();
    $('#review_photo').val('');
  });
  $('#feedback_photo').on('change', function (e) {
    var filesGallery = e.target.files,
        filesLength = filesGallery.length,
        modal = $('#modal-feedback');

    if (filesLength > 0) {
      modal.find('.add-photo').hide();
      modal.find('.added-photo').css('display', 'flex');
      modal.find('.added-quantity').text(filesLength);
    }
  });
  $('#modal-feedback').on('click', '.added-remove', function (e) {
    e.preventDefault();
    var modal = $('#modal-feedback');
    modal.find('.add-photo').show();
    modal.find('.added-photo').hide();
    $('#review_photo').val('');
  }); // отправка отзыва

  $('#review-form').on('submit', function (e) {
    e.preventDefault();
    var that = $(this),
        btn = that.find('.btn-add-review'),
        rate = that.find('.star-wrapper input:checked'),
        name = that.find('.name-input'),
        email = that.find('.email-input'),
        comment = that.find('textarea'),
        policy = that.find('.policy-wrapper input'),
        agreement = that.find('.agreement-wrapper input'),
        nameCheck = false,
        emailCheck = false,
        commentCheck = false,
        rateCheck = false,
        agreementCheck = true,
        policyCheck = true; // валидация
    // политика конфиденциальности

    if (policy.prop('checked')) {
      policyCheck = true;
      policy.parent().find('.policy-checkbox').removeClass('not-check');
    } else {
      policyCheck = false;
      policy.parent().find('.policy-checkbox').addClass('not-check');
    } // согласие на публикацию


    if (agreement.prop('checked')) {
      agreementCheck = true;
      agreement.parent().find('.agreement-checkbox').removeClass('not-check');
    } else {
      agreementCheck = false;
      agreement.parent().find('.agreement-checkbox').addClass('not-check');
    } // рейтинг


    if (rate.length !== 0) {
      rateCheck = true;
      that.find('.star-wrapper').closest('.input-wrapper').find('.msg-error').hide();
    } else {
      rateCheck = false;
      that.find('.star-wrapper').closest('.input-wrapper').find('.msg-error').show();
    } // имя


    if (name.val().length < 2) {
      nameCheck = false;
      name.addClass('validate-border');
      name.parent().find('.msg-error').show();
    } else {
      nameCheck = true;
      name.removeClass('validate-border');
      name.parent().find('.msg-error').hide();
    } // комментарий


    if (comment.val().length < 2) {
      commentCheck = false;
      comment.addClass('validate-border');
      comment.parent().find('.msg-error').show();
    } else {
      commentCheck = true;
      comment.removeClass('validate-border');
      comment.parent().find('.msg-error').hide();
    } // email не обязательное поле (валидация, если заполнено)


    if (email.val().length > 0) {
      if (email.val().length > 0 && (email.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        var emailVal = email.val(),
            emailValid = emailVal.split('@');

        if (emailValid[0].length < 3) {
          email.addClass('validate-border');
          email.parent().find('.msg').hide();
          email.parent().find('.msg-error-length').show();
          emailCheck = false;
        } else {
          email.removeClass('validate-border');
          email.parent().find('.msg').hide();
          emailCheck = true;
        }
      } else {
        email.addClass('validate-border');
        email.parent().find('.msg').hide();
        email.parent().find('.msg-error-email').show();
        emailCheck = false;
      }
    } else {
      emailCheck = true;
    }

    if (nameCheck && commentCheck && rateCheck && agreementCheck && policyCheck) {
      that.find('.msg').hide();
      btn.removeClass('btn-right_disable');

      if (emailCheck) {
        that.find('.msg').hide();
        btn.removeClass('btn-right_disable');
      } else {
        btn.addClass('btn-right_disable');
      }
    } else {
      btn.addClass('btn-right_disable');
    }

    if (!btn.hasClass('btn-right_disable')) {
      var formData = new FormData(that[0]);

      var _iterator = _createForOfIteratorHelper(formData),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          console.log(pair[0], pair[1]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'post',
        processData: false,
        contentType: false,
        data: formData,
        success: function success(_success) {
          console.log(_success);

          if (_success.status === 'ok') {
            var rateVal = rate.val(),
                modal = $('#modal-thank_review');
            that.find('.msg').hide();
            that.find('input:not(input[type="hidden"], input[type="checkbox"], input[type="radio"])').val('');
            that.find('.input-wrapper .star-wrapper input[type="radio"]').prop('checked', false);
            that.closest('.modal').animate({
              opacity: 0
            }, 100, function () {
              $(this).css('display', 'none');
            });
            modal.find('.review-star-wrapper input[type="radio"]').each(function () {
              if ($(this).val() === rateVal) {
                $(this).attr('data-check', 'checked');
              } else {
                $(this).removeAttr('data-check');
              }
            });
            modal.animate({
              opacity: 1
            }, 100, function () {
              $(this).css('display', 'block');
            });
          }

          if (_success.status === 'error') {
            var textMsg = _success.message,
                textOrig = that.find('.btn-wrapper .msg-error').text();
            that.find('.btn-wrapper .msg-error').text(textOrig + '<br>' + textMsg);
            that.find('.btn-wrapper .msg-error').show();
          }
        },
        error: function error(req, text, _error) {}
      });
      return false;
    }
  }); // отправка комментария

  $('#comment-form, #blog_comment-form').on('submit', function (e) {
    e.preventDefault();
    var that = $(this),
        btn = that.find('.btn-add-comment'),
        name = that.find('.name-input'),
        email = that.find('.email-input'),
        comment = that.find('textarea'),
        policy = that.find('.policy-wrapper input'),
        agreement = that.find('.agreement-wrapper input'),
        nameCheck = false,
        emailCheck = false,
        commentCheck = false,
        agreementCheck = true,
        policyCheck = true; // валидация
    // политика конфиденциальности

    if (policy.prop('checked')) {
      policyCheck = true;
      policy.parent().find('.policy-checkbox').removeClass('not-check');
    } else {
      policyCheck = false;
      policy.parent().find('.policy-checkbox').addClass('not-check');
    } // согласие на публикацию


    if (agreement.prop('checked')) {
      agreementCheck = true;
      agreement.parent().find('.agreement-checkbox').removeClass('not-check');
    } else {
      agreementCheck = false;
      agreement.parent().find('.agreement-checkbox').addClass('not-check');
    } // имя


    if (name.val().length < 2) {
      nameCheck = false;
      name.addClass('validate-border');
      name.parent().find('.msg-error').show();
    } else {
      nameCheck = true;
      name.removeClass('validate-border');
      name.parent().find('.msg-error').hide();
    } // комментарий


    if (comment.val().length < 2) {
      commentCheck = false;
      comment.addClass('validate-border');
      comment.parent().find('.msg-error').show();
    } else {
      commentCheck = true;
      comment.removeClass('validate-border');
      comment.parent().find('.msg-error').hide();
    } // email не обязательное поле (валидация, если заполнено)


    if (email.val().length > 0) {
      if (email.val().length > 0 && (email.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        var emailVal = email.val(),
            emailValid = emailVal.split('@');

        if (emailValid[0].length < 3) {
          email.addClass('validate-border');
          email.parent().find('.msg').hide();
          email.parent().find('.msg-error-length').show();
          emailCheck = false;
        } else {
          email.removeClass('validate-border');
          email.parent().find('.msg').hide();
          emailCheck = true;
        }
      } else {
        email.addClass('validate-border');
        email.parent().find('.msg').hide();
        email.parent().find('.msg-error-email').show();
        emailCheck = false;
      }
    } else {
      emailCheck = true;
    }

    if (nameCheck && commentCheck && agreementCheck && policyCheck) {
      that.find('.msg').hide();
      btn.removeClass('btn-right_disable');

      if (emailCheck) {
        that.find('.msg').hide();
        btn.removeClass('btn-right_disable');
      } else {
        btn.addClass('btn-right_disable');
      }
    } else {
      btn.addClass('btn-right_disable');
    }

    if (!btn.hasClass('btn-right_disable')) {
      var formData = new FormData(that[0]);

      var _iterator2 = _createForOfIteratorHelper(formData),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pair = _step2.value;
          console.log(pair[0], pair[1]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'post',
        processData: false,
        contentType: false,
        data: formData,
        success: function success(_success2) {
          console.log(_success2);

          if (_success2.status === 'ok') {
            var modal = $('#modal-thank_comment');
            that.find('.msg').hide();
            that.find('input:not(input[type="hidden"], input[type="checkbox"], input[type="radio"])').val('');

            if (that[0].hasAttribute('id') === 'blog_comment-form') {
              $('#overlay').fadeIn(215, function () {
                modal.css('display', 'block').animate({
                  opacity: 1
                }, 100);
              });
            }

            if (that[0].hasAttribute('id') === 'comment-form') {
              that.closest('.modal').animate({
                opacity: 0
              }, 100, function () {
                $(this).css('display', 'none');
              });
              modal.animate({
                opacity: 1
              }, 100, function () {
                $(this).css('display', 'block');
              });
            }
          }

          if (_success2.status === 'error') {
            var textMsg = _success2.message,
                textOrig = that.find('.btn-wrapper .msg-error').text();
            that.find('.btn-wrapper .msg-error').text(textOrig + '<br>' + textMsg);
            that.find('.btn-wrapper .msg-error').show();
          }
        },
        error: function error(req, text, _error2) {}
      });
      return false;
    }
  }); // отправка формы обратйной связи

  $('#feedback-form').on('submit', function (e) {
    e.preventDefault();
    var that = $(this),
        btn = that.find('.btn-feedback-submit'),
        name = that.find('.name-input'),
        phone = that.find('.form__phone'),
        email = that.find('.email-input'),
        comment = that.find('textarea'),
        policy = that.find('.policy-wrapper input'),
        validPhone = /_/,
        nameCheck = false,
        emailCheck = false,
        commentCheck = false,
        phoneCheck = false,
        policyCheck = true; // валидация
    // политика конфиденциальности

    if (policy.prop('checked')) {
      policyCheck = true;
      policy.parent().find('.policy-checkbox').removeClass('not-check');
    } else {
      policyCheck = false;
      policy.parent().find('.policy-checkbox').addClass('not-check');
    } // имя


    if (name.val().length < 2) {
      nameCheck = false;
      name.addClass('validate-border');
      name.parent().find('.msg-error').show();
    } else {
      nameCheck = true;
      name.removeClass('validate-border');
      name.parent().find('.msg-error').hide();
    } // телефон


    if (phone.val().length === 0) {
      phoneCheck = false;
      phone.addClass('validate-border');
      phone.parent().find('.msg').hide();
      phone.parent().find('.msg-error-empty').show();
    } else {
      if (phone.val().length > 0 && validPhone.test(phone.val())) {
        phoneCheck = false;
        phone.addClass('validate-border');
        phone.parent().find('.msg').hide();
        phone.parent().find('.msg-error-phone').show();
      } else {
        if (phone.val().length > 0 && !validPhone.test(phone.val())) {
          phoneCheck = true;
          phone.removeClass('validate-border');
          phone.parent().find('.msg').hide();
          btn.removeClass('btn-right_disable');
        } else {
          phoneCheck = false;
        }
      }
    } // комментарий


    if (comment.val().length < 2) {
      commentCheck = false;
      comment.addClass('validate-border');
      comment.parent().find('.msg-error').show();
    } else {
      commentCheck = true;
      comment.removeClass('validate-border');
      comment.parent().find('.msg-error').hide();
    } // email не обязательное поле (валидация, если заполнено)


    if (email.val().length > 0) {
      if (email.val().length > 0 && (email.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        var emailVal = email.val(),
            emailValid = emailVal.split('@');

        if (emailValid[0].length < 3) {
          email.addClass('validate-border');
          email.parent().find('.msg').hide();
          email.parent().find('.msg-error-length').show();
          emailCheck = false;
        } else {
          email.removeClass('validate-border');
          email.parent().find('.msg').hide();
          emailCheck = true;
        }
      } else {
        email.addClass('validate-border');
        email.parent().find('.msg').hide();
        email.parent().find('.msg-error-email').show();
        emailCheck = false;
      }
    } else {
      emailCheck = true;
    }

    if (nameCheck && commentCheck && phoneCheck && policyCheck) {
      that.find('.msg').hide();
      btn.removeClass('btn-right_disable');

      if (emailCheck) {
        that.find('.msg').hide();
        btn.removeClass('btn-right_disable');
      } else {
        btn.addClass('btn-right_disable');
      }
    } else {
      btn.addClass('btn-right_disable');
    }

    if (!btn.hasClass('btn-right_disable')) {
      var formData = new FormData(that[0]);

      var _iterator3 = _createForOfIteratorHelper(formData),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var pair = _step3.value;
          console.log(pair[0], pair[1]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'post',
        processData: false,
        contentType: false,
        data: formData,
        success: function success(_success3) {
          console.log(_success3);

          if (_success3.status === 'ok') {
            that.find('.msg').hide();
            that.find('input:not(input[type="hidden"], input[type="checkbox"], input[type="radio"])').val('');
            that.closest('.modal').animate({
              opacity: 0
            }, 100, function () {
              $(this).css('display', 'none');
              $('#overlay').fadeOut(215);
            });
          }

          if (_success3.status === 'error') {
            var textMsg = _success3.message,
                textOrig = that.find('.btn-wrapper .msg-error').text();
            that.find('.btn-wrapper .msg-error').text(textOrig + '<br>' + textMsg);
            that.find('.btn-wrapper .msg-error').show();
          }
        },
        error: function error(req, text, _error3) {}
      });
      return false;
    }
  }); // инит слайдера в деталке

  detailSlider(); // вызов аккордиона

  commonAcco(); // слайдеры образа и товров образа в деталке

  var detailSliderParent = $(document).find('.detail-image__slider'),
      imageSliderItem = detailSliderParent.find('.image__slider-item');

  if (imageSliderItem.length > 3) {
    detailSliderParent.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      dotsClass: 'dots-slider',
      arrows: true,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true,
      responsive: [{
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4
        }
      }]
    });
    detailSliderParent.on('click', '.slick-arrow', function () {
      var imageLink = $('.detail-image__slider .slick-current').find('.image__slider-item').data('href');
      $(document).find('.btn-buy-image').attr('href', imageLink);
    });
  } else {
    detailSliderParent.find('.image__slider-item').first().addClass('image__slider-item_active');
    detailSliderParent.on('click', '.image__slider-item', function (e) {
      e.preventDefault();
      var imageLink = $(this).data('href');
      $(document).find('.btn-buy-image').attr('href', imageLink);
      imageSliderItem.removeClass('image__slider-item_active');
      $(this).addClass('image__slider-item_active');
    });
  } // слайдер последних просмотренных


  $('.last-see__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    dotsClass: 'dots-slider',
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true,
    responsive: [{
      breakpoint: 768.98,
      settings: {
        slidesToShow: 4,
        appendArrows: $('.last-see_slider-dots-slider'),
        appendDots: $('.last-see_slider-dots-slider'),
        dotsClass: 'slick-dots'
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        appendArrows: $('.last-see_slider-dots-slider'),
        appendDots: $('.last-see_slider-dots-slider'),
        dotsClass: 'slick-dots'
      }
    }]
  }); // fixed плашка товара в деталке

  if ($('section').is('.detail')) {
    var offsetReviews = $('#reviews_anchor').offset();
    $(window).scroll(function () {
      if ($(this).scrollTop() > offsetReviews.top) {
        $('.fixed-detail').addClass('scale');
      } else {
        $('.fixed-detail').removeClass('scale');
      }
    });
  } //конец
  // выбор количества


  choiceQuantity(); //конец
  // форма подписки

  var vClass = 'validate-border';
  $(document).find('#subscribe-form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this),
        email = form.find('input[type="email"]'),
        btn = form.find('.btn');

    if (email.val() !== '') {
      email.removeClass(vClass);
      form.find('.msg').hide();

      if (email.val().split('@')[0].length > 3 && email.val().length > 0 && (email.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        email.removeClass(vClass);
        form.find('.msg').hide();
        $.ajax({
          url: '/local/services/ajax/subscribe.php',
          type: 'post',
          data: {
            'email': email.val(),
            'sessid': form.find('#sessid').val(),
            'mode': form.find('input[name="mode"]').val()
          },
          success: function success(succsess) {
            form.find('.msg').hide();
            console.log(succsess);

            if (succsess.status === 'ok') {
              $(document).find('#subscribe-form').replaceWith(succsess.message);
              $(document).find('.subscribe-title').hide();
              $(document).find('.subscribe-description').hide();
            }

            if (succsess.status === 'error') {
              form.find('.msg-error-email').text(succsess.message);
              form.find('.msg-error-email').show();
            }
          },
          error: function error() {}
        });
      } else {
        email.addClass(vClass);
        form.find('.msg-error').show();
      }
    } else {
      email.addClass(vClass);
      form.find('.msg-error-empty').show();
    }
  }); // слайдер рекомендованных
  // слайдер рекомендованных

  if (window.matchMedia('min-width: 768px')) {
    $('.recommended-slider_two_desktop').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      dotsClass: 'dots-slider',
      arrows: true,
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true // responsive: [{
      //     breakpoint: 1199.98,
      //     settings: {
      //         slidesToShow: 3
      //     }
      // }]

    });
  } // слайдер рекомендованных мобильная версия


  if (window.matchMedia('max-width: 767.98px')) {
    $('.recommended-slider_two_mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      draggable: false,
      dots: true,
      arrows: true,
      appendArrows: $('.dots-recommended-slider_two'),
      appendDots: $('.dots-recommended-slider_two'),
      infinite: true,
      variableWidth: true,
      prevArrow: '<a class = "arrow-left"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 1L1.05403 11.9463L12.0004 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      nextArrow: '<a class = "arrow-right"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00061 1L11.9469 11.9463L1.00061 23" stroke="#2C2B2A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
      swipe: true
    });
  } // слайдер в деталке блога


  $('.read-also_slider_desktop').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 300,
    draggable: false,
    dots: true,
    appendArrows: $('.dots-slider-blog_desktop'),
    appendDots: $('.dots-slider-blog_desktop'),
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.30615L0.481304 8.82485L8 16.4173" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.30615L8.5187 8.82485L1 16.4173" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  });
  $('.read-also_slider_mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: true,
    appendArrows: $('.dots-slider-blog_mobile'),
    appendDots: $('.dots-slider-blog_mobile'),
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.30615L0.481304 8.82485L8 16.4173" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.30615L8.5187 8.82485L1 16.4173" stroke="#2C2B2A" stroke-miterlimit="10" stroke-linejoin="bevel"/></svg></a>',
    swipe: true
  }); // оформление заказа

  function heightOrderBasket() {
    var main = $('.order'),
        leftHeight = main.find('.order__left').outerHeight(),
        totalHeight = main.find('.order__inf').outerHeight();
    main.find('.order__basket-content').css('height', leftHeight - totalHeight - 18);
  }

  function showOrderBlocks() {
    var dataItemShipping = $('.order-form__shipping-method_first .order-form__label').find('input:checked').data('shipping-method'),
        dataItemPayment = $('.order-form__payment-method_first .order-form__label').find('input:checked').data('payment-method'),
        shippingSecondContainer = $('.order-form__shipping-method_second'),
        paymentSecondContainer = $('.order-form__payment-method_second');
    shippingSecondContainer.find('.order-form__shipping-method__item[data-shipping-method="' + dataItemShipping + '"]').addClass('scale');
    paymentSecondContainer.find('.order-form__payment-method__item[data-payment-method="' + dataItemPayment + '"]').addClass('scale');
    heightOrderBasket();
    $('.order-form__shipping-method_first').on('click', '.order-form__label > input', function () {
      var dataItem = $(this).data('shipping-method');
      shippingSecondContainer.find('.order-form__shipping-method__item').removeClass('scale');
      shippingSecondContainer.find('.order-form__shipping-method__item[data-shipping-method="' + dataItem + '"]').addClass('scale');
      heightOrderBasket();
    });
    $('.order-form__payment-method_first').on('click', '.order-form__label > input', function () {
      var dataItem = $(this).data('payment-method');
      paymentSecondContainer.find('.order-form__payment-method__item').removeClass('scale');
      paymentSecondContainer.find('.order-form__payment-method__item[data-payment-method="' + dataItem + '"]').addClass('scale');
      heightOrderBasket();
    });
  }

  showOrderBlocks(); // выбор способа авторизации

  function authRegChoice() {
    var authContainer = $('.auth-reg'),
        authChoiceContainer = $('.form__choice-auth'),
        dataAuth = authChoiceContainer.find('input[type="radio"]:checked').data('auth');
    authContainer.find('.form__wrapper[data-target="' + dataAuth + '"]').addClass('scale');
    authChoiceContainer.on('click', 'input[type="radio"]', function () {
      var authData = $(this).data('auth');
      authContainer.find('.form__wrapper').removeClass('scale');
      authContainer.find('.form__wrapper[data-target="' + authData + '"]').addClass('scale');
    });
  }

  authRegChoice(); // маска номера телефона и почты

  phoneMaskLanguage($lang);
  emailMask();
  $(document).on('click', '.country-select input[type="radio"]', function () {
    var radioVal = $(this).val();
    phoneMaskLanguage(radioVal);
  }); // показать/скрыть пароль

  $('.form__pass').on('keyup', function () {
    var val = $(this).val().length;

    if (val > 0) {
      $(this).parent().find('.svg-ico').show();
    } else {
      $(this).parent().find('.svg-ico').hide();
    }
  }).parent().on('click', '.svg-ico', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).parent().find('.form__pass').attr('type', 'text');
    } else {
      $(this).parent().find('.form__pass').attr('type', 'password');
    }
  }); // клик по кнопке "выслать код"

  $('#auth-reg_form').on('click', '.btn-code', function (e) {
    e.preventDefault();
    var form = $(this).closest('#auth-reg_form'),
        validPhone = /_/,
        policyCheck = true,
        btn = form.find('.btn:not(.btn-code-again)'),
        phoneName,
        policy,
        phone,
        passInput,
        passInputName,
        memoryInput,
        memoryInputName,
        jsData; // функция валидации телефона

    function phoneValid(el) {
      var parent = el.parent();

      if (el.val().length === 0) {
        el.addClass('validate-border');
        parent.find('.msg').hide();
        parent.find('.msg-error-empty').show();
        btn.addClass('btn-right_disable');
      }

      if (el.val().length > 0 && validPhone.test(el.val())) {
        el.addClass('validate-border');
        parent.find('.msg').hide();
        parent.find('.msg-error-phone').show();
        btn.addClass('btn-right_disable');
      }
    } // функция валидации политики конфиденциальности


    function checkPolicy(el) {
      var parent = el.parent();

      if (el.prop('checked')) {
        policyCheck = true;
        parent.find('.policy-checkbox').removeClass('not-check');
        btn.removeClass('btn-right_disable');
      } else {
        policyCheck = false;
        parent.find('.policy-checkbox').addClass('not-check');
        btn.addClass('btn-right_disable');
      }
    } // условие авторизации/регистрации по смс коду


    if (form.find('.form__radio-wrapper input[data-auth="code"]').is(':checked')) {
      phone = form.find('.form__wrapper_code .form__phone');
      phoneName = phone.attr('name');
      policy = form.find('.form__wrapper_code .policy-wrapper input');
      phoneValid(phone);
      checkPolicy(policy); // валидация телефонв

      if (phone.val().length > 0 && !validPhone.test(phone.val())) {
        phone.removeClass('validate-border');
        form.find('.msg').hide();
        btn.removeClass('btn-right_disable');
      } else {
        btn.addClass('btn-right_disable');
      } // отправка формы при условии


      if (!$(this).hasClass('btn-right_disable') && policyCheck) {
        form.find('.msg').hide();
        jsData = _defineProperty({}, phoneName, phone.val());
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          // dataType: 'json',
          data: jsData,
          success: function success(_success4) {
            console.log(_success4);

            if (_success4) {
              form.find('.form__wrapper-input_code').show();
              form.find('.btn-wrapper-code').css('display', 'flex');
              form.find('.form__wrapper_code .btn-code').hide();
              btn.addClass('btn-right_disable'); // таймер на кнопке "Выслать повторно"

              var timerBlock = form.find('.btn-code-again .timer'),
                  timerBlockVal = timerBlock.text().replace(/[^0-9]/g, ''),
                  timerValue = parseInt(timerBlockVal),
                  _int;

              _int = setInterval(function () {
                if (timerValue > 0) {
                  timerValue--;
                  timerBlock.text('(' + timerValue + ')');
                } else {
                  clearInterval(_int);
                  timerBlock.hide();
                  form.find('.btn-code-again').removeClass('btn-left_disable');
                }
              }, 1000);
            }
          },
          error: function error(req, text, _error4) {}
        });
      } else {
        form.find('.form__wrapper-input_code').hide();
        form.find('.btn-wrapper-code').hide();
        form.find('.form__wrapper_code .btn-code').show();
      }
    } // условие авторизации/регистрации по паролю


    if (form.find('.form__radio-wrapper input[data-auth="pass"]').is(':checked')) {
      // на странице авторизации
      if ($('section').is('.authentication')) {
        passInput = form.find('.form__wrapper_pass .form__pass');
        passInputName = passInput.attr('name');
        memoryInput = $('.form__label-memory').find('input');
        memoryInputName = memoryInput.attr('name');
        phone = form.find('.form__wrapper_pass .form__phone');
        phoneName = phone.attr('name');
        policy = form.find('.form__wrapper_pass .policy-wrapper input');
        phoneValid(phone);
        checkPolicy(policy); // валидация телефонв

        if (phone.val().length > 0 && !validPhone.test(phone.val())) {
          phone.removeClass('validate-border');
          phone.parent().find('.msg').hide();
          btn.removeClass('btn-right_disable'); // валидация пароля

          if (passInput.val().length > 0) {
            passInput.removeClass('validate-border');
            passInput.parent().find('.msg').hide();
            btn.removeClass('btn-right_disable');
          } else {
            passInput.addClass('validate-border');
            passInput.parent().find('.msg-error').show();
            btn.addClass('btn-right_disable');
          }
        } else {
          btn.addClass('btn-right_disable');
        } // отправка формы при условии


        if (!$(this).hasClass('btn-right_disable') && policyCheck) {
          var _jsData2;

          form.find('.msg').hide();
          jsData = (_jsData2 = {}, _defineProperty(_jsData2, phoneName, phone.val()), _defineProperty(_jsData2, passInputName, passInput.val()), _jsData2);

          if (memoryInput.prop('checked')) {
            memoryInput.val('Y');
            jsData[memoryInputName] = memoryInput.val();
          } else {
            memoryInput.val('N');
            jsData[memoryInputName] = memoryInput.val();
          } // console.log(jsData)


          $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'post',
            // dataType: 'json',
            data: jsData,
            success: function success(_success5) {
              // console.log(jsData)
              console.log(_success5);

              if (_success5.status === 'ok') {
                form.find('.msg-auth-reg').hide();
              } // для проверки в текущем варианте
              // if(success.id === 101) {
              //     form.find('.msg-auth-reg').css('display', 'block');
              // }


              if (_success5.status === 'error') {
                form.find('.msg-auth-reg').css('display', 'block');
              }
            },
            error: function error(req, text, _error5) {}
          });
        }
      } // на странице регистрации


      if ($('section').is('.registration')) {
        memoryInput = $('.form__label-memory').find('input');
        memoryInputName = memoryInput.attr('name');
        phone = form.find('.form__wrapper_pass .form__phone');
        phoneName = phone.attr('name');
        policy = form.find('.form__wrapper_pass .policy-wrapper input');
        var nameInput = form.find('.form__name'),
            nameInputName = nameInput.attr('name'),
            firstPass = form.find('#first_pass'),
            firstPassName = firstPass.attr('name'),
            secondPass = form.find('#second_pass'),
            secondPassName = secondPass.attr('name');
        phoneValid(phone);
        checkPolicy(policy); // валидация телефона

        if (phone.val().length > 0 && !validPhone.test(phone.val())) {
          phone.removeClass('validate-border');
          phone.parent().find('.msg').hide();
          btn.removeClass('btn-right_disable'); // валидация пароля

          if (firstPass.val().length >= 8) {
            firstPass.removeClass('validate-border');
            firstPass.parent().find('.msg').hide();
            btn.removeClass('btn-right_disable'); // валидация повторного пароля

            if (secondPass.val() === firstPass.val()) {
              secondPass.removeClass('validate-border');
              secondPass.parent().find('.msg').hide();
              btn.removeClass('btn-right_disable');
            } else {
              secondPass.addClass('validate-border');
              secondPass.parent().find('.msg').show();
              btn.addClass('btn-right_disable');
            }
          } else {
            firstPass.addClass('validate-border');
            firstPass.parent().find('.msg').show();
            btn.addClass('btn-right_disable');
          }
        } else {
          btn.addClass('btn-right_disable');
        } // отправка формы при условии


        if (!$(this).hasClass('btn-right_disable') && policyCheck) {
          form.find('.msg').hide(); // jsData = {
          //     [phoneName]: phone.val(),
          //     [nameInputName]: nameInput.val(),
          //     [firstPassName]: firstPass.val()
          // }

          if (memoryInput.prop('checked')) {
            memoryInput.val('Y'); // jsData[memoryInputName] = memoryInput.val();
          } else {
            memoryInput.val('N'); // jsData[memoryInputName] = memoryInput.val();
          } // console.log(jsData)


          form.on('submit', function (e) {
            e.preventDefault();
            var formData = new FormData(form[0]),
                submit = form.find('.btn-registration'),
                submitName = submit.attr('name'),
                submitVal = submit.val();

            if (submitName) {
              formData.append([submitName], [submitVal]);
            }

            var _iterator4 = _createForOfIteratorHelper(formData.entries()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var pair = _step4.value;
                console.log(pair[0], pair[1]);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            $.ajax({
              url: 'https://jsonplaceholder.typicode.com/posts',
              type: 'post',
              processData: false,
              contentType: false,
              // dataType: 'json',
              data: formData,
              success: function success(_success6) {
                // console.log(jsData)
                // console.log(success)
                window.location.reload();
              },
              error: function error(req, text, _error6) {}
            });
          });
          form.trigger('submit'); // $.ajax({
          //     url: 'https://jsonplaceholder.typicode.com/posts',
          //     type: 'post',
          //     // dataType: 'json',
          //     data: jsData,
          //     success: function (success) {
          //         // console.log(jsData)
          //         console.log(success)
          //     },
          //     error: function (req, text, error) {
          //     }
          // });
        }
      }
    }
  }) // клик по кнопке "выслать еще раз"
  .on('click', '.btn-code-again', function (e) {
    e.preventDefault();

    if (!$(this).hasClass('.btn-left_disable')) {
      // функция валидации телефона
      var phoneValid = function phoneValid(el) {
        var parent = el.parent();

        if (el.val().length === 0) {
          el.addClass('validate-border');
          parent.find('.msg').hide();
          parent.find('.msg-error-empty').show();
          btn.addClass('btn-right_disable');
        }

        if (el.val().length > 0 && validPhone.test(el.val())) {
          el.addClass('validate-border');
          parent.find('.msg').hide();
          parent.find('.msg-error-phone').show();
          btn.addClass('btn-right_disable');
        }
      }; // функция валидации политики конфиденциальности


      var checkPolicy = function checkPolicy(el) {
        var parent = el.parent();

        if (el.prop('checked')) {
          policyCheck = true;
          parent.find('.policy-checkbox').removeClass('not-check');
          btn.removeClass('btn-right_disable');
        } else {
          policyCheck = false;
          parent.find('.policy-checkbox').addClass('not-check');
          btn.addClass('btn-right_disable');
        }
      };

      var form = $(this).closest('#auth-reg_form'),
          validPhone = /_/,
          policyCheck = true,
          btn = form.find('.btn-code-again'),
          phoneName,
          policy,
          phone,
          jsData;
      phone = form.find('.form__wrapper_code .form__phone');
      phoneName = phone.attr('name');
      policy = form.find('.form__wrapper_code .policy-wrapper input');
      phoneValid(phone);
      checkPolicy(policy); // валидация телефонв

      if (phone.val().length > 0 && !validPhone.test(phone.val())) {
        phone.removeClass('validate-border');
        form.find('.msg').hide();
        btn.removeClass('btn-right_disable');
      } else {
        btn.addClass('btn-right_disable');
      } // отправка формы при условии


      if (!$(this).hasClass('.btn-left_disable') && policyCheck) {
        form.find('.msg').hide();
        jsData = _defineProperty({}, phoneName, phone.val());
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          // dataType: 'json',
          data: jsData,
          success: function success(_success7) {
            console.log(_success7);

            if (_success7) {
              // таймер на кнопке "Выслать повторно"
              btn.addClass('btn-left_disable');
              btn.find('.timer').show();
              btn.find('.timer').text('(30)');

              var timerBlock = form.find('.btn-code-again .timer'),
                  timerBlockVal = timerBlock.text().replace(/[^0-9]/g, ''),
                  timerValue = parseInt(timerBlockVal),
                  _int2;

              _int2 = setInterval(function () {
                if (timerValue > 0) {
                  timerValue--;
                  timerBlock.text('(' + timerValue + ')');
                } else {
                  clearInterval(_int2);
                  timerBlock.hide();
                  form.find('.btn-code-again').removeClass('btn-left_disable');
                }
              }, 1000);
            }
          },
          error: function error(req, text, _error7) {}
        });
      } else {
        form.find('.form__wrapper-input_code').hide();
        form.find('.btn-wrapper-code').hide();
        form.find('.form__wrapper_code .btn-code').show();
      }
    }
  }) // клик по кнопке "войти (с смс кодом)"
  .on('click', '.btn-auth', function () {
    var form = $(this).closest('#auth-reg_form'),
        policyCheck = true,
        codeInput = form.find('.form__code'),
        codeName = codeInput.attr('name'),
        btn = $(this),
        policy = form.find('.policy-wrapper input'); // валидация политики конфиденциальности

    if (policy.prop('checked')) {
      policyCheck = true;
      policy.parent().find('.policy-checkbox').removeClass('not-check');
      btn.removeClass('btn-right_disable');
    } else {
      policyCheck = false;
      policy.parent().find('.policy-checkbox').addClass('not-check');
      btn.addClass('btn-right_disable');
    } // валидация смс кода


    if (codeInput.val().length > 0) {
      codeInput.removeClass('validate-border');
      codeInput.parent().find('.msg-error').hide();
      btn.removeClass('btn-right_disable');
    } else {
      codeInput.addClass('validate-border');
      codeInput.parent().find('.msg-error').show();
      btn.addClass('btn-right_disable');
    } // отправка формы при условии


    if (!$(this).hasClass('btn-right_disable') && policyCheck) {
      form.find('.msg').hide();

      var jsData = _defineProperty({}, codeName, codeInput.val());

      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'post',
        // dataType: 'json',
        data: jsData,
        success: function success(_success8) {
          console.log(_success8);

          if (_success8) {}
        },
        error: function error(req, text, _error8) {}
      });
    }
  }); // adaptive

  if (window.matchMedia('(max-width: 767.99px)').matches) {
    $('#footer').find('.footer-right').addClass('accordion');
    var catalogSort = $('catalog').find('.select.top_filter__select');
    catalogSort.off();
    catalogSort.removeClass('select');
    $(document).on('click', '.order__basket-content_show', function (e) {
      e.preventDefault();
      $('.order__basket-content').toggleClass('scale');
    });
  }

  function catalogCardHeightOnHover() {
    document.querySelectorAll('.catalog__card').forEach(function (card) {
      var heightWithoutHover = parseInt(card.offsetHeight),
          margin_bottom_stock = getStyle(card).marginBottom;
      card.addEventListener('mouseover', function () {
        var heightOnHover = this.offsetHeight;

        if (heightWithoutHover < heightOnHover && parseInt(margin_bottom_stock) > 0) {
          var margin_bottom_calculate = heightWithoutHover - heightOnHover;
          this.style.setProperty('margin-bottom', margin_bottom_calculate + 'px', 'important');
        }
      });
      card.addEventListener('mouseout', function () {
        this.style.setProperty('margin-bottom', margin_bottom_stock, 'important');
      });
    });
  }

  catalogCardHeightOnHover();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(document).find('#back_to_top').addClass('show');
    } else {
      $(document).find('#back_to_top').removeClass('show');
    }
  });
  $(document).on('click', '#back_to_top', function () {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 800);
  });
});