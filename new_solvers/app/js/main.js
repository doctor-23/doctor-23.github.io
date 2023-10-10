@@include('_global.js');

$(document).ready(function () {

    // init custom select

    customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 5);

    // растягиваем main между header&footer

    var header_h = $('header').outerHeight() + 'px',
        footer_h = $('footer').outerHeight() + 'px';

    $('main').css('min-height', `calc(100vh - (${header_h} + ${footer_h}))`);

    // hamburger menu

    const hamburger = document.querySelector('.header__hamburger');
    const hamburgerWrap = document.querySelector('.header__wrapper');
    const hamburgerClose = document.querySelector('.hamburger-wrap__close');

    hamburger.addEventListener('click', function (e) {
        e.preventDefault();

        hamburgerWrap.classList.add('open');
        document.body.classList.add('no-scroll');
    });

    hamburgerClose.addEventListener('click', function (e) {
        e.preventDefault();

        hamburgerWrap.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });

    // слайдер каталога на главной и похожих предложений в деталке

    if (window.matchMedia(`(max-width: 644.98px)`).matches) {
        $('.main-catalog__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            draggable: true,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots',
            appendDots: $('.main-catalog__navs'),
            infinite: false,
            swipe: true,
        });

        $('.more-objects__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            draggable: true,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots',
            appendDots: $('.more-objects__list-nav'),
            infinite: false,
            swipe: true,
        });
    }


    // всплывашка на деталке

    const detailInf = document.querySelector('.detail__place');

    if (!!detailInf) {
        const detailInfBox = document.querySelector('.detail__place-inf');

        detailInf.addEventListener('click', function (e) {
            e.preventDefault();

            detailInfBox.classList.add('show');
        });

        handleClickOutside(detailInf, function () {
            detailInfBox.classList.remove('show');
        });

    }

    @@include('_map.js');
    @@include('_filter.js');

});
