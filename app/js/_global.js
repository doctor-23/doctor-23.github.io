/**
 * Функция для блокировки ввода текста, кроме числовых значений, на элементе формы.
 * @param {Event} event - Событие ввода.
 */
function banText(event) {
    var banText = parseFloat(event.key);

    if (isNaN(banText)) {
        event.preventDefault();
    }
}

/**
 * Функция для автоматического изменения ширины поля ввода в зависимости от его содержимого.
 * @param {HTMLInputElement} el - Элемент поля ввода.
 */
function resizeInput(el) {
    let parent = el.parentElement;
    let text = el.value;
    let div = document.createElement('div');
    let width;

    div.classList.add('size-div');
    div.textContent = text;
    parent.append(div);

    width = div.clientWidth;
    el.style.width = width + 'px';
    div.remove();
}

/**
 * Функция для предотвращения действия по умолчанию в событии.
 * @param {Event} e - Событие.
 */
function preventDefaultFunc(e) {
    e.preventDefault();
}

/**
 * Функция для форматирования числового значения как цены с использованием разделителя тысяч.
 * @param {number} num - Форматируемое число.
 * @returns {string} - Отформатированная строка цены.
 */
function formatPrice(num) {
    num = parseFloat(num);
    return num.toLocaleString('en-US', {useGrouping: true}).replace(/,/g, ' ');
}

/**
 * Функция для получения координат элемента на странице.
 * @param {HTMLElement} elem - Элемент, координаты которого необходимо получить.
 * @returns {Object} - Объект с координатами элемента (top, left).
 */
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: top,
        left: left
    };
}

/**
 * Функция для извлечения параметров из URL.
 * @param {string} url - URL-адрес, из которого извлекаются параметры (по умолчанию текущий URL).
 * @returns {Object} - Объект с параметрами из URL.
 */
function getParams(url = window.location) {
    let params = {};

    new URL(url).searchParams.forEach(function (val, key) {
        if (params[key] !== undefined) {
            if (!Array.isArray(params[key])) {
                params[key] = [params[key]];
            }
            params[key].push(val);
        } else {
            params[key] = val;
        }
    });

    return params;
}

/**
 * Функция для получения текущего времени в формате "часы:минуты".
 * @returns {string} - Текущее время в формате "часы:минуты".
 */
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hours + ':' + minutes;
}


/**
 * Функция для проверки, является ли объект пустым.
 * @param {Object} obj - Проверяемый объект.
 * @returns {boolean} - Возвращает true, если объект пустой, иначе возвращает false.
 */
function isObjectEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}

// клик вне элемента

@@include('_clickOutside.js');

// валидация формы

// кастомный select

@@include('_customSelect.js');
@@include('_form_validation.js');
@@include('_accordion.js');
