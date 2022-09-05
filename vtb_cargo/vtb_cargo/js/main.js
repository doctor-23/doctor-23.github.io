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


function resizeInput() {
  this.style.width = this.value.length + "ch";
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
  $('.main-hero__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    // autoplay: true,
    autoplaySpeed: 2000
  });
  customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4); // init кастомного селекта

  clickOutside('.select', '.select-content', 'open'); // клик вне элемента

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
    uiHandle.forEach(function (handle) {
      handle.addEventListener('mousedown', function () {
        this.addEventListener('mousemove', function () {
          if (this.classList.contains('noUi-handle-upper')) {
            resizeInput.call(priceMax[0]);
          } else if (this.classList.contains('noUi-handle-lower')) {
            resizeInput.call(priceMin[0]);
          }
        });
      });
    });
  }

  getPriceRange();
  $('.catalog__list-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    arrows: true,
    infinite: true,
    prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
    nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
    swipe: true
  });

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
  calculatorRange('redemption_payment_range', 'redemption_payment', 1);
  $('.cargo-detail__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    arrows: true,
    dots: true,
    dotsClass: 'slider-dots',
    infinite: true,
    prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
    nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
    swipe: true
  });
});