// вызов фильтра в каталоге

$(document).on('click', '.catalog__btn-show-filters', function () {
    if ($(this).text().trim() === "Показать фильтры") {
        $(this).text("Скрыть фильтры");
    } else {
        $(this).text("Показать фильтры");
    }

    $('.catalog').find('.filters').toggleClass('show');
});

$(document).on('click', '.catalog .filters .close', function () {
    $(this).closest('.filters').removeClass('show');
    $('.catalog__btn-show-filters').text("Показать фильтры");
});

// конец

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
        prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
        nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
        swipe: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'slider-dots',
                }
            }
        ]
    });
}

var tabs = $('.catalog__tabs');
var sliders = document.querySelectorAll('.catalog__list .catalog__list-slider');
var sliderChildren;

// инит слайдера каталога для текущего выбранного таба при загрузке
sliders.forEach(function (item) {
    var data = item.dataset.tab,
        dataTab = tabs.find('.catalog__tabs-item.active').data('tab');

    if (data === dataTab) {
        item.classList.add('active');
        sliderChildren = $('.catalog__list-slider.active').children();
        catalogSlider('.catalog__list-slider.active', true);
    }
});

// клик по табу
tabs.on('click', '.catalog__tabs-item', function () {
    var that = $(this),
        dataTab = that.data('tab'),
        slider = $('.catalog__list .catalog__list-slider.active'),
        currentSlider = document.querySelector('.catalog__list .catalog__list-slider[data-tab="' + dataTab + '"]');

    body.addClass('loader');

    // ждем пока загрузится контент, чтобы его подменить
    setTimeout(function () {
        // показываем выбранный слайдер
        sliderChildren = null;
        slider.removeClass('active');
        slider.slick('unslick');
        currentSlider.classList.add('active');
        sliderChildren = $('.catalog__list-slider.active').children();
        catalogSlider('.catalog__list-slider.active', true);

        // делаем активным текущий таб
        $('.catalog__tabs').find('.catalog__tabs-item').removeClass('active');
        that.addClass('active');

        // убмраем лоадер
        body.removeClass('loader');
    }, 1000)
});

// функция для выбора цены в каталоге
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

        item.addEventListener('mouseover', function () {

        })
    });
}

getPriceRange();

// сбрасываем значения выпадающих списков при загрузке
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

    const comparePrice = (price) => {
        return min_price <= price && price <= max_price;
    };

    currentSlider.slick('unslick');
    hiddenContainer.children().remove();
    currentSlider.children().remove();
    currentSlider.append(sliderChildren);

    var sliderItem = currentSlider.find('.catalog__list-item');
    body.addClass('loader')

    sliderItem.each(function () {
        if (!$(this).closest('.slick-slide').hasClass('slick-cloned')) {
            var data_motor = $(this).data('motor'),
                data_model = $(this).data('model'),
                price = $(this).find('.catalog__list-item__list-item.price .catalog__list-item__list-item__content').text().trim();

            price = price.replace('от ', '');
            price = price.replace(' ', '');
            price = parseInt(price);

            var compare_price = comparePrice(price);

            if (data_model !== model && model !== "all") {
                if (data_motor !== motor || motor !== "all") {
                    if (!compare_price) {
                        hiddenContainer.append($(this));
                    }
                }
            } else {
                if (data_motor !== motor && motor !== "all") {
                    if (!compare_price) {
                        hiddenContainer.append($(this));
                    }
                } else {
                    if (!compare_price) {
                        hiddenContainer.append($(this));
                    }
                }
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
        body.removeClass('loader')
    }, 2000)


})