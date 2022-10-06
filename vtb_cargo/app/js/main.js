@@include('_customSelect.js');
@@include('_clickOutSide.js');

// функция изменения ширины инпутов

function resizeInput() {
    this.style.width = this.value.length + "ch";
} // конец

// функция валидации имени

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
} // конец

// функция валидации телефона

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
} // конец

$(document).ready(function () {
@@include('_webp_config.js');
    var body = $('body');

    // фиксированная шапка

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
        fixedHeader(this)
    }); // конец

    var hamburger = $('.hamburger');

    // плавный скролл для меню шапки

    $('.nav-menu__list-item > a, .main-hero__scroll-btn').on('click', function (e) {
        if (!$(this).parent().hasClass('nav-menu__list-item_last')) {
            e.preventDefault();

            var t = 1000;
            var d = $(this).attr('href');

            $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);

            if (hamburger.hasClass('open')) {
                hamburger.removeClass('open');
                $('header').find('.nav-menu').removeClass('show');
            }
        }
    }); // конец

    // гамбурегер меню

    hamburger.on('click', function () {
        var isOpen = $(this).hasClass('open');

        $(this).toggleClass('open');
        $('header').find('.nav-menu').toggleClass('show');
        $('body').toggleClass('no-scroll');
        if (isOpen) {
            $('#overlay').fadeOut(215);
        } else {
            $('#overlay').fadeIn(215);
        }
    });

    $('#overlay').on('click', function () {
        hamburger.removeClass('open');
        $('header').find('.nav-menu').removeClass('show');
        $('body').removeClass('no-scroll');
        $('#overlay').fadeOut(215);
    }); // конец

    // переключение преимуществ
    if(window.matchMedia('(min-width: 991.98px)').matches) {
        (function() {
            var parent_hero_list = $('.main-hero__list');
            var d = parent_hero_list[0].scrollLeftMax;
            var t = 500;

            parent_hero_list[0].scrollLeft = 0;

            $('.arrow-container').on('click', '.arrow', function () {
                var active_slide = $('.main-hero__list-item.active');
                var index = active_slide.index();
                var length = $('.main-hero__list-item').length - 1;

                if ($(this).hasClass('arrow-right')) {
                    $('.arrow.arrow-left').removeClass('disable');
                    active_slide.next().addClass('active');
                    active_slide.removeClass('active');
                    parent_hero_list[0].scrollLeft = parent_hero_list[0].scrollLeft + 252;

                    if (index + 2 === length - 1) {
                        $(this).addClass('disable');
                    }
                }

                if ($(this).hasClass('arrow-left')) {
                    $('.arrow.arrow-right').removeClass('disable')
                    active_slide.prev().addClass('active');
                    active_slide.removeClass('active');
                    parent_hero_list[0].scrollLeft = parent_hero_list[0].scrollLeft - 252;
                    // parent_hero_list.stop().animate({scrollLeft: 0}, t);

                    if (index === 1) {
                        $(this).addClass('disable')
                    }
                }
            })


            parent_hero_list.on('click', '.main-hero__list-item', function () {
                var index = $(this).index();

                parent_hero_list.find('.main-hero__list-item').removeClass('active');
                $(this).addClass('active');
                $('.arrow-container .arrow').removeClass('disable');

                if (index === 0) {
                    $('.arrow.arrow-left').addClass('disable');
                }
                if (index === 2) {
                    if (parent_hero_list[0].scrollLeft === 0) {
                        parent_hero_list.stop().animate({scrollLeft: d}, t);
                    } else {
                        parent_hero_list.stop().animate({scrollLeft: 0}, t);
                    }
                }

                if (index === 3) {
                    $('.arrow.arrow-right').addClass('disable');
                }
            })
        })()
    }
     // конец

    // вызов формы обратной связи

    $(document).on('click', '.btn-call, .main-hero__btn, .calculator__btn, .program__btn, .cargo-with-mileage__btn', function (e) {
        e.preventDefault();

        $('#modal_feedback_form').fadeIn(215);

        // инит валидации и отправки модальной формы
        validation('#modal_form__feedback');

        if (hamburger.hasClass('open')) {
            hamburger.removeClass('open');
            $('header').find('.nav-menu').removeClass('show');
        }
    }); // конец

    customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4) // init кастомного селекта

    clickOutside('.select', '.select-content', 'open') // клик вне элемента

    // каталог
@@include('_filter.js');  // конец

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

    // адаптив

    if (window.matchMedia('(max-width: 991.98px)').matches) {
        // клик по иконке информации в блоке "программы"
        var infHover = document.querySelector('.program__top__inf-hover');
        var circle = document.querySelector('.program__top__inf-title__circle');

        circle.addEventListener('click', function () {
            infHover.classList.toggle('active');
            circle.classList.toggle('active');
        });

        document.addEventListener('click', e => {
            let target = e.target;
            let isIcon = target == circle || circle.contains(target)
            let its_infHover = target == infHover || infHover.contains(target);

            if (!its_infHover && !isIcon) {
                infHover.classList.remove('active');
                circle.classList.remove('active');
            }
        }); // конец

        // статьи

        $('.leasing-help__list').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            draggable: false,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots',
            infinite: true,
            variableWidth: true,
            swipe: true,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }); // конец
    } // конец

    // авто с пробегом табы

    $('.cargo-with-mileage__tabs').on('click', '.cargo-with-mileage__tabs-item', function () {
        var dataAttr = $(this).data('tab');

        if (typeof dataAttr === 'undefined') {
            dataAttr = $(this).val();
        }

        console.log(dataAttr)

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
    }); // конец

    // закрытие модальных окон

    $(document).on('click', '.modal, .modal__close', function () {
        $('.modal').fadeOut(215);
    });

    $(document).on('click', '.modal__content', function (e) {
        e.stopPropagation();
    })

    // валидация формы

    function validation(form) {
        var parent = $(form),
            formName = parent.find('.input-name'),
            formPhone = parent.find('.input-phone'),
            formInput = parent.find('input'),
            formSubmit = parent.find('button[type="submit"]'),
            nameCheck = false, phoneCheck = false;

        formInput.val('');

        // валидация полей при потере фокуса
        formName.on('blur', function () {
            nameCheck = formNameValid(formName, nameCheck);
        })

        formPhone.on('blur', function () {
            phoneCheck = formPhoneValid(formPhone, phoneCheck);
        })

        // разблокировка кнопки отправки при потере фокуса
        formInput.on('blur', function () {
            if (nameCheck && phoneCheck) {
                formSubmit.removeClass('disabled');
            } else {
                formSubmit.addClass('disabled');
            }
        });

        // отправка формы при условии (условие на всякий случай)
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

            body.addClass('loader')

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
                        }, 500)
                    },
                    error: function error(req, text, _error) {
                        console.log(req);
                        console.log(text);
                        console.log(_error);

                        setTimeout(function () {
                            body.removeClass('loader');

                            $('#modal_feedback_error').fadeIn(215);
                        }, 500)
                    }
                });
            }
        })
    }

    validation('.feedback__form'); // конец
});




