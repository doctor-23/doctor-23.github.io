@@include('_customSelect.js');
@@include('_clickOutSide.js');

// функция изменения ширины инпутов

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

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
}

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
}

// функция валидации email

function formEmailValid(el, elCheck) {
    var emailVal = el.val(),
        emailValid = emailVal.split('@'),
        validEmail = /_/;

    console.log(el.val())
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
    });

    var hamburger = $('.hamburger');

    // плавный скролл для меню шапки

    $('.nav-menu__list-item > a').on('click', function (e) {
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
    });

    hamburger.on('click', function () {
        $(this).toggleClass('open');
        $('header').find('.nav-menu').toggleClass('show');
    }); // гамбурегер меню

    // вызов формы обратной связи

    $(document).on('click', '.btn-call, .main-hero__btn, .calculator__btn', function (e) {
        e.preventDefault();

        $('#modal_feedback_form').fadeIn(215);

        // инит валидации и отправки модальной формы
        validation('#modal_form__feedback');

        if (hamburger.hasClass('open')) {
            hamburger.removeClass('open');
            $('header').find('.nav-menu').removeClass('show');
        }
    });

    // if (window.matchMedia('(max-width: 991.98px)').matches) {
    //     var mainHeight = $('.main-hero').outerHeight();
    //
    //     $('.main-hero__slider-item').css('height', mainHeight + 'px')
    // }

    // конец

    customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4) // init кастомного селекта

    clickOutside('.select', '.select-content', 'open') // клик вне элемента

    // каталог
@@include('_filter.js');

    // конец

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
    calculatorRange('redemption_payment_range', 'redemption_payment', 1);

    // конец

    // авто с пробегаом табы

    $('.cargo-with-mileage__tabs').on('click', '.cargo-with-mileage__tabs-item',function() {
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
    })();

    // конец

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

    $('.input-email').inputmask('email');

    // конец

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
            formEmail = parent.find('.input-email'),
            formInput = parent.find('input'),
            formSubmit = parent.find('button[type="submit"]'),
            nameCheck = false, phoneCheck = false, emailCheck = false;

        formInput.val('');

        // валидация полей при потере фокуса
        formName.on('blur', function () {
            nameCheck = formNameValid(formName, nameCheck);
        })

        formPhone.on('blur', function () {
            phoneCheck = formPhoneValid(formPhone, phoneCheck);
        })

        // formEmail.on('blur', function () {
        //     emailCheck = formEmailValid(formEmail, emailCheck);
        // })

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
                        }, 2000)
                    },
                    error: function error(req, text, _error) {
                        console.log(req);
                        console.log(text);
                        console.log(_error);

                        setTimeout(function () {
                            body.removeClass('loader');

                            $('#modal_feedback_error').fadeIn(215);
                        }, 2000)
                    }
                });
            }
        })
    }

    validation('.feedback__form');

    // конец
});




