@@include('_global.js');

// $(document).ready(function () {
//     const mainBody = $('body');
//     const headerH = $('#header').outerHeight();
//
//     // растягиваем main между header&footer
//
//     var header_h = $('header').outerHeight() + 'px',
//         footer_h = $('footer').outerHeight() + 'px';
//
//     $('main').css('min-height', `calc(100vh - (${header_h} + ${footer_h}))`);
//
//     $('a[href^="#"],*[data-href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         var t = 1000;
//         var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
//         $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);
//     }); // плавный скролл
//
//     // поиск города
//
//     $('#choice_city').on('click', function (e) {
//         e.preventDefault();
//
//         $('.modal').fadeOut(0);
//         $('#location_modal').fadeIn(215);
//
//         var modalWidth = $('#location_modal .modal__content')[0].clientWidth;
//
//         $('#location_modal .modal__content').css({
//             'min-width': modalWidth,
//             'max-width': modalWidth
//         });
//         $('#search_city').val('');
//         $(document).find('.modal__cities-list_empty').hide();
//         $(document).find('.modal__cities-list__item').show();
//
//         document.body.classList.add('no-scroll')
//         window.removeEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.removeEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     $(function () {
//         var a = $('.modal__cities-list__column .modal__cities-list__item');
//
//         function searchFilter(value) {
//             var emptyString = $(document).find('.modal__cities-list_empty'),
//                 result;
//
//             result = a.is(function () {
//                 if ($(this).text().toLowerCase().indexOf(value) > -1) {
//                     return true
//                 }
//             });
//
//             // console.log(result)
//
//             if (result) {
//                 emptyString.hide();
//             } else {
//                 emptyString.show();
//             }
//
//             a.filter(function () {
//                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//             });
//         }
//
//         $('#search_city').on('keyup', function () {
//             var searchText = $(this).val();
//
//             if (searchText.length > 0) {
//
//                 searchFilter(searchText);
//                 a.removeHighlight();
//                 a.highlight(searchText);
//             } else {
//                 searchFilter(searchText);
//                 a.removeHighlight();
//             }
//         });
//     });
//
//     // попапы
//
//     $(document).on('click', '.modal, .modal__close', function () {
//         var fields = $('.modal input:not(input[type="submit"], input[type="hidden"], input[type="radio"], input[type="checkbox"], .modal textarea');
//
//         $('.modal').fadeOut(215);
//
//         $('.modal .msg').hide();
//         fields.removeClass('validate');
//         fields.val('');
//         // enableScrollBody();
//         document.body.classList.remove('no-scroll')
//     });
//
//     $(document).on('click', '.modal > .modal__content', function (e) {
//         e.stopPropagation();
//     });
//
//     const classesArr = ['not-found__btn'];
//
//     $(document).on('click', 'button.btn, button.footer__call', function (e) {
//         e.preventDefault();
//
//         var that = $(this);
//         var btnClasses = that[0].classList;
//         var isOpen = false;
//
//         for (var i = 0; i < btnClasses.length; i++) {
//             if (btnClasses[i] !== 'btn') {
//                 isOpen = classesArr.includes(btnClasses[i]);
//             }
//
//             if (isOpen) {
//                 break;
//             }
//         }
//
//         if (!isOpen) {
//             $('#modal-lead').fadeIn(215);
//             validation('#lead_form');
//         }
//
//         if (!$(this).hasClass('not-modal')) {
//             document.body.classList.add('no-scroll')
//         }
//
//     }); // конец
//
//     // запуск валидации форм на сайте
//
//     if ($('#main_hero_form').length > 0) validation('#main_hero_form');
//     if ($('#feedback_form').length > 0) validation('#feedback_form');
//     if ($('#contacts_form').length > 0) validation('#contacts_form');
//
//     // фиксированная шапка и кнопка возврата наверх
//
//     function fixedHeader(item) {
//         if ($(item).scrollTop() > headerH) {
//             mainBody.addClass('nav_scroll');
//         } else {
//             mainBody.removeClass('nav_scroll');
//         }
//
//         if ($(item).scrollTop() > item.innerHeight) {
//             $('#back_to_top')[0].style.display = 'flex';
//         } else {
//             $('#back_to_top')[0].style.display = 'none';
//         }
//     }
//
//     $('#back_to_top').on('click', function () {
//         $('html,body').stop().animate({scrollTop: 0}, 1000);
//     })
//
//     fixedHeader(window);
//
//     $(window).scroll(function () {
//         fixedHeader(this)
//     }); // конец
//
//     // гамбургер меню
//
//     var hamburger = document.querySelector('.hamburger');
//     var hamburger_close = document.querySelector('#header .close-ico');
//     var hamburger_menu = document.querySelector('.hamburger-wrap');
//     var hamburger_scroll_menu = document.querySelector('.hamburger-wrap__scroll');
//
//     hamburger.addEventListener('click', function () {
//         hamburger_menu.classList.add('open');
//         document.body.classList.add('no-scroll');
//
//         window.removeEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.removeEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_menu.addEventListener('click', function () {
//         this.classList.remove('open');
//         document.body.classList.remove('no-scroll');
//
//         window.addEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.addEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_close.addEventListener('click', function () {
//         hamburger_menu.classList.remove('open');
//         document.body.classList.remove('no-scroll');
//
//         window.addEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.addEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_scroll_menu.addEventListener('click', function (e) {
//         e.stopPropagation();
//     })
//
//     //  слайдер "кто будет учить" страница "о школе"
//
//     $('.consultations-reviews__list').slick({
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         speed: 300,
//         draggable: true,
//         dots: true,
//         appendDots: $('.dots-arrows_wrap'),
//         appendArrows: $('.dots-arrows_wrap'),
//         dotsClass: 'slider-dots consultations-reviews__list-dots',
//         prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
//         nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
//         infinite: false,
//         swipe: true,
//         responsive: [
//             {
//                 breakpoint: 1029,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 807,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     infinite: true
//                 }
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 }
//             },
//         ]
//     });
//
//     // страница ежедневника
//
//     $('.purchases__slider-main').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: '<a class="arrow-left"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 15.1187L9.1875 14.0562L2.91876 7.84062L9.1875 1.625L8.125 0.5625L0.793756 7.84062L8.125 15.1187Z" fill="currentColor"/></svg></a>',
//         nextArrow: '<a class="arrow-right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 15.1187L0.8125 14.0562L7.08124 7.84062L0.8125 1.625L1.875 0.5625L9.20624 7.84062L1.875 15.1187Z" fill="currentColor"/></svg></a>',
//         fade: true,
//         asNavFor: '.purchases__slider-nav',
//         infinite: false,
//         adaptiveHeight: true
//     });
//
//     $('.purchases__slider-nav').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         asNavFor: '.purchases__slider-main',
//         arrows: false,
//         focusOnSelect: true,
//         infinite: false
//     });
//
//
//     // аккордеон
//     (function () {
//         var accordion = function accordion(el, multiple) {
//             this.el = el || {};
//             this.multiple = multiple || false;
//             var dropdownlink = this.el.find('.accordion__heading');
//             dropdownlink.on('click', {
//                 el: this.el,
//                 multiple: this.multiple
//             }, this.dropdown);
//         };
//
//         accordion.prototype.dropdown = function (e) {
//             var $el = e.data.el,
//                 $this = $(this),
//                 $next = $this.next();
//             $next.slideToggle();
//             $this.parent().toggleClass('open');
//
//             if (!e.data.multiple) {
//                 $el.find('.accordion__submenu').not($next).slideUp().parent().removeClass('open');
//             }
//         };
//
//         var accordion = new accordion($('.accordion'), false);
//     })(); // конец
//
//     // вызов попап на странице консультаций
//
//     $(document).on('click', '.consultations__list-item__btn-more', function (e) {
//         e.preventDefault();
//
//         var id = $(this).attr('href');
//         var modal = document.getElementById(id);
//
//         $(modal).fadeIn(215);
//
//     });
//
//     // маски
//
//     $('.input-phone').inputmask({
//         mask: "+7 (X99) 999-99-99",
//         definitions: {
//             'X': {
//                 validator: "9",
//                 placeholder: "9"
//             }
//         }
//     });
//
//     $('.input-email').inputmask({
//         mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
//         greedy: false,
//         onBeforePaste: function (pastedValue, opts) {
//             pastedValue = pastedValue.toLowerCase();
//             return pastedValue.replace('mailto:', '');
//         },
//         definitions: {
//             '*': {
//                 validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
//                 casing: 'lower'
//             }
//         }
//     });// конец
//
//
//     // Переход на страницы политики конфиденцильности и договора оферты
//
//     $(document).on('click', '.footer__policy-link, .footer__agreement-link', function (e) {
//         e.preventDefault();
//
//         var href = $(this).attr('href')
//
//         href = href.replace('#', '');
//
//         window.location.href = href;
//     })
//
// @@include('_loadmore.js');
// });
