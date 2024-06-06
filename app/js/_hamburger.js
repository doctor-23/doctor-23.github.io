const hamburger = document.querySelector('.header__hamburger-wrap');
const hamburgerClose = document.querySelector('.hamburger__close');

if (hamburger) {
    hamburger.addEventListener('click', event => {
        event.preventDefault();
        const wrapper = document.querySelector('.hamburger-container');

        document.body.classList.add('no-scroll');
        wrapper.classList.remove('slideOutLeft')
        wrapper.classList.add('slideInLeft')
    });
}

if (hamburgerClose) {
    hamburgerClose.addEventListener('click', event => {
        event.preventDefault();
        const wrapper = document.querySelector('.hamburger-container');

        document.body.classList.remove('no-scroll');
        wrapper.classList.remove('slideInLeft')
        wrapper.classList.add('slideOutLeft')
    });
}
