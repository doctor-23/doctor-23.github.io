"use strict";

function customSelect(container, title, content, label, radio, show) {
  document.querySelectorAll(container).forEach(function (item) {
    var labelHeight = item.querySelector(label).offsetHeight;
    item.querySelector(content).style.maxHeight = labelHeight * show + 16 + 'px';
  });
  $(container).on('click', label, function () {
    var content = $(this).find(radio).text(),
        mainParent = $(this).closest(container);
    mainParent.find(title).text(content);
    mainParent.removeClass('open');
  }).on('click', title, function () {
    if ($(this).closest(container).hasClass('open')) {
      $(container).removeClass('open');
    } else {
      $(container).removeClass('open');
      $(this).closest(container).addClass('open');
    }
  });
} // кастомный select;


function clickOutside(container, area, open) {
  $(function () {
    var i = 0;
    $(container).each(function () {
      i++;
      $(this).attr('data-name', 'wrapper__touch' + i);
    });
    $('[data-name="' + i + '"]').ready(function () {
      var thisAttr = $(this).find(area).parent();
      $(this).find('.wrapper__touch').click(function (event) {
        $('.wrapper__touch').not(this).parent().removeClass(open);
        $(this).parent().toggleClass(open);
      });
      $(document).on('click touchstart', function (e) {
        if (!$(e.target).closest(thisAttr).length) {
          thisAttr.removeClass(open);
        }
      });
    });
  }); // document.addEventListener('click', e => {
  //     let target = e.target;
  //     let its_sortPrice = target == sortPrice || sortPrice.contains(target);
  //     let its_sortPrice_is_open = sortPrice.hasAttribute('open');
  //
  //     if (!its_sortPrice && its_sortPrice_is_open) {
  //         $('.top_filter__select').removeAttr('open');
  //     }
  // });
} // клик вне элемента;
// функция изменения ширины инпутов


function resizeInput() {
  this.style.width = this.value.length + "ch";
} // функция валидации имени


function formNameValid(el, elCheck) {
  if (el.val().length < 2) {
    elCheck = false;
    el.addClass('validate-border');
    el.parent().find('.msg-error').show();
  } else if (el.val().length === 0) {
    elCheck = false;
    el.parent().find('.msg-error').hide();
    el.parent().find('.msg-empty').show();
    el.addClass('validate-border');
  } else {
    elCheck = true;
    el.removeClass('validate-border');
    el.parent().find('.msg-error').hide();
  }

  return elCheck;
} // функция валидации телефона


function formPhoneValid(el, elCheck) {
  var validPhone = /_/;

  if (el.val().length === 0) {
    elCheck = false;
    el.addClass('validate-border');
    el.parent().find('.msg').hide();
    el.parent().find('.msg-error-empty').show();
  } else {
    if (el.val().length > 0 && validPhone.test(el.val())) {
      elCheck = false;
      el.addClass('validate-border');
      el.parent().find('.msg').hide();
      el.parent().find('.msg-error-phone').show();
    } else {
      if (el.val().length > 0 && !validPhone.test(el.val())) {
        elCheck = true;
        el.removeClass('validate-border');
        el.parent().find('.msg').hide();
      } else {
        elCheck = false;
      }
    }
  }

  return elCheck;
} // функция валидации email


function formEmailValid(el, elCheck) {
  var emailVal = el.val(),
      emailValid = emailVal.split('@'),
      validEmail = /_/;
  console.log(el.val());

  if (el.val().length > 0 && !validEmail.test(el.val())) {
    if (emailValid[0].length < 3) {
      el.addClass('validate-border');
      el.parent().find('.msg').hide();
      el.parent().find('.msg-error-length').show();
      elCheck = false;
    } else {
      el.removeClass('validate-border');
      el.parent().find('.msg').hide();
      elCheck = true;
    }
  } else {
    el.parent().find('.msg').hide();

    if (el.val().length === '') {
      el.parent().find('.msg-error-empty').show();
    } else {
      el.parent().find('.msg-error-invalid').show();
    }

    el.addClass('validate-border');
    elCheck = false;
  }

  return elCheck;
}

$(document).ready(function () {
  // check browser for webp format
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  ;
  var body = $('body'); // фиксированная шапка

  function fixedHeader(item) {
    if ($(item).scrollTop() > window.innerHeight) {
      body.addClass('prev_nav_scroll');
    } else {
      body.removeClass('prev_nav_scroll');
    }

    if ($(item).scrollTop() > window.innerHeight + 300) {
      body.addClass('nav_scroll');
    } else {
      body.removeClass('nav_scroll');
    }
  }

  fixedHeader(window);
  $(window).scroll(function () {
    fixedHeader(this);
  });
  var hamburger = $('.hamburger'); // плавный скролл для меню шапки

  $('.nav-menu__list-item > a').on('click', function (e) {
    if (!$(this).parent().hasClass('nav-menu__list-item_last')) {
      e.preventDefault();
      var t = 1000;
      var d = $(this).attr('href');
      $('html,body').stop().animate({
        scrollTop: $(d).offset().top
      }, t);

      if (hamburger.hasClass('open')) {
        hamburger.removeClass('open');
        $('header').find('.nav-menu').removeClass('show');
      }
    }
  });
  hamburger.on('click', function () {
    $(this).toggleClass('open');
    $('header').find('.nav-menu').toggleClass('show');
  }); // гамбурегер меню
  // вызов формы обратной связи

  $(document).on('click', '.btn-call, .main-hero__btn, .calculator__btn', function (e) {
    e.preventDefault();
    $('#modal_feedback_form').fadeIn(215); // инит валидации и отправки модальной формы

    validation('#modal_form__feedback');

    if (hamburger.hasClass('open')) {
      hamburger.removeClass('open');
      $('header').find('.nav-menu').removeClass('show');
    }
  }); // if (window.matchMedia('(max-width: 991.98px)').matches) {
  //     var mainHeight = $('.main-hero').outerHeight();
  //
  //     $('.main-hero__slider-item').css('height', mainHeight + 'px')
  // }
  // конец

  customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4); // init кастомного селекта

  clickOutside('.select', '.select-content', 'open'); // клик вне элемента
  // каталог
  // вызов фильтра в каталоге

  $(document).on('click', '.catalog__btn-show-filters', function () {
    $('#overlay').fadeIn(215);
    $('.catalog').find('.filters').addClass('show');
  });
  $(document).on('click', '.catalog .filters .close, #overlay', function () {
    $('#overlay').fadeOut(215);
    $('.catalog .filters').removeClass('show');
  }); // конец
  // функция инита слайдера

  function catalogSlider(el, infinite) {
    $(el).slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 300,
      draggable: false,
      arrows: true,
      infinite: infinite,
      variableWidth: true,
      // dots: true,
      // dotsClass: 'slider-dots',
      prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
      nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
      swipe: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slider-dots'
        }
      }]
    });
  }

  var tabs = $('.catalog__tabs');
  var sliders = document.querySelectorAll('.catalog__list .catalog__list-slider');
  var sliderChildren; // инит слайдера каталога для текущего выбранного таба при загрузке

  sliders.forEach(function (item) {
    var data = item.dataset.tab,
        dataTab = tabs.find('.catalog__tabs-item.active').data('tab');

    if (data === dataTab) {
      item.classList.add('active');
      sliderChildren = $('.catalog__list-slider.active').children();
      catalogSlider('.catalog__list-slider.active', true);
    }
  }); // клик по табу

  tabs.on('click', '.catalog__tabs-item', function () {
    var that = $(this),
        dataTab = that.data('tab'),
        slider = $('.catalog__list .catalog__list-slider.active'),
        currentSlider = document.querySelector('.catalog__list .catalog__list-slider[data-tab="' + dataTab + '"]');
    body.addClass('loader'); // ждем пока загрузится контент, чтобы его подменить

    setTimeout(function () {
      // показываем выбранный слайдер
      sliderChildren = null;
      slider.removeClass('active');
      slider.slick('unslick');
      currentSlider.classList.add('active');
      sliderChildren = $('.catalog__list-slider.active').children();
      catalogSlider('.catalog__list-slider.active', true); // делаем активным текущий таб

      $('.catalog__tabs').find('.catalog__tabs-item').removeClass('active');
      that.addClass('active'); // убмраем лоадер

      body.removeClass('loader');
    }, 1000);
  }); // функция для выбора цены в каталоге

  function getPriceRange() {
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
    }

    resizeInput.call(priceMin[0]);
    resizeInput.call(priceMax[0]);
    var uiHandle = document.querySelectorAll('.noUi-handle');
    uiHandle.forEach(function (item) {
      item.addEventListener('mousedown', function () {
        this.addEventListener('mousemove', function () {
          if (this.classList.contains('noUi-handle-upper')) {
            resizeInput.call(priceMax[0]);
          } else if (this.classList.contains('noUi-handle-lower')) {
            resizeInput.call(priceMin[0]);
          }
        });
      });
      item.addEventListener('mouseover', function () {});
    });
  }

  getPriceRange(); // сбрасываем значения выпадающих списков при загрузке

  $('.catalog__filters .select .select-content .select-content__wrapper:first-child').find('.select-content__radio').prop('checked', true);
  $('#minPrice').val($('#minPrice').data('value'));
  $('#maxPrice').val($('#maxPrice').data('value'));
  $(document).on('click', '.filters__btn', function (e) {
    e.preventDefault();
    var motor = $('.select-motor').find('.select-content__radio:checked').val(),
        model = $('.select-brand').find('.select-content__radio:checked').val(),
        min_price = parseInt($('#minPrice').val()),
        max_price = parseInt($('#maxPrice').val()),
        currentSlider = $('.catalog__list-slider.active'),
        hiddenContainer = $('.catalog__list__hidden-item');

    var comparePrice = function comparePrice(price) {
      return min_price <= price && price <= max_price;
    };

    currentSlider.slick('unslick');
    hiddenContainer.children().remove();
    currentSlider.children().remove();
    currentSlider.append(sliderChildren);
    $('#overlay').fadeOut(215);
    $('.catalog .filters').removeClass('show');
    var sliderItem = currentSlider.find('.catalog__list-item');
    body.addClass('loader');
    sliderItem.each(function () {
      if (!$(this).closest('.slick-slide').hasClass('slick-cloned')) {
        var data_motor = $(this).data('motor'),
            data_model = $(this).data('model'),
            price = $(this).find('.catalog__list-item__list-item.price .catalog__list-item__list-item__content').text().trim();
        price = price.replace('от ', '');
        price = price.replace(' ', '');
        price = parseInt(price);
        var compare_price = comparePrice(price);

        if (compare_price) {
          if (data_model !== model || model === "all") {
            if (model !== "all") {
              hiddenContainer.append($(this));
            }

            if (data_motor !== motor) {
              hiddenContainer.append($(this));
            }
          } else {
            console.log(data_model, model);

            if (data_motor !== motor && motor !== "all") {
              hiddenContainer.append($(this));
            }
          }
        } else {
          hiddenContainer.append($(this));
        }
      }
    });
    sliderItem = currentSlider.find('.catalog__list-item');
    var item_quantity = sliderItem.length;

    if (item_quantity === 0) {
      $('.catalog__list__empty').show();
    } else {
      $('.catalog__list__empty').hide();
      catalogSlider('.catalog__list-slider.active', false);
    }

    setTimeout(function () {
      body.removeClass('loader');
    }, 2000);
  }); // конец
  // калькулятор

  function calculatorRange(slider, sliderValue, step) {
    var item = document.getElementById(slider);
    var itemValue = document.getElementById(sliderValue);
    noUiSlider.create(item, {
      start: [itemValue.value],
      connect: true,
      step: step,
      range: {
        min: parseFloat(itemValue.getAttribute('min')),
        max: parseFloat(itemValue.getAttribute('max'))
      }
    });
    item.noUiSlider.on('update', function (values, handle) {
      itemValue.value = Math.round(values[0]);
    });

    var setRangeSlider = function setRangeSlider(i, value) {
      var arr = [null, null];
      arr[i] = value;
      item.noUiSlider.set(arr);
    };

    itemValue.addEventListener('change', function (e) {
      setRangeSlider(0, e.currentTarget.value);
    });
    resizeInput.call(itemValue);
  }

  calculatorRange('cargo_price_range', 'cargo_price', 100000);
  calculatorRange('leasing_period_range', 'leasing_period', 1);
  calculatorRange('prepayment_range', 'prepayment', 100000);
  calculatorRange('redemption_payment_range', 'redemption_payment', 1); // конец
  // авто с пробегаом табы

  $('.cargo-with-mileage__tabs').on('click', '.cargo-with-mileage__tabs-item', function () {
    var dataAttr = $(this).data('tab');
    $('.cargo-with-mileage__tabs-item').removeClass('active');
    $(this).addClass('active');
    $('.cargo-with-mileage__content-item').removeClass('active');
    $('.cargo-with-mileage__content-item[data-content="' + dataAttr + '"]').addClass('active');
  }); // конец
  // аккордеон

  (function () {
    var accordion = function accordion(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var dropdownlink = this.el.find('.accordion-submenu__link');
      dropdownlink.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown);
    };

    accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.accordion-submenu').not($next).slideUp().parent().removeClass('open');
      }
    };

    var accordion = new accordion($('.accordion'), false);
  })(); // конец
  // маска телефона и email


  $('.input-phone').inputmask({
    mask: "+7 (X99) 999-99-99",
    definitions: {
      'X': {
        validator: "9",
        placeholder: "9"
      }
    }
  });
  $('.input-email').inputmask('email'); // конец
  // закрытие модальных окон

  $(document).on('click', '.modal, .modal__close', function () {
    $('.modal').fadeOut(215);
  });
  $(document).on('click', '.modal__content', function (e) {
    e.stopPropagation();
  }); // валидация формы

  function validation(form) {
    var parent = $(form),
        formName = parent.find('.input-name'),
        formPhone = parent.find('.input-phone'),
        formEmail = parent.find('.input-email'),
        formInput = parent.find('input'),
        formSubmit = parent.find('button[type="submit"]'),
        nameCheck = false,
        phoneCheck = false,
        emailCheck = false;
    formInput.val(''); // валидация полей при потере фокуса

    formName.on('blur', function () {
      nameCheck = formNameValid(formName, nameCheck);
    });
    formPhone.on('blur', function () {
      phoneCheck = formPhoneValid(formPhone, phoneCheck);
    });
    formEmail.on('blur', function () {
      emailCheck = formEmailValid(formEmail, emailCheck);
    }); // разблокировка кнопки отправки при потере фокуса

    formInput.on('blur', function () {
      if (nameCheck && phoneCheck && emailCheck) {
        formSubmit.removeClass('disabled');
      } else {
        formSubmit.addClass('disabled');
      }
    }); // отправка формы при условии (условие на всякий случай)

    parent.on('submit', function (e) {
      e.preventDefault();
      var form_id = this.getAttribute('ID'),
          clientName = $(this).find('.input-name').val().trim(),
          modalName = $('.modal').find('.name'),
          formData = new FormData(document.getElementById(form_id));

      if (clientName) {
        modalName.text('');
        modalName.text(clientName);
      }

      $('.modal').fadeOut(215);
      body.addClass('loader');

      if (!formSubmit.hasClass('disabled')) {
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: formData,
          processData: false,
          contentType: false,
          success: function success(success) {
            setTimeout(function () {
              body.removeClass('loader');

              if (success.id === 101) {
                $('#modal_feedback_success').fadeIn(215);
              } else {
                $('#modal_feedback_error').fadeIn(215);
              }
            }, 2000);
          },
          error: function error(req, text, _error) {
            console.log(req);
            console.log(text);
            console.log(_error);
            setTimeout(function () {
              body.removeClass('loader');
              $('#modal_feedback_error').fadeIn(215);
            }, 2000);
          }
        });
      }
    });
  }

  validation('.feedback__form'); // конец
});