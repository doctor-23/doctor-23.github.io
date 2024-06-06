@@include('_animation.js');
@@include('_global.js');


document.addEventListener('DOMContentLoaded', function () {

    // Получаем основной элемент body
    const mainBody = document.querySelector('body');
// Получаем высоту заголовка
    const header = document.getElementById('header');
// Получаем высоту подвала
    const footer = document.querySelector('footer');
// Получаем основной элемент main
    const main = document.querySelector('main');
    const desktop = 1201;
    const laptop = 1200.98;
    const tablet = 1029.98;
    const mobile = 807.98;
    const fullMobile = 575.98;
    const clientWidth = document.documentElement.clientWidth;
    const contentWrapWidth = calculateDynamicValue({
        desktop: 1160,
        laptop: 990,
        tablet: 740,
        mobile: clientWidth - 20
    });

    /**
     * Рассчитывает динамическое значение в зависимости от переданных параметров и ширины окна браузера.
     * @param {Object} values - Объект с значениями для разных ширин экрана.
     * @param {number} values.desktop - Значение для ширины экрана больше 1201 пикселя.
     * @param {number} values.laptop - Значение для ширины экрана между 1200 и 1029 пикселями.
     * @param {number} values.tablet - Значение для ширины экрана между 1029 и 807 пикселями.
     * @param {number} values.mobile - Значение для ширины экрана менее 807 пикселей.
     * @returns {*} - Рассчитанное динамическое значение.
     */

    function calculateDynamicValue(values) {
        let value;

        if (clientWidth > desktop) {
            value = values['desktop'];
        } else if (clientWidth >= tablet && clientWidth < laptop) {
            value = values['laptop'];
        } else if (clientWidth >= mobile && clientWidth < tablet) {
            value = values['tablet'];
        } else if (clientWidth < mobile) {
            value = values['mobile']
        }

        return value;
    }

// Растягиваем основной элемент main между заголовком и подвалом
    const headerHeight = header.offsetHeight; // Получаем высоту заголовка
    const footerHeight = footer.offsetHeight; // Получаем высоту подвала
    main.style.minHeight = `calc(100vh - (${headerHeight}px + ${footerHeight}px))`; // Устанавливаем минимальную высоту основного элемента main

    // плавная прокуртка
@@include('_smooth_scroll.js');

    // модальные окна
@@include('_modals.js');
@@include('_hamburger.js');

    function scrollMenu() {
        const menu = document.querySelector('.menu');
        if(menu) {
            let container = menu.querySelector('.container');
            let menuList = menu.querySelector('.nav-list');
            let iconScroll = menu.querySelector('.menu__icon-scroll');
            let containerWidth = container.clientWidth;
            let menuListWidth = menuList.scrollWidth;

            function showHideIcon(width, className) {
                if (width <= menuListWidth) {
                    iconScroll.classList.remove(className);
                } else {
                    iconScroll.classList.add(className);
                }
            }

            let cartBtn = menu.querySelector('.menu__cart');
            let cartBtnWidth = cartBtn.clientWidth;
            let finalWidth = containerWidth - cartBtnWidth - 30;

            showHideIcon(finalWidth, 'hide');
            showHideIcon(containerWidth, 'hide-on-scroll');
        }
    }

    scrollMenu();

// плавающее меню
    const getMenuOffsetTop = () => {
        const menu = document.querySelector('.menu');
        const menuH = menu.offsetHeight;
        const header = document.querySelector('header');
        const headerH = header.offsetHeight;
        let menuOffsetTop;

        if (menu.classList.contains('homepage_menu')) {
            let hero = document.querySelector('.hero');

            menuOffsetTop = headerH + hero.offsetHeight;
        } else {
            menuOffsetTop = headerH + menuH;
        }

        return menuOffsetTop;
    }

    function stickyMenu(item) {
        let menu = document.querySelector('.menu');
        let header = document.querySelector('#header');
        let headerH = header.offsetHeight;
        let height = headerH;
        let backToTop = document.getElementById('back_to_top');


        if (menu) {
            let menuH = menu.offsetHeight;
            height += menuH;

            if (menu.classList.contains('homepage_menu')) {
                height = menuH + getMenuOffsetTop();
            }

            if (!menu.classList.contains('is_not_first_scroll')) {
                scrollMenu(menu);
            }
        }

        if (item.pageYOffset > height) {
            document.body.classList.add('nav_scroll');
        } else {
            document.body.classList.remove('nav_scroll');
        }


        if (item.pageYOffset > item.innerHeight) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }

    }

    stickyMenu(window);

    window.addEventListener('scroll', function () {
        stickyMenu(this);
    });

    const catalogLinks = document.querySelectorAll('.catalog-link')

    if (catalogLinks.length > 0) {

        catalogLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                window.scrollTo({
                    top: getMenuOffsetTop(),
                    behavior: 'smooth' // Опция для плавной прокрутки
                });
            })
        });

    }

// клик по мини корзине

    document.querySelectorAll('.mini-cart').forEach(cart => {
        cart.addEventListener('click', e => {
            e.preventDefault();

            if (cart.classList.contains('empty_mini-cart')) {
                const modal = document.getElementById('modal_empty_cart');
                modal.style.display = 'block';
                modal.style.opacity = 1;
            } else {
                window.location.href = cart.href;
            }
        })
    });

// Обновление меню категорий на главной
    if (document.body.classList.contains('home')) {

        const navMenuItems = document.querySelectorAll('.nav-list li');

        if (navMenuItems.length > 0) {
            navMenuItems.forEach(function (item) {

                item.addEventListener('click', function (e) {
                    e.preventDefault();

                    let itemLink = this.querySelector('a');
                    let href = itemLink.getAttribute('href');
                    let catName = itemLink.textContent;
                    let urlGetParams = href.split('=');

                    let data = {
                        action: 'get_products_by_cat',
                        slug: urlGetParams[1]
                    }

                    $.ajax({
                        url: americano.ajaxurl,
                        type: 'post',
                        data: data,
                        beforeSend: function (xhr) {
                            document.body.classList.add('loader');
                        },
                        success: function (result) {
                            // console.log(result);
                            let catalogList = document.querySelector('.catalog__list');

                            catalogList.innerHTML = result;
                            document.querySelector('.catalog-section__title').textContent = catName;

                        },
                        complete: function () {
                            document.body.classList.remove('loader');

                            window.scrollTo({
                                top: getMenuOffsetTop(),
                                behavior: 'smooth' // Опция для плавной прокрутки
                            });

                            navMenuItems.forEach(item => item.classList.remove('active'));
                            item.classList.add('active');

                            history.replaceState(null, null, href);

                            if (itemLink.closest('.hamburger')) {
                                const wrapper = document.querySelector('.hamburger-container');

                                document.body.classList.remove('no-scroll');
                                wrapper.classList.remove('slideInLeft');
                                wrapper.classList.add('slideOutLeft');
                            }

                        }
                    });

                });

            });
        }
    }

    /**
     * инициализация аккордеона
     */

    const myAccordion = new Accordion('.accordion', false);

    /**
     * инициализация масок
     */
    @@include('_input_masks.js');

    /**
     * инициализация карты
     */
    @@include('_map.js');


// Получаем ссылки с классами '.footer__policy-link' и '.footer__agreement-link'
    const policyLinks = document.querySelectorAll('.footer__policy-link, .footer__agreement-link');

// Функция обработчика клика
    function handleClick(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        let href = this.getAttribute('href'); // Получаем значение атрибута 'href' ссылки
        window.location.href = href.replace('#', ''); // Удаляем символ '#' из значения 'href' и ереходим по новому адресу
    }

    if (policyLinks.length > 0) {
// Назначаем обработчик клика на каждую найденную ссылку
        policyLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });
    }

    const customSelects = document.querySelectorAll('select.select');

    if (customSelects.length > 0) {
        customSelects.forEach(select => {
            new CustomSelect('init', {
                selectElement: select
            })
        });
    }

    /**
     * Табы на главнйо странце в секции Geography
     */

    const geographyTabs = document.querySelectorAll('.geography__tabs .geography_tab');

    if (geographyTabs) {
        const geographyTabsContent = document.querySelectorAll('.geography__tabs-content .geography__tab-content');

        geographyTabs.forEach(tab => {
           tab.addEventListener('click', (e) => {
              e.preventDefault();
              const target = e.target;
              const currentTab = target.classList === 'geography_tab' ? target : target.closest('.geography_tab');
              const dataTab = currentTab.dataset.tab;

              if (geographyTabsContent) {
                  geographyTabsContent.forEach(contentTab => {
                     const dataContentTab = contentTab.dataset.tab;
                      contentTab.style.display = dataContentTab === dataTab ? 'block' : 'none';
                  });
              }

               geographyTabs.forEach(tab => {
                   tab.classList.remove('active');
               });
               currentTab.classList.add('active');
            });
        });
    }

@@include('_sliders.js');
});
