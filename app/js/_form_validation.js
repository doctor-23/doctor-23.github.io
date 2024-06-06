/**
 * Проверка валидности значения имени в поле формы.
 * @param {HTMLElement} el - Элемент формы, содержащий значение.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли электронная почта обязательным полем.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formNameValid(el, isRequired = false) {
    // Получаем длину значения в поле
    let l = el.value.length;
    let elCheck = true;

    if (isRequired) {
        if (l === 0) {
            elCheck = false;
            el.classList.add('validate'); // Добавляем класс для стилизации невалидного поля
            el.parentElement.querySelector('.msg').style.display = 'none'; // Скрываем сообщение об успешной валидации
            el.parentElement.querySelector('.msg-error').style.display = 'block'; // Показываем сообщение об ошибке: поле обязательно для заполнения
        } else if (l !== 0 && l < 2) {
            elCheck = false;
            el.parentElement.querySelector('.msg').style.display = 'none'; // Скрываем сообщение об успешной валидации
            el.parentElement.querySelector('.msg-empty').style.display = 'block'; // Показываем сообщение об ошибке: значение слишком короткое
            el.classList.add('validate'); // Добавляем класс для стилизации невалидного поля
        } else {
            elCheck = true;
            el.classList.remove('validate'); // Удаляем класс для стилизации невалидного поля
            el.parentElement.querySelector('.msg').style.display = 'none'; // Скрываем сообщение об успешной валидации
        }
    }

    return {el, elCheck, value: el.value}; // Возвращаем результат проверки валидности значения в поле формы
}

/**
 * Функция для валидации поля ввода телефонного номера.
 * @param {HTMLElement} el - Элемент поля ввода.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли электронная почта обязательным полем.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formPhoneValid(el, isRequired = false) {
    // Регулярное выражение для проверки наличия цифр в строке
    var validPhone = /\d/;
    // Получаем длину значения в поле ввода
    var l = el.value.length;
    let elCheck = true;

    if (isRequired) {
        // Проверка на пустое значение
        if (l === 0) {
            elCheck = false;
            el.classList.add('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-error').style.display = 'block';
        } else {
            // Если длина значения в поле ввода меньше 10 и больше 0
            if (l < 10 && l > 0) {
                elCheck = false;
                el.classList.add('validate');
                el.parentElement.querySelector('.msg').style.display = 'none';
                el.parentElement.querySelector('.msg-empty').style.display = 'block';
            } else {
                elCheck = true;
                el.classList.remove('validate');
                el.parentElement.querySelector('.msg').style.display = 'none';
            }
        }
    }3
    return {el, elCheck, value: el.value};
} // конец

/**
 * Функция для валидации поля ввода электронной почты.
 * @param {HTMLElement} el - Элемент поля ввода.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли электронная почта обязательным полем.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formEmailValid(el, isRequired = false) {
    let elCheck;
    var emailVal = el.value; // Получаем значение электронной почты из поля ввода
    var emailValid = emailVal.split('@'); // Разбиваем значение на две части по символу '@'
    var l = el.value.length; // Получаем длину значения в поле ввода

    // Если электронная почта обязательна для заполнения
    if (isRequired) {
        if (l === 0) {
            el.classList.add('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-error').style.display = 'block';
            elCheck = false;
        } else {
            if (l > 0 && (el.value.match(/.+?\@.+\.+/g) || []).length === 1) {
                if (emailValid[0].length < 3) {
                    el.classList.add('validate');
                    el.parentElement.querySelector('.msg').style.display = 'none';
                    el.parentElement.querySelector('.msg-error-length').style.display = 'block';
                    elCheck = false;
                } else {
                    el.classList.remove('validate');
                    el.parentElement.querySelector('.msg').style.display = 'none';
                    elCheck = true;
                }
            } else {
                el.classList.add('validate');
                el.parentElement.querySelector('.msg').style.display = 'none';
                el.parentElement.querySelector('.msg-empty').style.display = 'block';
                elCheck = false;
            }
        }
    } else {
        // Если электронная почта необязательна для заполнения
        if (l > 0) {
            if (l > 0 && (el.value.match(/.+?\@.+\.+/g) || []).length === 1) {
                if (emailValid[0].length < 3) {
                    el.classList.add('validate');
                    el.parentElement.querySelector('.msg').style.display = 'none';
                    el.parentElement.querySelector('.msg-error-length').style.display = 'block';
                    elCheck = false;
                } else {
                    el.classList.remove('validate');
                    el.parentElement.querySelector('.msg').style.display = 'none';
                    elCheck = true;
                }
            } else {
                el.classList.add('validate-border');
                el.parentElement.querySelector('.msg').style.display = 'none';
                el.parentElement.querySelector('.msg-error-email').style.display = 'block';
                elCheck = false;
            }
        } else {
            elCheck = true;
        }
    }

    return {el, elCheck, value: el.value};
} // конец

/**
 * Функция для валидации поля ввода индекса.
 * @param {HTMLElement} el - Элемент поля ввода.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли электронная почта обязательным полем.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formIndexValid(el, isRequired = false) {
    let elCheck = true;
    // Получаем длину значения в поле ввода
    let l = el.value.length;

    if (isRequired) {
        // Проверяем, не пустое ли значение
        if (l === 0) {
            elCheck = false;
            el.classList.add('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-error').style.display = 'block';
        } else if (l !== 0 && l < 6) { // Если значение не пустое, но длина меньше 6 символов
            elCheck = false;
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-empty').style.display = 'block';
            el.classList.add('validate');
        } else {
            // Валидация пройдена
            elCheck = true;
            el.classList.remove('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
        }
    }


    return {el, elCheck, value: el.value};
} // конец

/**
 * Функция для валидации поля ввода адреса.
 * @param {HTMLElement} el - Элемент поля ввода.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли электронная почта обязательным полем.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formAddressValid(el, isRequired = false) {
    let elCheck = true;
    // Получаем длину значения в поле ввода
    let l = el.value.length;

    if (isRequired) {
        // Проверяем, не пустое ли значение
        if (l === 0) {
            elCheck = false;
            el.classList.add('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-error').style.display = 'block';
        } else {
            // Валидация пройдена
            elCheck = true;
            el.classList.remove('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
        }
    }

    return {el, elCheck, value: el.value};
} // конец

/**
 * Функция для валидации кастомного выпадающего списка.
 * @param {HTMLElement} el - Элемент кастомного выпадающего списка.
 * @param {boolean} isRequired - Флаг, указывающий, является ли заполнение списка обязательным.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function formCustomSelectValid(el, isRequired = false) {
    let elCheck = true;
    let value = '';
    // Проверяем, является ли заполнение списка обязательным
    if (isRequired) {
        let parent = el.closest('.select-wrapper') || false; // Получаем родительский элемент списка
        let title = el.querySelector('.select-title'); // Получаем заголовок списка
        let inputs = el.querySelectorAll('input[type="radio"]'); // Получаем все радио-кнопки в списке
        let messages = parent ? parent.querySelectorAll('.msg') : {};

        // Перебираем все радио-кнопки в списке
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];

            if (input.checked && input.value !== '') {
                value = input.value;
                // Если хотя бы одна кнопка выбрана, считаем список валидным
                elCheck = true;
                // Убираем стиль валидации у заголовка
                title.classList.remove('validate');
                // Скрываем все сообщения об ошибках
                if (messages.length > 0) {
                    parent.querySelectorAll('.msg').forEach(item => item.style.display = 'none');
                }

                break;
            } else {
                // Если ни одна кнопка не выбрана, считаем список невалидным
                elCheck = false;

                // Добавляем стиль валидации к заголовку
                title.classList.add('validate');
                // Отображаем сообщение об ошибке
                if (messages.length > 0) {
                    parent.querySelector('.msg-error').style.display = 'block';
                }
            }
        }
    }

    return {el, elCheck, value};
}

/**
 * Проверяет валидность текстового поля.
 *
 * @param {HTMLElement} el Элемент textarea для проверки.
 * @param {boolean} isRequired Флаг, указывающий, является ли поле обязательным для заполнения (по умолчанию false).
 * @param {number} maxLength Максимальная длина текста в поле (по умолчанию 100).
 * @returns {object} Объект с элементом textarea и флагом валидности.
 */
function formTextareaValid(el, isRequired = false, maxLength = 100) {
    let elCheck = true;

    if (isRequired) {
        let l = el.value.length; // Получаем длину текста в поле ввода

        // Если поле ввода пустое
        if (l === 0) {
            elCheck = false;
            el.classList.add('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-error').style.display = 'block';
        } else if (l !== 0 && l < maxLength) {
            // Если длина текста меньше максимальной длины
            elCheck = false;
            el.parentElement.querySelector('.msg').style.display = 'none';
            el.parentElement.querySelector('.msg-empty').style.display = 'block';
            el.classList.add('validate');
        } else {
            // Если длина текста соответствует или превышает максимальную длину
            elCheck = true;
            el.classList.remove('validate');
            el.parentElement.querySelector('.msg').style.display = 'none';
        }
    }

    // Возвращаем объект с элементом textarea и флагом валидности
    return {el, elCheck, value: el.value};
}

/**
 * Функция для валидации чекбокса.
 * @param {HTMLElement} el - Элемент чекбокса.
 * @param {boolean} [isRequired=false] - Флаг, указывающий, является ли чекбокс обязательным для выбора.
 * @returns {Object} - Объект с элементом и флагом результата валидации.
 */
function checkboxValid(el, isRequired = false) {
    let elCheck = true;
    // Убираем класс "not-checked" у родительского элемента
    el.classList.remove('not-checked');

    // Проверяем, является ли выбор чекбокса обязательным
    if (isRequired) {
        if (el.checked) {
            // Если чекбокс выбран, считаем его валидным
            elCheck = true;
            // Убираем класс "not-checked" у родительского элемента
            el.classList.remove('not-checked');
        } else {
            // Если чекбокс не выбран, считаем его невалидным
            elCheck = false;
            // Добавляем класс "not-checked" к родительскому элементу
            el.classList.add('not-checked');
        }
    }

    return {el, elCheck, value: el.value};
}

/**
 * Функция для валидации поля ввода промокода.
 * @param {HTMLElement} el - Элемент поля ввода промокода.
 * @param {boolean} isRequired - Флаг, указывающий, является ли поле обязательным для заполнения (по умолчанию false).
 * @returns {boolean} - Результат валидации поля.
 */
function formPromocodeValid(el, isRequired = false) {
    let elCheck = true; // Переменная для хранения результата валидации
    let l = el.value.length; // Длина значения в поле ввода

    if (isRequired) {
        // Проверка длины значения в поле ввода
        if (l > 0) {
            // Если длина значения больше 0

            // Проверка на наличие атрибута readOnly у элемента
            if (el.getAttribute('readonly') !== null) {
                // Если атрибут readOnly присутствует

                elCheck = true; // Установка результата валидации в true
                el.parentElement.querySelector('.msg').style.display = 'none'; // Скрытие сообщения об ошибке
                el.classList.remove('validate'); // Удаление класса "validate" у поля ввода
            } else {
                // Если атрибут readOnly отсутствует

                elCheck = false; // Установка результата валидации в false
                el.classList.add('validate'); // Добавление класса "validate" к полю ввода
                el.parentElement.querySelector('.msg').style.display = 'none'; // Скрытие сообщения об успешном применении промокода
                el.parentElement.querySelector('.msg-error-not-apply').style.display = 'block'; // Отображение сообщения об ошибке применения промокода
            }
        } else {
            // Если длина значения равна 0

            elCheck = true; // Установка результата валидации в true
            el.classList.remove('validate'); // Удаление класса "validate" у поля ввода
            el.parentElement.querySelector('.msg').style.display = 'none'; // Скрытие сообщения об ошибке
        }
    }

    return {el, elCheck, value: el.value}; // Возвращение результата валидации
}

