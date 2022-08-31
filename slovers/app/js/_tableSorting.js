function sortingTable(value, array, child, isText, isCatalog) {
    var arr = array;

    if (isCatalog) { // проверка где происходит сортировка на главной или в каталоге
        var catalogItem =  $('.catalog__table .table-body__row'),
            onFilter = false,
            onFilterNum = 0,
            NotOnFilterNum = 0,
            newArr = [], newArr2 = [], i;

        $('.catalog__filter input').each(function () {
            if (!onFilter) {
                if (this.type === 'text') {
                    onFilter = this.value.length > 0;
                } else if (this.type === 'radio') {
                    onFilter = this.checked && this.value !== 'all';
                }
            } else {
                return onFilter;
            }
        }); // собираем введенные параметры из фильтра

        if (onFilter) {
            catalogItem.each(function (index) {
                if ($(this).hasClass('onFilter')) {
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i].index === index) {
                            newArr.push(arr[i]);
                        }
                    }
                } else {
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i].index === index) {
                            newArr2.push(arr[i]);
                        }
                    }
                }
            });

            if (isText) {
                newArr = newArr.sort(function (prev, next) {
                    if (prev.value > next.value) return 1;
                    if (prev.value < next.value) return -1;
                    return 0;
                });
                newArr2 = newArr2.sort(function (prev, next) {
                    if (prev.value > next.value) return 1;
                    if (prev.value < next.value) return -1;
                    return 0;
                });
            } else  {
                newArr = newArr.sort((prev, next) => prev.value - next.value);
                newArr2 = newArr2.sort((prev, next) => prev.value - next.value);
            }
        } // фильтрация новых массивов при учете фильтра для запуска сортировки

        catalogItem.each(function (index) {
            var itemNoSpaces = removeSpaces($(this).find(child).text()),
                item = isText ? itemNoSpaces : parseInt(itemNoSpaces),
                table = $('.catalog__table'), that;

            if (onFilter) {
                if ($('[value="' + value + '"]').is(':checked')) {

                    if ($(this).hasClass('onFilter')) {
                        that = catalogItem[newArr[onFilterNum]['index']]; // получаем индекс сортированного элемента с классом onFilter из массива
                        that.style.order = onFilterNum; // установка порядка отображения элемента

                        if (window.matchMedia('(min-width: 768px)').matches) {
                            that.style.display = 'grid';
                        } else {
                            that.style.display = 'flex';
                        }

                        tablePagination(13, 14, table, onFilter, true); // перезапуск пагинации
                        onFilterNum++ // число-индекс элемента массива

                    } else {
                        that = catalogItem[newArr2[NotOnFilterNum]['index']]; // получаем индекс сортированного элемента без класса onFilter из массива
                        that.style.order = arr.length - newArr2.length; // установка порядка отображения элемента
                        NotOnFilterNum++ // число-индекс элемента массива
                    }
                } else {
                    this.style.order = index;
                    tablePagination(13, 14, table, onFilter, false);  // перезапуск пагинации
                }
            } else {
                that = catalogItem[arr[index]['index']]; // получаем индекс сортированного элемента из массива

                if ($('[value="' + value + '"]').is(':checked')) {
                    that.style.order = index; // установка порядка отображения элемента

                    if (window.matchMedia('(min-width: 768px)').matches) {
                        that.style.display = 'grid';
                    } else {
                        that.style.display = 'flex';
                    }

                    tablePagination(13, 14, table, onFilter, true); // перезапуск пагинации
                } else {
                    this.style.order = index;
                    tablePagination(13, 14, table, onFilter, false); // перезапуск пагинации
                }
            }
        });
    } else {
        var tabFirstChecked = $(document).find('[name="sale_rent_table"]:checked').val(), // получить значение аренда или продажа
            tabSecondChecked, table, tableItem;

        if (window.matchMedia('(min-width: 768px)').matches) {
            tabSecondChecked = $(document).find('.tabs-panel_two [name="object_table"]:checked').val();
        } else {
            tabSecondChecked = $(document).find('.tabs-panel__select [name="object_table_select"]:checked').val();
        } // получить значение типа помещения

        table = $('.offers-inf__table[data-status="' + tabFirstChecked + '"][data-space="' + tabSecondChecked + '"]'); // найти таблицу по выбранным значениям из табов
        tableItem = $('.offers-inf__table[data-status="' + tabFirstChecked + '"][data-space="' + tabSecondChecked + '"] .table-body__row'); // найти элементы таблицы по выбранным значениям из табов

        tableItem.each(function (index) {
            var itemNoSpaces = removeSpaces($(this).find(child).text()),
                item = isText ? itemNoSpaces : parseInt(itemNoSpaces),
                that = tableItem[arr[index]['index']]; // получаем индекс сортированного элемента из массива

            if ($('[value="' + value + '"]').is(':checked')) {
                that.style.order = index; // установка порядка отображения элемента

                if (window.matchMedia('(min-width: 768px)').matches) {
                    that.style.display = 'grid';
                } else {
                    that.style.display = 'flex';
                }

                tablePagination(6, 7, table, false, true); // перезапуск пагинации
            } else {
                $(this).css('order', index)
                tablePagination(6, 7, table, false, false); // перезапуск пагинации
            }
        });
    }
}

$('.table').on('change', '[name="table_sort"]', function () {
    var value = $(this).val(),
        allThat = $('.table').find('[name="table_sort"]'),
        nameArr, floorArr, quadratureArr, priceArr, isCatalog;

    if ($(this).closest('.table').hasClass('offers-inf__table')) { // является ли таблица таблицей каталога
        var tabFirstChecked = $(document).find('[name="sale_rent_table"]:checked').val(), // получить значение аренда или продажа
            tabSecondChecked;

        if (window.matchMedia('(min-width: 768px)').matches) {
            tabSecondChecked = $(document).find('.tabs-panel_two [name="object_table"]:checked').val();
        } else {
            tabSecondChecked = $(document).find('.tabs-panel__select [name="object_table_select"]:checked').val();
        } // получить значение типа помещения

        isCatalog = false;

        for (var i = 0; i < mainTableArr.length; i++) {
            var item = mainTableArr[i];

            if (item.STATUS_TEXT === tabFirstChecked && item.SPACE_TEXT === tabSecondChecked) {
                nameArr = item.NAME.sort(function (prev, next) {
                    if (prev.value > next.value) return 1;
                    if (prev.value < next.value) return -1;
                    return 0;
                });
                floorArr = item.FLOOR.sort((prev, next) => prev.value - next.value);
                quadratureArr = item.QUADRATURE.sort((prev, next) => prev.value - next.value);
                priceArr = item.PRICE.sort((prev, next) => prev.value - next.value);
            } // сортировка данных в массиве в зависимости от выбранных табов
        }

    } else if ($(this).closest('.table').hasClass('catalog__table')) { // является ли таблица таблицей каталога
        nameArr = commonObjList.NAME.sort(function (prev, next) {
            if (prev.value > next.value) return 1;
            if (prev.value < next.value) return -1;
            return 0;
        });
        floorArr = commonObjList.FLOOR.sort((prev, next) => prev.value - next.value);
        quadratureArr = commonObjList.QUADRATURE.sort((prev, next) => prev.value - next.value);
        priceArr = commonObjList.PRICE.sort((prev, next) => prev.value - next.value);
        // сортировка данных в массиве (массив для таблицы каталога 1)

        isCatalog = true;
    }

    if ($(this).hasClass('onSorting')) {
        $(this).removeClass('onSorting');
        $(this).prop('checked', false);
    } else {
        allThat.prop('checked',false);
        allThat.removeClass('onSorting');
        $(this).addClass('onSorting');
        $(this).prop('checked', true);
    } // переключения радио кнопок сортировки

    switch (value) {
        case 'name':
            sortingTable('name', nameArr, '.table-body__item_building', true, isCatalog)

            break;

        case 'floor':
            sortingTable('floor', floorArr, '.table-body__item_floor', false, isCatalog)

            break;

        case 'quadrature':
            sortingTable('quadrature', quadratureArr, '.table-body__item_square', false, isCatalog)

            break;

        case 'price':
            sortingTable('price', priceArr, '.table-body__item_price', false, isCatalog)

            break;
    } // в зависимости от выбранной сортировки передача данных в функцию сортировки
}); // сбор данных и запуск функции сортировки после выбора одного из значений сортировки
