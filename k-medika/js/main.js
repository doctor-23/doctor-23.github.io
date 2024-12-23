/**
 * Анимирует постепенное исчезновение HTML-элемента с использованием эффекта уменьшения прозрачности (fade out).
 * По завершении анимации элемент будет скрыт (display: none).
 *
 * @param {HTMLElement} element - HTML-элемент, который необходимо анимировать.
 * @param {number} duration - Продолжительность анимации в миллисекундах.
 */
function fadeOut(element, duration) {
  // Устанавливаем начальное значение прозрачности элемента (по умолчанию 1 - полностью непрозрачный)
  var opacity = 1;

  // Вычисляем шаг изменения прозрачности.
  // Чем меньше значение delta, тем медленнее будет происходить изменение прозрачности.
  // duration / 10 - это количество шагов анимации, чтобы каждые 10 мс выполнять изменение прозрачности.
  var delta = 1 / (duration / 10);

  // Создаем таймер, который будет запускать функцию каждые 10 миллисекунд для изменения значения прозрачности
  var timer = setInterval(function () {
    // Уменьшаем текущую прозрачность на вычисленный шаг
    opacity -= delta;

    // Применяем новое значение прозрачности к стилю элемента
    element.style.opacity = opacity;

    // Если прозрачность становится равной или меньше 0 (полностью прозрачный элемент), останавливаем анимацию
    if (opacity <= 0) {
      // Очищаем таймер, чтобы остановить выполнение анимации
      clearInterval(timer);

      // Скрываем элемент, установив для него стиль display: 'none', чтобы он не занимал место на странице
      element.style.display = 'none';
    }
  }, 10); // Шаг анимации - каждые 10 миллисекунд вызывается изменение прозрачности
}

/**
 * Анимирует постепенное появление HTML-элемента с использованием эффекта увеличения прозрачности (fade in).
 * Элемент становится видимым (display: block) и постепенно достигает полной непрозрачности.
 *
 * @param {HTMLElement} element - HTML-элемент, который необходимо анимировать.
 * @param {number} duration - Продолжительность анимации в миллисекундах.
 */
function fadeIn(element, duration) {
  // Устанавливаем начальное значение прозрачности элемента на 0 (полностью прозрачный)
  var opacity = 0;

  // Вычисляем шаг изменения прозрачности. Чем меньше значение delta, тем медленнее будет происходить изменение.
  // duration / 10 - это количество шагов анимации (каждые 10 мс).
  var delta = 1 / (duration / 10);

  // Отображаем элемент (если он был скрыт) перед запуском анимации
  element.style.display = 'block';

  // Устанавливаем начальное значение прозрачности, чтобы элемент начинал появляться с прозрачности 0
  element.style.opacity = opacity;

  // Запускаем таймер для постепенного увеличения прозрачности элемента
  var timer = setInterval(function () {
    // Увеличиваем текущее значение прозрачности
    opacity += delta;

    // Применяем новое значение прозрачности к стилю элемента
    element.style.opacity = opacity;

    // Если прозрачность достигает 1 (полностью непрозрачный элемент), завершаем анимацию
    if (opacity >= 1) {
      // Останавливаем таймер, чтобы прекратить дальнейшее изменение прозрачности
      clearInterval(timer);

      // Для точности устанавливаем прозрачность в 1, чтобы предотвратить случайные погрешности
      element.style.opacity = 1;
    }
  }, 10); // Шаг анимации - каждые 10 миллисекунд
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
 * Функция для приведения числа в денежный формат
 * @param { Number } number
 * @returns {string}
 */
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function removeSpaces(str) {
  return str.replace(/\s+/g, '');
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
  return num.toLocaleString('ru-RU', {
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
function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Проверяем, начинается ли строка куки с заданным именем
    if (cookie.startsWith(`${cookieName}=`)) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return null; // Возвращаем null, если кука не найдена
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

/**
 * Разделяет текст элемента на два слова и вставляет между ними разрыв строки.
 *
 * @param {HTMLElement} item - Родительский элемент, внутри которого ищем нужный текст.
 * @param {string} className - Класс элемента, содержащего текст, который нужно разделить на две строки.
 */
const wordBreaking = (item, className) => {
  // Находим элемент с переданным классом внутри родительского элемента
  const title = item.querySelector(className);

  // Получаем текст внутри элемента и удаляем пробелы в начале и конце строки
  const text = title.textContent.trim();

  // Разделяем текст на массив слов по пробелам
  const words = text.split(' ');

  // Если в тексте ровно два слова, выполняем замену текста с разрывом строки
  if (words.length === 2) {
    // Вставляем разрыв строки между первым и вторым словом
    title.innerHTML = `${words[0]}<br>${words[1]}`;
  }
};

/**
 * Увеличивает/уменьшает число в указанном элементе до указанного конечного значения за указанное время.
 * @param {HTMLElement} targetElement - Элемент, в котором будет отображаться число.
 * @param {number} startValue - Начальное значение числа.
 * @param {number} endValue - Конечное значение числа.
 * @param {number} duration - Длительность анимации в миллисекундах.
 * @param {string} text - Дополнительный текст.
 */
function increaseDecreaseNumber(targetElement, startValue, endValue, duration, text) {
  // Получаем время начала анимации
  const startTime = performance.now();
  // Вычисляем разницу между начальным и конечным значениями числа
  const change = endValue - startValue;

  // Функция обновления числа для каждого кадра анимации
  function updateNumber(timestamp) {
    // Вычисляем прошедшее время с начала анимации
    const elapsed = timestamp - startTime;
    // Вычисляем прогресс анимации от 0 до 1
    const progress = Math.min(elapsed / duration, 1);
    // Вычисляем текущее значение числа с учетом прогресса
    const currentValue = Math.floor(startValue + change * progress);
    // Обновляем текстовое содержимое элемента
    if (!!text) {
      targetElement.textContent = formatNumber(currentValue) + ' ' + text;
    } else {
      targetElement.textContent = formatNumber(currentValue);
    }

    // Если анимация не завершена, вызываем функцию обновления снова через requestAnimationFrame
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      // Если прогресс достиг 1, значит анимация завершена, устанавливаем конечное значение числа
      if (!!text) {
        targetElement.textContent = formatNumber(endValue) + ' ' + text;
      } else {
        targetElement.textContent = formatNumber(endValue);
      }
    }
  }

  // Начинаем анимацию, вызывая функцию обновления первый раз через requestAnimationFrame
  requestAnimationFrame(updateNumber);
}

// клик вне элемента

function clickOutside({
  el,
  btn,
  className,
  removeBtnClassName = false
}) {
  var element = document.querySelector(el),
    button = document.querySelector(btn);
  document.addEventListener('click', e => {
    let target = e.target;
    let itsEl = target == element || element.contains(target);
    let its_btn = target === button || target.closest(btn) === button;
    let its_el_is_open = element.classList.contains(className);
    if (!itsEl && !its_btn && its_el_is_open) {
      element.classList.toggle(className);
      removeBtnClassName && button.classList.toggle(className);
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
    this.method = method;
    this.select = options.selectElement;
    this.show = options.show || 6;
    this.icon = options.icon || null;
    this.isMobile = document.documentElement.clientWidth < 575.98;

    // Если метод инициализации равен 'init', инициализируем пользовательский выпадающий список
    if (this.method === 'init') {
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
        if (this.method === 'reinit') {
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
    const customSelect = this.createCustomSelect(this.select);

    // Заменяем оригинальный выпадающий список кастомным
    this.replaceSelectWithCustom(customSelect);

    // Назначаем обработчики событий для кастомного выпадающего списка
    this.customSelectEvents(customSelect);
    customSelect.classList.add('initialized');
  }

  /**
   * Создает кастомный выпадающий список на основе переданного оригинального элемента select.
   * @param {HTMLElement} select - HTML-элемент, представляющий оригинальный выпадающий список.
   * @returns {HTMLElement} - HTML-элемент, представляющий кастомный выпадающий список.
   */
  createCustomSelect(select) {
    // Создаем новый div и копируем классы из оригинального селекта
    const selectClasses = Array.from(select.classList);
    const selectAttributes = select.attributes;
    const customSelect = document.createElement('div');
    selectClasses.forEach(className => customSelect.classList.add(className));
    customSelect.classList.add('custom-select');
    if (select.required) {
      customSelect.classList.add('required');
    }

    // Перебираем все атрибуты
    for (let i = 0; i < selectAttributes.length; i++) {
      const attr = selectAttributes[i];
      if (attr.name !== 'class' && attr.name !== 'required' && attr.name !== 'name') {
        customSelect.setAttribute(attr.name, attr.value);
      }
    }
    // Создаем заголовок и содержимое списка выбора
    const selectTitle = this.createCustomSelectTitle(customSelect);
    const selectContent = this.createCustomSelectContent(customSelect);

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
      // span.textContent = option.textContent.trim();
      // console.log(option)
      span.innerHTML = option.innerHTML;

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
    // console.log(labelHeight)
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
    const selectAttributes = customSelect.attributes;
    let selectClasses = Array.from(customSelect.classList);

    // Создаем элемент select
    let defaultSelect = document.createElement('select');

    // Получаем имя оригинального селекта
    let selectName = this.options[0].name;

    // Добавляем классы к созданному селекту
    selectClasses.forEach(className => defaultSelect.classList.add(className));
    defaultSelect.classList.remove('active', 'custom-select', 'required', 'initialized');
    if (customSelect.classList.contains('required')) {
      defaultSelect.required = true;
    }

    // Перебираем все атрибуты
    for (let i = 0; i < selectAttributes.length; i++) {
      const attr = selectAttributes[i];
      if (attr.name !== 'class') {
        defaultSelect.setAttribute(attr.name, attr.value);
      }
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
  let elCheck; // Переменная для хранения результата валидации
  const l = el.value.length; // Длина значения в поле ввода
  const parent = el.parentElement;
  const msgHidden = () => {
    parent.querySelector('.msg-error').style.display = 'none'; // Скрытие сообщения об ошибке
    parent.querySelector('.msg-error-not-apply').style.display = 'none'; // Скрытие сообщения о том, что промокод не применен
    parent.querySelector('.msg-empty').style.display = 'none'; // Скрытие сообщения о том, что промокод некорректно введен
  };
  if (isRequired) {
    // Проверка длины значения в поле ввода
    if (l > 2) {
      // Если длина значения больше 2

      elCheck = true; // Установка результата валидации в true
      msgHidden();
      el.classList.remove('validate'); // Удаление класса "validate" у поля ввода
    } else {
      // Если длина значения меньше 2
      elCheck = false; // Установка результата валидации в false
      el.classList.add('validate'); // Добавление класса "validate" к полю ввода
      msgHidden();
      parent.querySelector('.msg-empty').style.display = 'block'; // Отображение сообщения о том, что промокод некорректно введен
    }
  } else {
    elCheck = true; // Установка результата валидации в true
    el.classList.remove('validate'); // Удаление класса "validate" у поля ввода
    msgHidden();
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
    this.el = typeof selector === 'string' ? document.querySelector(selector) : selector;
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
/**
 * Класс HandlerForm обрабатывает формы, выполняя валидацию полей перед отправкой.
 */
class HandlerForm {
  /**
   * Конструктор класса.
   * @param {HTMLElement} form - HTML-форма, которую необходимо обработать.
   * @param {boolean} autoSubmit - HTML-форма, которую необходимо обработать.
   * @param {boolean} formReset - HTML-форма, которую необходимо обработать.
   */
  constructor({
    form,
    autoSubmit = false,
    formReset = true
  }) {
    // Если у формы есть класс 'not-valid', устанавливаем this.form как null, что отменяет дальнейшую инициализацию
    this.form = form.classList.contains('not-valid') ? null : form;
    this.autoSubmit = autoSubmit;
    this.reset = formReset;

    // Объект с функциями валидации для различных типов полей. Каждая функция проверяет корректность ввода в зависимости от типа поля.
    this.validationFunctions = {
      name: formNameValid,
      // Валидация имени
      phone: formPhoneValid,
      // Валидация телефона
      email: formEmailValid,
      // Валидация электронной почты
      index: formIndexValid,
      // Валидация почтового индекса
      address: formAddressValid,
      // Валидация адреса
      agreement: checkboxValid,
      // Валидация чекбокса согласия
      textarea: formTextareaValid,
      // Валидация текстового поля
      promo: formPromocodeValid,
      // Валидация промокода
      selects: formCustomSelectValid // Валидация настраиваемого select'а
    };

    // Массив полей, которые нужно исключить из основной валидации.
    this.excludeFields = ['selects', 'inputs', 'submit', 'promoDelete', 'promoApply', 'textarea', 'agreement', 'subscribing'];

    // Массив полей, которые являются чекбоксами и требуют особого подхода в валидации.
    this.checkboxFields = ['subscribing', 'agreement', 'soglasie'];

    // Если форма не прошла проверку в конструкторе, дальнейшая обработка не выполняется
    if (this.form === null) {
      return;
    }

    // Получаем все поля формы для дальнейшей валидации и обработки
    this.fields = this.formFields(form);

    // Инициализируем валидацию и обработчики для формы
    this.init(this.form);
  }

  /**
   * Метод инициализации формы.
   * @param {HTMLElement} form - HTML-форма, которая будет инициализирована.
   */
  init(form) {
    if (this.reset) {
      // Сбрасываем форму, чтобы все поля вернулись к исходным значениям
      form.reset();
    }
    // Проверяем, не была ли форма уже проинициализирована (если у формы есть класс 'on-validate', она уже обрабатывается).
    if (!form.classList.contains('on-validate')) {
      const fields = this.fields;
      const submit = fields.submit;

      // Добавляем обработчики валидации для каждого поля
      this.validateFields(fields, this.fieldAddHandle);
      if (this.autoSubmit) {
        this.formAutoSubmit(form, fields);
      } else {
        // Удаляем все существующие обработчики события 'click' у кнопки отправки, если они были добавлены ранее
        submit.onclick = null;

        // Добавляем новый обработчик на кнопку отправки формы
        submit.onclick = event => this.submitHandler(event, form, fields);
        // Добавляем класс 'on-validate', чтобы пометить форму как проинициализированную
        form.classList.add('on-validate');
      }
    }
  }
  /**
   * Обработчик отправки формы. Предотвращает стандартное действие (отправку формы)
   * и вызывает функцию обработки и валидации полей формы.
   *
   * @param {Event} event - Событие отправки формы.
   * @param {HTMLElement} form - HTML-форма, которая отправляется.
   * @param {Object} fields - Объект, содержащий поля формы, которые были собраны и готовы для валидации.
   */
  submitHandler(event, form, fields) {
    // Предотвращаем стандартное действие браузера (отправку формы)
    event.preventDefault();

    // Вызываем функцию для отправки формы с валидированными полями
    this.formSubmit(form, fields);
  }

  /**
   * Собирает все поля формы в объект для дальнейшей обработки и валидации.
   *
   * @param {HTMLElement} form - HTML-форма, из которой извлекаются поля.
   * @returns {Object} fields - Объект, содержащий все нужные поля формы.
   */
  formFields(form) {
    // Создаем объект для хранения полей формы
    const fields = {};

    /**
     * Функция для добавления поля в объект, если соответствующий элемент существует в DOM.
     *
     * @param {string} name - Имя поля, которое будет использоваться как ключ в объекте fields.
     * @param {string} selector - CSS-селектор для поиска элемента формы.
     */
    const addFieldIfExist = (name, selector) => {
      const element = form.querySelector(selector); // Ищем элемент по селектору
      if (element) {
        fields[name] = element; // Если элемент найден, добавляем его в объект fields
      }
    };

    // Добавление различных полей в объект fields с проверкой на существование элементов
    addFieldIfExist('name', '.input-name'); // Поле имени
    addFieldIfExist('phone', '.input-phone'); // Поле телефона
    addFieldIfExist('email', '.input-email'); // Поле email
    addFieldIfExist('index', '.input-index'); // Поле индекса
    addFieldIfExist('address', '.input-address'); // Поле адреса
    addFieldIfExist('promo', '.input-promocode'); // Поле промокода
    addFieldIfExist('agreement', 'input[type="checkbox"][name="agreement"]'); // Чекбокс согласия
    addFieldIfExist('subscribing', 'input[type="checkbox"][name="permission_mailing"]'); // Чекбокс подписки на рассылку
    addFieldIfExist('promoApply', '.promocode__btn_apply'); // Кнопка применения промокода
    addFieldIfExist('promoDelete', '.promocode__btn_delete'); // Кнопка удаления промокода
    addFieldIfExist('textarea', 'textarea'); // Текстовое поле
    addFieldIfExist('submit', 'input[type="submit"]'); // Кнопка отправки (input)
    addFieldIfExist('submit', 'button[type="submit"]'); // Кнопка отправки (button)

    // Сбор всех input-элементов (кроме submit, hidden, radio и checkbox) и textarea
    fields.inputs = form.querySelectorAll('input:not([type="submit"]):not([type="hidden"]):not([type="radio"]):not([type="checkbox"]), textarea');

    // Сбор всех элементов select с кастомным дизайном
    fields.selects = form.querySelectorAll('.custom-select');

    // Возвращаем объект fields, содержащий все собранные поля
    return fields;
  }

  /**
   * Функция для валидации полей формы. Добавляет обработчики событий для валидации
   * каждого поля на основе переданных параметров и типа поля.
   *
   * @param {Object} fields - Объект, содержащий поля формы. Каждое поле представлено как свойство объекта.
   * @param {Function} handler - Функция-обработчик, которая добавляет необходимые события для валидации.
   * @returns {Object} validationResult - Объект с результатами валидации полей формы. Содержит информацию о каждом валидированном поле.
   */
  validateFields(fields, handler) {
    const excludeFields = this.excludeFields; // Поля, которые не нужно валидировать
    const checkboxFields = this.checkboxFields; // Поля типа чекбоксов
    const validationResult = {}; // Объект для хранения результатов валидации

    // Проходим по всем полям формы
    for (const key in fields) {
      const field = fields[key]; // Текущее поле формы
      this.getFieldsProps({
        key,
        validationResult,
        excludeFields,
        checkboxFields,
        handler,
        field
      });
    }
    return validationResult; // Возвращаем результаты валидации
  }
  getFieldsProps(props) {
    const {
      key,
      validationResult,
      excludeFields,
      checkboxFields,
      handler,
      field
    } = props;
    const validate = this.validationFunctions[key] || new Function(); // Функция валидации для данного поля, если не найдена, используем пустую функцию
    let result = undefined; // Результат валидации текущего поля

    // Параметры для передачи в функцию-обработчик валидации
    const myProps = {
      listener: 'blur',
      // По умолчанию, слушаем событие потери фокуса (blur)
      field: field,
      // Текущее поле формы
      validate: validate,
      // Функция валидации для этого поля
      isMessage: false,
      // Специфическая настройка для текстового поля (textarea)
      messageLength: 100,
      // Максимальная длина сообщения
      isSelect: false // Специфическая настройка для кастомных select-элементов
    };

    // Проверка, не является ли поле исключением для валидации
    if (!excludeFields.includes(key)) {
      // Передаем параметры в обработчик валидации
      result = handler(myProps);
    }

    // Если поле является чекбоксом, меняем событие на 'change'
    if (checkboxFields.includes(key)) {
      myProps.listener = 'change';
      result = handler(myProps);
    }

    // Для поля типа textarea включаем специальную обработку сообщений
    if (key === 'textarea') {
      myProps.isMessage = true;
      result = handler(myProps);
    }

    // Для поля типа input promo делаем обработчик keyup
    if (key === 'promo') {
      myProps.listener = 'keyup';
      result = handler(myProps);
    }

    // Для select-элементов с кастомной стилизацией
    if (key === 'selects' && field.length > 0) {
      myProps.isSelect = true;
      result = handler(myProps);
    }

    // Если обработчик вернул результат, добавляем его в объект результатов
    if (typeof result !== 'undefined') {
      Object.assign(validationResult, result); // Добавляем результат в объект validationResult
    }
  }

  /**
   * Функция для добавления обработчика события к полю формы, основанного на типе поля и его валидации.
   * Добавляет обработчики для событий потери фокуса ('blur') или изменения ('change') для полей формы.
   *
   * @param {Object} props - Объект с параметрами для обработчика.
   * @param {string} props.listener - Тип события, на которое нужно реагировать (например, 'blur' или 'change').
   * @param {HTMLElement | NodeList} props.field - HTML-элемент или коллекция элементов (NodeList), к которым будет привязан обработчик.
   * @param {Function} props.validate - Функция для валидации поля. Эта функция принимает поле и опциональные параметры, такие как флаг обязательности и длина сообщения.
   * @param {boolean} [props.isMessage=false] - Флаг, указывающий, нужно ли выводить сообщение об ошибке для поля (например, для текстовых полей).
   * @param {number} [props.messageLength=100] - Максимальная длина сообщения об ошибке (применимо для полей, где выводятся ошибки).
   * @param {boolean} [props.isSelect=false] - Флаг, указывающий, что поле является выпадающим списком (select) и требует особого подхода.
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

    // Проверка, является ли поле выпадающим списком (select)
    if (isSelect) {
      field.forEach(select => {
        const isCustom = select.classList.contains('custom-select'); // Определяем, кастомный ли select
        const isRequired = isCustom ? select.classList.contains('required') : select.required; // Проверка, является ли select обязательным

        // Если это кастомный select
        if (isCustom) {
          const options = select.querySelectorAll('.select-content__wrapper'); // Получаем все опции кастомного select
          // Добавляем обработчики кликов для каждой опции
          options.forEach(option => {
            option.addEventListener('click', event => {
              validate(select, isRequired); // Валидируем поле при выборе опции
            });
          });
        }
      });
    } else {
      // Для всех остальных полей добавляем обработчик на событие (blur или change)
      field.addEventListener(listener, event => {
        const isRequired = field.classList.contains('required'); // Проверяем, является ли поле обязательным

        // Если нужно выводить сообщение (например, для textarea)
        if (isMessage) {
          validate(field, isRequired, messageLength); // Валидируем поле с указанием максимальной длины сообщения
          return;
        }
        validate(field, isRequired); // Валидируем поле без сообщения
      });
    }
  }

  /**
   * Функция для проверки и валидации полей формы при потере фокуса или изменении поля.
   * В зависимости от типа поля (input, textarea, select) применяются различные параметры валидации.
   *
   * @param {Object} props - Объект с параметрами для валидации и обработчика события.
   * @param {HTMLElement | NodeList} props.field - HTML-элемент (input, textarea, select) или коллекция элементов (NodeList), которые нужно валидировать.
   * @param {Function} props.validate - Функция для валидации поля. Эта функция принимает поле, флаг обязательности и длину сообщения (если применимо).
   * @param {boolean} [props.isMessage=false] - Флаг, указывающий, что поле выводит сообщение об ошибке (например, textarea).
   * @param {number} [props.messageLength=100] - Максимальная длина сообщения об ошибке (применимо для полей с сообщениями об ошибке).
   * @param {boolean} [props.isSelect=false] - Флаг, указывающий, что поле является выпадающим списком (select) и требует особого подхода.
   *
   * @returns {Object} - Объект с результатами валидации полей. Ключи - это имена полей, значения - результаты валидации.
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
    const validationResult = {}; // Объект для хранения результатов валидации
    // Проверка на то, является ли поле выпадающим списком (select)
    if (isSelect) {
      field.forEach(select => {
        const isCustom = select.classList.contains('custom-select'); // Проверка, кастомный ли это select
        const isRequired = isCustom ? select.classList.contains('required') : select.required; // Проверка обязательности поля

        if (isCustom) {
          const option = select.querySelector('input'); // Получаем input внутри кастомного select
          const selectName = option.name; // Имя поля select

          // Валидируем поле и записываем результат в объект validationResult
          validationResult[selectName] = validate(select, isRequired);
        }
      });
    } else {
      // Для остальных полей (input, textarea)
      const isRequired = field.classList.contains('required'); // Проверка, является ли поле обязательным
      const fieldName = field.name; // Получаем имя поля

      // Проверка, нужно ли выводить сообщение для поля (например, textarea)
      if (isMessage) {
        validationResult[fieldName] = validate(field, isRequired, messageLength); // Валидируем с указанием длины сообщения
      } else {
        validationResult[fieldName] = validate(field, isRequired); // Валидируем без сообщения
      }
    }
    return validationResult; // Возвращаем объект с результатами валидации
  }

  /**
   * Функция для обработки и отправки формы.
   * Выполняет валидацию полей, собирает значения полей и отправляет данные, если ошибок валидации нет.
   *
   * @param {HTMLFormElement} form - Форма, которую нужно отправить.
   * @param {Object} fields - Объект, содержащий все поля формы.
   */
  formSubmit(form, fields) {
    // Выполняем валидацию всех полей формы и получаем результат.
    // Валидация выполняется через метод validateFields, который проверяет поля и возвращает объект с результатами.
    const validation = this.validateFields(fields, this.fieldCheckValidation);
    // Проверяем, есть ли ошибки в результате валидации.
    // validationErrors возвращает объект с найденными ошибками валидации.
    const validationErrors = this.validationErrors(validation);

    // Получаем значения всех полей, которые прошли валидацию, с помощью метода getFieldsValues.
    const fieldsValues = this.getFieldsValues(validation);

    // Если объект validationErrors не пустой, значит есть ошибки, и мы прекращаем дальнейшую обработку.
    if (JSON.stringify(validationErrors) !== '{}') {
      return; // Прерываем отправку формы, если найдены ошибки
    }

    // Если ошибок нет, выводим значения полей в консоль (для отладки) и отправляем форму.
    // console.log(fieldsValues);
    const formData = new FormData(form);
    formData.append('isAutoSubmit', this.autoSubmit);

    // Создаем новый экземпляр класса FormSender, который отправит данные формы на сервер.
    new FormSender(this.form, fieldsValues, formData);
  }
  formAutoSubmit(form, fields) {
    const requiredFields = form.querySelectorAll('.required, [required]');
    const excludeFields = this.excludeFields; // Поля, которые не нужно валидировать
    const checkboxFields = this.checkboxFields; // Поля типа чекбоксов
    const validationResult = {}; // Объект для хранения результатов валидации
    const handler = this.fieldCheckValidation;
    const checkOnChange = event => {
      const field = event.target;
      this.getFieldsProps({
        key: field.name,
        validationResult,
        excludeFields,
        checkboxFields,
        handler,
        field
      });
      if (Object.keys(validationResult).length === requiredFields.length) {
        this.formSubmit(form, fields);
      }
    };
    requiredFields.forEach(field => {
      field.addEventListener('change', checkOnChange);
      field.addEventListener('blur', checkOnChange);
    });
  }

  /**
   * Функция для проверки полей на наличие ошибок валидации.
   * Проходит по каждому полю и проверяет, если ли у поля свойство `elCheck` и является ли оно ложным (ошибка валидации).
   *
   * @param {Object} fields - Объект, содержащий все поля формы.
   * @returns {Object} - Объект, содержащий только те поля, которые не прошли проверку валидации (с ошибками).
   */
  validationErrors(fields) {
    const checkValues = {};

    // Перебираем все ключи в объекте полей формы
    for (let key in fields) {
      const field = fields[key];
      // Проверяем, существует ли свойство 'elCheck' у поля и имеет ли оно значение false (невалидное поле)
      if ('elCheck' in field && !field.elCheck) {
        // Если поле не прошло валидацию, добавляем его в объект ошибок
        checkValues[key] = field.elCheck;
      }
    }
    return checkValues; // Возвращаем объект с полями, которые не прошли проверку
  }

  /**
   * Функция для извлечения значений всех полей формы.
   * Проходит по каждому полю формы и собирает его значение.
   *
   * @param {Object} fields - Объект, содержащий все поля формы.
   * @returns {Object} - Объект, содержащий названия полей и их значения.
   */
  getFieldsValues(fields) {
    const values = {};

    // Перебираем все ключи в объекте полей формы
    for (let key in fields) {
      const field = fields[key];
      // Проверяем, содержит ли поле свойство 'value', чтобы получить его значение
      if ('value' in field) {
        values[key] = field.value; // Сохраняем значение поля в объекте
      }
    }
    return values; // Возвращаем объект с полями и их значениями
  }
}

/**
 * Создает экземпляр класса для обработки отправки формы.
 * @param {HTMLElement} form - HTML-элемент формы.
 * @param {object} data - Данные для отправки с формой.
 */
class FormSender {
  constructor(form, data, formData) {
    this.form = form; // HTML-элемент формы
    this.data = data; // Данные для отправки с формой
    this.formData = formData || {};
    this.props = {
      // Создание объекта с параметрами для отправки запроса
      data: this.data,
      // Данные для отправки с формой
      form: this.form // HTML-элемент формы
    };

    // Инициализация обработчика формы
    this.init(this.form);
  }

  /**
   * Инициализирует обработчик формы в зависимости от ее идентификатора.
   * @param {HTMLElement} form - HTML-элемент формы.
   */
  init(form) {
    let myProps;
    // URL для отправки запроса с проверкой существования переменной
    this.props.url = typeof k_medika !== 'undefined' && k_medika.ajaxurl ? k_medika.ajaxurl : 'https://jsonplaceholder.typicode.com/posts';
    if (JSON.parse(this.formData.get('isAutoSubmit'))) {
      myProps = this.getFormProps(this.props, this.formData);
      myProps.action = 'crm_send';

      // console.log('myProps', myProps);

      // Получение функций обратного вызова для обработки результатов отправки формы обратной связи
      Object.assign(myProps, this.autoSubmit());
      this.sendFormPost(myProps);
      return;
    }
    if (form.id) {
      // Определение действий в зависимости от идентификатора формы
      switch (form.id) {
        case 'name':
          myProps = this.getFormProps(this.props, this.formData);
          myProps.action = '#'; // Установка действия для формы
          // Получение функций обратного вызова для обработки результатов отправки формы бронирования
          Object.assign(myProps, this.defaultForm());
          // Отправка формы методом POST с использованием функций обратного вызова
          this.sendFormPost(myProps);
          break;
        default:
          myProps = this.getFormProps(this.props, this.formData);
          myProps.action = 'base_form_request'; // Установка действия для формы
          // Получение функций обратного вызова для обработки результатов отправки формы бронирования
          Object.assign(myProps, this.defaultForm());
          // Отправка формы методом POST с использованием функций обратного вызова
          this.sendFormPost(myProps);
      }
    } else {
      // Получаем класс формы
      const formClass = form.classList.contains('feedback__form') ? 'feedback_form' : 'default_form';
      switch (formClass) {
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
  defaultForm() {
    /**
     * Функция вызывается перед отправкой запроса и добавляет класс 'loader' к элементу body для отображения индикатора загрузки.
     */
    const beforeSend = () => document.body.classList.add('loader');

    /**
     * Функция вызывается при успешном ответе от сервера и обрабатывает полученные данные.
     * @param {object} response - Ответ от сервера.
     * @param {HTMLElement} form - Форма, связанная с запросом.
     */
    const success = (response, form) => {
      const {
        success,
        data
      } = response;
      const modalClosed = form.closest('.modal');
      const modalId = success ? 'modal_success' : 'modal_error';
      const modal = document.getElementById(modalId);
      if (modalClosed) fadeOut(form.closest('.modal'), 0);
      modal.querySelector('.modal__description p').innerHTML = '';
      modal.querySelector('.modal__description p').innerHTML = data.message;
      form.reset();
      fadeIn(modal, 215);
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
    // console.log(props)
    let {
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
    if (props instanceof FormData) {
      const formDataEntries = Array.from(props.entries());
      // console.log(formDataEntries)

      data = formDataEntries.reduce((acc, [key, value]) => {
        if (!acc[key]) {
          acc[key] = value;
        } else {
          // Для ключей с несколькими значениями сохраняем их как массив
          acc[key] = Array.isArray(acc[key]) ? [...acc[key], value] : [acc[key], value];
        }
        return acc;
      }, {});
    }
    /**
     * Тип формы, с которой была отправлена заявка
     * Локально для проекта
     */
    // data.requestType = props.requestType;

    // Создаем объект FormData и добавляем в него данные из requestData
    // Формируем объект данных для отправки на сервер, включая действие (action), если оно указано
    const requestData = {
      action,
      ...data
    };
    const formData = new FormData();
    for (const key in requestData) {
      formData.append(key, requestData[key]);
    }

    // console.log(formData)
    // Параметры запроса
    const requestOptions = {
      method: 'POST',
      body: formData
    };

    // Вызываем функцию beforeSend перед отправкой запроса
    beforeSend(form, formData);
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
      onComplete(form);
    });
  }
  getFormProps(props, formData) {
    const data = {};
    for (let [key, value] of formData.entries()) {
      // Добавление в data
      if (value instanceof File) {
        data[key] = value; // Сохраняем файл как есть
      } else if (value && value.length > 0) {
        // Сохраняем строковые значения
        if (key in data) {
          if (!Array.isArray(data[key])) {
            // Преобразуем в массив, если это не массив
            data[key] = [data[key]];
          }
          data[key].push(value);
        } else {
          data[key] = value;
        }
      }
    }

    // console.log('data', data);

    props.data = data;

    // console.log('props', props)

    return props;
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
      value = values['mobile'];
    }
    return value;
  }

  // Растягиваем основной элемент main между заголовком и подвалом
  const headerHeight = header.offsetHeight; // Получаем высоту заголовка
  const footerHeight = footer.offsetHeight; // Получаем высоту подвала
  main.style.minHeight = `calc(100vh - (${headerHeight}px + ${footerHeight}px))`; // Устанавливаем минимальную высоту основного элемента main

  // шапка
  /**
  * Функция для управления состоянием меню в зависимости от прокрутки страницы.
  *
  * @param {Object} item - Объект window, который содержит информацию о текущей прокрутке страницы.
  * @param {Boolean} onScroll - Флаг, указывающий, что вызвана функция при скролле.
  */
  function stickyMenu(item, onScroll = false) {
    // Получаем первый секционный элемент внутри main
    const hero = document.body.querySelector('main > section');
    // Получаем высоту этого секционного элемента
    const heroH = hero.offsetHeight;
    // Получаем элемент с id 'header'
    const header = document.getElementById('header');
    // Получаем фиксированное меню внутри header
    const headerFixed = header.querySelector('.header__fixed');
    // Получаем основное меню внутри header
    const headerMain = header.querySelector('.header__main');

    // Если текущая прокрутка страницы больше высоты секционного элемента
    if (item.pageYOffset > heroH) {
      // Добавляем класс nav_scroll к body
      document.body.classList.add('nav_scroll');
      // Меняем классы для анимации фиксированного меню
      headerFixed.classList.remove('slideInLeft');
      headerFixed.classList.add('slideOutLeft');

      // Меняем классы для анимации основного меню
      headerMain.classList.add('slideInDown');
      headerMain.classList.remove('slideOutDown');
    } else {
      // Если прокрутка меньше высоты секционного элемента, удаляем класс nav_scroll у body
      document.body.classList.remove('nav_scroll');

      // Меняем классы для анимации фиксированного меню
      headerFixed.classList.remove('slideOutLeft');
      headerFixed.classList.add('slideInLeft');
      headerMain.classList.add('slideOutUp');
      headerMain.classList.remove('slideInDown');
    }
  }
  const headerSearchBtn = document.getElementById('header_search');
  if (headerSearchBtn) {
    const modalSearch = document.getElementById('modal_search');
    const modalSearchContent = modalSearch.querySelector('.modal__content');
    headerSearchBtn.addEventListener('click', e => {
      modalSearch.style.opacity = 1;
      modalSearch.style.display = 'block';
      document.body.classList.add('no-scroll');
      setTimeout(() => {
        modalSearchContent.classList.add('slideInDown');
      }, 300);
    });

    // modalSearch.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     modalSearchContent.classList.remove('slideInUp');
    //     document.body.classList.remove('no-scroll');
    //     modalSearchContent.classList.add('slideOutUp');
    //
    //     setTimeout(() => {
    //         modalSearch.style.opacity = 0;
    //         modalSearchContent.classList.remove('slideOutUp');
    //     }, 300);
    // });
  }

  // Вызываем функцию stickyMenu при загрузке страницы с текущим объектом window
  // stickyMenu(window);

  // Добавляем обработчик события прокрутки страницы
  // window.addEventListener('scroll', function () {
  //     // Вызываем функцию stickyMenu при каждом событии прокрутки
  //     stickyMenu(this, true);
  // });

  // Добавляем обработчик события клика на документ
  // document.addEventListener('click', e => {
  //     // Получаем элемент фиксированного меню
  //     const element = document.querySelector('.header__fixed');
  //     // Получаем кнопку гамбургера
  //     const button = document.querySelector('.header__hamburger');
  //
  //     // Определяем на какой элемент был клик
  //     const target = e.target;
  //     // Проверяем, был ли клик на фиксированное меню или внутри него
  //     const itsEl = target === element || element.contains(target);
  //     // Проверяем, был ли клик на кнопку гамбургера
  //     const itsHamburger = target === button;
  //     // Проверяем, открыт ли элемент (имеет ли он класс open)
  //     const isElementOpen = button.classList.contains('open');
  //
  //     // Если клик был не на фиксированное меню, не на кнопку гамбургера и меню открыто
  //     if (!itsEl && !itsHamburger && isElementOpen) {
  //         // Убираем класс no-scroll у body (возвращаем прокрутку страницы)
  //         document.body.classList.remove('no-scroll');
  //         // Убираем класс open у кнопки гамбургера
  //         button.classList.remove('open');
  //         // Добавляем класс close у кнопки гамбургера
  //         button.classList.add('close');
  //         // Меняем классы для анимации фиксированного меню
  //         element.classList.remove('slideInLeft');
  //         element.classList.add('slideOutLeft');
  //     }
  // });

  // плавная прокуртка
  // Функция для плавной прокрутки к якорю
  function smoothScroll(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    // Получаем ID якоря из атрибута data-href или href
    const targetId = this.getAttribute('data-href') || this.getAttribute('href');
    if (targetId === '#') {
      console.error('В ссылке используется заглушка');
      return;
    }
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
  document.addEventListener('click', function (e) {
    const target = e.target;
    const isOverlay = target.classList.contains('modal');
    const isCloseButton = target.classList.contains('modal__close') || target.closest('.modal__close');
    const isOpenButton = target.dataset.modal || target.closest('button') && target.closest('button').dataset.modal;
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
    if (isOpenButton) {
      const button = target.dataset.modal ? target : target.closest('button');
      const modalId = button.dataset.modal;
      const autoSubmit = !!parseInt(button.dataset.autoSubmit) || false;
      const dataPostType = button.dataset.type;
      const dataProductId = button.dataset.product;
      if (modalId) {
        const modal = document.getElementById(modalId);
        const form = modal.querySelector('form');
        const selects = modal.querySelectorAll('.custom-select');
        const postTypeHidden = form.querySelector('input[type="hidden"][name="post_type"]');
        const productIdHidden = form.querySelector('input[type="hidden"][name="product_id"]');
        postTypeHidden.value = dataPostType ? dataPostType : '';
        productIdHidden.value = dataProductId ? dataProductId : '';
        fadeIn(modal, 215);
        document.body.classList.add('no-scroll');
        if (selects.length > 0) {
          selects.forEach(select => {
            new CustomSelect('reinit', {
              selectElement: select
            });
          });
        }
        if (form) {
          new HandlerForm({
            form,
            autoSubmit
          });
        }
      }
    }
  });
  const hamburger = header.querySelector('.header__hamburger');
  if (hamburger) {
    const hamburgerClose = header.querySelector('.header__close');
    const hamburgerWrap = header.querySelector('.header__hamburger-wrap');
    const hamburgerContent = header.querySelector('.header__hamburger-content');
    const headerBtn = header.querySelector('.header__btn');
    const closeHamburger = event => {
      if (!hamburger) {
        console.error('Элемент hamburger отсутствует!');
        return;
      }
      hamburgerContent.classList.add('slideOutRight');
      hamburgerContent.classList.remove('slideInRight');
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        hamburgerWrap.classList.remove('open');
      }, 700);
    };
    const stopPropagation = event => {
      event.stopPropagation();
    };
    // Проверить, существует ли элемент 'header__hamburger'
    // Добавить обработчик события 'click' к элементу 'header__hamburger'
    hamburger.addEventListener('click', event => {
      // Предотвратить стандартное поведение события (например, переход по ссылке)
      event.preventDefault();

      // Добавить класс 'no-scroll' к элементу 'body', чтобы предотвратить прокрутку страницы
      document.body.classList.add('no-scroll');
      hamburgerWrap.classList.add('open');
      setTimeout(() => {
        hamburgerContent.classList.remove('slideOutRight');
        hamburgerContent.classList.add('slideInRight');
      }, 200);
    });
    hamburgerClose.addEventListener('click', closeHamburger);
    hamburgerWrap.addEventListener('click', closeHamburger);
    hamburgerContent.addEventListener('click', stopPropagation);
    headerBtn.addEventListener('click', function (event) {
      const target = event.target;
      const button = target.dataset.modal ? target : target.closest('button');
      const modalId = button.dataset.modal;
      const autoSubmit = !!parseInt(button.dataset.autoSubmit) || false;
      if (modalId) {
        const modal = document.getElementById(modalId);
        const form = modal.querySelector('form');
        const selects = modal.querySelectorAll('.custom-select');
        fadeIn(modal, 215);
        document.body.classList.add('no-scroll');
        if (selects.length > 0) {
          selects.forEach(select => {
            new CustomSelect('reinit', {
              selectElement: select
            });
          });
        }
        if (form) {
          new HandlerForm({
            form,
            autoSubmit
          });
        }
      }
    });
  }

  /**
   * инициализация аккордеона
   */

  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length > 0) {
    accordions.forEach(accordion => {
      const myAccordion = new Accordion(accordion, false);
    });
  }

  /**
   * инициализация масок
   */
  const inputsPhone = document.querySelectorAll('.input-phone');
  const inputsEmail = document.querySelectorAll('.input-email');
  if (inputsPhone.length > 0) {
    inputsPhone.forEach(input => Inputmask("+7 (999) 999-99-99").mask(input));
  }
  if (inputsEmail.length > 0) {
    inputsEmail.forEach(input => Inputmask('email').mask(input));
  }

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
  const customSelects = document.querySelectorAll('.custom-select');
  if (customSelects.length > 0) {
    customSelects.forEach(select => {
      new CustomSelect('init', {
        selectElement: select
      });
    });
  }

  /**
   * Инит формы валидации обратной связи
   * 1 - форма внизу страницы почти на каждой страницы
   * 2 - форма присутствует только на главной странице
   * 3 - форма на страницах услуг и оборудования
   */

  const feedbackForm = document.getElementById('feedback_form');
  const indexFeedbackForm = document.getElementById('index_feedback_form');
  const sectionFeedbackForm = document.getElementById('section_feedback_form');
  const subscribeForm = document.getElementById('footer_subscribe');
  if (feedbackForm) new HandlerForm({
    form: feedbackForm
  });
  if (indexFeedbackForm) new HandlerForm({
    form: indexFeedbackForm
  });
  if (sectionFeedbackForm) new HandlerForm({
    form: sectionFeedbackForm
  });
  if (subscribeForm) new HandlerForm({
    form: subscribeForm
  });

  /**
   * Слайдер портфолио
   */

  const portfolioSliderWrap = document.querySelector('.portfolio__slider-wrap');
  if (portfolioSliderWrap) {
    portfolioSlider(portfolioSliderWrap);
  }

  /**
   * Слайдер в блоке "Наша команда" на странице "о компании"
   */

  const teamSliderWrap = document.querySelector('.team__wrapper');
  if (teamSliderWrap) {
    teamSlider(teamSliderWrap);
  }

  /**
   * Кнопка "показать еще" на странице подкатегории оборудования
   */

  const equipmentCatCatalogBtnMore = document.querySelector('.equipment-cat-catalog__btn-more');
  if (equipmentCatCatalogBtnMore) {
    equipmentCatCatalogBtnMore.addEventListener('click', () => {
      const catalogItems = document.querySelectorAll('.equipment-cat-catalog__list .list-item');
      if (catalogItems.length > 0) {
        catalogItems.forEach(item => item.classList.remove('hidden'));
        equipmentCatCatalogBtnMore.remove();
      }
    });
  }
  function setEqualHeight(swiper) {
    let maxHeight = 0;
    swiper.slides.forEach(slide => {
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });
    swiper.slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }

  /**
   * Инициализирует проверку элементов для Swiper-слайдера и добавляет необходимые классы.
   * @function sliderInitCheck
   * @param {Object} config - Объект конфигурации функции.
   * @param {HTMLElement} config.sliderWrapElement - Внешний контейнер слайдера.
   * @param {string} config.sliderClassName - Селектор класса основного контейнера слайдов.
   * @param {string} config.slideClassName - Селектор класса каждого слайда.
   * @param {boolean} [config.navButtons=true] - Флаг отображения навигационных кнопок.
   * @param {boolean} [config.showBullets=true] - Флаг отображения буллетов для пагинации.
   * @returns {Object|null} - Возвращает объект с элементами навигации и буллетов или null, если элементы не найдены.
   */
  function sliderInitCheck({
    sliderWrapElement,
    sliderClassName,
    slideClassName,
    navButtons = true,
    showBullets = true
  }) {
    // Проверка на наличие внешнего контейнера слайдера
    if (!sliderWrapElement) {
      return;
    }
    const parentSection = sliderWrapElement.closest('section') ? sliderWrapElement.closest('section') : sliderWrapElement;

    // Находим внутренний контейнер слайдов
    const slider = sliderWrapElement.querySelector(sliderClassName);
    if (!slider) {
      return;
    }

    // Находим все элементы слайда внутри контейнера
    const slides = slider.querySelectorAll(slideClassName);
    if (slides.length <= 0) {
      return;
    }

    // Определяем элементы навигационных кнопок, если они включены
    const nextButton = navButtons ? parentSection.querySelector('.btn_next') : null;
    const prevButton = navButtons ? parentSection.querySelector('.btn_prev') : null;
    // console.log({sliderWrapElement, nextButton, prevButton})
    // Определяем элемент для пагинации, если она включена
    const bullets = showBullets ? parentSection.querySelector('.slider-bullets') : null;

    // Проверка наличия всех необходимых элементов
    if (!slider || navButtons && (!nextButton || !prevButton) || showBullets && !bullets) {
      console.error('Не найдены необходимые элементы для Swiper в контейнере:', sliderWrapElement);
      return;
    }

    // Добавляем необходимые классы для работы с Swiper
    sliderWrapElement.classList.add('swiper');
    slider.classList.add('swiper-wrapper');

    // Добавляем класс 'swiper-slide' каждому элементу слайда
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    // Возвращаем элементы навигации и пагинации для использования в Swiper
    return {
      nextButton,
      prevButton,
      bullets
    };
  }

  /**
   * Инициализирует основной слайдер на главной странице.
   * @function mainHeroSlider
   * @param {HTMLElement} sliderWrap - Внешний контейнер слайдера на главной странице.
   */
  function portfolioSlider(sliderWrap) {
    // Инициализируем проверку и получаем необходимые элементы
    const result = sliderInitCheck({
      sliderWrapElement: sliderWrap,
      sliderClassName: '.portfolio__slider',
      slideClassName: '.slider-item',
      showBullets: false
    });

    // Проверяем результат на наличие необходимых элементов для инициализации Swiper
    if (!result) {
      console.error('Ошибка инициализации слайдера: не удалось найти все необходимые элементы.');
      return;
    }
    const {
      nextButton,
      prevButton
    } = result;

    // Инициализация Swiper с конфигурацией
    const swiper = new Swiper(sliderWrap, {
      speed: 300,
      // Скорость анимации перехода между слайдами
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      // Отключение бесконечного зацикливания слайдов
      grabCursor: true,
      // Включение курсора "перетаскивания" при наведении
      autoHeight: false,
      navigation: {
        nextEl: nextButton,
        // Элемент кнопки "вперед"
        prevEl: prevButton // Элемент кнопки "назад"
      }
      // on: {
      //     init: function () {
      //         setEqualHeight(this)
      //     },
      //     resize: function () {
      //         setEqualHeight(this)
      //     }
      // }
    });
  }
  /**
   * Инициализирует основной слайдер на главной странице.
   * @function mainHeroSlider
   * @param {HTMLElement} sliderWrap - Внешний контейнер слайдера на главной странице.
   */
  function teamSlider(sliderWrap) {
    // Инициализируем проверку и получаем необходимые элементы
    const result = sliderInitCheck({
      sliderWrapElement: sliderWrap,
      sliderClassName: '.team__list',
      slideClassName: '.list-item',
      showBullets: false
    });

    // Проверяем результат на наличие необходимых элементов для инициализации Swiper
    if (!result) {
      console.error('Ошибка инициализации слайдера: не удалось найти все необходимые элементы.');
      return;
    }
    const {
      nextButton,
      prevButton
    } = result;

    // Инициализация Swiper с конфигурацией
    const swiper = new Swiper(sliderWrap, {
      speed: 300,
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: false,
      grabCursor: true,
      autoHeight: false,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton
      },
      on: {
        init: function () {
          setEqualHeight(this);
        },
        resize: function () {
          setEqualHeight(this);
        }
      },
      breakpoints: {
        320: {
          spaceBetween: 10
        },
        820: {
          spaceBetween: 20
        },
        1200: {
          spaceBetween: 40
        }
      }
    });
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

  /**
   *
   * @returns {*}
   */
  function getUtm() {
    let utm_tags = {};
    if ('save_utm_source' in localStorage && 'save_utm_medium' in localStorage && 'save_utm_campaign' in localStorage) {
      utm_tags['utm_source'] = localStorage['save_utm_source'];
      utm_tags['utm_medium'] = localStorage['save_utm_medium'];
      utm_tags['utm_campaign'] = localStorage['save_utm_campaign'];
      if ('save_utm_content' in localStorage) {
        utm_tags['utm_content'] = localStorage['save_utm_content'];
      }
      if ('save_utm_term' in localStorage) {
        utm_tags['utm_term'] = localStorage['save_utm_term'];
      }
      if ('save_utm_referrer' in localStorage) {
        utm_tags['utm_referrer'] = localStorage['save_utm_referrer'];
      }
    }
    return utm_tags;
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
});