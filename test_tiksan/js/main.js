"use strict"
window.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.close').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            let target = e.currentTarget;

            target.closest('.modal').classList.remove('open');
        })
    })

    document.querySelectorAll('.modal').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            let target = e.currentTarget;

            target.classList.remove('open');
        })
    })

    document.querySelectorAll('.modal__content').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })

    document.querySelectorAll('.sales-list__item-bonus_timer').forEach(function (item) {
        var timer = item.querySelector('.timer'),
            timerValue = parseInt(item.querySelector('.timer_value').value) * 60;

        const timer_int = setInterval(function () {
            let
                seconds = timerValue % 60,
                minutes = timerValue / 60 % 60,
                hour = timerValue / 60 / 60 % 60;

            if (timerValue <= 0) {
                clearInterval(timer_int);
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timer.innerHTML = strTimer;
            }

            timerValue--;
        }, 1000)
    });

    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function (e) {
        let target = e.target,
            parent = target.parentElement;

        if (!parent.classList.contains('open_location')) {
            parent.classList.toggle('open');
            document.querySelector('body').classList.toggle('no-scroll')
        } else {
            parent.classList.remove('open_location')

            document.querySelectorAll('.modal').forEach(function (item) {
                item.classList.remove('open')
            })
        }
    });

    document.querySelectorAll('.nav-list__slide').forEach(function (item) {
        item.addEventListener('click', function (e) {
            let target = e.target,
                navBar = document.querySelector('.bottom-content .nav-list'),
                navBarWidth = navBar.offsetWidth / 2;

            if (target.classList.contains('nav-list__slide_left')) {
                if (navBar.scrollLeft !== 0) {
                    navBar.scrollLeft = navBar.scrollLeft - navBarWidth
                }
            }

            if (target.classList.contains('nav-list__slide_right')) {
                if (navBar.scrollLeft !== navBar.scrollLeftMax) {
                    navBar.scrollLeft = navBar.scrollLeft + navBarWidth
                }
            }
        })
    });

    document.querySelectorAll('.location__header').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            let modal = this.getAttribute('href');

            document.querySelector('.modal[data-modal="' + modal + '"]').classList.add('open');

            if (window.matchMedia('(max-width: 578.98px)').matches) {
                hamburger.classList.remove('open');
                hamburger.classList.add('open_location');
            }
        });
    })
})