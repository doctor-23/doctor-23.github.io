var commonObjColumn, commonObjList, mainTableArr;

@@include('_dataArrays.js');

function catalogFilterFunc(object, valPrice, valPlace, valStatus, valSpace, valQuadrature) {
    var displayType = $('.catalog__right').find('[name="display_type"]:checked').val();

    if (valStatus === 'rent') {
        document.querySelector('.table-head__item_price .table-radio_custom .text').innerHTML = 'Цена/мес'
    } else if (valStatus === 'sale') {
        document.querySelector('.table-head__item_price .table-radio_custom .text').innerHTML = 'Цена'
    } // проверка статуса "продажа или аренда", чтобы менять в сортировке текст цены

    if(displayType === 'columns') { // проверка типа отображения на странице таблицей или колонками
        var catalogCard = $('.catalog__list .catalog-card');

        catalogCard.each(function () {
            var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
                price = parseInt(priceNoSpaces),place = $(this).data('place'),
                status = $(this).data('status'),
                space = $(this).data('space'),
                quadrature = parseInt($(this).find('.catalog-card__quadrature').text());

            $(document).find('.catalog-more_link').hide();

            if ((valStatus ? valStatus === status : true) &&
                (valPlace ? (valPlace === place || valPlace === 'all') : true) &&
                (valSpace ? (valSpace === space || valSpace === 'all') : true) &&
                (valPrice[0] <= price && price <= valPrice[1]) &&
                (valQuadrature[0] <= quadrature && quadrature <= valQuadrature[1])) {
                this.style.display = 'block';
                this.classList.add('onFilter');
            } else {
                this.style.display = 'none';
                this.classList.remove('onFilter');
            }  // проверка всех введенных значений фильтра
        });

        if ($('.catalog__list .catalog-card.onFilter').length > 0) {
            $(document).find('.catalog__wrapper .not-found').hide();
        } else {
            $(document).find('.catalog__wrapper .not-found').show();
        } // если ничего не найдено
    } else
    if(displayType === 'list') { // проверка типа отображения на странице таблицей или колонками
        $('.catalog__table .table-body__row').each(function () {
            var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
                price = parseInt(priceNoSpaces),
                place = $(this).data('place'),
                status = $(this).data('status'),
                space = $(this).data('space'),
                quadrature = parseInt($(this).find('.table-body__item_square').text());

            if ((valStatus !== '' ? valStatus === status : true) &&
                (valPlace !== '' ? (valPlace === place || valPlace === 'all') : true) &&
                (valSpace !== '' ? (valSpace === space || valSpace === 'all') : true) &&
                (valPrice[0] <= price && price <= valPrice[1]) &&
                (valQuadrature[0] <= quadrature && quadrature <= valQuadrature[1])) {
                if (window.matchMedia('(min-width: 768px)').matches) {
                    this.style.display = 'grid'
                } else {
                    this.style.display = 'flex'
                }
                this.classList.add('onFilter');
            } else {
                this.style.display = 'none';
                this.classList.remove('onFilter');
            } // проверка всех введенных значений фильтра
        });

        if ($('.catalog__table .table-body__row.onFilter').length > 0) {
            $(document).find('.catalog__wrapper .not-found').hide();
        } else {
            $(document).find('.catalog__wrapper .not-found').show();
        } // если ничего не найдено
    }
} // фильтр каталога

function catalogFilter(object) {
    var parent = $('.catalog__filter'),
        displayType = $('.catalog__right').find('[name="display_type"]:checked').val(),
        placeRadio = $('#place_select').find('input[name="place"]'),
        spaceRadio = $('#space_select').find('input[name="space"]'),
        rentSaleRadio = parent.find('input[name="rent_sale"]'),
        priceArr, quadratureArr;

    if(displayType === 'columns') {
        priceArr = object.PRICE.sort(compareNumeric);
        quadratureArr = object.QUADRATURE.sort(compareNumeric);
    } else if(displayType === 'list') {
        quadratureArr = object.QUADRATURE.sort((prev, next) => prev.value - next.value);
        priceArr = object.PRICE.sort((prev, next) => prev.value - next.value);
    } // запуск разные сортировок массива в зависимости от выбранного типа отображения

    function eachRadioButton(el) {
        var value = '';

        el.each(function () {
            if ($(this).is(':checked')) {
                value = $(this).val();

                return value;
            }
        });

        return value;
    } // получения значения выбранного пункта в customSelect

    function filterChangeFunc() {
        var displayType = $('.catalog__right').find('[name="display_type"]:checked').val(), // выбранный тип отображения
            rentSaleRadioVal = eachRadioButton(rentSaleRadio), // выбранное значение "аренда или продажа"
            placeRadioVal = eachRadioButton(placeRadio), // выбранное значение "типа здания"
            spaceRadioVal = eachRadioButton(spaceRadio), // выбранное значение "типа помещения"
            tableSort = $('[name="table_sort"]:checked').length,
            maxSquareVal = $('#filter_max_square').val(), // значение макс площади
            minPriceVal = $('#filter_min_price').val(), // значение мин цены
            maxPriceVal = $('#filter_max_price').val(), // значение макс цены
            onSorting = resetSortingTable(),
            minSquareVal, minSquare, maxSquare, minPrice, maxPrice, quadrature, price;

        if (localStorage.getItem('min_square')) {
            minSquareVal = localStorage.getItem('min_square');
        } else {
            minSquareVal = $('#filter_min_square').val();
        } // значение мин площади

        if(displayType === 'columns') {
            minSquare = parseInt(minSquareVal !== '' ? minSquareVal : quadratureArr[0]);
            maxSquare = parseInt(maxSquareVal !== '' ? maxSquareVal : quadratureArr[quadratureArr.length - 1]);
            minPrice = parseInt(minPriceVal !== '' ? minPriceVal : priceArr[0]);
            maxPrice = parseInt(maxPriceVal !== '' ? maxPriceVal : priceArr[priceArr.length - 1]);
        } else if(displayType === 'list') {
            minSquare = parseInt(minSquareVal !== '' ? minSquareVal : quadratureArr[0].value);
            maxSquare = parseInt(maxSquareVal !== '' ? maxSquareVal : quadratureArr[quadratureArr.length - 1].value);
            minPrice = parseInt(minPriceVal !== '' ? minPriceVal : priceArr[0].value);
            maxPrice = parseInt(maxPriceVal !== '' ? maxPriceVal : priceArr[priceArr.length - 1].value);
        } // если фильтры цены и площади не заполнены подставляем значения диапазона по умолчанию

        quadrature = [minSquare, maxSquare]; // формировка диапазона фильтра площади
        price = [minPrice, maxPrice]; // формировка диапазона фильтра цены


        // console.log(price, placeRadioVal, rentSaleRadioVal, spaceRadioVal, quadrature)

        catalogFilterFunc(object, price, placeRadioVal, rentSaleRadioVal, spaceRadioVal, quadrature) // передача данных в функцию фильтрации
        tablePagination(13, 14, $('.catalog__table'), true, onSorting); // перезапуск пагинации

        $(document).find('.reset_filter').addClass('active');
    } // сбор данных фильтра

    parent.on('change', 'input', function () {
        filterChangeFunc();
    }); // при выборе нового значения в select фильтра вызов функции сбора данных фильтра на лету

    $('#filter_max_square, #filter_min_price, #filter_max_price, #filter_min_square').on('keyup', function () {
        setTimeout(filterChangeFunc, 1000);
    }); // при вводе нового значения в input:text фильтра вызов функции сбора данных фильтра на лету с задержкой в 1сек
} // сбор и передача данных фильтра в функцию фильтра

commonObjColumn = parametersCatalogCardColumns(); // создаем переменную для массива списка каталога
commonObjList = parametersCatalogCardList(); // создаем переменную для массива таблицы каталога
mainTableArr = parametersMainTable(); // создаем переменную для массива таблицы каталога