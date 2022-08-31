function offersSlider(el) {
    $(el).slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        arrows: true,
        infinite: true,
        variableWidth: true,
        prevArrow: '<a class = "arrow-left"></a>',
        nextArrow: '<a class = "arrow-right"></a>',
        swipe: true,
        responsive: [
            {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 574.98,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    asNavFor: false,
                    fade: false
                }
            }
        ]
    });
} // слайдер предложений