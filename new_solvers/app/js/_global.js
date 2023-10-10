function banText(event) {
    var banText = parseFloat(event.key);

    if (isNaN(banText)) {
        event.preventDefault();
    }
}

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// получить стили элемента
function getStyle(elem) {
    if (window.getComputedStyle) return getComputedStyle(elem, null);
    else return elem.currentStyle;
}

// получить куки
function getCookie(name) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

// меняем куки
function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

// обработка ошибок ajax

function ajaxErrors(jqXHR, exception) {
    if (jqXHR.status === 0) {

        // console.log('Not connect. Verify Network.');
        console.log('Нет соединения. Проверьте сеть.');

    } else if (jqXHR.status == 404) {

        console.log('Запрошенная страница не найдена (404).');
        // console.log('Requested page not found (404).');

    } else if (jqXHR.status == 500) {

        console.log('Внутренняя ошибка сервера (500).');
        // console.log('Internal Server Error (500).');

    } else if (exception === 'parsererror') {

        console.log('Не удалось выполнить запрошенный синтаксический анализ JSON. (parse failed)');
        // console.log('Requested JSON parse failed.');

    } else if (exception === 'timeout') {

        console.log('Превышен лимит вермени на запрос.');
        // console.log('Time out error.');

    } else if (exception === 'abort') {

        console.log('Запрос прерван.');
        // console.log('Ajax request aborted.');

    } else {

        console.log('Неопределенная ошибка. ' + jqXHR.responseText);
        // console.log('Uncaught Error. ' + jqXHR.responseText);

    }
}

// функция валидации имени

function formNameValid(el, elCheck) {
    if (el.val().length === 0) {
        elCheck = false;
        el.parent().find('.msg').hide();
        el.parent().find('.msg-empty').show();
        el.addClass('validate-border');
    } else if (el.val().length < 2) {
        elCheck = false;
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
        el.addClass('validate-border');
    } else {
        elCheck = true;
        el.parent().find('.msg').hide();
        el.removeClass('validate-border');
    }

    return elCheck;
} // конец

// функция валидации телефона

function formPhoneValid(el, elCheck) {
    var validPhone = /_/;
    if (el.val().length === 0) {
        elCheck = false;
        el.addClass('validate-border');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-empty').show();
    } else {
        if (el.val().length > 0 && validPhone.test(el.val())) {
            elCheck = false;
            el.addClass('validate-border');
            el.parent().find('.msg').hide();
            el.parent().find('.msg-error').show();
        } else {
            if (el.val().length > 0 && !validPhone.test(el.val())) {
                elCheck = true;

                el.removeClass('validate-border');
                el.parent().find('.msg').hide();
            } else {
                elCheck = false;
            }
        }
    }

    return elCheck;
} // конец

// функция валидации email

function formEmailValid(el, elCheck, emailRequired) {
    var emailValid = /_/;

    if (emailRequired) {
        if (el.val().length === 0) {
            elCheck = false;
            el.addClass('validate-border');
            el.parent().find('.msg').hide();
            el.parent().find('.msg-empty').show();
        } else {
            if (el.val().length > 0 && emailValid.test(el.val())) {
                elCheck = false;
                el.parent().find('.msg').hide();
                el.parent().find('.msg-error').show();

                el.addClass('validate-border');
            } else {
                if (el.val().length > 0 && !emailValid.test(el.val())) {
                    elCheck = true;
                    el.parent().find('.msg').hide();
                    el.removeClass('validate-border');
                } else {
                    elCheck = false;
                }
            }
        }
    } else {
        if (el.val().length > 0) {
            if (el.val().length > 0 && emailValid.test(el.val())) {
                elCheck = false;
                el.parent().find('.msg').hide();
                el.parent().find('.msg-error').show();
                el.addClass('validate-border');
            } else {
                if (el.val().length > 0 && !emailValid.test(el.val())) {
                    elCheck = true;

                    el.parent().find('.msg').hide();
                    el.removeClass('validate-border');
                } else {
                    elCheck = false;
                }
            }
        } else {
            elCheck = true;

            el.parent().find('.msg').hide();
            el.removeClass('validate-border');
        }
    }

    return elCheck;
} // конец

function formTextareaValid(el, elCheck) {
    var l = el.val().length;

    if (l === 0) {
        elCheck = false;
        el.addClass('validate');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
    } else if (l !== 0 && l < 100) {
        elCheck = false;
        el.parent().find('.msg').hide();
        el.parent().find('.msg-empty').show();
        el.addClass('validate');
    } else {
        elCheck = true;
        el.removeClass('validate');
        el.parent().find('.msg').hide();
    }

    return elCheck;
} // конец

function formCustomSelectValid(el, elCheck, isRequired) {
    if (isRequired) {
        let parent = el[0].closest('.select'),
            title = parent.querySelector('.select-title');

        for (let i = 0; i < el.length; i++) {
            if (el[i].checked) {
                elCheck = true;
                title.classList.remove('validate');
                parent.querySelectorAll('.msg').forEach(function (item) {
                    item.style.display = 'none';
                })

                break;
            } else {
                elCheck = false;

                title.classList.add('validate');
                parent.querySelector('.msg-error').style.display = 'block';
            }
        }
    } else {
        elCheck = true
    }

    return elCheck;
}

@@include('_clickOutside.js')
@@include('_select.js')

function validation(form, values) {
    var parent = $(form),
        parentNew = document.querySelector(form),
        pipeline = parent.find('input[name="pipeline"]'),
        status = parent.find('input[name="status"]'),
        formName = parent.find('.input-name'),
        formPhone = parent.find('.input-phone'),
        formEmail = parent.find('.input-email'),
        formInput = parent.find('input:not(input[type="submit"], input[type="hidden"], input[type="radio"], input[type="checkbox"]), textarea'),
        formTextarea = parent.find('textarea'),
        customSelectInputs = parentNew.querySelectorAll('.select-content__wrapper > input'),
        formSubmit = parent.find('.btn_submit'),
        nameCheck = true, phoneCheck = true, emailCheck = true,
        customSelectCheck = true, textareaCheck = true, promoCheck = true, checkArr;

    formInput.val('');

    if (formName.length > 0) nameCheck = false;
    if (formPhone.length > 0) phoneCheck = false;
    if (formEmail.length > 0) emailCheck = false;
    if (formTextarea.length > 0) textareaCheck = false;
    if (customSelectInputs.length > 0) customSelectCheck = false;

    // функция проверки значений всех результатов валидвации

    function allValidationCheck() {
        checkArr = [];
        checkArr.push(nameCheck);
        checkArr.push(phoneCheck);
        checkArr.push(emailCheck);
        checkArr.push(textareaCheck);
        checkArr.push(customSelectCheck);

        return checkArr.indexOf(false) === -1;
    }

    function eventsValidateFields() {
        // валидация кастомного селекта
        if (customSelectInputs.length > 0) {
            customSelectInputs.forEach(function (item) {
                item.checked = false;

                item.addEventListener('change', function () {
                    customSelectCheck = formCustomSelectValid(customSelectInputs, customSelectCheck, true)

                    if (allValidationCheck()) {
                        formSubmit.removeClass('disabled');
                    } else {
                        formSubmit.addClass('disabled');
                    }
                })
            });
        }

        // валидация полей при потере фокуса
        if (formName) {
            formName.on('blur', function () {
                nameCheck = formNameValid(formName, nameCheck);
            })
        }

        if (formPhone) {
            formPhone.on('blur', function () {
                phoneCheck = formPhoneValid(formPhone, phoneCheck);
            })
        }

        if (formEmail) {
            formEmail.on('blur', function () {
                emailCheck = formEmailValid(formEmail, emailCheck, true)
            })
        }

        if (formTextarea) {
            formTextarea.on('blur', function () {
                textareaCheck = formTextareaValid(formTextarea, textareaCheck)
            })
        }
    }

    function validateFields() {
        // валидация кастомного селекта
        if (customSelectInputs.length > 0) {
            customSelectCheck = formCustomSelectValid(customSelectInputs, customSelectCheck, true);
        }

        // валидация полей при потере фокуса
        if (formName.length > 0) nameCheck = formNameValid(formName, nameCheck);

        if (formPhone.length > 0) phoneCheck = formPhoneValid(formPhone, phoneCheck);

        if (formEmail.length > 0) emailCheck = formEmailValid(formEmail, emailCheck, true);

        if (formTextarea.length > 0) textareaCheck = formTextareaValid(formTextarea, textareaCheck);
    }

    eventsValidateFields();


    function submitBtnEnabled() {
        if (allValidationCheck()) {
            formSubmit.removeClass('disabled');
        } else {
            formSubmit.addClass('disabled');
        }
    }

    // разблокировка кнопки отправки при потере фокуса
    formInput.on('blur', function () {
        submitBtnEnabled();
    });

    // отправка формы при условии (условие на всякий случай)

    parent.off('submit')
    parent.on('submit', function (e) {
        e.preventDefault();

        validateFields();

        if (allValidationCheck()) {
            formSubmit.removeClass('disabled');
        } else {
            formSubmit.addClass('disabled');

            return false;
        }

        window.history.replaceState(null, null, window.location.origin + window.location.pathname);
        var myData, title, formOrderName, priceWrap, formPrice;

        switch (form) {
            case '#feedback_form':
                myData = {
                    action: 'add_lead',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    company: parent.find('.input-company').val(),
                    pipeline: pipeline.val(),
                    status: status.val(),
                    product: 'feedback',
                }

                // console.log(myData)

                $.ajax({
                    url: the_keys.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        if (result['status'] === 'success') {
                            $('body').removeClass('loader');
                            $(form).closest('.modal').fadeOut(0);
                            document.body.classList.remove('no-scroll')
                        }
                        // $('#modal-lead-thx').fadeIn(215);
                    }
                });

                break;
        }
    });
}
