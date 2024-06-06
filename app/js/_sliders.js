const mainAboutSlider = document.querySelector('.main-about__slider');
const projectsSlider = document.querySelector('.projects__slider');

if (mainAboutSlider) {
    if (mainAboutSlider.children.length > 1) {
        baseSliderInit(mainAboutSlider);
    }
}

if (projectsSlider) {
    if (projectsSlider.children.length > 1) {
        baseSliderInit(projectsSlider);
    }
}

function baseSliderInit(slider) {
    let sliderNavi = slider.parentElement.querySelector('.slider-nav'); // навигация слайдера

    $(slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        draggable: true,
        appendDots: $(sliderNavi),
        appendArrows: $(sliderNavi),
        arrows: false,
        infinite: false,
        swipe: true,
        dots: true,
        dotsClass: 'slider-dots',
    });
}

