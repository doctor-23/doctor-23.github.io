$('.catalog__filters').on('reset', function () {
    let parent = $(this).closest('.catalog__filters');

    parent.find('.select').removeClass('active');

});
