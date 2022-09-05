@@include('_customSelect.js');
@@include('_clickOutSide.js');

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

// функция валидации имени

function formNameValid(el, elCheck) {
    if(el.val().length < 2) {
        elCheck = false;
        el.addClass('validate-border');
        el.parent().find('.msg-error').show();
    } else  if (el.val().length === 0){
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
        emailValid = emailVal.split('@');

    if (el.val().length > 0 && (el.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        if(emailValid[0].length < 3) {
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
        el.addClass('validate-border');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error-empty').show();
        elCheck = false;
    }

    return elCheck;
}

$(document).ready(function () {
@@include('_webp_config.js');

    $('.main-hero__slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000
    });

    customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4) // init кастомного селекта

    clickOutside('.select', '.select-content', 'open') // клик вне элемента

    function catalogSlider(el) {
        console.log(el)
        $(el).slick({
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
    }

    var tabs = $('.catalog__tabs');

    // $('.catalog__list .catalog__list-slider').each(function () {
    //     var data = $(this).data('tab'),
    //         dataTab = tabs.find('.catalog__tabs-item.active').data('tab');
    //
    //     if (data === dataTab) {
    //         $(this).css('display','block !important');
    //         catalogSlider(this);
    //     }
    // })

    tabs.on('click', '.catalog__tabs-item', function () {
        var dataTab = $(this).data('tab'),
            slider = $('.catalog__list .catalog__list-slider'),
            container = $(this).closest('.catalog').find('.container'),
            currentSlider = $('.catalog__list .catalog__list-slider[data-tab="' + dataTab + '"]');

        // slider[0].style.display = 'none !important';
        // $(`.catalog__list .catalog__list-slider[data-tab=${dataTab}]`)[0].style.display = 'block !important';
        //
        // // slider.slick('unslick');
        // catalogSlider(currentSlider);

        container.addClass('loader');
        $('.catalog__tabs').find('.catalog__tabs-item').removeClass('active')
        $(this).addClass('active');

        setTimeout(function () {
            container.removeClass('loader');
        }, 1000)
    });

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
                })
            })
        });
    }

    getPriceRange();

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

    (function () {
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
    })(); // высота карточек аккордиона в деталке


    $('.input-phone').inputmask({
        mask: "+7 (X99) 999-99-99",
        definitions: {
            'X': {
                validator: "9",
                placeholder: "9"
            }
        }
    });

    $('.input-email').inputmask({
        mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
        // greedy: false,
        // onBeforePaste: function (pastedValue, opts) {
        //     pastedValue = pastedValue.toLowerCase();
        //     return pastedValue.replace('mailto:', '');
        // },
        // definitions: {
        //     '*': {
        //         validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        //         casing: 'lower'
        //     }
        // }
    });

    function validation(form) {
        var parent = $(form),
            formName = parent.find('.input-name'),
            formPhone = parent.find('.input-phone'),
            formEmail = parent.find('.input-email'),
            formInput = parent.find('input'),
            formSubmit = parent.find('button[type="submit"]'),
            nameCheck = false, phoneCheck = false, emailCheck = false;

        formName.on('blur', function () {
            nameCheck = formNameValid(formName, nameCheck);
        })

        formPhone.on('blur', function () {
            phoneCheck = formPhoneValid(formPhone, phoneCheck);
        })

        formEmail.on('blur', function () {
            emailCheck = formEmailValid(formEmail, emailCheck);
        })

        formInput.on('blur', function () {
            if (nameCheck && phoneCheck && emailCheck) {
                formSubmit.removeClass('disabled');
            } else {
                formSubmit.addClass('disabled');
            }
        })
    }

    validation('.feedback__form');
});




