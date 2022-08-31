function parametersCatalogCardColumns() {
    var object, priceArr = [], placeArr = [], statusArr = [], spaceArr = [], quadratureArr = [], indexArr = [];

    $('.catalog__list .catalog-card').each(function (index) {
        var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
            price = parseInt(priceNoSpaces),
            place = $(this).data('place'),
            status = $(this).data('status'),
            space = $(this).data('space'),
            quadrature = parseInt($(this).find('.catalog-card__quadrature').text()),
            indexCard = index + 1;

        priceArr.push(price)
        placeArr.push(place)
        statusArr.push(status)
        spaceArr.push(space)
        quadratureArr.push(quadrature)
        indexArr.push(indexCard)
    });

    object = {
        PRICE: priceArr,
        PLACE: placeArr,
        STATUS: statusArr,
        SPACE: spaceArr,
        QUADRATURE: quadratureArr,
        INDEX: indexArr,
    }

    return object;
} // сбор данных из списка каталога при загрузке

function parametersCatalogCardList() {
    var object, priceArr = [], placeArr = [], statusArr = [], spaceArr = [], quadratureArr = [], floorArr = [], nameArr = [], indexArr = [];

    $('.catalog__table .table-body__row').each(function (index) {
        var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
            price = parseInt(priceNoSpaces),
            place = $(this).data('place'),
            status = $(this).data('status'),
            space = $(this).data('space'),
            quadrature = parseInt($(this).find('.table-body__item_square').text()),
            name = removeSpaces($(this).find('.table-body__item_building').text()),
            floor = parseInt($(this).find('.table-body__item_floor').text()),
            indexCard = index;

        priceArr.push({
            ['index']: indexCard,
            ['value']: price
        })
        quadratureArr.push({
            ['index']: indexCard,
            ['value']: quadrature
        })
        floorArr.push({
            ['index']: indexCard,
            ['value']: floor
        })
        nameArr.push({
            ['index']: indexCard,
            ['value']: name
        })
        // priceArr.push(price)
        placeArr.push(place)
        statusArr.push(status)
        spaceArr.push(space)
        // quadratureArr.push(quadrature)
        // floorArr.push(floor)
        // nameArr.push(name)
        indexArr.push(indexCard + 1)
    });

    object = {
        PRICE: priceArr,
        PLACE: placeArr,
        STATUS: statusArr,
        SPACE: spaceArr,
        QUADRATURE: quadratureArr,
        INDEX: indexArr,
        NAME: nameArr,
        FLOOR: floorArr,
    }

    return object;
} // сбор данных из таблицы каталога при загрузке

function parametersMainTable() {
    var mainTableArray = [];

    $('.offers-inf__table').each(function (index) {
        var object, priceArr = [], placeArr = [], statusArr = [], spaceArr = [], quadratureArr = [], floorArr = [], nameArr = [], indexArr = [];

        $(this).find('.table-body__row').each(function (index) {
            var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
                price = parseInt(priceNoSpaces),
                // place = $(this).data('place'),
                // status = $(this).data('status'),
                // space = $(this).data('space'),
                quadrature = parseInt($(this).find('.table-body__item_square').text()),
                name = removeSpaces($(this).find('.table-body__item_building').text()),
                floor = parseInt($(this).find('.table-body__item_floor').text()),
                indexCard = index;

            priceArr.push({
                ['index']: indexCard,
                ['value']: price
            })
            // placeArr.push(place)
            // statusArr.push(status)
            // spaceArr.push(space)
            quadratureArr.push({
                ['index']: indexCard,
                ['value']: quadrature
            })
            floorArr.push({
                ['index']: indexCard,
                ['value']: floor
            })
            nameArr.push({
                ['index']: indexCard,
                ['value']: name
            })
            indexArr.push(indexCard + 1)
        });

        object = {
            PRICE: priceArr,
            PLACE: placeArr,
            STATUS: statusArr,
            SPACE: spaceArr,
            QUADRATURE: quadratureArr,
            INDEX: indexArr,
            NAME: nameArr,
            FLOOR: floorArr,
            STATUS_TEXT: $(this).data('status'),
            SPACE_TEXT: $(this).data('space')
        }

        mainTableArray.push(object)
    })

    return mainTableArray;
} // // сбор данных из таблиц на главной при загрузке