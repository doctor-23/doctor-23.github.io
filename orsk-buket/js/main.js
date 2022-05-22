$(document).ready(function () {
    // Плавающая Шапка

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('nav_scroll');
        } else {
            $('header').removeClass('nav_scroll');
        }
    });

    // Первый слайдер на главном экране

    $('.main-screen__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        dots: true,
        dotsClass: 'dots-slider',
        arrows: true,
        appendArrows: $('.arrow-container'),
        prevArrow: '<a class = "arrow-left"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L5.5 11.5M1.5 7.5L5.5 3.5M1.5 7.5L14 7.5" stroke="rgba(255, 255, 255, 0.5)"/></svg></a>',
        nextArrow: '<a class = "arrow-right"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1" stroke="rgba(255, 255, 255, 0.5)"/></svg></a>',
        swipe: true,
        responsive: [{
            breakpoint: 575.98,
            settings: {
                arrows: false,
            }
        }]
    });

    // Слайдер Акций

    $('.event__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        slide: '.slider__item',
        speed: 300,
        draggable: false,
        dots: false,
        arrows: true,
        prevArrow: '<a class = "arrow-left"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L5.5 11.5M1.5 7.5L5.5 3.5M1.5 7.5L14 7.5" stroke="#0F0F0F"/></svg></a>',
        nextArrow: '<a class = "arrow-right"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1" stroke="#0F0F0F"/></svg></a>',
        swipe: true,
        responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    dotsClass: 'dots-slider',
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576.98,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    dotsClass: 'dots-slider',
                },
            }
        ]
    });

    // Слайдер отзывов

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        dots: true,
        dotsClass: 'reviews-dots',
        arrows: true,
        prevArrow: '<a class = "arrow-left"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L5.5 11.5M1.5 7.5L5.5 3.5M1.5 7.5L14 7.5" stroke="#0F0F0F"/></svg></a>',
        nextArrow: '<a class = "arrow-right"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1" stroke="#0F0F0F"/></svg></a>',
        swipe: true,
    });

    // Слайдер карточки товара

    $('.slider__block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });

    $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider__block',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576.98,
            settings: {
                slidesToShow: 5,
            },
            breakpoint: 350,
            settings: {
                slidesToShow: 4,
            },
        }]
    });

    // Отключение слайдера в отзывах карточки товара

    $('section.card-reviews .reviews__slider, .section__reviews-all .reviews__slider, .blog_card-comment .reviews__slider').slick('unslick');

    // сдайдер в деталке блока

    if ($('.identical__slider .identical__slider-item').length <= 3) {} else {
        $('.identical__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 300,
            draggable: false,
            dots: false,
            arrows: true,
            centerMode: true,
            centerPadding: '25px',
            prevArrow: '<a class = "arrow-left"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L5.5 11.5M1.5 7.5L5.5 3.5M1.5 7.5L14 7.5" stroke="#0F0F0F"/></svg></a>',
            nextArrow: '<a class = "arrow-right"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1" stroke="#0F0F0F"/></svg></a>',
            swipe: true,
            responsive: [{
                    breakpoint: 1199.98,
                    settings: {
                        centerMode: false
                    }
                }, 
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: false,
                        dots: true,
                        dotsClass: 'dots-slider'
                    }
                },
                {
                    breakpoint: 576.98,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        dots: true,
                        dotsClass: 'dots-slider'
                    },
                }
            ]
        });
    }

    // аккордион
    function accoFun() {
        $(function () {
            var customAcco = function (el, multiple) {
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
            }

            var customAcco = new customAcco($('.accordion'), false);
        });
    }

    accoFun();

    // Все что связано с бургер меню

    var hMob = $('.header-mobile__bottom-nav');

    $('.burgerMenu').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).addClass('close');
            $('.mobile__dropDown-menu').removeClass('scale');
            hMob.css('position', 'relative');
        } else {
            $(this).removeClass('close');
            $(this).addClass('open');
            $('.mobile__dropDown-menu').addClass('scale');
            hMob.css('position', 'static');
        }
    });

    $('.column__search-icon').on('click', function () {
        var sWrap = $('.search-wrapper');
        if (sWrap.hasClass('scale')) {
            sWrap.removeClass('scale');
            hMob.css('position', 'relative');
        } else {
            sWrap.addClass('scale');
            hMob.css('position', 'static');
        }
    });

    $('.item__link-submenu').on('click', function () {
        $('.nav__list-submenu').addClass('scale');
    });

    $('.submenu__heading').on('click', function () {
        $('.nav__list-submenu').removeClass('scale');
    });

    // Фильтр каталога

    var i = 0;

    $(".filter__wrapper").each(function () {
        i++;
        $(this).attr("data-name", "wrapper__touch" + i);
    });

    $("[data-name=" + i + "]").ready(function () {

        var thisAttr = $(this).find(".wrapper__touch").parent();

        $(this).find(".wrapper__touch").click(function (event) {
            $(".wrapper__touch").not(this).parent().removeClass("open");
            $(this).parent().toggleClass("open");
        });

        $(document).on('click touchstart', function (e) {
            if (!$(e.target).closest(thisAttr).length) {
                thisAttr.removeClass("open");
            }
        });
    });

    $('.filter__price').on('click', '.filter__price-item', function () {
        $('.filter__price-wrapper').removeClass('click-active');
        $(this).closest('.filter__price-wrapper').addClass('click-active');
    });

    $('.filter__price-close').on('click', function () {
        $('.filter__price-wrapper').removeClass('click-active');
    });

    $('.sorting__price').on('click', '.sorting-wrapper__item', function () {
        $('.sorting__price-item').removeClass('click-active');
        $(this).closest('.sorting__price-item').addClass('click-active');
    });

    $('.sorting__popular').on('click', '.sorting-wrapper__item', function () {
        $(this).closest('.sorting__popular-wrapper').toggleClass('click-active');
    });


    // Инициализация кастомного сроллбара

    $('.filter__dropdown').mCustomScrollbar();

    // Инциализация касмтоного поля select

    var mySelect = $('.quantity-select, #list__item-time, .pick_up__select, #form-choice_theme').customSelect();

    // Адаптив

    if (window.matchMedia('(max-width: 1199.98px)').matches) {
        $('.search-wrapper .search-input').attr('placeholder', 'Ваш запрос...');
    }

    if (window.matchMedia('(max-width: 991.98px)').matches) {
        function resizeContent() {
            var headerA = document.getElementById('header');
            var headerA_height = headerA.offsetHeight + 'px';
            $('.mobile__dropDown-menu').css({
                'top': headerA_height
            });
        }
    }

    if (window.matchMedia('(max-width: 767.98px)').matches) {
        // Фильтр каталога

        $('.filter__price-item-2 a').html('От 2500');
        $('.filter__price-item-3 a').html('От 3500');
        $('.filter__price-item-4 a').html('От 5000');
    }

    if (window.matchMedia('(max-width: 576.98px)').matches) {

        // Фльтр каталога

        function resizeContent() {
            var headerB = document.getElementById('header');
            var header_height = headerB.offsetHeight + 'px';
            $('.catalog__filter').css({
                'top': header_height
            });
        }

        resizeContent();
        $(window).resize(resizeContent);

        $(window).trigger('resize');

        $('.opener__wrapper').on('click', function () {
            $('.catalog__filter').addClass('scale');
            $('section.catalog .container').css('position', 'static');
        });

        $('.catalog__filter-title .back-arrow').on('click', function () {
            $('.catalog__filter').removeClass('scale');
            $('section.catalog .container').css('position', 'relative');
        });

        $('.item__heading').on('click', function () {
            $(this).parent('.filter-list__item').addClass('scale');
        });

        $('.dropdown__heading').on('click', function () {
            $('.filter-list__item').removeClass('scale');
        });
    }

    // блок с табами

    $(function () {
        $('ul.tabs-addit__nav').on('click', 'li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active').closest('div.tabs-addit__wrapper').find('div.content__tab').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $('.reviews__form .form__heading').on('click', function () {
        $('.review__form, .reviews__form-data').toggleClass('form-scale');
        $('.reviews__form .form__heading').toggleClass('form-open');
        $('.reviews__form').toggleClass('r-form-open');
    });

// добавление фото в форме отзыва

    // удаление превью фото

    $('.added-photo-wrapper').on('click', '.delete-photo-btn', function () {
        $('#add-photo-input').val('');
        $('.added-photo-wrapper__item').remove();
        $('.add-photo__action').removeClass('action-added');
        $('.add-photo-wrapper').removeClass('added');

    });

    // удаляем превью фото, если хотим добавить новые

    $('.file-input-wrapper').on('click', function () {
        if ($('.added-photo-wrapper__item').length > 0) {
            $('.delete-photo-btn').click();
        }
        $('.add-photo-wrapper').removeClass('added');
    });

    // создаем превью фото

    $('#add-photo-input, #popup__add-photo-input').on('change', function (e) {
        var fileCollection = new Array(),
            files = e.target.files,
            a = $('#add-photo-input, #popup__add-photo-input')[0].files.length;
            
        $('.file__wrapper-counter .counter__text').text(a + '/3');
        $('.add-photo-wrapper').addClass('added');

        if ($('#add-photo-input, #popup__add-photo-input')[0].files.length > 3) {
            $('.delete-photo-btn').click();
            alert('Вы можете добавить до 4 фотографий');
        } else {
            $.each(files, function (i, file) {
                fileCollection.push(file);

                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {

                    var template = '<div class="added-photo-wrapper__item">' +
                        '<img src="' + e.target.result + '" class="review-image"> ' +
                        '<div class="delete-photo-btn">' +
                        '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                        '<path d="M4.5 4.5L10.5 10.5M4.5 10.5L10.5 4.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.'+'63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="white"/></svg>'

                    $('.added-photo-wrapper').append(template);
                    $('.add-photo__action').addClass('action-added');
                }
            });
        }

        
    });

    // звезды рейтинга в форме отзыва о товаре

    $(function (){

        var ifClick = false,
            a = {'background-position': '0 -16px'},
            b = {'background-position': '0 0'};

        $('.rating-star').on('click', function () {
            $(this).css(a).nextAll('.rating-star').css(b);
            $(this).css(b).prevAll('.rating-star').css(a);

            ifClick = true;
        })
        .hover(function () {
            if (!ifClick) {
                $(this).css(a).nextAll('.rating-star').css(b);
                $(this).css(b).prevAll('.rating-star').css(a);
            }
        });
    });

    // попап галлерея в отзывах карточки товара

    $('.item__reviews-photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

// конец скрипта добавления фото в отзыве

    // попапы

    $('.callback__link, .item__feedback-link').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(215, function () {
            $('#popup-feedbackCall')
                .css('display', 'block')
                .animate({
                    opacity: 1
                }, 100);
        });
    });

    $('.btn-fast').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(215, function () {
            $('#popup-oneClick')
                .css('display', 'block')
                .animate({
                    opacity: 1
                }, 100);
        });
    });

    $('.reviews__empty-btn').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(215, function () {
            $('#popup-add_review')
                .css('display', 'block')
                .animate({
                    opacity: 1
                }, 100);
        });
    });

    $('.popup__close, #overlay').click(function () {
        $('.popup-all').animate({
            opacity: 0
        }, 100, function () {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(215);
        });

        $('#header').removeClass('scale');
        $('.burgerMenu').removeClass('open');

    });

    // Маска телефона для input

    $(function () {
        $('input[title="Телефон"]').inputmask({
            mask: "+7 (X99) 999-99-99",
            definitions: {
                'X': {
                    validator: "9",
                    placeholder: "9"
                }
            }
        });
    });

    // удаление товара на странице коризна

    $('.item__accessory').on('click', function () {
        var a = $(this).closest('.basket__list-item');
        if (a.find('.item__del').hasClass('active')) {
            a.addClass('deleted');
            a.find('.quantity-select').prop('disabled', true);
            a.find('.custom-select-opener').css('pointer-events', 'none');
            a.find('.item__del').removeClass('active');
            a.find('.item__return').addClass('active');
        } else {
            a.removeClass('deleted');
            a.find('.quantity-select').prop('disabled', false);
            a.find('.custom-select-opener').css('pointer-events', 'auto');
            a.find('.item__del').addClass('active');
            a.find('.item__return').removeClass('active');
        }
    });

    // плавающий блок "оформить заказ"

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $('.link-checkout').css('margin-top', '180px');
    //     } else {
    //         $('.link-checkout').css('margin-top', '0');
    //     }
    // });

// оформление заказа 

    $(function () {
        $('#order-creation__anon, #deliveryYourself, #postcard').prop('checked', false);
        $('#iTakeRecipient').prop('checked', true);
    });

    $('#iTakeRecipient').on('click', function() {
        var a = $(this).closest('.form-list__item').find('.list__item-wrapper');
        if($(this).is(':checked')) {
            a.removeClass('active');
        } else {
            a.addClass('active');
        }
    });

    $('.order__form-address').on('click', '.custom-select-container', function () {
        $(this).closest('.order__form-list').find('.order__form-pick_up').toggleClass('select-active');
    });

    $('#deliveryYourself').on('click', function () {
        var a = $(this).closest('.form-list__item').find('.list__item-delivery'),
            b = $(this).closest('.form-list__item').find('.list__item-pick_up'),
            c = $(this).closest('.order__form-list').find('.order__form-pick_up'),
            d = $(this).closest('.order__form-list').find('.order__form-time_delivery');
        if ($(this).is(':checked')) {
            b.addClass('active');
            a.removeClass('active');
            d.removeClass('active');
            c.addClass('active');
        } else {
            a.addClass('active');
            b.removeClass('active');
            d.addClass('active');
            c.removeClass('active');
            $(this).closest('.form-list__item').find('input').removeClass('validate-border');

        }
    });

    $('#postcard').on('click', function () {
        var a = $(this).closest('.form-list__item').find('.list__item-wrapper');
        if ($(this).is(':checked')) {
            a.addClass('active')
        } else {
            a.removeClass('active');
        }
    });

    // выбор времени

    $('#check-time__choice, #check-time__deliveryYourself').on('click', function () {
        var a = $(this).closest('.form-list__item');

        a.find('.check-time__wrapper').toggleClass('active');
        a.find('.check-time__choice-wrapper').toggleClass('active');
        $(this).closest('.order__form-list').find('.order__form-postcard').toggleClass('active');
    });

    $('#date ~ .custom-select-container').on('click', function () {
        $(this).closest('.order__form-list').find('.order__form-postcard').toggleClass('active');
    });

    $(document).mouseup(function (e) {
        var div = $('.check-time__choice-wrapper, .check-time__wrapper, .order__form-postcard');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });

    // выбор времени в часах и минутах

    $(function() {
        var $a = parseInt($('.counter-block_thirty').find('.choice__num').val()),
            $b = parseInt($('.list__item-check_time').find('.field-minutes').text()),
            $c = parseInt($('.list__item-check_time').find('.field-hours').text()),
            minItem, hoursItem, fifNum, $minutesNum, $hoursNum;

        $('.check-time__choice-wrapper').find('.counter-block_fifteen .choice__num').val($c);
        $('.check-time__choice-wrapper').find('.counter-block_thirty .choice__num').val($b);

        $('.counter-block').on('click', '.choice__arrow', function () {
            minItem = $(this).closest('.list__item-check_time').find('.field-minutes'),
            hoursItem = $(this).closest('.list__item-check_time').find('.field-hours'),
            fifNum = $(this).closest('.check-time__choice-wrapper').find('.counter-block_fifteen .choice__num'),
            $minutesNum = parseInt(minItem.text()),
            $hoursNum = parseInt(hoursItem.text());

            // клик на плюс

            if ($(this).hasClass('choice__arrow-plus')) {

                // блок выбора часов

                if ($(this).parent().hasClass('counter-block_fifteen')) {
                    if ($hoursNum + 1 < 24) {
                        hoursItem.text($hoursNum + 1);
                    } else {
                        hoursItem.text('00');
                    }
                }

                // блок выбора минут

                if ($(this).parent().hasClass('counter-block_thirty')) {
                    if ($minutesNum + $a < 60) {
                        minItem.text($minutesNum + $a);
                    } else {
                        minItem.text('00');

                        if ($hoursNum + 1 < 24) {
                            hoursItem.text($hoursNum + 1);
                            fifNum.val($hoursNum + 1);

                        } else {
                            hoursItem.text('00');
                            fifNum.val('00');
                        }
                    }
                }

                // возвращаем значение выбора

                minItem = $(this).closest('.list__item-check_time').find('.field-minutes'),
                hoursItem = $(this).closest('.list__item-check_time').find('.field-hours'),
                $minutesNum = parseInt(minItem.text()),
                $hoursNum = parseInt(hoursItem.text());

                $(this).closest('.list__item-check_time').find('.check-time__input').val($hoursNum + ':' + $minutesNum);
                $(this).parent('.counter-block_fifteen').find('.choice__num').val($hoursNum);
            }

            // клик на минус

            if ($(this).hasClass('choice__arrow-minus')) {

                // блок выбора часов

                if ($(this).parent().hasClass('counter-block_fifteen')) {
                    if ($hoursNum - 1 > 0) {
                        hoursItem.text($hoursNum - 1);
                    } else {
                        if ($hoursNum - 1 == 0) {
                            hoursItem.text('00');
                        } else {
                            hoursItem.text('23');
                        }
                    }
                }

                // блок выбора минут

                if ($(this).parent().hasClass('counter-block_thirty')) {
                    if ($minutesNum - $a > 0) {
                        minItem.text($minutesNum - $a);
                    } else {
                        if ($minutesNum - $a == 0) {
                            minItem.text('00');
                        } else {
                            minItem.text(60 - $a);

                            if ($hoursNum - 1 > 0) {
                                hoursItem.text($hoursNum - 1);
                                fifNum.val($hoursNum - 1);
                            } else {
                                if ($hoursNum - 1 == 0) {
                                    hoursItem.text('00');
                                    fifNum.val('00');
                                } else {
                                    hoursItem.text('23');
                                    fifNum.val('23');
                                }
                            }
                        }
                    }
                }

                // возвращаем значение выбора

                minItem = $(this).closest('.list__item-check_time').find('.field-minutes'),
                hoursItem = $(this).closest('.list__item-check_time').find('.field-hours'),
                $minutesNum = parseInt(minItem.text()),
                $hoursNum = parseInt(hoursItem.text());

                $(this).closest('.list__item-check_time').find('.check-time__input').val($hoursNum + ':' + $minutesNum);
                $(this).parent('.counter-block_fifteen').find('.choice__num').val($hoursNum);
            }
        });
    });

    // выбор времени в часах и минутах c боя

    // $(function() {
    //     var datePick = $('#date2');
    //     datePick.trigger('focus');
    //     $('#ui-datepicker-div').hide();
    //
    //     var parent = $('.list__item-check_time'),
    //         parentWrapper = $('.check-time__choice-wrapper'),
    //         dt = new Date(),
    //         time = dt.getHours(),
    //         timeMinutes = dt.getMinutes(),
    //         month = dt.getMonth() + 1,
    //         day = dt.getDate(),
    //         currentMonth, currentDay, calendarSelect, calendarDay, calendarMonth, calendarYear, d;
    //
    //     if(month < 10) {
    //         currentMonth = '0' + month
    //     } else {
    //         currentMonth = month
    //     }
    //
    //     if(day < 10) {
    //         currentDay = '0' + day
    //     } else {
    //         currentDay = day
    //     }
    //
    //     var currentDate = currentDay + '.' + currentMonth  + '.' +  dt.getFullYear();
    //
    //     if(time + 1 === 24) {
    //         dt.setDate(dt.getDate() + 1);
    //
    //         parent.find('.field-hours').text('00');
    //         parentWrapper.find('.counter-block_fifteen .choice__num').val('00');
    //
    //         day = dt.getDate();
    //
    //         if(day < 10) {
    //             currentDay = '0' + day
    //         } else {
    //             currentDay = day
    //         }
    //
    //         datePick.val(currentDay + '.' + currentMonth  + '.' +  dt.getFullYear())
    //     } else {
    //         parent.find('.field-hours').text(time + 1);
    //         parentWrapper.find('.counter-block_fifteen .choice__num').val(time + 1);
    //     }
    //
    //     if(timeMinutes > 30) {
    //         if(time + 2 === 24) {
    //             parent.find('.field-hours').text('00');
    //             parentWrapper.find('.counter-block_fifteen .choice__num').val('00');
    //         } else {
    //             parentWrapper.find('.counter-block_fifteen .choice__num').val(time + 2);
    //             parent.find('.field-hours').text(time + 2);
    //         }
    //
    //         parent.find('.field-minutes').text('00');
    //     } else {
    //         parent.find('.field-minutes').text('30');
    //         parentWrapper.find('.counter-block_fifteen .choice__num').val(time + 1);
    //         parent.find('.field-hours').text(time + 1);
    //     }
    //
    //     if(timeMinutes === 0) {
    //         parent.find('.field-minutes').text('00')
    //         parentWrapper.find('.counter-block_fifteen .choice__num').val(time + 1)
    //         parent.find('.field-hours').text(time + 1);
    //     }
    //
    //     var choiceInput = $('#check-time__choice'),
    //         $minutesNumDefault = parseInt(choiceInput.closest('.check-time__wrapper').find('.field-minutes').text()),
    //         $hoursNumDefault = parseInt(choiceInput.closest('.check-time__wrapper').find('.field-hours').text());
    //
    //     choiceInput.val($hoursNumDefault + ':' + $minutesNumDefault);
    //
    //     var $a = parseInt($('.counter-block_thirty').find('.choice__num').val()),
    //         minItem, hoursItem, fifNum, $minutesNum, $hoursNum;
    //
    //     parentWrapper.find('.counter-block_fifteen .choice__num').val($hoursNumDefault);
    //
    //     $('.counter-block').on('click', '.choice__arrow', function () {
    //         var finalDate = datePick.val();
    //         minItem = $(this).closest('.list__item-check_time').find('.field-minutes');
    //         hoursItem = $(this).closest('.list__item-check_time').find('.field-hours');
    //         fifNum = $(this).closest('.check-time__choice-wrapper').find('.counter-block_fifteen .choice__num');
    //         $minutesNum = parseInt(minItem.text());
    //         $hoursNum = parseInt(hoursItem.text());
    //
    //         // клик на плюс
    //
    //         if ($(this).hasClass('choice__arrow-plus')) {
    //
    //             // блок выбора часов
    //
    //             if ($(this).parent().hasClass('counter-block_fifteen')) {
    //                 if ($hoursNum + 1 < 24) {
    //                     hoursItem.text($hoursNum + 1);
    //                 } else {
    //                     hoursItem.text('00');
    //                     calendarSelect = $(document).find('#ui-datepicker-div .ui-datepicker-calendar .ui-datepicker-current-day a');
    //                     calendarDay = parseInt(calendarSelect.text());
    //                     calendarMonth = calendarSelect.parent().data('month');
    //                     calendarYear = calendarSelect.parent().data('year');
    //                     d = new Date(calendarYear,calendarMonth, calendarDay);
    //
    //                     d.setDate(d.getDate() + 1);
    //                     day = d.getDate();
    //                     month = d.getMonth() + 1;
    //
    //                     if(day < 10) {
    //                         currentDay = '0' + day
    //                     } else {
    //                         currentDay = day
    //                     }
    //
    //                     if(month < 10) {
    //                         currentMonth = '0' + month
    //                     } else {
    //                         currentMonth = month
    //                     }
    //
    //                     datePick.val(currentDay + '.' + currentMonth  + '.' +  d.getFullYear());
    //
    //                     datePick.trigger('focus');
    //                     $('#ui-datepicker-div').hide();
    //                 }
    //             }
    //
    //             // блок выбора минут
    //
    //             if ($(this).parent().hasClass('counter-block_thirty')) {
    //                 if ($minutesNum + $a < 60) {
    //                     minItem.text($minutesNum + $a);
    //                 } else {
    //                     minItem.text('00');
    //
    //                     if ($hoursNum + 1 < 24) {
    //                         hoursItem.text($hoursNum + 1);
    //                         fifNum.val($hoursNum + 1);
    //
    //                     } else {
    //                         hoursItem.text('00');
    //                         fifNum.val('00');
    //                         hoursItem.text('00');
    //                         calendarSelect = $(document).find('#ui-datepicker-div .ui-datepicker-calendar .ui-datepicker-current-day a');
    //                         calendarDay = parseInt(calendarSelect.text());
    //                         calendarMonth = calendarSelect.parent().data('month');
    //                         calendarYear = calendarSelect.parent().data('year');
    //                         d = new Date(calendarYear,calendarMonth, calendarDay);
    //
    //                         d.setDate(d.getDate() + 1);
    //                         day = d.getDate();
    //                         month = d.getMonth() + 1;
    //
    //                         if(day < 10) {
    //                             currentDay = '0' + day
    //                         } else {
    //                             currentDay = day
    //                         }
    //
    //                         if(month < 10) {
    //                             currentMonth = '0' + month
    //                         } else {
    //                             currentMonth = month
    //                         }
    //
    //                         datePick.val(currentDay + '.' + currentMonth  + '.' +  d.getFullYear());
    //
    //                         datePick.trigger('focus');
    //                         $('#ui-datepicker-div').hide();
    //                     }
    //                 }
    //             }
    //
    //             // возвращаем значение выбора
    //
    //             minItem = $(this).closest('.list__item-check_time').find('.field-minutes');
    //             hoursItem = $(this).closest('.list__item-check_time').find('.field-hours');
    //             $minutesNum = parseInt(minItem.text());
    //             $hoursNum = parseInt(hoursItem.text());
    //
    //             $(this).closest('.list__item-check_time').find('.check-time__input').val($hoursNum + ':' + $minutesNum);
    //             $(this).parent('.counter-block_fifteen').find('.choice__num').val($hoursNum);
    //         }
    //
    //         // клик на минус
    //
    //         if ($(this).hasClass('choice__arrow-minus')) {
    //
    //             // блок выбора часов
    //
    //             if ($(this).parent().hasClass('counter-block_fifteen')) {
    //                 if ($hoursNum - 1 > 0) {
    //                     if (finalDate === currentDate) {
    //                         if ($hoursNum - 1 > time + 1) {
    //                             hoursItem.text($hoursNum - 1);
    //                         }
    //                     } else {
    //                         hoursItem.text($hoursNum - 1);
    //                     }
    //                 } else {
    //                     if ($hoursNum - 1 !== 0) {
    //                         calendarSelect = $(document).find('#ui-datepicker-div .ui-datepicker-calendar .ui-datepicker-current-day a');
    //                         calendarDay = parseInt(calendarSelect.text());
    //                         calendarMonth = calendarSelect.parent().data('month');
    //                         calendarYear = calendarSelect.parent().data('year');
    //                         d = new Date(calendarYear, calendarMonth, calendarDay);
    //
    //                         d.setDate(d.getDate() - 1);
    //                         day = d.getDate();
    //                         month = d.getMonth() + 1;
    //
    //                         if (day < 10) {
    //                             currentDay = '0' + day
    //                         } else {
    //                             currentDay = day
    //                         }
    //
    //                         if (month < 10) {
    //                             currentMonth = '0' + month
    //                         } else {
    //                             currentMonth = month
    //                         }
    //
    //                         changeDate = currentDay + '.' + currentMonth + '.' + dt.getFullYear();
    //
    //                         if (currentDate > changeDate || currentDate === changeDate) {
    //                             hoursItem.text('23');
    //
    //                             datePick.val(currentDay + '.' + currentMonth + '.' + d.getFullYear());
    //
    //                             datePick.trigger('focus');
    //                             $('#ui-datepicker-div').hide();
    //                         }
    //                     } else {
    //                         hoursItem.text('00');
    //                     }
    //                 }
    //             }
    //
    //             // блок выбора минут
    //
    //             if ($(this).parent().hasClass('counter-block_thirty')) {
    //                 if ($minutesNum - $a > 0) {
    //                     console.log('сработало')
    //                     minItem.text($minutesNum - $a);
    //                 } else {
    //                     if ($minutesNum - $a !== 0) {
    //                         console.log('меняем на 30')
    //                         if (finalDate === currentDate) {
    //                             if(timeMinutes > 30) {
    //                                 console.log('замена 1')
    //                                 if($hoursNum !== time + 2) {
    //                                     minItem.text(60 - $a);
    //
    //                                     if ($hoursNum - 1 > 0) {
    //                                         hoursItem.text($hoursNum - 1);
    //                                         fifNum.val($hoursNum - 1);
    //                                     }
    //                                 }
    //                             } else {
    //                                 console.log('замена 2')
    //                                 if($hoursNum !== time + 1) {
    //                                     minItem.text(60 - $a);
    //
    //                                     if ($hoursNum - 1 > 0) {
    //                                         hoursItem.text($hoursNum - 1);
    //                                         fifNum.val($hoursNum - 1);
    //                                     }
    //                                 }
    //                             }
    //                         } else {
    //                             console.log('замена без усдловий')
    //
    //                             minItem.text(60 - $a);
    //
    //                             if ($hoursNum - 1 > 0) {
    //                                 hoursItem.text($hoursNum - 1);
    //                                 fifNum.val($hoursNum - 1);
    //                             } else {
    //                                 if ($hoursNum - 1 !== 0) {
    //                                     calendarSelect = $(document).find('#ui-datepicker-div .ui-datepicker-calendar .ui-datepicker-current-day a');
    //                                     calendarDay = parseInt(calendarSelect.text());
    //                                     calendarMonth = calendarSelect.parent().data('month');
    //                                     calendarYear = calendarSelect.parent().data('year');
    //                                     d = new Date(calendarYear, calendarMonth, calendarDay);
    //
    //                                     d.setDate(d.getDate() - 1);
    //                                     day = d.getDate();
    //                                     month = d.getMonth() + 1;
    //
    //                                     if (day < 10) {
    //                                         currentDay = '0' + day
    //                                     } else {
    //                                         currentDay = day
    //                                     }
    //
    //                                     if (month < 10) {
    //                                         currentMonth = '0' + month
    //                                     } else {
    //                                         currentMonth = month
    //                                     }
    //
    //                                     changeDate = currentDay + '.' + currentMonth + '.' + dt.getFullYear();
    //
    //                                     if (currentDate > changeDate || currentDate === changeDate) {
    //                                         hoursItem.text('23');
    //                                         fifNum.val('23');
    //
    //                                         datePick.val(currentDay + '.' + currentMonth + '.' + d.getFullYear());
    //
    //                                         datePick.trigger('focus');
    //                                         $('#ui-datepicker-div').hide();
    //                                     }
    //                                 } else {
    //                                     hoursItem.text('00');
    //                                     fifNum.val('00');
    //                                 }
    //                             }
    //                         }
    //                     } else {
    //                         console.log('меняем на 00')
    //                         if (finalDate === currentDate) {
    //                             if(timeMinutes > 30) {
    //                                 console.log('даты равны')
    //                                 if($hoursNum !== time + 1) {
    //                                     minItem.text('00');
    //                                     console.log('+2')
    //                                 }
    //                             } else {
    //                                 if($hoursNum !== time + 1) {
    //                                     minItem.text('00');
    //                                     console.log('+1')
    //                                 }
    //                             }
    //                         } else {
    //                             console.log('даты не равны')
    //                             minItem.text('00');
    //                         }
    //                     }
    //                 }
    //             }
    //
    //             // возвращаем значение выбора
    //
    //             minItem = $(this).closest('.list__item-check_time').find('.field-minutes');
    //             hoursItem = $(this).closest('.list__item-check_time').find('.field-hours');
    //             $minutesNum = parseInt(minItem.text());
    //             $hoursNum = parseInt(hoursItem.text());
    //
    //             $(this).closest('.list__item-check_time').find('.check-time__input').val($hoursNum + ':' + $minutesNum);
    //             $(this).parent('.counter-block_fifteen').find('.choice__num').val($hoursNum);
    //         }
    //
    //         var checkWrapper = $(this).closest('.list__item-check_time').find('.check-time__wrapper');
    //
    //         $minutesNumDefault = parseInt(choiceInput.closest('.check-time__wrapper').find('.field-minutes').text());
    //         $hoursNumDefault = parseInt(choiceInput.closest('.check-time__wrapper').find('.field-hours').text());
    //
    //         // if (currentDate <= finalDate) {
    //         //     // console.log(($hoursNumDefault <= time + 1 && $minutesNumDefault === 30)  ($hoursNumDefault <= time + 1 && $minutesNumDefault === 0))
    //         //     if ($hoursNumDefault >= time + 1) {
    //         //         if($hoursNumDefault !== 0) {
    //         //             checkWrapper.addClass('not-valid');
    //         //         }
    //         //     } else {
    //         //         if($hoursNumDefault === 0) {
    //         //             checkWrapper.removeClass('not-valid');
    //         //         } else {
    //         //             checkWrapper.removeClass('not-valid');
    //         //         }
    //         //     }
    //         // }
    //
    //         if (currentDate > finalDate) {
    //             checkWrapper.addClass('validate-border');
    //         } else {
    //             checkWrapper.removeClass('validate-border');
    //         }
    //
    //     });
    //
    // });

    // поле промокода

    $('#chekout__promocode').on('click', 'input[type="submit"]', function () {
        var a = $(this).closest('#chekout__promocode').find('input[type="text"]'),
            b = $(this).closest('#chekout__promocode');
        if (a.val().length <= 2) {
            a.css('border-color', '#E65497');
            b.find('.msg__error').css('display', 'flex');
        } else {
            a.css('border-color', '#E7E7E7');
            b.find('.msg__error').hide();
            b.find('.msg__succsess').css('display', 'flex');
            $(this).closest('#chekout__promocode').find('input[type="reset"]').show();
            $(this).hide();
        }
    });

    $('#chekout__promocode').on('click', 'input[type="reset"]', function () {
        $(this).hide();
        $(this).closest('#chekout__promocode').find('.msg__succsess').hide();
        $(this).closest('#chekout__promocode').find('input[type="submit"]').show();
        $(this).closest('#chekout__promocode').find('input[type="text"]').css('border-color', '#E7E7E7');
    });

    // инициализация датапикера

    if ($('main').is('.order-page')) {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '<svg width="15" height="15" viewbox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.5L3 8.00002L10 1.50002" stroke="currentColor" stroke-linecap="square"/></svg>',
            nextText: '<svg width="15" height="15" viewbox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.5L3 8.00002L10 1.50002" stroke="currentColor" stroke-linecap="square"/></svg>',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            minDate: 0,
            showOtherMonths: true,
            selectOtherMonths: true
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $(".datepicker").datepicker();
    }

    // валидация оформления заказа

    $('body').on('mousemove', '#order__submit', function () {
        var that = $('#order__form'),
            ordSubmit = $('#order__submit'),
            ordName = that.find('input[name="your_name"]'),
            ordTel = that.find('input[name="your_tel"]'),
            ForMeCheck = that.find('#iTakeRecipient').prop('checked'),
            CourierCheck = that.find('#deliveryYourself').prop('checked'),
            attrDisT = {
                'disabled': true
            },
            attrDisF = {
                'disabled': false
            },
            vClass = 'validate-border',
            vSbm = 'sbm-dis',
            ordRecName = that.find('input[name="RECIPIENT_NAME"]'),
            ordRecTel = that.find('input[name="RECIPIENT_PHONE"]'),
            ordDelvCity = that.find('input[name="CITY"]'),
            ordDelvStreet = that.find('input[name="STREET"]'),
            ordDelvHouse = that.find('input[name="HOUSE"]'),
            ordDelvDate = that.find('input[name="RECIPIENT_DATE"]'),
            ordDelvTime = that.find('.form-list__item  *[name="RECIPIENT_TIME"]'),
            postCardCheck = that.find('#postcard').prop('checked');
            postCardText = that.find('#text_postcard')
            

        if (ordName.length > 0) {
            if (ordName.val().length <= 2) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordName.addClass(vClass);
            } else {
                ordName.removeClass(vClass);
            }
        }

        if (ordTel.length > 0) {
            if (ordTel.val().length <= 9) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordTel.addClass(vClass);
            } else {
                ordTel.removeClass(vClass);
            }
        }

        if (ForMeCheck) {} else {
            if (ordRecName.val().length <= 2) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordRecName.addClass(vClass);
            } else {
                ordRecName.removeClass(vClass);
            }

            if (ordRecTel.val().length <= 9) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordRecTel.addClass(vClass);
            } else {
                ordRecTel.removeClass(vClass);
            }
        }

        if (!CourierCheck) {
            if (ordDelvCity.val().length < 2) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordDelvCity.addClass(vClass);
            } else {
                ordDelvCity.removeClass(vClass);
            }

            if (ordDelvStreet.val().length < 2) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordDelvStreet.addClass(vClass);
            } else {
                ordDelvStreet.removeClass(vClass);
            }

            if (ordDelvHouse.val().length < 1) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordDelvHouse.addClass(vClass);
            } else {
                ordDelvHouse.removeClass(vClass);
            }
        }

        if (ordDelvDate.length > 0) {
            if (ordDelvDate.val().length <= 9) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordDelvDate.addClass(vClass);
            } else {
                ordDelvDate.removeClass(vClass);
            }
        }

        if (ordDelvTime.length > 0) {
            if (ordDelvTime.val().length <= 5) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                ordDelvTime.closest('.delivery-time').addClass(vClass);
            } else {
                ordDelvTime.closest('.delivery-time').removeClass(vClass);
            }
        }

        if (postCardCheck) {
            if (postCardText.val().length < 1) {
                ordSubmit.prop(attrDisT).addClass(vSbm);
                postCardText.addClass(vClass);
            } else {
                postCardText.removeClass(vClass);
            }
        }

        if (window.matchMedia('(min-width: 1021.99px)').matches) {
            $('#order-creation__form input, #order-creation__form textarea').focus(function () {
                ordSubmit.prop(attrDisF);
            });

            $(ordSubmit).on('mouseenter', function () {
                if (ordSubmit.prop(attrDisT)) {
                    (ordSubmit).prop(attrDisF).removeClass(vSbm);
                }
            });
        }


        if (window.matchMedia('(max-width: 1021.98px)').matches) {
            $('#order-creation__form input, #order-creation__form textarea').focus(function () {
                ordSubmit.prop(attrDisF).removeClass(vSbm);
            });
        }
    });

    // стиль для кастомного select на странице котроля качества

    $(document).on('click', '#control__form .custom-select-panel > div', function () {
        $('#control__form .custom-select-opener span').css('color', 'inherit');
    });

    // карта адреса магазинов

    if ($('main').is('.addresses-page')) {
        var myMap;
        var groups = [{
                name: 'Орский проспект, 7/4',
                desc: 'Круглосуточно',
                center: [51.22632707258982, 58.624037499999964],
                items: [{
                    title: 'Магазин на​ проспекте Орский, 7/4',
                    time_title: 'Время работы:',
                    time_job: 'Круглосуточно',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            },
            {
                name: '​Ленина проспект, 49/1',
                desc: 'Круглосуточно',
                center: [51.23689607256068, 58.47097349999987],
                items: [{
                    title: 'Магазин на проспекте ​Ленина, 49/1',
                    time_title: 'Время работы:',
                    time_job: 'Круглосуточно',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            },
            {
                name: 'Ленина проспект, 21',
                desc: 'Ежедневно с 08:00 до 21:00',
                center: [51.22737657256438, 58.475689499999994],
                items: [{
                    title: 'Магазин проспекте на Ленина, 21',
                    time_title: 'Время работы:',
                    time_job: 'Ежедневно с 08:00 до 21:00',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            },
            {
                name: 'Ленина проспект, 49/1',
                desc: 'Круглосуточно',
                center: [51.24224757254628, 58.46678749999996],
                items: [{
                    title: 'Магазин на проспекте ​Ленина, 71а/1',
                    time_title: 'Время работы:',
                    time_job: 'Круглосуточно',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            },
            {
                name: 'Ленина проспект, 91 ст1',
                desc: 'Круглосуточно',
                center: [51.24919357256412, 58.45526199999997],
                items: [{
                    title: 'Магазин на проспекте Ленина, 91 ст1',
                    time_title: 'Время работы:',
                    time_job: 'Круглосуточно',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            },
            {
                name: 'ул.Пацаева 15А',
                desc: 'Круглосуточно',
                center: [51.25745807255721, 58.43480749999997],
                items: [{
                    title: 'Магазин на ул. Пацаева, 15а/1',
                    time_title: 'Время работы:',
                    time_job: 'Круглосуточно',
                    desc_title: 'Описание:',
                    desc_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Congue eu consequat ac felis donec et odio pellentesque diam. Adipiscing diam donec adipiscing tristique risus nec feugiat in.',
                    image: 'img/addresses/address-image.jpg'
                }]
            }
        ];

        ymaps.ready(init);

        function init() {

            // Создание экземпляра карты.
            if (window.matchMedia('(min-width: 768px)').matches) {
                myMap = new ymaps.Map('map', {
                    center: [51.23623142591794, 58.53524799750844],
                    zoom: 12
                }, {
                    searchControlProvider: 'yandex#search'
                });
            }
            if (window.matchMedia('(max-width: 767.98px)').matches) {
                var myMap = new ymaps.Map('map', {
                    center: [51.23623142591794, 58.53524799750844],
                    zoom: 11
                }, {
                    searchControlProvider: 'yandex#search'
                });
            }
            if (window.matchMedia('(max-width: 567.98px)').matches) {
                var myMap = new ymaps.Map('map', {
                    center: [51.23623142591794, 58.53524799750844],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                });
            }

            var menu = $('.addresses-list.accordion'),
                desc_wrapper = $('.addresses-desc');
            if (window.matchMedia('(min-width: 992px)').matches) {
                menu.mCustomScrollbar({
                    scrollInertia: 150
                });
            } else {
                accoFun();
            }
            var menu_scroll = $('.addresses-list').find('.mCSB_container');
            var array = [];


            for (var i = 0, l = groups.length; i < l; i++) {
                var a = i + 1,
                    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;" class="layoutClass" data-address="address-' + a + '"></div>');
                createMenuGroup(groups[i]);
            }

            function createMenuGroup(group) {
                var a = i + 1;

                if (window.matchMedia('(min-width: 992px)').matches) {
                    var menuItem = $('<li class="list__item list__item-' + a + '"><a class="data-link" href="#" data-address="address-' + a + '"><h3 class="item-title">' + group.name + '</h3><p class="item-desc">' + group.desc + '</p></a></li>');
                } else {
                    var menuItem = $('<li class="list__item accordion__item list__item-' + a + '"><h3 class="item-title accordion-submenu__link">' + group.name + '<p class="item-desc">' + group.desc + '</p><span class="arrow-icon"><svg width="20" height="20" viewbox="0 0 15 15" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.5L7.5 9.5L10.5 6.5" stroke="#0F0F0F" stroke-linecap="square" /></svg></span></h3></li>'),
                        desc = $('<ul class="accordion-submenu addresses-desc"></ul>');
                }

                if (window.matchMedia('(min-width: 992px)').matches) {
                    placemark = new ymaps.Placemark(group.center, {
                        hintContent: group.name,
                    }, {
                        iconLayout: MyIconContentLayout
                        // iconImageHref: 'img/icon/map-marker_violet.png',
                        // iconImageSize: [26, 30],
                        // iconImageOffset: [-13, -15],
                        // iconContentOffset: [15, 15],
                        // iconContentLayout: MyIconContentLayout
                    });
                } else {
                    placemark = new ymaps.Placemark(group.center, {
                        balloonContentBody: '<b>' + group.name + '</b></br>' +
                        group.desc,
                    }, {
                        hideIconOnBalloonOpen: false,
                    }, {
                        iconLayout: MyIconContentLayout
                    });
                }

                myMap.geoObjects.add(placemark);
                array.push(placemark)

                placemark.events.add('click', function (e) {
                    console.log(placemark);

                    for (var z = 0, n = array.length; z < n; z++) {
                        array[z].options.set({
                            iconImageHref: 'img/icon/map-marker_violet.png'
                        });
                    }
                       
                    e.get('target').options.set({
                        iconImageHref: 'img/icon/map-marker_rose.png'
                    });

                    console.log(e)

                });

                $('#map').on('click', '.layoutClass', function (params) {
                    console.log($(this).data('address'));
                })

                // function onObjectEvent(e) {
                //     $(this).addClass('data-address');
                //     console.log(true)

                // }

                // var clickClass = $('#map').find('.layoutClass');

                // console.log(MyIconContentLayout)

                // MyIconContentLayout.events.add('click', onObjectEvent);

                if (window.matchMedia('(min-width: 992px)').matches) {
                    menuItem.appendTo(menu_scroll);
                    for (var j = 0, m = group.items.length; j < m; j++) {
                        createSubMenu(group.items[j]);
                    }
                } else {
                    menuItem.append(desc).appendTo(menu);
                    for (var j = 0, m = group.items.length; j < m; j++) {
                        createSubMenu(group.items[j], desc);
                    }
                }
            }

                console.log(array);


            function createSubMenu(item, desc) {
                var a = i + 1;
                if (window.matchMedia('(min-width: 992px)').matches) {
                    var descItem = $('<div class="addresses-desc__item addresses-desc__item-' + a + '" data-address="address-' + a + '"><h3 class="item-title">' + item.title + '</h3><div class="item-wrapper"><div class="item-left"><div class="left__item left__time"><span class="item-headind time-title">' + item.time_title + '</span><p class="item-desc time-job_time">' + item.time_job + '</p></div><div class="left__item left__desc"><span class="item-headind desc-title">' + item.desc_title + '</span><p class="item-desc desc-text">' + item.desc_text + '</p></div></div><div class="item-right"><img src="' + item.image + '" alt="Фото магазина" class="right__address-iamge"></div></div></div>');

                    descItem.appendTo(desc_wrapper);
                } else {
                    var descItem = $('<li class="addresses-desc__item addresses-desc__item-' + a + '"><div class="item-wrapper"><div class="item-left"><div class="left__item left__time"><span class="item-headind time-title">' + item.time_title + '</span><p class="item-desc time-job_time">' + item.time_job + '</p></div><div class="left__item left__desc"><span class="item-headind desc-title">' + item.desc_title + '</span><p class="item-desc desc-text">' + item.desc_text + '</p></div></div><div class="item-right"><img src="' + item.image + '" alt="Фото магазина" class="right__address-iamge"></div></div></li>');

                    descItem.appendTo(desc);
                }
            }
            
            if (window.matchMedia('(min-width: 992px)').matches) {
                $('.list__item-2, .addresses-desc__item-2').addClass('active');
            } else {
                $('.list__item-2').addClass('open');
            }

            var c = setInterval(function() {
                $(function() {
                    var a = $('.addresses-list .list__item.active').find('.data-link').data('address'),
                        b = $('#map').find('.layoutClass[data-address="' + a + '"]').length;

                    if (b > 0) {
                        $('#map').find('.layoutClass[data-address="' + a + '"]').addClass('active');
                        clearInterval(c);
                    }
                });
            }, 500);
        }

        if (window.matchMedia('(min-width: 992px)').matches) {
            // выбор адреса магазина на странице "адресса магазинов"

            $('.addresses-wrapper').on('click', '.data-link', function () {
                var a = $(this).data('address');

                $('.addresses-list .list__item').removeClass('active');
                $('.addresses-desc .addresses-desc__item').removeClass('active');
                $(this).closest('.list__item').addClass('active');
                $('.addresses-desc').find('.addresses-desc__item[data-address="' + a + '"]').addClass('active');
            });



            $('.addresses-list').on('click', '.list__item', function () {
                var a = $(this).find('.data-link').data('address');

                $('#map').find('.layoutClass').removeClass('active')
                $('#map').find('.layoutClass[data-address="' + a + '"]').addClass('active');
            });
        } else {
            $('section.section-addresses').on('click', '.show-list', function () {
                $('.addresses-wrapper').removeClass('active');
                $('.addresses-list').addClass('active');
                $('.addresses_map').removeClass('active');
                $(this).addClass('show-map').removeClass('show-list').text('Показать на карте');
            });
            $('section.section-addresses').on('click', '.show-map', function () {
                myMap.destroy();
                ymaps.ready(init);
                $('.addresses-wrapper').addClass('active');
                $('.addresses-list').removeClass('active');
                $('.addresses_map').addClass('active');
                $(this).addClass('show-list').removeClass('show-map').text('Показать cписком');
                $('html, body').scrollTop(60);
            });
        }
    }
});