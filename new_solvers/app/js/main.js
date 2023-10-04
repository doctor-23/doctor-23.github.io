@@include('_global.js');

$(document).ready(function () {

    // init custom select

    customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 5);

    // растягиваем main между header&footer

    var header_h = $('header').outerHeight() + 'px',
        footer_h = $('footer').outerHeight() + 'px';

    $('main').css('min-height', `calc(100vh - (${header_h} + ${footer_h}))`);

    @@include('_map.js');

});
