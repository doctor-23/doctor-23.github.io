
$('.hero-form').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this),
        action = $(this).attr('action'),
        formDataArr = [];

    for (var pair of formData.entries()) {
        formDataArr.push({
            [pair[0]]: pair[1]
        })
        localStorage.setItem(pair[0], pair[1])
    }

    localStorage.setItem('formData', formDataArr);
    window.location.pathname = action;
}); // при отправке формы на главной записываем данные в localStorage

if ($('section').is('.catalog')) {
    for (let key in localStorage) {
        var value = localStorage[key],
            item, text;

        switch (key) {
            case 'place':
                item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
                text = item.closest('.select-content__wrapper').find('.select-content__radio').text();
                item[0].checked = true;
                item.closest('.select').find('.select-title').text(text);
                item.trigger('change')
                localStorage.removeItem(key)

                break

            case 'space':
                item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
                text = item.closest('.select-content__wrapper').find('.select-content__radio').text();
                item[0].checked = true;
                item.closest('.select').find('.select-title').text(text);
                item.trigger('change')
                localStorage.removeItem(key)

                break

            case 'min_square':
                item = $(document).find('input[name="' + key + '"]');
                item.val(value);
                localStorage.removeItem(key)

                break

            case 'rent_sale':
                item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
                item[0].checked = true;
                item.trigger('change')
                localStorage.removeItem(key)

                break
        } // подставляем параметры фильтра и запускаем событие change везде, кроме min_square
    }
} // на странице каталога проверяем localStorage на данные для фильтра
