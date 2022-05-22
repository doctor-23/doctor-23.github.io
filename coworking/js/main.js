"use strict";

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
  ; // карусель главный экран

  $('.hero-courusel').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    arrows: true,
    appendArrows: $('.courusel__arrow-container'),
    prevArrow: '<a class="arrow-left"><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5L11 1.5M2 10.5L11 19.5M2 10.5H21.5" stroke="black" stroke-width="2"/></svg></a>',
    nextArrow: '<a class="arrow-right"><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.5L11 1.5M20 10.5L11 19.5M20 10.5H0.5" stroke="black" stroke-width="2"/></svg></a>',
    swipe: true
  }); // переключение по клику и ховеру

  $('.good-job__list .list__item').on('mouseleave', function () {
    var data_param = $('.good-job__list').find('.list__item.active').data('show'),
        parent = $('.good-job__list_description');
    parent.find('.list_description-item').removeClass('active');
    parent.find('.list_description-item[data-show="' + data_param + '"]').addClass('active');
  }).on('mouseenter', function () {
    var data_param = $(this).data('show'),
        parent = $('.good-job__list_description');
    parent.find('.list_description-item').removeClass('active');
    parent.find('.list_description-item[data-show="' + data_param + '"]').addClass('active');
  });
  $('.good-job__list').on('click', '.list__item', function () {
    var data_param = $(this).data('show'),
        parent = $('.good-job__list_description');
    $('.good-job__list').find('.list__item.active').removeClass('active');
    $(this).addClass('active');
    parent.find('.list_description-item').removeClass('active');
    parent.find('.list_description-item[data-show="' + data_param + '"]').addClass('active');
  }); // гамбургер меню

  $('.hamburger').on('click', function () {
    $('.hamburger_content').addClass('scale_open');
    $('body').addClass('no-scroll');
  });
  $('.hamburger_close').on('click', function () {
    $('.hamburger_content').removeClass('scale_open');
    $('body').removeClass('no-scroll');
  });
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
  });
  ;
});