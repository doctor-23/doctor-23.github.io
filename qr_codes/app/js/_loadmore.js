var screenshots_btn_more = $('.screenshots-reviews__more');

screenshots_btn_more.on('click', function (e) {
    e.preventDefault();

    var thatBtn = $(this),
        parentList = thatBtn.closest('.screenshots-reviews').find('.screenshots-reviews__list'),
        args = thatBtn.data('more');

    var myData = {
        action: 'loadmore', // экшен для wp_ajax_ и wp_ajax_nopriv_
        args: args,
        query_vars: astrooma.query_vars,
    }

    $.ajax({
        url: astrooma.ajaxurl,
        type: 'post',
        data: myData,
        beforeSend: function (xhr) {
            thatBtn.text('Загружаем...');
            thatBtn.addClass('disabled');
        },
        success: function (result) {
            // console.log(result);
            if (window.matchMedia('(max-width: 807.98px)').matches) {
                parentList.slick('unslick');
            }

            parentList.replaceWith(result)
            parentList = thatBtn.closest('.screenshots-reviews').find('.screenshots-reviews__list');

            // if (window.matchMedia('(max-width: 807.98px)').matches) {
                screenshotsSlider(parentList);
            // }

            thatBtn.remove();
        }
    })
});

$(document).on('click', '.reviews-simple__more', function (e) {
    e.preventDefault();

    var that = $(this),
        parentList = that.closest('.reviews-simple__wrap').find('.reviews-simple__list'),
        args = $(this).data('args');

    console.log(args)

    var myData = {
        action: 'loadmore_simple_reviews', // экшен для wp_ajax_ и wp_ajax_nopriv_
        args: args,
        query_vars: astrooma.query_vars,
    }

    console.log(astrooma.ajaxurl)

    $.ajax({
        url: astrooma.ajaxurl,
        type: 'post',
        data: myData,
        beforeSend: function (xhr) {
            that.text('Загружаем...');
            that.addClass('disabled');
        },
        success: function (result) {
            parentList.replaceWith(result)

            that.remove();
        },
        error: function (req, text, error) {
            console.log(req)
            console.log(text)
            console.log(error)
        }
    })
})
