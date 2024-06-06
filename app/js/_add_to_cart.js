let taskQueue = []; // Создаем очередь задач
let timer; // Объявляем переменную для таймера

/**
 * Обработчик события нажатия на кнопку "Добавить в корзину".
 * @param {Event} event - Событие нажатия на кнопку.
 */
document.addEventListener('click', function (event) {
    const target = event.target;

    // Проверяем, является ли целевой элемент кнопкой "Добавить в корзину"
    const isAddToCartButton = target.classList.contains('add-to-cart') || target.closest('.add-to-cart');

    if (isAddToCartButton) {
        // Находим ближайшую кнопку "Добавить в корзину"
        const addToCartButton = target.closest('.add-to-cart') || target;
        // Получаем индекс кнопки в списке ее родительского элемента
        const index = Array.from(addToCartButton.parentNode.children).indexOf(addToCartButton);
        // Вызываем функцию для обработки события нажатия на кнопку
        addButtonEvent(event, index, addToCartButton);
    }
});



/**
 * Обработчик события нажатия на кнопку добавления товара в корзину.
 * @param {Event} event - Событие нажатия на кнопку.
 * @param {number} index - Индекс задачи.
 * @param {HTMLElement} button - HTML-элемент кнопки добавления товара.
 */
function addButtonEvent(event, index, button) {
    event.preventDefault();
    const taskData = addToCartTask(button, index); // Получаем данные для задачи добавления товара в корзину
    const [data, parent, timerDelay] = taskData; // Разбираем данные задачи
    const existingTaskIndex = taskQueue.findIndex(task => task.parent === parent); // Ищем существующую задачу для этого товара в очереди

    if (existingTaskIndex !== -1) {
        // Если задача уже существует, заменяем ее новой задачей
        taskQueue[existingTaskIndex] = {data, parent, timer: null};
    } else {
        // Если задачи для этого товара нет в очереди, добавляем новую задачу в конец очереди
        taskQueue.push({data, parent, timer: null});
    }
    const taskIndex = taskQueue.length - 1;
    // Запускаем таймер для задачи
    taskQueue[taskIndex].timer = setTimeout(() => {
        processQueue(0); // Запускаем обработку очереди с начала
    }, timerDelay);
}


/**
 * Создает объект данных и родительский элемент для задачи добавления товара в корзину.
 * @param {HTMLElement} el - HTML-элемент, инициирующий задачу.
 * @param {number} index - Индекс элемента.
 * @returns {Array} - Массив, содержащий объект данных, родительский элемент и задержку таймера.
 */
function addToCartTask(el, index) {
    // Получаем данные для задачи
    let type = el.dataset.type;
    let productId = el.dataset.product;
    let isVariable = el.dataset.variable || false;
    let isCatalogCard = !!el.closest('.catalog-card');
    let isCart = !!el.closest('.basket');
    let isDetail = !!el.closest('.detail');
    let isCrossSell = !!el.closest('.cart__cross-sells');
    let isInCart = type !== 'add';
    let quantity = 1;
    let timerDelay = 0;
    let variations, parent;

    // Определяем родительский элемент в зависимости от контекста
    if (isCatalogCard) {
        parent = el.closest('.catalog-card');
    } else if (isDetail) {
        parent = el.closest('.detail');
    } else if (isCart && !isCrossSell) {
        parent = el.closest('.list-item');
    } else if (isCrossSell) {
        isCart = false;
        parent = el.closest('.list-item');
    }

    // Если товар имеет вариации, получаем их данные
    if (isVariable && !isCatalogCard) {
        let variationItems = parent.querySelectorAll('.variations__item');
        if (variationItems) {
            variations = setVariations(variationItems);
        }
    }

    // Если товар уже в корзине, меняем количество и задаем задержку для таймера
    if (isInCart) {
        quantity = changeQuantityProduct(el, isCatalogCard, parent);
        timerDelay = 1000;
    } else {
        allButtonsAction(parent, 'disable');
    }

    // Формируем объект данных для передачи в функцию обработки добавления товара в корзину
    let data = {
        action: 'add_to_cart',
        product: productId,
        variable: isVariable,
        variations: variations,
        isInCart: isInCart,
        quantity: quantity,
        isCatalogCard: isCatalogCard,
        isCart: isCart,
        isCrossSell: isCrossSell,
        index: index
    };

    // Возвращаем массив, содержащий объект данных, родительский элемент и задержку таймера
    return [data, parent, timerDelay];
}

/**
 * Выполняет указанное действие для всех кнопок внутри заданного родительского элемента.
 * @param {HTMLElement} parent - Родительский HTML-элемент, внутри которого находятся кнопки.
 * @param {string} action - Действие, которое нужно выполнить для кнопок ('disable' - отключить, 'enable' - включить).
 */
function allButtonsAction(parent, action = 'disable') {
    let buttons = parent.querySelectorAll('.add-to-cart');

    // Проверяем, есть ли элемент с классом '.item__remove' внутри родительского элемента
    if (parent.querySelector('.item__remove')) {
        // Добавляем элемент '.item__remove' в коллекцию кнопок
        buttons = parent.querySelectorAll('.add-to-cart, .item__remove');
    }

    // Применяем указанное действие для каждой кнопки в коллекции
    buttons.forEach(function (item) {
        if (action === 'disable') {
            item.classList.add('disabled'); // Отключаем кнопку
        } else if (action === 'enable') {
            item.classList.remove('disabled'); // Включаем кнопку
        }
    });
}


/**
 * Обновляет количество товаров в мини-корзине на странице путем обновления содержимого элемента с классом 'count'.
 * @param {number} count - Новое количество товаров для отображения в мини-корзине.
 */
function updateMiniCart(count) {
    // Получаем все элементы мини-корзины на странице
    const miniCarts = document.querySelectorAll('.mini-cart');

    // Проверяем, есть ли на странице мини-корзины
    if (miniCarts.length > 0) {
        // Для каждой мини-корзины на странице обновляем количество товаров
        miniCarts.forEach(function (cart) {
            // Находим контейнер для отображения количества товаров в мини-корзине
            let countContainer = cart.querySelector('.count');
            cart.classList.remove('empty_mini-cart');
            // Обновляем содержимое контейнера новым значением количества товаров
            countContainer.textContent = count;

            if (count === 0) {
                cart.classList.add('empty_mini-cart');
            }
        });
    }
}

/**
 * Создает объект вариаций товара на основе HTML-элементов.
 * @param {NodeList} items - Коллекция HTML-элементов, представляющих вариации товара (например, радио-кнопки или флажки).
 * @returns {Object} - Объект, содержащий вариации товара, где ключами являются имена атрибутов, а значениями - выбранные опции.
 */
function setVariations(items) {
    // Инициализируем объект для хранения вариаций товара
    let variations = {};

    // Перебираем каждый HTML-элемент в коллекции
    items.forEach(function (item) {
        // Получаем все вложенные элементы input в текущем элементе
        let inputs = item.querySelectorAll('input');

        // Проверяем, есть ли в текущем элементе input'ы
        if (inputs.length > 0) {
            // Проверяем, что ни один из input'ов не выбран
            let noneSelected = Array.from(inputs).reduce(function (acc, input) {
                return acc && !input.checked;
            }, true);

            // Перебираем каждый input в текущем элементе
            inputs.forEach(function (input) {
                // Получаем тип input'а и его имя (атрибут name)
                let type = input.getAttribute('type');
                let name = input.getAttribute('name');
                let is_exist = name in variations; // Проверяем, существует ли уже в объекте вариаций вариация с таким именем

                // Проверяем тип input'а
                if (type === 'radio') {
                    // Если это радио-кнопка
                    if (is_exist) {
                        // Если вариация с таким именем уже существует, пропускаем текущую итерацию
                        return false;
                    } else {
                        // Иначе записываем выбранную радио-кнопку в объект вариаций
                        if (noneSelected) {
                            variations[name] = 'default'; // Если ни одна радио-кнопка не выбрана, записываем пустую строку
                        } else {
                            if (input.checked) variations[name] = input.value; // Иначе записываем значение выбранной радио-кнопки
                        }
                    }
                } else if (type === 'checkbox') {
                    // Если это флажок (чекбокс)
                    // Если ключ уже существует и ни один из чекбоксов не выбран, просто пропускаем текущую итерацию
                    if (is_exist && noneSelected) return false;

                    if (!is_exist) {
                        // Если вариация с таким именем еще не существует
                        if (noneSelected) {
                            variations[name] = 'default'; // Если ни один из чекбоксов не выбран, записываем пустую строку
                        } else {
                            variations[name] = []; // Иначе создаем пустой массив для этой вариации
                        }
                    }

                    // Заполняем массив выбранными значениями чекбоксов
                    if (input.checked) variations[name].push(input.value);
                }
            });
        } else {
            // Если у элемента нет вложенных input'ов, считаем его атрибуты data-* вариациями и записываем в объект вариаций
            variations[item.dataset.name] = item.dataset.value;
        }
    });

    return variations; // Возвращаем объект вариаций товара
}

/**
 * Изменяет количество продукта в корзине в зависимости от типа действия и контекста.
 * @param {HTMLElement} item - HTML-элемент, который представляет собой кнопку "Плюс" или "Минус" для изменения количества продукта.
 * @param {boolean} isCatalogCard - Флаг, указывающий, является ли элемент частью карточки каталога.
 * @param {HTMLElement} parent - Родительский HTML-элемент кнопки, внутри которого находится элемент управления количеством продукта.
 * @returns {number} - Новое значение количества продукта после изменения.
 */
function changeQuantityProduct(item, isCatalogCard, parent) {
    // Получаем родительский элемент кнопки
    let quantityParent = item.parentElement;
    // Получаем тип действия (увеличение или уменьшение)
    let type = item.dataset.type;
    // Получаем кнопки "Плюс" и "Минус" для изменения количества продукта
    let minus = quantityParent.querySelector('.quantity-btn_minus');
    let plus = quantityParent.querySelector('.quantity-btn_plus');
    // Объявляем переменные для работы с инпутом количества продукта
    let input, min, max, value, inputValue;

    // Определяем, является ли элемент частью карточки каталога
    if (isCatalogCard) {
        // Если элемент частью карточки каталога, получаем инпут для изменения общего количества продукта
        input = quantityParent.querySelector('.quantity-total-price');
        // Получаем минимальное и максимальное значение для количества продукта из датасетов
        min = parseInt(input.dataset.min);
        max = parseInt(input.dataset.max);
        // Получаем текущее значение количества продукта из датасета
        value = parseInt(input.dataset.count);
    } else {
        // Если элемент не частью карточки каталога, получаем обычный инпут для изменения количества
        input = quantityParent.querySelector('.quantity__input');
        // Получаем минимальное и максимальное значение для количества продукта из атрибутов
        min = parseInt(input.getAttribute('min'));
        max = parseInt(input.getAttribute('max'));
        // Получаем текущее значение количества продукта из значения инпута
        value = parseInt(input.value);
    }

    // Увеличиваем количество продукта, если тип действия - "плюс", и текущее значение меньше максимального или максимальное значение не указано
    if (type === 'plus' && (isNaN(max) || value < max)) {
        if (isCatalogCard) {
            input.dataset.count = value + 1; // Увеличиваем значение в датасете на 1
            inputValue = input.dataset.count;
        } else {
            input.value = value + 1; // Увеличиваем значение в инпуте на 1
            inputValue = input.value;
        }
        minus.classList.remove('disabled'); // Удаляем класс "disabled" у кнопки "Минус"
        // Если указано максимальное значение и текущее значение после увеличения равно максимальному, добавляем класс "disabled" кнопке "Плюс"
        if (!isNaN(max) && inputValue === max.toString()) {
            plus.classList.add('disabled');
            allButtonsAction(parent, 'disable'); // Выключаем все кнопки в родительском элементе
        }
    }
    // Уменьшаем количество продукта, если тип действия - "минус", и текущее значение больше или равно минимальному или минимальное значение не указано
    else if (type === 'minus' && (isNaN(min) || value >= min)) {
        if (isCatalogCard) {
            input.dataset.count = value - 1; // Уменьшаем значение в датасете на 1
            inputValue = input.dataset.count;
        } else {
            input.value = value - 1; // Уменьшаем значение в инпуте на 1
            inputValue = input.value;
        }
        plus.classList.remove('disabled'); // Удаляем класс "disabled" у кнопки "Плюс"
        // Если указано минимальное значение и текущее значение после уменьшения равно минимальному - 1, добавляем класс "disabled" кнопке "Минус"
        if (!isNaN(min) && inputValue === (min - 1).toString()) {
            minus.classList.add('disabled');
            allButtonsAction(parent, 'disable'); // Выключаем все кнопки в родительском элементе
        }
    }

    // Получаем окончательное значение количества продукта
    if (isCatalogCard) {
        inputValue = input.dataset.count; // Если элемент частью карточки каталога, используем значение из датасета
    } else {
        inputValue = input.value; // Иначе используем значение из инпута
        resizeInput(input); // Изменяем размер инпута в зависимости от его содержимого
    }

    // Возвращаем окончательное значение количества продукта после изменения
    return parseInt(inputValue);
}


/**
 * Обрабатывает очередь задач, выполняя задачу с указанным индексом из очереди.
 * Если задача с указанным индексом существует, вызывает функцию addToCartAjax для выполнения задачи.
 * @param {number} taskIndex - Индекс задачи в очереди, которую необходимо обработать.
 */
function processQueue(taskIndex) {
    // Получаем задачу из очереди по указанному индексу
    const task = taskQueue[taskIndex];
    // Проверяем, существует ли задача с указанным индексом в очереди
    if (task) {
        // Извлекаем данные и родительский элемент задачи
        const {data, parent} = task;
        // Вызываем функцию addToCartAjax для выполнения задачи с переданными данными и родительским элементом
        addToCartAjax(data, parent, taskIndex);
    }
}

/**
 * Выполняет AJAX-запрос на добавление товара в корзину.
 * @param {Object} data - Данные для отправки в запросе, включая информацию о товаре и настройках.
 * @param {HTMLElement} parent - Родительский HTML-элемент, содержащий кнопку добавления товара.
 * @param {number} taskIndex - Индекс задачи в очереди.
 */
function addToCartAjax(data, parent, taskIndex) {
    let quantityInput;

    // Определяем, в каком HTML-элементе находится поле ввода количества товара
    if (data['isCatalogCard']) {
        quantityInput = parent.querySelector('.quantity-total-price');
    } else {
        quantityInput = parent.querySelector('.quantity__input');
    }

    // Очищаем предыдущий таймер, если он был установлен
    if (taskQueue[taskIndex].timer) {
        clearTimeout(taskQueue[taskIndex].timer);
    }

    // Устанавливаем новый таймер перед выполнением запроса
    taskQueue[taskIndex].timer = setTimeout(() => {
        $.ajax({
            url: americano.ajaxurl,
            type: 'post',
            data: data,
            dataType: 'json',
            beforeSend: function (xhr) {
                allButtonsAction(parent, 'disable'); // Блокируем все кнопки в родительском элементе перед отправкой запроса
            },
            success: function (result) {
                let status = result['status'];

                if (status !== 'wait' && status !== 'error') {
                    // Обновляем информацию о мини-корзине
                    updateMiniCart(result['cartTotal']);

                    // Обновляем состояние элемента корзины
                    if (result['quantity'] === 0) {
                        parent.classList.remove('in_cart');
                    } else {
                        parent.classList.add('in_cart');
                    }

                    // Обновляем информацию о товаре на странице
                    if (data['isCatalogCard']) {
                        let totalPrice = formatPrice(result['itemTotalPrice']);

                        parent.querySelector('.card__count').textContent = result['quantity'];
                        quantityInput.dataset.count = result['quantity'];
                        quantityInput.querySelector('.price').textContent = totalPrice;
                    } else {
                        if (!data['isCrossSell']) {
                            quantityInput.value = result['quantity'];
                            resizeInput(quantityInput);
                        }
                    }

                    // Обновляем страницу корзины, если товар добавлен из нее
                    if (data['isCart']) {
                        updateCart(result);
                        updateCartItem(result, parent);
                    }
                    // Обновляем кросселы, если товар добавлен из блока кросселей

                    if (data['isCrossSell']) {
                        updateCart(result);
                        crossSellAddToCart(parent);
                    }
                }
            },
            complete: function () {
                allButtonsAction(parent, 'enable'); // Разблокируем все кнопки в родительском элементе после завершения запроса

                // Удаляем выполненную задачу из очереди
                taskQueue.splice(taskIndex, 1);

                // Вызываем следующую задачу из очереди, если она есть
                if (taskQueue.length > 0) {
                    processQueue(0);
                }
            }
        });
    }, 1000); // Устанавливаем задержку в одну секунду
}


/**
 * Обновляет информацию о корзине на странице.
 * @param {Object} response - Объект с данными о корзине, который содержит следующие поля:
 *   - cartTotalString: строка, представляющая общее количество товаров в корзине,
 *   - cartTotalPrice: общая стоимость товаров в корзине,
 *   - minimalTotal: минимальная сумма заказа для подтверждения.
 */
function updateCart(response) {
    // Деструктуризация объекта response для удобства использования его свойств
    let {cartTotalString, cartTotalPrice, minimalTotal} = response;

    // Получение ссылок на элементы на странице
    let confirmBtn = document.getElementById('confirm'); // Кнопка подтверждения заказа
    let totalPriceWrap = document.querySelector('.total__price-value'); // Общая стоимость товаров в корзине
    let currencyHtml = totalPriceWrap.querySelector('.currency').outerHTML; // HTML-разметка для валюты

    // Проверка, соответствует ли общая стоимость товаров в корзине минимальной сумме заказа
    if (cartTotalPrice < minimalTotal) {
        confirmBtn.classList.add('disabled'); // Добавляем класс "disabled" кнопке подтверждения заказа
    } else {
        confirmBtn.classList.remove('disabled'); // Удаляем класс "disabled" у кнопки подтверждения заказа
    }

    // Форматирование общей стоимости товаров в корзине с разделителем тысяч
    cartTotalPrice = formatPrice(cartTotalPrice);

    // Обновление общей стоимости товаров в корзине на странице
    totalPriceWrap.innerHTML = cartTotalPrice + ' ' + currencyHtml;

    // Обновление отображения общего количества товаров в корзине
    document.querySelector('.basket__count').innerHTML = cartTotalString;
}

/**
 * Обновляет информацию о товаре в корзине на странице.
 * @param {Object} response - Ответ от сервера после выполнения действия с товаром (добавление, удаление и т. д.).
 * @param {HTMLElement} parent - Родительский HTML-элемент, содержащий информацию о товаре.
 */
function updateCartItem(response, parent) {
    let {status, productTotal, index, itemDeleted} = response;

    if (status !== 'delete') {
        // Обновляем общую стоимость товара в корзине на странице
        let productPriceWrap = parent.querySelector('.item__total-price .price');
        let currencyHtml = productPriceWrap.querySelector('.currency').outerHTML; // HTML-разметка для валюты
        productPriceWrap.innerHTML = productTotal + ' ' + currencyHtml;
    } else {
        const cartList = parent.parentElement;

        // Обновляем кросселы
        updateCrossSells();

        if (index !== null) {
            // Удаляем элемент корзины после анимации удаления
            parent.classList.add('animated', 'zoomOutLeft');
            setTimeout(() => {
                parent.remove();
            }, 500); // Задержка соответствует времени анимации

            /* пока что не нужен переделывать надо по другому
            * Вставка удаленного товара в конец списка корзины
            *
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = itemDeleted;
            let itemToDelete = tempDiv.firstElementChild;
            cartList.appendChild(itemToDelete);

            // Получаем кнопку возврата товара в корзину
            let returnCartBtn = itemToDelete.querySelector('.return-to-cart');
            // Добавляем на кнопку дата-атрибут с текущим индексом в списке
            returnCartBtn.dataset.currentIndex = cartList.children.length - 1;
            // Устанавливаем обработчик события клика на кнопку
            returnCartBtn.addEventListener('click', returnToCartAjax);
            */
        }
    }
}

/**
 * Обновляет содержимое корзины на странице путем загрузки обновленных данных с сервера.
 */
function updateCartFull() {
    let data = {
        action: 'update_cart_full'
    };

    // Выполняет AJAX-запрос для обновления содержимого корзины
    $.ajax({
        url: americano.ajaxurl,
        type: 'post',
        data: data,
        beforeSend: function (xhr) {
            // Возможно, здесь может быть блокировка кнопок перед отправкой запроса
        },
        success: function (result) {
            // Обновляет содержимое корзины на странице данными из ответа сервера
            const cartList = document.querySelector('.basket__list');
            cartList.innerHTML = result;
        },
        complete: function () {
            // Дополнительные действия после завершения запроса, если необходимо
        }
    });
}

/**
 * Выполняет AJAX-запрос для возврата товара в корзину.
 */
function returnToCartAjax() {
    // Получает кнопку, по которой было выполнено действие
    let button = this;
    // Получает индекс товара в списке
    let index = this.dataset.index;
    // Получает идентификатор товара
    let product_id = this.dataset.product;
    // Получает идентификатор вариации товара
    let variation_id = this.dataset.variation;
    // Получает текущий индекс товара в списке
    let currentIndex = this.dataset.currentIndex;

    // Формирует данные для AJAX-запроса
    let data = {
        action: 'return_to_cart',
        index: index,
        product_id: product_id,
        variation_id: variation_id
    }

    // Выполняет AJAX-запрос для возврата товара в корзину
    $.ajax({
        url: americano.ajaxurl,
        type: 'post',
        data: data,
        dataType: 'json',
        beforeSend: function (xhr) {
            // Добавляет класс disabled для блокировки кнопки перед отправкой запроса
            button.classList.add('disabled');
        },
        success: function (result) {
            // При успешном выполнении запроса обновляет мини-корзину и основную корзину
            let status = result['status']
            if (status === 'add') {
                updateMiniCart(result['cartTotal']);
                updateCart(result);
                // Выполняет действия по возвращению товара в корзину
                returnToCart(index, currentIndex, result['itemReturned']);
            }
        },
        complete: function () {
            // После завершения запроса удаляет класс disabled для разблокировки кнопки
            button.classList.remove('disabled');
        }
    });
}

/**
 * Возвращает товар в корзину на странице.
 * @param {number} index - Индекс товара, который возвращается в корзину.
 * @param {number} currentIndex - Текущий индекс товара в корзине.
 * @param {string} itemReturned - HTML-разметка возвращенного товара.
 */
function returnToCart(index, currentIndex, itemReturned) {
    // Получает список товаров в корзине
    let cartList = document.querySelector('.basket__list');
    // Получает элемент, который нужно удалить из корзины
    let deleteElement = cartList.children[currentIndex];

    // Удаляет элемент из корзины
    deleteElement.remove();

    // Получает следующий элемент в корзине для вставки возвращенного товара после него
    let nextElementInCart = cartList.children[index - 1];

    // Создает временный div для вставки HTML-кода
    let tempDiv = document.createElement('div');
    // Вставляет HTML-разметку во временный div
    tempDiv.innerHTML = itemReturned;
    // Получает элемент, который нужно вставить в корзину
    let itemToReturn = tempDiv.firstElementChild;
    // Вставляет элемент в корзину после указанного элемента
    cartList.insertBefore(itemToReturn, nextElementInCart.nextSibling);
}


/**
 * Обработчик нажатия кнопки "Очистить корзину".
 * Если кнопка с идентификатором "clear_cart" существует, добавляет к ней обработчик события клика.
 * При клике отправляет AJAX-запрос для очистки корзины.
 */
const clearCart = document.getElementById('clear_cart');

if (clearCart) {
    clearCart.addEventListener('click', function (e) {
        e.preventDefault();
        // Данные для AJAX-запроса
        let data = {
            action: 'clear_cart',
        }

        // Отправка AJAX-запроса на сервер
        $.ajax({
            url: americano.ajaxurl,
            type: 'post',
            data: data,
            // Действия перед отправкой запроса
            beforeSend: function (xhr) {
                clearCart.classList.add('disabled'); // Добавляет класс 'disabled' для блокировки кнопки
            },
            // Обработка успешного ответа от сервера
            success: function (result) {
                // Обновляет содержимое корзины на странице
                const cartBody = document.querySelector('.basket__body');
                let response = {
                    cartTotalString: '0 товаров',
                    cartTotalPrice: 0,
                    minimalTotal: 0
                }

                // Обновляет информацию о корзине и мини-корзине
                updateCart(response);
                updateMiniCart(0);

                // Обновляет содержимое корзины на странице
                cartBody.innerHTML = result;
                clearCart.remove(); // Удаляет кнопку "Очистить корзину"
            }
        });
    });
}

/**
 * Обработчик изменения вариаций товара.
 * Если найдены элементы с классом "item__variation input", добавляет к ним обработчик события изменения.
 * При изменении вариации отправляется AJAX-запрос для обновления информации о товаре.
 */
const variables = document.querySelectorAll('.item__variation input');

if (variables) {
    variables.forEach(function (variation) {
        variation.addEventListener('change', function (e) {
            let parent = this.closest('.detail');
            let variationItems = parent.querySelectorAll('.variations__item'); // Находим все варианты вариации
            let productId = this.dataset.product;
            let addButtons = parent.querySelectorAll('.detail .add-to-cart');
            let variations, data;

            if (variationItems) {
                variations = setVariations(variationItems); // Формируем объект с вариациями
            }

            data = {
                action: 'change_variation',
                variations: variations,
                product: productId
            }

            // Отправка AJAX-запроса на сервер
            $.ajax({
                url: americano.ajaxurl,
                type: 'post',
                data: data,
                dataType: 'json',
                beforeSend: function (xhr) {
                    allButtonsAction(parent, 'disable'); // Блокируем все кнопки в родительском элементе перед отправкой запроса
                },
                // Обработка успешного ответа от сервера
                success: function (result) {
                    const {status, quantity, price, description} = result;
                    let descriptionWrap = document.querySelector('.detail__description p');
                    let priceWrap = document.querySelector('.detail .price');
                    let quantityInput = document.querySelector('.detail .quantity__input');

                    // Обновление информации о товаре
                    if (status === 'in_cart') {
                        parent.classList.add('in_cart');
                        quantityInput.value = quantity;
                        resizeInput(quantityInput);
                    } else if (status === 'none_in_cart') {
                        parent.classList.remove('in_cart');
                    }

                    descriptionWrap.innerHTML = description;
                    priceWrap.innerHTML = price;
                },
                // Действия после завершения запроса
                complete: function () {
                    allButtonsAction(parent, 'enable'); // Разблокируем все кнопки в родительском элементе после завершения запроса
                }
            })
        });
    });
}


