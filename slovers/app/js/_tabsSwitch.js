function tabsSwitch(wrapper, item, isIndexTable, isCatalogTable) {
    var section = $(wrapper),
        parent = section.find('.tabs-container'),
        tabsOne = parent.find('.tabs-panel_one'),
        tabsTwo = parent.find('.tabs-panel_two'), // для ПК версии
        tabsSelect = parent.find('.tabs-panel__select'), // для мобильной версии
        status = tabsOne.find('input:checked').val(),
        space, foundItem;

    if (window.matchMedia('(min-width: 768px)').matches) {
        space = tabsTwo.find('input:checked').val();
    } else {
        space = tabsSelect.find('input:checked').val();
    }

    foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');
    foundItem.show();

    if (isIndexTable && !isCatalogTable) {
        tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
    }

    tabsOne.on('change', 'input', function () {
        status = $(this).val();
        space = tabsTwo.find('input:checked').val();
        foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]')

        section.find(item).hide();
        foundItem.show();

        if (isIndexTable && !isCatalogTable) {
            tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
        }
    }); // отслеживание изменений табов для выбора здания

    tabsTwo.on('change', 'input', function () {
        space = $(this).val();
        status = tabsOne.find('input:checked').val();
        foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');

        section.find(item).hide();
        foundItem.show();

        if (isIndexTable && !isCatalogTable) {
            tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
        }
    }); // отслеживание изменений табов для выбора помещения

    tabsSelect.on('change', 'input', function () {
        space = $(this).val();
        status = tabsOne.find('input:checked').val();
        foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');

        section.find(item).hide();
        foundItem.show();

        if (isIndexTable && !isCatalogTable) {
            tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
        }
    }); // отслеживание изменений табов для выбора помещения

} // переключение табов на главной