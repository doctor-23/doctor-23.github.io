const filters = $('.catalog__filters');

filters.on('reset', function () {
    let parent = $(this).closest('.catalog__filters');

    parent.find('.select').removeClass('active');

    cards.forEach(function (card) {
        card.style.order = 'unset';
        card.style.display = 'block';
    })
});

filters.on('submit', function (e) {
    e.preventDefault();

    let filtersValues = [];
    let filtersRow = filters.find('.filters-row');

    filtersRow.each(function (i) {
        if (!$(this).hasClass('filters-row_inputs')) {

            if (!$(this).hasClass('filters-row__btn')) {

                let checkedValue = $(this).find('input:checked');

                if (checkedValue.length > 0) {

                    filtersValues.push({
                        name: checkedValue.attr('name'),
                        value: checkedValue.val()
                    });
                } else {
                    if (i !== filtersRow - 1) {
                        let firstInput = $(this).find('input').first();

                        filtersValues.push({
                            name: firstInput.attr('name'),
                            value: null
                        });
                    }
                }

            }

        } else {
            let min = $(this).find('input').first();
            let max = $(this).find('input').last();
            let name = $(this).find('input').attr('name');

            for (let key in cardsValues) {
                let regex = new RegExp(key);
                let isMatch = regex.test(name);

                if (!isMatch) {
                    continue;
                } else {
                    const maxValue = Math.max(...cardsValues[key].map(item => item.value));
                    const minValue = Math.min(...cardsValues[key].map(item => item.value));

                    filtersValues.push({
                        name: min.attr('name'),
                        value: min.val() ? min.val() : minValue
                    });

                    filtersValues.push({
                        name: max.attr('name'),
                        value: max.val() ? max.val() : maxValue
                    });
                }

                console.log(key)
            }
        }
    });

    // let filterKeys = Object.keys(filtersValues)
    catalogFilter(
        filtersValues[0]['value'],
        filtersValues[1]['value'],
        filtersValues[2]['value'],
        filtersValues[3]['value'],
        filtersValues[4]['value'],
        filtersValues[5]['value'],
        filtersValues[6]['value'],
        filtersValues[7]['value']
    )
    console.log(filtersValues);
});

var cards = document.querySelectorAll('.catalog-item-wrap');
var cardsValues = {
    price: [],
    quadrature: []
};

cards.forEach(function (card, index) {
    let itemChild = card.querySelector('.catalog-item');
    let itemPrice = card.querySelector('.catalog-item__price').textContent;

    cardsValues['price'].push({
        value: parseFloat(removeSpaces(itemPrice)),
        index: index
    });

    cardsValues['quadrature'].push({
        value: parseFloat(itemChild.dataset['quadrature']),
        index: index
    });
});

function catalogFilter(
    status,
    space,
    place,
    minQuadrature,
    maxQuadrature,
    minPrice,
    maxPrice,
    sorting
) {

    cards.forEach(function (card) {
        let itemChild = card.querySelector('.catalog-item');
        let itemStatus = itemChild.dataset['status'];
        let itemSpace = itemChild.dataset['space'];
        let itemPlace = itemChild.dataset['place'];
        let itemQuadrature = parseFloat(itemChild.dataset['quadrature']);
        let itemPrice = card.querySelector('.catalog-item__price').textContent;

        itemPrice = parseFloat(removeSpaces(itemPrice));

        if ((status ? status === itemStatus : true) &&
            (place ? (place === itemPlace || place === 'all') : true) &&
            (space ? (space === itemSpace || space === 'all') : true) &&
            (minPrice <= itemPrice && itemPrice <= maxPrice) &&
            (minQuadrature <= itemQuadrature && itemQuadrature <= maxQuadrature)) {

            card.style.display = 'block';
            card.classList.add('onFilter');

        } else {

            card.style.display = 'none';
            card.classList.remove('onFilter');

        }  // проверка всех введенных значений фильтра

        if (sorting === null) {
            card.style.order = 'unset';
        }
    });

    if (sorting !== null) {
        let sortingArray;

        switch (sorting) {
            case 'max_price':
                sortingArray = cardsValues['price'].slice().sort(function (a, b) {
                    return b.value - a.value
                });

                break;

            case 'min_price':
                sortingArray = cardsValues['price'].slice().sort(function (a, b) {
                    return a.value - b.value
                });

                break;
        }

        for (let i = 0; i < sortingArray.length; i++) {
            let sortingIndex = sortingArray[i]['index'];

            if (cards[sortingIndex].classList.contains('onFilter')) {
                cards[sortingIndex].style.order = i;
            }
        }
    }
}
