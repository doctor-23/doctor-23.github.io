@@include('_functions.js');
@@include('_catalogFilter.js');


$(document).ready(function () {
    @@include('_webp_config.js');

    customSelect('.select', '.select-title', '.select-content' , '.select-content__wrapper', '.select-content__radio', 4) // init кастомного селекта

    clickOutside('.select', '.select-content', 'open') // клик вне элемента

    phoneMask(); emailMask(); // init масок почты и телефона

    $(document).on('click', '.hamburger', function () {
        if($(this).parent().hasClass('show')) {
            $(this).parent().removeClass('show')
        } else {
            $(this).parent().addClass('show')
        }
    }) // клик по гамбургер меню.

    var hamburger = document.querySelector('.hamburger-wrapper');

    document.addEventListener('click', e => {
        let target = e.target;
        let its_hamburger = target == hamburger || hamburger.contains(target);
        let its_hamburger_is_open = hamburger.classList.contains('show');

        if (!its_hamburger && its_hamburger_is_open) {
            $('.hamburger-wrapper').removeClass('show');
        }
    }); // клик вне гамбургера

    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false,
    }) // init главного слайдера

    offersSlider('.offers-slider'); // init общего слайдера товаров

    function choiceDisplayTypeCatalog(name, data) {
        var spinner = $('.overlay-spinner');

        if(spinner.length > 0) {
            spinner[0].style.display = 'flex';
        }

        var display_type = $(document).find('[name="' + name + '"]:checked').val(),
            wrapper = $('.catalog__wrapper'),
            filter = $('.catalog__filter'),
            rentSaleVal = $('.catalog__filter [name="rent_sale"]:checked').val(),
            placeVal = $('.catalog__filter [name="place"]:checked').val(),
            placeText = $('.catalog__filter [name="place"]:checked').parent().find('.select-content__radio').text(),
            spaceVal = $('.catalog__filter [name="space"]:checked').val(),
            spaceText = $('.catalog__filter [name="space"]:checked').parent().find('.select-content__radio').text(),
            tableSort = $('[name="table_sort"]:checked').length,
            minSquare = $('#filter_min_square').val(),
            maxSquare = $('#filter_max_square').val(),
            minPrice = $('#filter_min_price').val(),
            maxPrice = $('#filter_max_price').val(),
            onSorting = resetSortingTable(),
            quadrature, price;

        // сбор данных с фильтра при переключении типа отображения

        wrapper.find('[data-' + data + ']').removeClass('show');

        if(display_type === 'columns') {
            wrapper.find('.catalog-more_link').show();
            $('#sorting_price').parent().show();
            catalogFilter(commonObjColumn) // передаем переменную с данными списка каталога в функцию фильтра
        } else if (display_type === 'list') {
            wrapper.find('.catalog-more_link').hide();
            $('#sorting_price').parent().hide();
            catalogFilter(commonObjList) // передаем переменную с данными таблицы каталога в функцию фильтра
        }

        resetCatalogFilter();

        if (rentSaleVal || placeVal || spaceVal || minSquare || minPrice || maxSquare || maxPrice) {
            tablePagination(13, 14, $('.catalog__table'), true, false); // перезапуск пагинации

            filter.find('[name="rent_sale"][value="' + rentSaleVal + '"]').prop('checked', true);
            filter.find('[name="rent_sale"]').trigger('change');
            filter.find('[name="place"][value="' + placeVal + '"]').prop('checked', true);
            $('.catalog__filter [name="place"]:checked').closest('.select').find('.select-title').text(placeText);
            filter.find('[name="place"]').trigger('change');
            filter.find('[name="space"][value="' + spaceVal + '"]').prop('checked', true);
            $('.catalog__filter [name="space"]:checked').closest('.select').find('.select-title').text(spaceText);
            filter.find('[name="space"]').trigger('change');
            $('#filter_min_square').val(minSquare);
            $('#filter_min_square').trigger('keyup');
            $('#filter_max_square').val(maxSquare);
            $('#filter_max_square').trigger('keyup');
            $('#filter_min_price').val(minPrice);
            $('#filter_min_price').trigger('keyup');
            $('#filter_max_price').val(maxPrice);
            $('#filter_max_price').trigger('keyup');

            // применение данных фильтра для нового типа отображения
        } else {
            tablePagination(13, 14, $('.catalog__table'), false, false); // перезапуск пагинации
        }

        setTimeout(function () {
            if(spinner.length > 0) {
                spinner[0].style.display = 'none';
            }

            wrapper.find('[data-' + data + '="' + display_type + '"]').addClass('show');

        }, 1000) // куртим спиннер еще 1сек и потом показываем выбранные тип отображения
    } // смены тип отображения

    choiceDisplayTypeCatalog('display_type', 'display-type'); // запуск функции смены тип отображения

    $(document).find('[name="display_type"]').on('change', function () {
        choiceDisplayTypeCatalog('display_type', 'display-type'); // запуск функции смены тип отображения
    });

    $('.card__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.card__slider-nav',
        responsive: [{
            breakpoint: 574.98,
            settings: {
                slidesToShow: 1,
                dots: true,
                variableWidth: true,
                arrows: false,
                asNavFor: false,
                fade: false
            }
        }]
    }); // слайдер карточки товара

    $('.card__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card__slider',
        dots: false,
        arrows: true,
        infinite: false,
        variableWidth: true,
        prevArrow: '<a class="arrow-left"></a>',
        nextArrow: '<a class="arrow-right"></a>',
        swipe: true,
        // centerMode: true,
        // focusOnSelect: true
    }); // слайдер карточки товара

    function validationKPForm() {
        var form = $('#KP_form'),
            btn = form.find('[type="submit"]'),
            name = form.find('.name-input'),
            phone = form.find('.phone-input'),
            email = form.find('.email-input'),
            nameCheck = false, phoneCheck = false, emailCheck = false;

        name.blur(function () {
            nameCheck = formNameValid(name, nameCheck)
        }) // валидация имени

        phone.blur(function () {
            phoneCheck = formPhoneValid(phone, phoneCheck)
        }) // валидация телефона

        email.blur(function () {
            emailCheck = formEmailValid(email, emailCheck)
        }) // валидация почты

        function validate() {
            if(nameCheck && phoneCheck && emailCheck) {
                // console.log(nameCheck && phoneCheck && emailCheck)
                btn.removeClass('disable')
                name.removeClass('validate-border')
                phone.removeClass('validate-border')
                email.removeClass('validate-border')
            } else {
                btn.addClass('disable')
            }
        } // проверка валидации

        form.find('input').on('blur',function () {
            validate(); // запуск проверки валидации
        })
    } // валидация формы

    $(document).on('click', '.commercial-offer', function (e) {
        e.preventDefault();

        var modal = $('#modal_commercial-offer'),
            dataUrl = $(this).data('url'),
            dataId = $(this).data('id');

        modal.find('#url_product').val(dataUrl);
        modal.find('#id_product').val(dataId);

        modal[0].style.display = 'block'
        modal.animate({
            opacity: 1
        }, 100)

        validationKPForm();
    }); // вызов формы

    $(document).on('click', '.modal, .modal-close', function (e) {
        e.preventDefault();
        if($(this).hasClass('modal')) {
            $(this)[0].style.display = 'none'
            $(this).animate({
                opacity: 0
            }, 100)
        } else if ($(this).hasClass('modal-close')) {
            $(this).closest('.modal')[0].style.display = 'none'
            $(this).closest('.modal').animate({
                opacity: 0
            }, 100)
        }

        validationKPForm();
    }); // закрыть форму

    $(document).on('click', '.modal .modal-content', function (e) {
        e.stopPropagation();
    }); // отменяем закрытие формы по клику внутри самой формы

    var sectionCard = $('.card');

    sectionCard.on('click', '.first-column .card__top-column__description .icon-wrapper', function () {
        $(this).closest('.first-column').find('.description-modal').addClass('show')
    }); // вызов инф-ой плашки в деталке

    sectionCard.on('click', '.description-modal__item-close', function () {
        $(this).parent().removeClass('show');
    }); // закрытие инф-ой плашки в деталке

    var smallModal = document.querySelector('.first-column');

    if(smallModal) {
        document.addEventListener('click', e => {
            let target = e.target;
            let its_smallModal = target == smallModal || smallModal.contains(target);
            let its_smallModal_is_open = $('.description-modal')[0].classList.contains('show');

            if (!its_smallModal && its_smallModal_is_open) {
                $('.description-modal')[0].classList.remove('show');
            }
        });
    } // клик вне инф-ой плашки в деталке

    // сортировка по цене в каталоге

    function sortingCatalogList(element) {
        var that = $(element),
            priceArr = commonObjColumn.PRICE.sort(compareNumeric);

        $('.catalog__list .catalog-card').each(function () {
            var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
                price = parseInt(priceNoSpaces);

            if(that.prop('checked')) {
                for (const key in priceArr) {
                    if (priceArr[key] === price) {
                        $(this).css('order', key)
                    }
                }
            } else {
                $(this).css('order', 'unset')
            }
        });
    } // сортировка по цене в каталоге для типа отображения "в колонку"

    sortingCatalogList('#sorting_price');

    $('#sorting_price').on('change', function () {
        sortingCatalogList(this);
    });

    function resetCatalogFilter() {
        var catalogTableRow = $('.catalog__table .table-body__row');

        $(document).find('.catalog__filter input').prop('checked', false);
        $('#space_select').find('.select-title').text('-- Выберите тип помещения --');
        $('#place_select').find('.select-title').text('-- Выберите строение --');
        $(document).find('.catalog__filter input[type="text"]').val('');

        catalogTableRow.removeClass('onFilter');

        if (window.matchMedia('(min-width: 768px)').matches) {
            catalogTableRow.css('display', 'grid');
        } else {
            catalogTableRow.css('display', 'flex');
        }
        tablePagination(13, 14, $('.catalog__table'), false, false);
        $('.catalog__list .catalog-card').css('display', 'block');
        catalogCardShowFunc();
    } // сброс фильтра каталога

    resetCatalogFilter();
    resetSortingTable();

    $(document).on('click', '.reset_filter', function (e) {
        e.preventDefault();

        $(this).trigger('reset');
        resetCatalogFilter();
    }) // конец

    @@include('_tableSorting.js');

    tabsSwitch('.offers', '.offers-slider', false, false);
    tabsSwitch('.offers-inf', '.offers-inf__table', true, false);
    tablePagination(13, 14, $('.catalog__table'), false, false);

    function catalogCardShowFunc() {
        var catalogCardShow;

        if (window.matchMedia('min-width: 768px')) {
            catalogCardShow = 10
        } else {
            catalogCardShow = 6
        }

        var displayType = $(document).find('[name="display_type"]:checked').val();

        if (displayType === 'columns') {
            $('.catalog__list').find('.catalog-card').each(function (index) {
                // console.log(index + 1 > catalogCardShow, index + 1, catalogCardShow)
                if (index + 1 > catalogCardShow) {
                    $(this).hide();
                    $(this).addClass('hide-card')
                } else {
                    $(this).show();
                    $(this).removeClass('hide-card')
                }

                if (index + 1 < catalogCardShow) {
                    $(document).find('.catalog-more_link').hide();
                } else {
                    $(document).find('.catalog-more_link').show();
                }
            });

            $(document).on('click', '.catalog-more_link', function (e) {
                e.preventDefault();
                catalogCardShow = catalogCardShow * 2;

                $('.catalog__list').find('.catalog-card').each(function (index) {
                    if (index + 1 > catalogCardShow) {
                        $(this).hide();
                        $(this).addClass('hide-card')
                    } else {
                        $(this).show();
                        $(this).removeClass('hide-card')
                    }

                    if (index + 1 < catalogCardShow) {
                        $(document).find('.catalog-more_link').hide();
                    } else {
                        $(document).find('.catalog-more_link').show();
                    }
                });
            })
        }
    } // кол-во отображаемых карточек для типа отображения "в колонку"

    catalogCardShowFunc();

    $('.table').each(function () {
        $(this).find('.table-body__row').each(function (index) {
            this.style.order = index;
        })
    }); // установка order при загрузке для элементов таблицы по умолчанию

    @@include('_search.js');
    @@include('_map.js');
})
