// Функция для анимации исчезновения
function fadeOut(element, duration) {
  // Устанавливаем начальное значение прозрачности
  var opacity = 1;
  // Вычисляем шаг изменения прозрачности
  var delta = 1 / (duration / 10); // Предполагаем, что 1 секунда разбивается на 10 шагов

  // Запускаем таймер для изменения прозрачности
  var timer = setInterval(function () {
    // Уменьшаем прозрачность
    opacity -= delta;
    // Применяем новое значение прозрачности к элементу
    element.style.opacity = opacity;

    // Если прозрачность достигла нуля, завершаем анимацию
    if (opacity <= 0) {
      clearInterval(timer); // Останавливаем таймер
      element.style.display = 'none'; // Скрываем элемент после анимации
    }
  }, 10); // Здесь 10 миллисекунд - это шаг анимации
}

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
  return num.toLocaleString('en-US', {
    useGrouping: true
  }).replace(/,/g, ' ');
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

/**
 * Функция для получения стилей элемента.
 *
 * @param {HTMLElement} elem - HTML-элемент, для которого нужно получить стили.
 * @return {CSSStyleDeclaration | Object} - Объект, содержащий стили элемента.
 */
function getStyle(elem) {
  // Проверяем, поддерживается ли метод window.getComputedStyle
  if (window.getComputedStyle) {
    // Если да, используем его для получения стилей элемента
    // Первый параметр - элемент, второй - псевдоэлемент (null для обычного элемента)
    return getComputedStyle(elem, null);
  } else {
    // Если метод window.getComputedStyle не поддерживается (например, в старых версиях IE),
    // используем свойство currentStyle элемента, которое возвращает объект стилей
    return elem.currentStyle;
  }
}

// клик вне элемента

function clickOutside(el, btn, cl) {
  var element = document.querySelector(el),
    button = document.querySelector(btn);
  document.addEventListener('click', e => {
    let target = e.target;
    let itsEl = target == element || element.contains(target);
    let its_btn = target == button;
    let its_el_is_open = element.classList.contains(cl);
    if (!itsEl && !its_btn && its_el_is_open) {
      element.classList.toggle(cl);
    }
  });
}
;

// валидация формы

// кастомный select

class CustomSelect {
  /**
   * Конструктор класса CustomSelect.
   * @param {string} method - Название метода инициализации. Может быть 'init', 'reinit' или 'destroy'.
   * @param {Object} options - Объект с настройками.
   * @param {HTMLElement} options.selectElement - HTML-элемент, представляющий оригинальный выпадающий список.
   * @param {number} [options.show=8] - Количество элементов, которые нужно показать в выпадающем списке без прокрутки (по умолчанию 8).
   * @param {string} [options.icon=null] - Иконка для кастомного выпадающего списка. По умолчанию используется null.
   */
  constructor(method, options) {
    // Сохраняем переданный элемент выпадающего списка и количество элементов, которые нужно показать
    this.select = options.selectElement;
    this.show = options.show || 6;
    this.icon = options.icon || null;
    this.isMobile = document.documentElement.clientWidth < 575.98;

    // Если метод инициализации равен 'init', инициализируем пользовательский выпадающий список
    if (method === 'init') {
      this.initCustomSelect(this.select);
    } else {
      // Если метод не 'init', проверяем, является ли элемент select
      if (this.select.nodeName === 'DIV') {
        // Если элемент DIV, находим все радио-кнопки внутри него
        this.options = this.select.querySelectorAll('input[type="radio"]');
        // Создаем стандартный выпадающий список
        this.defaultSelect = this.createDefaultSelect();
        // Заменяем пользовательский выпадающий список на стандартный
        this.replaceCustomWithDefault();

        // Если метод переинициализации равен 'reinit', повторно инициализируем пользовательский выпадающий список
        if (method === 'reinit') {
          this.initCustomSelect(this.defaultSelect);
        }
      }
    }
  }

  /**
   * Инициализирует кастомный выпадающий список на основе оригинального элемента select.
   * @param {HTMLElement} select - HTML-элемент, представляющий оригинальный выпадающий список.
   */
  initCustomSelect(select) {
    // Получаем список опций выпадающего списка
    this.options = select.querySelectorAll('option');
    this.select = select;
    // Создаем кастомный выпадающий список и настраиваем его обработчики событий
    const customSelect = this.createCustomSelect(select);
    // Заменяем оригинальный выпадающий список кастомным
    this.replaceSelectWithCustom(customSelect);
    // Назначаем обработчики событий для кастомного выпадающего списка
    this.customSelectEvents(customSelect);
  }

  /**
   * Создает кастомный выпадающий список на основе переданного оригинального элемента select.
   * @param {HTMLElement} select - HTML-элемент, представляющий оригинальный выпадающий список.
   * @returns {HTMLElement} - HTML-элемент, представляющий кастомный выпадающий список.
   */
  createCustomSelect(select) {
    // Создаем новый div и копируем классы из оригинального селекта
    let selectClasses = Array.from(select.classList);
    let customSelect = document.createElement('div');
    selectClasses.forEach(className => customSelect.classList.add(className));
    customSelect.classList.add('custom-select');
    if (select.required) {
      customSelect.classList.add('required');
    }

    // Создаем заголовок и содержимое списка выбора
    let selectTitle = this.createCustomSelectTitle(customSelect);
    let selectContent = this.createCustomSelectContent(customSelect);

    // Добавляем заголовок и содержимое к новому выпадающему списку
    customSelect.append(selectTitle);
    customSelect.append(selectContent);
    return customSelect;
  }

  /**
   * Создает заголовок для кастомного выпадающего списка.
   * @returns {HTMLElement} - HTML-элемент, представляющий заголовок кастомного выпадающего списка.
   */
  createCustomSelectTitle(customSelect) {
    // Получаем все опции выбора и преобразуем их в массив
    let optionsArray = Array.from(this.options);

    // Находим выбранную опцию
    let selectedOption = optionsArray.find(option => option.selected);
    // Создаем элементы для заголовка кастомного селекта
    let selectTitle = document.createElement('div'); // Создаем div для обертки заголовка
    let selectTitleText = document.createElement('div'); // Создаем div для текста заголовка
    let selectTitleIcon = document.createElement('div'); // Создаем div для иконки заголовка

    // Если иконка не задана, используем иконку стрелки вниз по умолчанию
    if (this.icon === null) {
      this.icon = '<svg width="12" height="9" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64637 6.0565L0.353478 1.7636C0.158216 1.56834 0.158216 1.25176 0.353478 1.0565L1.05686 0.353112C1.25193 0.158042 1.56814 0.157822 1.76348 0.352619L4.99992 3.58005L8.23637 0.352619C8.43171 0.157822 8.74792 0.158042 8.94299 0.353112L9.64637 1.0565C9.84163 1.25176 9.84163 1.56834 9.64637 1.7636L5.35348 6.0565C5.15822 6.25176 4.84163 6.25176 4.64637 6.0565Z" fill="currentColor"/></svg>';
    }

    // Добавляем классы для стилизации
    selectTitle.classList.add('select-title'); // Добавляем класс для обертки заголовка
    selectTitleText.classList.add('select-title__text'); // Добавляем класс для текста заголовка
    selectTitleIcon.classList.add('select-title__icon'); // Добавляем класс для иконки заголовка
    // Устанавливаем текст заголовка и иконку
    selectTitleText.textContent = selectedOption.textContent; // Устанавливаем текст заголовка из выбранной опции
    selectTitleIcon.innerHTML = this.icon; // Устанавливаем иконку заголовка

    // Добавляем текст и иконку к заголовку
    selectTitle.append(selectTitleText); // Добавляем текст заголовка в обертку
    selectTitle.append(selectTitleIcon); // Добавляем иконку заголовка в обертку

    if (selectedOption.value !== '') {
      customSelect.classList.add('active');
    }
    return selectTitle; // Возвращаем сформированный заголовок
  }

  /**
   * Создает контент для кастомного выпадающего списка.
   * @returns {HTMLElement} - HTML-элемент, представляющий контент кастомного выпадающего списка.
   */
  createCustomSelectContent() {
    // Создаем контейнер для содержимого выпадающего списка
    let selectContent = document.createElement('div');
    selectContent.classList.add('select-content');

    // Создаем обертку для опций и добавляем их
    let selectContentWrap = this.createCustomSelectOptions();
    selectContent.append(selectContentWrap);
    if (this.isMobile) {
      let overlay = document.createElement('div');
      overlay.classList.add('select-content_overlay');
      selectContent.append(overlay);
    }
    return selectContent;
  }

  /**
   * Создает обертку для опций кастомного выпадающего списка.
   * @returns {HTMLElement} - HTML-элемент, представляющий обертку для опций кастомного выпадающего списка.
   */
  createCustomSelectOptions() {
    // Создаем обертку для опций
    let selectContentWrap = document.createElement('div');
    selectContentWrap.classList.add('select-content_wrap');

    // Перебираем опции оригинального селекта и создаем для каждой опции метку
    this.options.forEach((option, index) => {
      // console.log(option)
      // Создаем элементы метки и радио-кнопки
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');

      // Добавляем созданным элементам классы
      label.classList.add('select-content__wrapper');
      span.classList.add('select-content__radio');

      // Добавляем радио-кнопке атрибуты и устанавливаем ей тип и имя
      const optionAttributes = [...option.attributes];
      // Перебираем массив атрибутов `<option>`
      optionAttributes.map(attribute => {
        if (attribute.name === 'selected') {
          input.setAttribute('checked', 'checked');
          input.checked = true;
        } else {
          input.setAttribute(attribute.name, attribute.value);
        }
        if (attribute.name === 'disabled') {
          label.classList.add('disabled');
        }
      });
      input.setAttribute('type', 'radio');
      input.setAttribute('name', this.select.name);

      // Устанавливаем текст метки
      span.textContent = option.textContent.trim();

      // Добавляем радио-кнопку и метку в обертку опций
      label.append(input);
      label.append(span);
      selectContentWrap.appendChild(label);
    });
    return selectContentWrap;
  }

  /**
   * Заменяет оригинальный выпадающий список кастомным.
   * @param {HTMLElement} select - HTML-элемент, представляющий кастомный выпадающий список.
   */
  replaceSelectWithCustom(select) {
    // Заменяем оригинальный выпадающий список кастомным
    this.select.replaceWith(select);
  }

  /**
   * Назначает обработчики событий для кастомного выпадающего списка.
   * @param {HTMLElement} select - HTML-элемент, представляющий кастомный выпадающий список.
   */
  customSelectEvents(select) {
    // Находим заголовок и содержимое списка выбора в кастомном выпадающем списке
    let title = select.querySelector('.select-title');
    let titleText = select.querySelector('.select-title__text');
    let content = select.querySelector('.select-content');

    // Находим все метки в списке выбора
    let labels = content.querySelectorAll('.select-content__wrapper');
    let labelCount = labels.length;
    let labelHeight = 0;

    // Вычисляем высоту блока меток, которые будут показаны
    labels.forEach((label, index) => {
      if (index <= this.show) {
        labelHeight += label.offsetHeight;
      }

      // Добавляем обработчик события клика для каждой метки
      label.addEventListener('click', () => {
        // Получаем текст выбранной метки
        let labelText = label.querySelector('.select-content__radio').textContent;
        let input = label.querySelector('input');
        let inputValue = input.value;

        // делаем input выбранным
        input.checked = true;
        // Изменяем текст заголовка списка выбора
        titleText.textContent = labelText;
        // Закрываем список выбора
        select.classList.remove('open');
        if (this.isMobile) {
          document.body.classList.remove('no-scroll');
          document.querySelector('main').classList.remove('layer-up');
        }
        // добавляем класс, после первого выбора
        if (!select.classList.contains('active')) {
          select.classList.add('active');
        }
        if (inputValue === '') {
          select.classList.remove('active');
        } else {
          title.classList.remove('validate');
        }
      });
    });

    // Если количество меток меньше или равно количеству меток, которые нужно показать,
    // то добавляем класс no-scroll для предотвращения прокрутки
    if (labelCount <= this.show) {
      content.classList.add('no-scroll');
    }

    // Устанавливаем максимальную высоту блока меток
    content.style.maxHeight = labelHeight + 32 + 'px';

    // Добавляем обработчик события клика для заголовка списка выбора
    title.addEventListener('click', () => {
      // Закрываем все открытые списки выбора
      document.querySelectorAll('.select').forEach(item => {
        if (item !== select) {
          item.classList.remove('open');
          if (this.isMobile) {
            document.body.classList.remove('no-scroll');
            document.querySelector('main').classList.remove('layer-up');
          }
        }
      });

      // Открываем или закрываем список выбора
      select.classList.toggle('open');
      if (this.isMobile) {
        document.body.classList.toggle('no-scroll');
        document.querySelector('main').classList.toggle('layer-up');
      }
    });

    // Добавляем обработчик события клика вне кастомного выпадающего списка
    this.clickOutsideSelect(select, title);
  }

  /**
   * Обрабатывает событие клика вне кастомного выпадающего списка.
   * @param {HTMLElement} select - HTML-элемент, представляющий кастомный выпадающий список.
   * @param {HTMLElement} title - HTML-элемент, представляющий заголовок списка выбора.
   */
  clickOutsideSelect(select, title) {
    document.addEventListener('click', e => {
      let target = e.target;
      let itsEl = target == select || select.contains(target);
      let its_btn = target == title;
      let its_overlay = target.classList.contains('select-content_overlay');
      let its_el_is_open = select.classList.contains('open');

      // Закрываем выпадающий список, если произошел клик вне его области
      if (!itsEl && !its_btn && its_el_is_open) {
        select.classList.toggle('open');
        if (this.isMobile) {
          document.body.classList.toggle('no-scroll');
        }
      }
      if (its_overlay && its_el_is_open) {
        select.classList.remove('open');
        if (this.isMobile) {
          document.body.classList.remove('no-scroll');
          document.querySelector('main').classList.remove('layer-up');
        }
      }
    });
  }

  /**
   * Заменяет кастомный выпадающий список на оригинальный.
   */
  replaceCustomWithDefault() {
    this.select.replaceWith(this.defaultSelect);
  }

  /**
   * Создает оригинальный выпадающий список.
   * @returns {HTMLSelectElement} - Созданный оригинальный выпадающий список.
   */
  createDefaultSelect() {
    // Получаем классы из кастомного селекта
    const customSelect = this.select;
    let selectClasses = Array.from(customSelect.classList);

    // Создаем элемент select
    let defaultSelect = document.createElement('select');

    // Получаем имя оригинального селекта
    let selectName = this.options[0].name;

    // Добавляем классы к созданному селекту
    selectClasses.forEach(className => defaultSelect.classList.add(className));
    defaultSelect.classList.remove('active', 'custom-select', 'required');
    if (customSelect.classList.contains('required')) {
      defaultSelect.required = true;
    }

    // Устанавливаем имя оригинального селекта
    defaultSelect.name = selectName;

    // Добавляем остальные опции
    this.options.forEach(input => {
      defaultSelect.append(this.createDefaultOptions(input));
    });
    return defaultSelect;
  }

  /**
   * Создает опцию для оригинального выпадающего списка.
   * @param {HTMLInputElement} input - Элемент input из кастомного селекта.
   * @returns {HTMLOptionElement|boolean} - Созданная опция для оригинального выпадающего списка или false, если input не содержит значения.
   */
  createDefaultOptions(input) {
    // Проверяем, что значение input не пустое
    // Получаем атрибуты input
    const inputAttributes = [...input.attributes];

    // Создаем элемент option
    let option = document.createElement('option');

    // Получаем текстовое содержимое метки для этой опции
    let textContent = input.parentElement.querySelector('.select-content__radio').textContent.trim();

    // Устанавливаем атрибуты элемента option на основе атрибутов input
    inputAttributes.forEach(attribute => {
      let name = attribute.name;

      // Исключаем атрибуты 'type' и 'name'
      if (name !== 'type' && name !== 'name' && name !== 'checked') {
        option.setAttribute(name, attribute.value);
      }
      if (name === 'checked') {
        option.setAttribute('selected', 'selected');
        option.selected = true;
      }
    });
    let optionClasses = Array.from(input.classList);
    optionClasses.forEach(className => option.classList.add(className));

    // Устанавливаем текстовое содержимое опции
    option.textContent = textContent;
    return option;
  }
}
;
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
  return {
    el,
    elCheck,
    value: el.value
  }; // Возвращаем результат проверки валидности значения в поле формы
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
  }
  3;
  return {
    el,
    elCheck,
    value: el.value
  };
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
  return {
    el,
    elCheck,
    value: el.value
  };
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
    } else if (l !== 0 && l < 6) {
      // Если значение не пустое, но длина меньше 6 символов
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
  return {
    el,
    elCheck,
    value: el.value
  };
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
  return {
    el,
    elCheck,
    value: el.value
  };
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
  return {
    el,
    elCheck,
    value
  };
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
  return {
    el,
    elCheck,
    value: el.value
  };
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
  return {
    el,
    elCheck,
    value: el.value
  };
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
  return {
    el,
    elCheck,
    value: el.value
  }; // Возвращение результата валидации
}
;
class Accordion {
  constructor(selector, multiple) {
    this.el = document.querySelector(selector);
    this.multiple = multiple;
    if (!this.el) return;
    this.bindEvents();
  }
  bindEvents() {
    const headings = this.el.querySelectorAll('.heading');
    headings.forEach(heading => {
      heading.addEventListener('click', () => {
        const parent = heading.parentElement;
        if (!this.multiple) {
          this.closeOthers(parent);
        }
        if (parent.classList.contains('open')) {
          this.close(parent);
        } else {
          this.open(parent);
        }
      });
    });
  }
  open(element) {
    element.classList.add('open');
    // CSS транзиции обрабатывают изменения, поэтому JavaScript здесь изменяет только классы
  }
  close(element) {
    element.classList.remove('open');
    // Аналогично, плавное закрытие обрабатывается через CSS
  }
  closeOthers(currentElement) {
    // Закрываем все аккордеоны, кроме текущего
    const allElements = this.el.querySelectorAll('.accordion-item');
    allElements.forEach(element => {
      if (element !== currentElement) {
        this.close(element);
      }
    });
  }
}
;
document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('start');
    setTimeout(() => {
      preloader.classList.add('continue');
    }, 3000);

    // Устанавливаем таймер, чтобы ждать окончания всех анимаций SVG
    setTimeout(() => {
      // Добавляем класс для зумирования
      preloader.classList.add('zoom');

      // Удаляем preloader после завершения анимации зумирования
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 2000); // Длительность анимации зумирования
    }, 5000); // Время ожидания завершения всех анимаций SVG (примерное значение, может потребоваться корректировка)
  }

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
      value = values['mobile'];
    }
    return value;
  }

  // Растягиваем основной элемент main между заголовком и подвалом
  const headerHeight = header.offsetHeight; // Получаем высоту заголовка
  const footerHeight = footer.offsetHeight; // Получаем высоту подвала
  main.style.minHeight = `calc(100vh - (${headerHeight}px + ${footerHeight}px))`; // Устанавливаем минимальную высоту основного элемента main

  // плавная прокуртка
  // Функция для плавной прокрутки к якорю
  function smoothScroll(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    // Получаем ID якоря из атрибута data-href или href
    const targetId = this.getAttribute('data-href') || this.getAttribute('href');
    // Находим элемент с нужным ID
    const targetElement = document.querySelector(targetId);
    const duration = 1000; // Длительность анимации прокрутки (в миллисекундах)
    if (targetElement) {
      // Проверяем, найден ли элемент с нужным ID
      const targetOffsetTop = targetElement.offsetTop; // Получаем вертикальное смещение элемента относительно верхнего края страницы
      // Прокручиваем страницу до элемента с плавной анимацией
      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth' // Опция для плавной прокрутки
      });
    }
  }

  // Получаем все ссылки, которые начинаются с "#" или имеют атрибут data-href, начинающийся с "#"
  const links = document.querySelectorAll('a[href^="#"],*[data-href^="#"]');
  // Перебираем все найденные ссылки и назначаем им обработчик события клика для плавной прокрутки
  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  // модальные окна
  class HandlerForm {
    constructor(form) {
      this.form = form.classList.contains('not-valid') ? null : form;
      this.validationFunctions = {
        // Объект с функциями валидации для различных типов полей
        name: formNameValid,
        phone: formPhoneValid,
        email: formEmailValid,
        index: formIndexValid,
        address: formAddressValid,
        agreement: checkboxValid,
        textarea: formTextareaValid,
        promo: formPromocodeValid,
        selects: formCustomSelectValid
      };
      this.excludeFields = ['selects', 'inputs', 'submit', 'promoDelete', 'promoApply', 'textarea', 'agreement', 'subscribing'];
      this.checkboxFields = ['subscribing', 'agreement'];
      if (this.form === null) {
        return;
      }
      this.fields = this.formFields(form);
      this.init(this.form);
    }
    init(form) {
      form.reset();
      if (!form.classList.contains('on-validate')) {
        const fields = this.fields;
        const submit = fields.submit;
        this.validateFields(fields, this.fieldAddHandle);
        // Удаляем все существующие обработчики события click
        submit.onclick = null;
        submit.onclick = event => this.submitHandler(event, form, fields);
        form.classList.add('on-validate');
      }
    }
    submitHandler(event, form, fields) {
      event.preventDefault();
      this.formSubmit(form, fields);
    }
    formFields(form) {
      const fields = {};

      // Функция для добавления поля, если элемент существует
      const addFieldIfExist = (name, selector) => {
        const element = form.querySelector(selector);
        if (element) {
          fields[name] = element;
        }
      };

      // Добавление полей с проверкой существования элемента
      addFieldIfExist('name', '.input-name');
      addFieldIfExist('phone', '.input-phone');
      addFieldIfExist('email', '.input-email');
      addFieldIfExist('index', '.input-index');
      addFieldIfExist('address', '.input-address');
      addFieldIfExist('promo', '.input-promocode');
      addFieldIfExist('agreement', 'input[type="checkbox"][name="agreement"]');
      addFieldIfExist('subscribing', 'input[type="checkbox"][name="permission_mailing"]');
      addFieldIfExist('promoApply', '.promocode__btn_apply');
      addFieldIfExist('promoDelete', '.promocode__btn_delete');
      addFieldIfExist('textarea', 'textarea');
      addFieldIfExist('submit', 'input[type="submit"]');
      addFieldIfExist('submit', 'button[type="submit"]');
      fields.inputs = form.querySelectorAll('input:not([type="submit"]):not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea');
      fields.selects = form.querySelectorAll('.custom-select');
      return fields;
    }

    /**
     * Функция для валидации полей формы.
     * @param {Object} fields - Объект, содержащий поля формы.
     * @param {Function} handler - Функция, добавляющая события валидации для полей
     * @returns {Object} - Объект с результатами валидации полей формы.
     */
    validateFields(fields, handler) {
      const excludeFields = this.excludeFields;
      const checkboxFields = this.checkboxFields;
      const validationResult = {};

      // Валидация полей при потере фокуса
      for (const key in fields) {
        const field = fields[key];
        const validate = this.validationFunctions[key] || new Function(); // Функция валидации для данного поля или пустая строка
        let result = undefined;
        const props = {
          listener: 'blur',
          field: field,
          validate: validate,
          isMessage: false,
          messageLength: 100,
          isSelect: false
        };

        // Обработка исключений и применение валидации для полей
        if (!excludeFields.includes(key)) {
          result = handler(props);
        }
        if (checkboxFields.includes(key)) {
          props.listener = 'change';
          result = handler(props);
        }
        if (key === 'textarea') {
          props.isMessage = true;
          result = handler(props);
        }
        if (key === 'selects' && field.length > 0) {
          props.isSelect = true;
          result = handler(props);
        }
        if (typeof result !== 'undefined') {
          Object.assign(validationResult, result);
        }
      }
      return validationResult;
    }

    /**
     * Функция для обработки события потери фокуса поля или при изменении поля.
     * @param {Object} props - Объект с параметрами для обработчика.
     * @param {string} props.listener - Строка, определяющая тип события, на которое нужно реагировать (например, 'blur' или 'change').
     * @param {HTMLElement | NodeList} props.field - HTML-элемент или коллекция элементов, на которые назначается обработчик события.
     * @param {Function} props.validate - Функция для валидации поля. Принимает поле и опциональные параметры валидации.
     * @param {boolean} [props.isMessage=false] - Флаг, определяющий, нужно ли выводить сообщение об ошибке для поля.
     * @param {number} [props.messageLength=100] - Длина сообщения об ошибке (если применяется).
     * @param {boolean} [props.isSelect=false] - Флаг, указывающий, что поле является выпадающим списком (select).
     */
    fieldAddHandle(props) {
      const {
        listener,
        field,
        validate,
        isMessage = false,
        messageLength = 100,
        isSelect = false
      } = props;
      if (isSelect) {
        field.forEach(select => {
          const isCustom = select.classList.contains('custom-select');
          const isRequired = isCustom ? select.classList.contains('required') : select.reqiured;
          if (isCustom) {
            const options = select.querySelectorAll('.select-content__wrapper');
            options.forEach(option => {
              option.addEventListener('click', event => {
                validate(select, isRequired);
              });
            });
          }
        });
      } else {
        field.addEventListener(listener, event => {
          const isRequired = field.classList.contains('required');
          if (isMessage) {
            validate(field, isRequired, messageLength);
          } else {
            validate(field, isRequired);
          }
        });
      }
    }

    /**
     * Функция для обработки события потери фокуса поля или при изменении поля.
     * @param {Object} props - Объект с параметрами для обработчика.
     * @param {HTMLElement | NodeList} props.field - HTML-элемент или коллекция элементов, на которые назначается обработчик события.
     * @param {Function} props.validate - Функция для валидации поля. Принимает поле и опциональные параметры валидации.
     * @param {boolean} [props.isMessage=false] - Флаг, определяющий, что это поле с сообщением (textarea).
     * @param {number} [props.messageLength=100] - Длина сообщения (если применяется).
     * @param {boolean} [props.isSelect=false] - Флаг, указывающий, что поле является выпадающим списком (select).
     */
    fieldCheckValidation(props) {
      const {
        listener,
        field,
        validate,
        isMessage = false,
        messageLength = 100,
        isSelect = false
      } = props;
      const validationResult = {};
      // console.log(isSelect)
      if (isSelect) {
        field.forEach(select => {
          const isCustom = select.classList.contains('custom-select');
          const isRequired = isCustom ? select.classList.contains('required') : select.reqiured;
          if (isCustom) {
            const option = select.querySelector('input');
            const selectName = option.name;
            validationResult[selectName] = validate(select, isRequired);
          }
        });
      } else {
        const isRequired = field.classList.contains('required');
        const fieldName = field.name;
        if (isMessage) {
          validationResult[fieldName] = validate(field, isRequired, messageLength);
        } else {
          validationResult[fieldName] = validate(field, isRequired);
        }
      }
      return validationResult;
    }
    formSubmit(form, fields) {
      // const validation = this.validateFields(fields, this.fieldCheckValidation);
      const validation = this.validateFields(fields, this.fieldCheckValidation);
      const validationErrors = this.validationErrors(validation);
      const fieldsValues = this.getFieldsValues(validation);
      if (JSON.stringify(validationErrors) !== '{}') {
        return;
      }
      console.log(fieldsValues);
      new FormSender(this.form, fieldsValues);
    }
    validationErrors(fields) {
      const checkValues = {};
      for (let key in fields) {
        const field = fields[key];
        // Проверяем, содержит ли ключ подстроку "Check"
        if ('elCheck' in field && !field.elCheck) {
          // Если да, сохраняем значение в объекте проверок валидации
          checkValues[key] = field.elCheck;
        }
      }
      return checkValues;
    }
    getFieldsValues(fields) {
      const values = {};
      for (let key in fields) {
        const field = fields[key];
        if ('value' in field) {
          values[key] = field.value;
        }
      }
      return values;
    }
  }

  /**
   * Создает экземпляр класса для обработки отправки формы.
   * @param {HTMLElement} form - HTML-элемент формы.
   * @param {object} data - Данные для отправки с формой.
   */
  class FormSender {
    constructor(form, data) {
      this.form = form; // HTML-элемент формы
      this.data = data; // Данные для отправки с формой

      // Инициализация обработчика формы
      this.init(this.form);
    }

    /**
     * Инициализирует обработчик формы в зависимости от ее идентификатора.
     * @param {HTMLElement} form - HTML-элемент формы.
     */
    init(form) {
      // Создание объекта с параметрами для отправки запроса
      const props = {
        data: this.data,
        // Данные для отправки с формой
        form: form // HTML-элемент формы
      };

      // URL для отправки запроса с проверкой существования переменной
      props.url = typeof progressengineering !== 'undefined' && progressengineering.ajaxurl ? progressengineering.ajaxurl : 'https://jsonplaceholder.typicode.com/posts';
      if (form.id) {
        // Определение действий в зависимости от идентификатора формы
        switch (form.id) {
          case 'callback_form':
            props.action = 'base_request'; // Установка действия для формы
            props.showDescription = true; // Показывать описание модального окна
            props.requestType = 'callback'; // Тип формы, с которой была отправлена заявка
            // Получение функций обратного вызова для обработки результатов отправки формы обратной связи
            Object.assign(props, this.baseRequest());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
            break;
          case 'calculation_form':
            props.action = 'base_request'; // Установка действия для формы
            props.showDescription = true; // Показывать описание модального окна
            props.requestType = 'calculation'; // Тип формы, с которой была отправлена заявка
            // Получение функций обратного вызова для обработки результатов отправки формы заявки на расчет стоимости
            Object.assign(props, this.baseRequest());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
            break;
          case 'audit_form':
            props.action = 'base_request'; // Установка действия для формы
            props.showDescription = true; // Показывать описание модального окна
            props.requestType = 'audit'; // Тип формы, с которой была отправлена заявка
            // Получение функций обратного вызова для обработки результатов отправки формы заявки на аудит
            Object.assign(props, this.baseRequest());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
            break;
          default:
            props.action = '#'; // Установка действия для формы
            // Получение функций обратного вызова для обработки результатов отправки формы бронирования
            Object.assign(props, this.defaultForm());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
        }
      } else {
        // Получаем класс формы
        const formClass = form.classList.contains('feedback__form') ? 'feedback_form' : 'default_form';
        switch (formClass) {
          case 'feedback_form':
            props.action = 'base_request'; // Установка действия для формы
            props.showDescription = true; // Показывать описание модального окна
            props.requestType = 'callback'; // Тип формы, с которой была отправлена заявка
            // Получение функций обратного вызова для обработки результатов отправки формы бронирования
            Object.assign(props, this.baseRequest());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
            break;
          case 'default_form':
          default:
            props.action = '#'; // Установка действия для формы
            // Получение функций обратного вызова для обработки результатов отправки формы обратной связи (не модальное окно)
            Object.assign(props, this.defaultForm());
            // Отправка формы методом POST с использованием функций обратного вызова
            this.sendFormPost(props);
        }
      }
    }

    /**
     * Создает объект с функциями обратного вызова для обработки результатов отправки формы.
     * @returns {object} - Объект с функциями обратного вызова.
     */
    baseRequest() {
      /**
       * Функция вызывается перед отправкой запроса и добавляет класс 'loader' к элементу body для отображения индикатора загрузки.
       */
      const beforeSend = () => document.body.classList.add('loader');

      /**
       * Функция вызывается при успешном ответе от сервера и обрабатывает полученные данные.
       * @param {object} response - Ответ от сервера.
       * @param {HTMLElement} form - Форма, связанная с запросом.
       * @param {boolean} [showDescription=true] - Флаг, указывающий, нужно ли отображать описание модального окна.
       */
      const success = (response, form, showDescription = true) => {
        // console.log(response);
        // Сопоставляем статус ответа с идентификатором модального окна
        const modalIds = {
          success: 'modal_success',
          error: 'modal_error'
        };
        // Получаем идентификатор модального окна для текущего статуса ответа
        const modalId = modalIds[response.status] || 'modal_error';

        // Находим модальное окно по его идентификатору
        const modal = document.getElementById(modalId);
        // Находим текущее модальное окно, связанное с формой, и скрываем его
        const currentModal = form.closest('.modal');
        if (currentModal) fadeOut(currentModal, 0);

        // Показываем модальное окно и устанавливаем ему непрозрачность
        modal.style.display = 'block';
        modal.style.opacity = 1;

        // Если установлен флаг showDescription, отображаем описание модального окна
        if (showDescription) {
          modal.querySelector('.modal__description').style.display = 'flex';
        } else {
          modal.querySelector('.modal__description').style.display = 'none';
        }
      };

      /**
       * Функция вызывается при возникновении ошибки во время запроса и обрабатывает ошибку.
       * @param {XMLHttpRequest} xhr - Объект XMLHttpRequest, содержащий информацию о запросе.
       * @param {string} exception - Строка, содержащая описание типа ошибки.
       */
      const onError = (xhr, exception) => this.ajaxErrors(xhr, exception);

      /**
       * Функция вызывается после завершения выполнения запроса и удаляет класс 'loader' у элемента body для скрытия индикатора загрузки.
       */
      const onComplete = () => document.body.classList.remove('loader');

      // Возвращаем объект с функциями обратного вызова
      return {
        beforeSend,
        success,
        onError,
        onComplete
      };
    }

    /**
     * Создает объект с функциями обратного вызова для обработки результатов отправки формы.
     * @returns {object} - Объект с функциями обраЧтного вызова.
     */
    defaultForm() {
      /**
       * Функция вызывается перед отправкой запроса и добавляет класс 'loader' к элементу body для отображения индикатора загрузки.
       */
      const beforeSend = () => document.body.classList.add('loader');

      /**
       * Функция вызывается при успешном ответе от сервера и обрабатывает полученные данные.
       * @param {object} response - Ответ от сервера.
       * @param {HTMLElement} form - Форма, связанная с запросом.
       * @param {boolean} [showDescription=true] - Флаг, указывающий, нужно ли отображать описание модального окна.
       */
      const success = (response, form, showDescription = true) => {
        // console.log(response);
        // Получаем идентификатор модального окна для текущего статуса ответа
        const modalId = response.id === 101 ? 'modal_success' : 'modal_error';
        // Находим модальное окно по его идентификатору
        const modal = document.getElementById(modalId);
        // Находим текущее модальное окно, связанное с формой, и скрываем его
        const currentModal = form.closest('.modal');
        if (currentModal) {
          fadeOut(currentModal, 0);
        }

        // Показываем модальное окно и устанавливаем ему непрозрачность
        modal.style.display = 'block';
        modal.style.opacity = 1;

        // Если установлен флаг showDescription, отображаем описание модального окна
        console.log('showDescription', showDescription);
        if (showDescription) {
          modal.querySelector('.modal__description').style.display = 'flex';
        } else {
          modal.querySelector('.modal__description').style.display = 'none';
        }
      };

      /**
       * Функция вызывается при возникновении ошибки во время запроса и обрабатывает ошибку.
       * @param {XMLHttpRequest} xhr - Объект XMLHttpRequest, содержащий информацию о запросе.
       * @param {string} exception - Строка, содержащая описание типа ошибки.
       */
      const onError = (xhr, exception) => this.ajaxErrors(xhr, exception);

      /**
       * Функция вызывается после завершения выполнения запроса и удаляет класс 'loader' у элемента body для скрытия индикатора загрузки.
       */
      const onComplete = () => document.body.classList.remove('loader');

      // Возвращаем объект с функциями обратного вызова
      return {
        beforeSend,
        success,
        onError,
        onComplete
      };
    }

    /**
     * Функция отправки POST запроса на сервер с использованием fetch.
     * @param {object} props - Объект параметров запроса.
     * @param {string} props.action - Действие, которое будет отправлено на сервер.
     * @param {string} [props.url='https://jsonplaceholder.typicode.com/posts'] - URL, на который будет отправлен запрос.
     * @param {object} [props.data={}] - Данные, которые будут отправлены на сервер.
     * @param {function} [props.beforeSend=new Function()] - Функция, вызываемая перед отправкой запроса.
     * @param {function} [props.success=new Function()] - Функция, вызываемая при успешном ответе от сервера.
     * @param {function} [props.onError=new Function()] - Функция, вызываемая при возникновении ошибки во время запроса.
     * @param {function} [props.onComplete=new Function()] - Функция, вызываемая после завершения запроса.
     * @param {boolean} [props.showDescription=false] - Флаг, указывающий, нужно ли отображать описание запроса.
     * @param {string} [props.form=''] - Форма, связанная с запросом.
     */
    sendFormPost(props) {
      const {
        action = '#',
        url,
        data = {},
        beforeSend = new Function(),
        success = new Function(),
        onError = new Function(),
        onComplete = new Function(),
        showDescription,
        form = ''
      } = props;

      /**
       * Тип формы, с которой была отправлена заявка
       * Локально для проекта
       */
      data.requestType = props.requestType;

      // Формируем объект данных для отправки на сервер, включая действие (action), если оно указано
      const requestData = {
        action,
        ...data
      };

      // Создаем объект FormData и добавляем в него данные из requestData
      const formData = new FormData();
      for (const key in requestData) {
        formData.append(key, requestData[key]);
      }

      // Параметры запроса
      const requestOptions = {
        method: 'POST',
        body: formData
      };

      // Вызываем функцию beforeSend перед отправкой запроса
      beforeSend();

      // Отправляем запрос с использованием fetch
      fetch(url, requestOptions).then(response => {
        // Проверяем, был ли успешный ответ от сервера
        if (!response.ok) {
          // throw new Error('Network response was not ok');
          throw new Error('Нет соединения. Проверьте сеть.');
        }
        // Проверяем, что ответ не пустой
        if (response.status === 204) {
          // Возвращаем пустой объект данных, если ответ пустой
          return {};
        }
        // console.log(response)
        // Возвращаем JSON-представление ответа
        return response.json();
      }).then(data => {
        // Вызываем функцию success при успешном ответе от сервера и передаем ей полученные данные
        success(data, form, showDescription);
      }).catch(error => {
        // Вызываем функцию onError при возникновении ошибки и передаем ей объект ошибки
        onError(error);
      }).finally(() => {
        // Вызываем функцию onComplete после завершения выполнения запроса
        onComplete();
      });
    }

    // обработка ошибок ajax
    /**
     * Функция для обработки ошибок при выполнении AJAX-запроса.
     * @param {XMLHttpRequest} xhr - Объект XMLHttpRequest, содержащий информацию о запросе.
     * @param {string} [exception=''] - Строка с описанием типа ошибки.
     */
    ajaxErrors(xhr, exception = '') {
      // Вывод информации о запросе в консоль для отладки
      console.log(xhr);

      // Обработка различных типов ошибок
      if (xhr.status === 0) {
        // Ошибка при отсутствии соединения
        console.error('Нет соединения. Проверьте сеть.');
      } else if (xhr.status === 404) {
        // Ошибка 404: страница не найдена
        console.error('Запрошенная страница не найдена (404).');
      } else if (xhr.status === 500) {
        // Ошибка 500: внутренняя ошибка сервера
        console.error('Внутренняя ошибка сервера (500).');
      } else if (exception === 'parsererror') {
        // Ошибка при синтаксическом анализе JSON
        console.error('Не удалось выполнить запрошенный синтаксический анализ JSON. (parse failed)');
      } else if (exception === 'timeout') {
        // Превышен лимит времени ожидания запроса
        console.error('Превышен лимит времени на запрос.');
      } else if (exception === 'abort') {
        // Запрос был прерван
        console.error('Запрос прерван.');
      } else {
        // Обработка неопределенной ошибки
        console.error('Неопределенная ошибка. ' + xhr.responseText);
        console.error('Убрать с обработчика на бекенде все дебаги и повторить');
      }
    }
  }
  function ajaxErrors(xhr, exception = '') {
    // Вывод информации о запросе в консоль для отладки
    console.log(xhr);

    // Обработка различных типов ошибок
    if (xhr.status === 0) {
      // Ошибка при отсутствии соединения
      console.error('Нет соединения. Проверьте сеть.');
    } else if (xhr.status === 404) {
      // Ошибка 404: страница не найдена
      console.error('Запрошенная страница не найдена (404).');
    } else if (xhr.status === 500) {
      // Ошибка 500: внутренняя ошибка сервера
      console.error('Внутренняя ошибка сервера (500).');
    } else if (exception === 'parsererror') {
      // Ошибка при синтаксическом анализе JSON
      console.error('Не удалось выполнить запрошенный синтаксический анализ JSON. (parse failed)');
    } else if (exception === 'timeout') {
      // Превышен лимит времени ожидания запроса
      console.error('Превышен лимит времени на запрос.');
    } else if (exception === 'abort') {
      // Запрос был прерван
      console.error('Запрос прерван.');
    } else {
      // Обработка неопределенной ошибки
      console.error('Неопределенная ошибка. ' + xhr.responseText);
      console.error('Убрать с обработчика на бекенде все дебаги и повторить');
    }
  }
  ;
  document.addEventListener('click', function (e) {
    const target = e.target;
    const isOverlay = target.classList.contains('modal');
    const isCloseButton = target.classList.contains('modal__close') || target.closest('.modal__close');
    const button = target.classList.contains('btn') ? target : target.closest('.btn');
    let modal;
    if (isOverlay) {
      modal = target;
    }
    if (isCloseButton) {
      modal = target.closest('.modal');
    }
    if (modal) {
      // modal.querySelector('.modal__content').classList.remove('animated');
      fadeOut(modal, 215);
      document.body.classList.remove('no-scroll');
    }
    if (button) {
      const modalId = button.dataset.modal;
      if (modalId) {
        const modal = document.getElementById(modalId);
        const form = modal.querySelector('form');
        const selects = modal.querySelectorAll('.select');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        document.body.classList.add('no-scroll');
        if (selects.length > 0) {
          selects.forEach(select => {
            new CustomSelect('reinit', {
              selectElement: select
            });
          });
        }
        if (form) {
          new HandlerForm(form);
        }
      }
    }
  });

  // Найти элемент с классом 'header__hamburger'
  const hamburger = header.querySelector('.header__hamburger');
  const hamburgerClose = header.querySelector('.header__close');
  const hamburgerWrap = header.querySelector('.hamburger-wrap');
  const closeHamburger = () => {
    hamburger.classList.remove('open');
    hamburgerWrap.classList.remove('slideInRight');
    hamburgerWrap.classList.add('slideOutRight');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      hamburgerWrap.classList.add('menu-hidden');
    }, 1000);
  };
  // Проверить, существует ли элемент 'header__hamburger'
  if (hamburger) {
    // Добавить обработчик события 'click' к элементу 'header__hamburger'
    hamburger.addEventListener('click', event => {
      // Предотвратить стандартное поведение события (например, переход по ссылке)
      event.preventDefault();

      // Проверить, содержит ли текущий элемент ('hamburger') класс 'open'
      if (hamburger.classList.contains('open')) {
        // Если содержит, удалить класс 'open' у элемента 'hamburger'
        closeHamburger();
      } else {
        // Если класс 'open' отсутствует у элемента 'hamburger'
        // Добавить класс 'open' к элементу 'hamburger'
        hamburger.classList.add('open');
        hamburger.classList.remove('close');
        // Добавить класс 'no-scroll' к элементу 'body', чтобы предотвратить прокрутку страницы
        document.body.classList.add('no-scroll');

        // Удалить класс 'slideInLeft' у элемента 'hamburgerWrap' и добавить класс 'slideOutLeft'
        // Это переключит анимацию меню с 'slide in' (заезд) на 'slide out' (выезд)
        hamburgerWrap.classList.remove('slideOutRight');
        hamburgerWrap.classList.add('slideInRight');
        hamburgerWrap.classList.remove('menu-hidden');
      }
    });
  }
  if (hamburgerClose) {
    hamburgerClose.addEventListener('click', event => {
      event.preventDefault();
      closeHamburger();
    });
  }
  document.addEventListener('click', function (e) {
    const target = e.target;
    const isHamburgerWrap = target.classList.contains('header__hamburger') || target.closest('.header__hamburger');
    const isCloseButton = target.classList.contains('header__close');
    // const isCloseButton = target.classList.contains('header__close') || target.closest('.header__close');
    const isHamburger = target.classList.contains('header__hamburger') || target.closest('.header__hamburger');
    const isOpen = hamburgerWrap.classList.contains('slideInRight');
    if (!isHamburger) {
      if (isHamburgerWrap || isCloseButton || isOpen) {
        closeHamburger();
      }
    }
  });

  /**
   * инициализация аккордеона
   */

  const myAccordion = new Accordion('.accordion', false);

  /**
   * инициализация масок
   */

  // $('.input-email').inputmask({
  //     mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
  //     greedy: false,
  //     onBeforePaste: function (pastedValue, opts) {
  //         pastedValue = pastedValue.toLowerCase();
  //         return pastedValue.replace('mailto:', '');
  //     },
  //     definitions: {
  //         '*': {
  //             validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
  //             casing: 'lower'
  //         }
  //     }
  // });

  const inputsPhone = document.querySelectorAll('.input-phone');
  const inputsEmail = document.querySelectorAll('.input-email');
  if (inputsPhone.length > 0) {
    inputsPhone.forEach(function (input) {
      let phoneMask = IMask(input, {
        mask: '+7 (000) 000-00-00'
      });
    });
  }
  if (inputsEmail.length > 0) {
    inputsEmail.forEach(function (input) {
      var emailMask = IMask(input, {
        mask: /^\S*@?\S*$/
      });
    });
  }
  ;

  /**
   * инициализация карты
   */
  /**
   * Табы на главнйо странце в секции Geography
   */

  const geographyTabs = document.querySelectorAll('.geography__tabs .geography_tab');
  if (geographyTabs) {
    const geographyTabsContent = document.querySelectorAll('.geography__tabs-content .geography__tab-content');
    geographyTabs.forEach(tab => {
      tab.addEventListener('click', e => {
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
  ;

  // Получаем ссылки с классами '.footer__policy-link' и '.footer__agreement-link'
  const policyLinks = document.querySelectorAll('.footer__links');

  /**
   * Функция обработчика клика по политикам в подвале
   * @param e
   */
  function handleClick(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    let href = this.getAttribute('href'); // Получаем значение атрибута 'href' ссылки
    window.location.href = href.replace('#', ''); // Удаляем символ '#' из значения 'href' и переходим по новому адресу
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
      });
    });
  }
  window.addEventListener('scroll', function () {
    const fixedDownloadButton = document.querySelector('.download-presentation');
    if (fixedDownloadButton) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fixedDownloadButton.classList.add('slideOutRight');
        fixedDownloadButton.classList.remove('slideInRight');
      } else {
        if (fixedDownloadButton.classList.contains('slideOutRight')) {
          fixedDownloadButton.classList.add('slideInRight');
          fixedDownloadButton.classList.remove('slideOutRight');
        }
      }
    }
  });

  /**
   * Инит формы валидации обратной связи
   */

  const feedbackForms = document.querySelectorAll('.feedback__form');
  if (feedbackForms.length > 0) {
    feedbackForms.forEach(form => new HandlerForm(form));
  }

  /**
   * Ajax подгрузка статей на странице блога/новостей
   */
  const loadMoreArticle = document.getElementById('articles__btn_more');
  if (loadMoreArticle) {
    loadMoreArticle.addEventListener('click', e => {
      e.preventDefault;
      const target = e.target;
      const pages = parseInt(target.dataset.pages);
      let page = parseInt(target.dataset.page);

      // URL для отправки запроса с проверкой существования переменной
      const url = typeof progressengineering !== 'undefined' && progressengineering.ajaxurl ? progressengineering.ajaxurl : 'https://jsonplaceholder.typicode.com/posts';
      // Формируем объект данных для отправки на сервер, включая действие (action), если оно указано
      const requestData = {
        action: 'loadmore_articles',
        page
      };

      // Создаем объект FormData и добавляем в него данные из requestData
      const formData = new FormData();
      for (const key in requestData) {
        formData.append(key, requestData[key]);
      }
      // Параметры запроса
      const requestOptions = {
        method: 'POST',
        body: formData
      };
      loadMoreArticle.classList.add('load');

      // Отправляем запрос с использованием fetch
      fetch(url, requestOptions).then(response => {
        // Проверяем, был ли успешный ответ от сервера
        if (!response.ok) {
          // throw new Error('Network response was not ok');
          throw new Error('Нет соединения. Проверьте сеть.');
        }
        // Проверяем, что ответ не пустой
        if (response.status === 204) {
          // Возвращаем пустой объект данных, если ответ пустой
          return {};
        }
        // console.log(response)
        // Возвращаем текстовое представление ответа (HTML)
        return response.text();
      }).then(data => {
        // Вызываем функцию success при успешном ответе от сервера и передаем ей полученные данные
        const articles = document.querySelector('.articles__list');
        // Вставляем полученный HTML в список статей
        articles.insertAdjacentHTML('beforeend', data);
      }).catch(error => {
        // Вызываем функцию onError при возникновении ошибки и передаем ей объект ошибки
        console.log('error', error);
        ajaxErrors(error);
      }).finally(() => {
        // Вызываем функцию onComplete после завершения выполнения запроса
        loadMoreArticle.classList.remove('load');
        page++;
        if (page === pages) {
          loadMoreArticle.remove();
        } else {
          loadMoreArticle.dataset.page = page;
        }
      });
    });
  }

  /*
  * Кнопка подробнее на детальной странице оборудования
   */

  const detailButtonsMore = document.querySelectorAll('.list-item__link');
  if (detailButtonsMore.length > 0) {
    detailButtonsMore.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        const descriptionContainer = target.closest('.list-item__row').querySelector('.list-item__description');
        const setDescriptionVision = (height, display) => {
          descriptionContainer.style.maxHeight = height;
          descriptionContainer.style.display = display;
        };
        if (!target.dataset.maxHeight) {
          const maxHeightStyle = getStyle(descriptionContainer).maxHeight;
          if (maxHeightStyle !== 'none') {
            target.dataset.maxHeight = maxHeightStyle;
          }
        }
        const maxHeight = target.dataset.maxHeight;
        if (target.classList.contains('open')) {
          target.classList.remove('open');
          target.textContent = 'Подробнее';
          setDescriptionVision(maxHeight, '-webkit-box');
        } else {
          target.classList.add('open');
          target.textContent = 'Скрыть';
          setDescriptionVision('none', 'block');
        }
      });
    });
  }
  const equipmentList = document.querySelector('.quality-equipment__list');
  const aboutList = document.querySelector('.page-about__list');
  const hiddenContent = list => {
    const items = list.querySelectorAll('.list-item');
    items.forEach(item => {
      const description = item.querySelector('.list-item__description');
      const more = item.querySelector('.list-item__link');
      let fontSize;
      if (clientWidth > desktop) {
        fontSize = 20;
      } else if (clientWidth >= tablet && clientWidth < laptop) {
        fontSize = 16;
      } else if (clientWidth < mobile) {
        fontSize = 14;
      }
      const maxHeight = fontSize * 1.2 * 6;
      const currentHeight = description.clientHeight;
      if (maxHeight < currentHeight) {
        description.classList.add('text-hidden');
      } else {
        more.remove();
        description.classList.remove('text-hidden');
      }
    });
  };
  if (equipmentList) {
    hiddenContent(equipmentList);
  }
  if (aboutList) {
    hiddenContent(aboutList);
  }

  /**
   * Функция для инициализации Swiper с группировкой слайдов по заданному размеру
   * @param {HTMLElement} sliderWrap - Контейнер, в котором находится слайдер. Обычно это элемент с классом '.reviews__slider-wrap'.
   * @param {number} groupSize - Количество слайдов, которые должны быть сгруппированы вместе в одном контейнере. Например, 4 для группировки по 4 слайда.
   */
  function reviewsSlider(sliderWrap, groupSize) {
    // Находим внутренние элементы внутри обертки слайдера
    const slider = sliderWrap.querySelector('.reviews__slider');
    const slides = slider.querySelectorAll('.review');
    const nextButton = sliderWrap.querySelector('.btn_next');
    const prevButton = sliderWrap.querySelector('.btn_prev');
    const pages = sliderWrap.querySelector('.slider-nav__pages');

    // Проверка на существование всех необходимых элементов
    if (!slider || !nextButton || !prevButton || !pages) {
      console.error('Не найдены необходимые элементы для Swiper в контейнере:', sliderWrap);
      return;
    }

    // Добавляем нужные классы для Swiper
    sliderWrap.classList.add('swiper');
    slider.classList.add('swiper-wrapper');

    // Проверка на мобильную или десктоп версию
    if (mobile < clientWidth) {
      let groupedSlides = [];
      slides.forEach((slide, index) => {
        // Группируем слайды по 'groupSize' (например, по 4 слайда)
        if (index % groupSize === 0) {
          const group = document.createElement('div');
          group.classList.add('swiper-slide', 'slider-item');
          slider.appendChild(group);
          groupedSlides.push(group);
        }
        // Добавляем слайды в текущую группу
        groupedSlides[groupedSlides.length - 1].appendChild(slide);
      });
    } else {
      // Для десктопа добавляем класс 'swiper-slide' к каждому слайду
      slides.forEach(slide => slide.classList.add('swiper-slide'));
    }

    // Инициализация Swiper
    const swiper = new Swiper(sliderWrap, {
      speed: 300,
      // Скорость анимации слайда
      slidesPerView: 1,
      // Показываем по одному слайду за раз
      loop: false,
      // Отключаем зацикливание слайдов
      grabCursor: true,
      // Включаем курсор "перетаскивания" при наведении
      pagination: {
        el: pages,
        // Элемент для пагинации
        type: 'fraction' // Тип пагинации (фракция, например, "1/5")
      },
      navigation: {
        nextEl: nextButton,
        // Элемент для кнопки "вперед"
        prevEl: prevButton // Элемент для кнопки "назад"
      }
    });

    // Обработчик события изменения слайда
    swiper.on('slideChange', function () {
      // Для каждого слайда в текущем слайдере
      slides.forEach(slide => {
        // Проверяем, имеет ли слайд класс 'show'
        if (slide.classList.contains('show')) {
          // Находим кнопку "Подробнее" внутри текущего слайда
          const btnMore = slide.querySelector('.review__btn-more');
          // Удаляем класс 'show' у слайда, чтобы скрыть его
          slide.classList.remove('show');
          // Меняем текст кнопки на 'Развернуть отзыв', чтобы пользователь знал, что можно развернуть отзыв
          btnMore.textContent = 'Развернуть отзыв';
        }
      });
    });
  }
  function webinarsHeroSlider(sliderWrap) {
    // Находим внутренние элементы внутри обертки слайдера
    const slider = sliderWrap.querySelector('.webinars-slider');
    const slides = slider.querySelectorAll('.slider-item');
    const nextButton = sliderWrap.querySelector('.btn_next');
    const prevButton = sliderWrap.querySelector('.btn_prev');

    // Добавляем нужные классы для Swiper
    sliderWrap.classList.add('swiper');
    slider.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    // Инициализация Swiper
    const swiper = new Swiper(sliderWrap, {
      speed: 300,
      // Скорость анимации слайда
      autoHeight: true,
      // Автоматическая настройка высоты
      loop: false,
      // Отключаем зацикливание слайдов
      grabCursor: true,
      // Включаем курсор "перетаскивания" при наведении
      // Responsive breakpoints
      breakpoints: {
        320: {
          navigation: false,
          slidesPerView: 'auto',
          // Показываем по одному слайду за раз
          spaceBetween: 20 // Отступ между слайдами
        },
        576: {
          // Настройки для экранов от 576px до 808px
          slidesPerView: 2,
          // Показываем по 2 слайда за раз
          navigation: {
            nextEl: nextButton,
            // Элемент для кнопки "вперед"
            prevEl: prevButton // Элемент для кнопки "назад"
          }
        },
        809: {
          // Настройки для экранов от 809px и выше
          spaceBetween: 40 // Отступ между слайдами для больших экранов
        }
      }
    });
  }

  // Находим все элементы с классом '.reviews__slider-wrap'
  const reviewsSliders = document.querySelectorAll('.reviews__slider-wrap');

  // Проверяем, есть ли элементы с указанным классом
  if (reviewsSliders.length > 0) {
    // Для каждого найденного слайдера инициализируем Swiper
    reviewsSliders.forEach(slider => {
      // Вызываем функцию инициализации Swiper с указанным размером группировки слайдов
      reviewsSlider(slider, 4);

      // Находим все элементы с классом '.review' внутри текущего слайдера
      const reviews = slider.querySelectorAll('.review');

      // Проверяем, есть ли элементы с классом '.review'
      if (reviews.length > 0) {
        // Для каждого найденного элемента с классом '.review'
        reviews.forEach(review => {
          // Находим кнопку "Подробнее" внутри текущего отзыва
          const btnMore = review.querySelector('.review__btn-more');

          // Проверяем, существует ли кнопка "Подробнее"
          if (btnMore) {
            // Добавляем обработчик события 'click' для кнопки "Подробнее"
            btnMore.addEventListener('click', event => {
              // Предотвращаем действие по умолчанию для события клика
              event.preventDefault();

              // Переключаем класс 'show' для текущего отзыва, чтобы показать или скрыть его
              review.classList.toggle('show');

              // Меняем текст кнопки в зависимости от состояния отзыва
              btnMore.textContent = review.classList.contains('show') ? 'Свернуть отзыв' : 'Развернуть отзыв';
            });
          }
        });
      }
    });
  }

  // Находим элемент с классом '.webinars-hero__slider-wrap'
  const webinarsHeroSliderEl = document.querySelector('.webinars-hero__slider-wrap');

  // Если элемент существует, вызываем функцию для инициализации слайдера
  if (webinarsHeroSliderEl) {
    webinarsHeroSlider(webinarsHeroSliderEl);
  }

  /**
   * Находим элемент с классом '.section-webinars__list', который содержит список вебинаров
   */
  const webinarsList = document.querySelector('.section-webinars__list');

  // Если элемент списка найден, продолжаем выполнение
  if (webinarsList) {
    // Преобразуем коллекцию детей списка (webinarsList.children) в массив для использования метода forEach
    const listChildren = Array.from(webinarsList.children);

    // Проверяем, есть ли в списке элементы
    if (listChildren.length) {
      // Проходим по каждому элементу списка
      listChildren.forEach(item => {
        // Находим кнопку "Показать все навыки/Скрыть все навыки" внутри каждого элемента
        const btnMore = item.querySelector('.item__results-more');

        // Добавляем обработчик события 'click' на кнопку
        btnMore.addEventListener('click', e => {
          e.preventDefault(); // Останавливаем стандартное поведение кнопки (например, если это была ссылка)

          // Переключаем класс 'show' у кнопки при каждом нажатии
          btnMore.classList.toggle('show');

          // Находим список с навыками внутри текущего элемента
          const resultsList = item.querySelector('.item__results-list');

          // Определяем, находится ли кнопка в состоянии "Показать" или "Скрыть"
          const isShow = btnMore.classList.contains('show');

          // Меняем текст кнопки в зависимости от состояния
          btnMore.textContent = isShow ? 'Скрыть все навыки' : 'Показать все навыки';

          // Если списка с результатами нет, завершаем выполнение функции
          if (!resultsList) {
            return;
          }

          // Находим все элементы списка внутри контейнера с результатами
          const listItems = resultsList.querySelectorAll('.list-item');

          // Если в списке нет элементов, завершаем выполнение
          if (listItems.length <= 0) {
            return;
          }

          // Проходим по каждому элементу списка навыков
          listItems.forEach(item => {
            // Если кнопка в состоянии "Показать", удаляем класс 'item_hidden' у всех элементов списка
            if (isShow) {
              item.classList.remove('item_hidden');
            }

            // Если кнопка в состоянии "Скрыть" и элемент не является видимым, добавляем класс 'item_hidden'
            if (!isShow && !item.classList.contains('item_visible')) {
              item.classList.add('item_hidden');
            }
          });
        });
      });
    }
  }

  /**
   * Функция для бесконечной горизонтальной прокрутки содержимого внутри оберток .running-line__wrap
   * @param {DOMHighResTimeStamp} timestamp - Время в миллисекундах, предоставленное requestAnimationFrame для анимации
   */
  function scrollHorizontally(timestamp) {
    // Получаем все обертки .running-line__wrap
    const parent = document.querySelector('.running-line');
    if (!parent) {
      return;
    }
    const child = parent.firstElementChild;
    const wrappers = document.querySelectorAll('.running-line__wrap');

    // Получаем ширину одной обертки (предполагаем, что все обертки имеют одинаковую ширину)
    const childWidth = child.offsetWidth / 2;

    // Вычисляем смещение (offset), которое должно увеличиваться постоянно для эффекта бесконечной прокрутки
    const offset = timestamp / 10 % childWidth; // Делим timestamp на 10, чтобы скорость прокрутки была медленнее

    // Прокручиваем каждую обертку по горизонтали на заданное смещение
    wrappers.forEach((wrapper, index) => {
      wrapper.style.transform = `translateX(-${offset}px)`;
    });

    // Повторяем анимацию, вызывая функцию снова на следующем кадре
    requestAnimationFrame(scrollHorizontally);
  }

  // Начинаем бесконечную горизонтальную прокрутку при загрузке страницы
  requestAnimationFrame(scrollHorizontally);
});