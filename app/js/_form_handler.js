class HandlerForm {

    constructor(form) {
        this.form = form.classList.contains('not-valid') ? null : form;
        this.validationFunctions = { // Объект с функциями валидации для различных типов полей
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
            return
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

            submit.onclick = (event => this.submitHandler(event, form, fields));
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
                result = handler(props)
            }

            if (checkboxFields.includes(key)) {
                props.listener = 'change';
                result = handler(props)
            }

            if (key === 'textarea') {
                props.isMessage = true;
                result = handler(props)
            }

            if (key === 'selects' && field.length > 0) {
                props.isSelect = true;
                result = handler(props)
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
        const {listener, field, validate, isMessage = false, messageLength = 100, isSelect = false} = props;

        if (isSelect) {
            field.forEach(select => {
                const isCustom = select.classList.contains('custom-select');
                const isRequired = isCustom ? select.classList.contains('required') : select.reqiured;

                if (isCustom) {
                    const options = select.querySelectorAll('.select-content__wrapper');
                    options.forEach(option => {
                        option.addEventListener('click', event => {
                            validate(select, isRequired);
                        })
                    })
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
        const {listener, field, validate, isMessage = false, messageLength = 100, isSelect = false} = props;
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
        const fieldsValues = this.getFieldsValues(validation)

        if (JSON.stringify(validationErrors) !== '{}') {
            return;
        }

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
class FormHandler {
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
            url: americano.ajaxurl, // URL для отправки запроса
            data: this.data, // Данные для отправки с формой
            form: form // HTML-элемент формы
        };

        // Определение действий в зависимости от идентификатора формы
        switch (form.id) {
            case 'booking_form':
                props.action = 'booking'; // Установка действия для формы
                props.showDescription = true; // Показывать описание модального окна
                // Получение функций обратного вызова для обработки результатов отправки формы бронирования
                Object.assign(props, this.bookingForm());
                // Отправка формы методом POST с использованием функций обратного вызова
                this.sendFormPost(props);
                break;

            case 'order_form':
                props.action = 'create_order'; // Установка действия для формы
                props.showDescription = props.data.callback; // Показывать описание модального окна
                // Получение функций обратного вызова для обработки результатов отправки формы бронирования
                Object.assign(props, this.orderForm());
                // Отправка формы методом POST с использованием функций обратного вызова
                this.sendFormPost(props);

                break;
        }
    }

    /**
     * Создает объект с функциями обратного вызова для обработки результатов отправки формы.
     * @returns {object} - Объект с функциями обратного вызова.
     */
    orderForm() {
        /**
         * Функция вызывается перед отправкой запроса и добавляет класс 'loader' к элементу body для отображения индикатора загрузки.
         */
        const beforeSend = () => document.body.classList.add('loader');

        /**
         * Функция вызывается при успешном ответе от сервера и обрабатывает полученные данные.
         * @param {object} response - Ответ от сервера.
         * @param {HTMLElement} form - Форма, связанная с запросом.
         * @param {boolean} [showDescription=false] - Флаг, указывающий, нужно ли отображать описание модального окна.
         */
        const success = (response, form, showDescription = false) => {
            console.log(response);
            // Сопоставляем статус ответа с идентификатором модального окна
            const modalIds = {
                success: 'modal_success_order',
                error: 'modal_error',
            };
            // Получаем идентификатор модального окна для текущего статуса ответа
            const modalId = modalIds[response.status] || 'modal_error';

            // Находим модальное окно по его идентификатору
            const modal = document.getElementById(modalId);

            // Показываем модальное окно и устанавливаем ему непрозрачность
            modal.style.display = 'block';
            modal.style.opacity = 1;

            // Если установлен флаг showDescription, отображаем описание модального окна
            if (showDescription) {
                modal.querySelector('.modal__description .shower-desc').style.display = 'flex';
            } else {
                modal.querySelector('.modal__description .shower-desc').style.display = 'none';
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
        return {beforeSend, success, onError, onComplete};
    }

    /**
     * Создает объект с функциями обратного вызова для обработки результатов отправки формы.
     * @returns {object} - Объект с функциями обратного вызова.
     */
    bookingForm() {
        /**
         * Функция вызывается перед отправкой запроса и добавляет класс 'loader' к элементу body для отображения индикатора загрузки.
         */
        const beforeSend = () => document.body.classList.add('loader');

        /**
         * Функция вызывается при успешном ответе от сервера и обрабатывает полученные данные.
         * @param {object} response - Ответ от сервера.
         * @param {HTMLElement} form - Форма, связанная с запросом.
         * @param {boolean} [showDescription=false] - Флаг, указывающий, нужно ли отображать описание модального окна.
         */
        const success = (response, form, showDescription = false) => {
            // console.log(response);
            // Сопоставляем статус ответа с идентификатором модального окна
            const modalIds = {
                success: 'modal_success',
                error: 'modal_error',
            };
            // Получаем идентификатор модального окна для текущего статуса ответа
            const modalId = modalIds[response.status] || 'modal_error';

            // Находим модальное окно по его идентификатору
            const modal = document.getElementById(modalId);
            // Находим текущее модальное окно, связанное с формой, и скрываем его
            const currentModal = form.closest('.modal');
            fadeOut(currentModal, 0);

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
        return {beforeSend, success, onError, onComplete};
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
            url = 'https://jsonplaceholder.typicode.com/posts',
            data = {},
            beforeSend = new Function(),
            success = new Function(),
            onError = new Function(),
            onComplete = new Function(),
            showDescription = false,
            form = ''
        } = props;

        // Формируем объект данных для отправки на сервер, включая действие (action), если оно указано
        const requestData = {action, ...data};

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
        fetch(url, requestOptions)
            .then(response => {
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
            })
            .then(data => {
                // Вызываем функцию success при успешном ответе от сервера и передаем ей полученные данные
                success(data, form, showDescription);
            })
            .catch(error => {
                // Вызываем функцию onError при возникновении ошибки и передаем ей объект ошибки
                onError(error);
            })
            .finally(() => {
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
