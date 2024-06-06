const singleProductSlider = document.querySelector('.detail__slider');

if (singleProductSlider) {

    if (singleProductSlider.children.length > 1) {
        singleProductSliderInit(singleProductSlider);
    }

}

function singleProductSliderInit(slider) {
    let sliderNavi = slider.parentElement.querySelector('.details__slider-nav'); // навигация слайдера
    let prevArrow = '<a class="arrow-left"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1719 21.5832L12.4219 20.4165L3.00521 10.9998L12.4219 1.58317L11.1719 0.416504L0.588543 10.9998L11.1719 21.5832Z" fill="currentColor"/></svg></a>';
    let nextArrow = '<a class="arrow-right"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 21.5832L0.578125 20.4165L9.99479 10.9998L0.578125 1.58317L1.82812 0.416504L12.4115 10.9998L1.82812 21.5832Z" fill="currentColor"/></svg></a>';

    $(slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        draggable: true,
        appendDots: $(sliderNavi),
        appendArrows: $(sliderNavi),
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        infinite: false,
        swipe: true,
        dots: true,
        dotsClass: 'slider-dots',
        responsive: [
            {
                breakpoint: mobile,
                settings: {
                    arrows: false
                }
            }
        ]
    });
}

