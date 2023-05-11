// нормализуем скролл
function banText(event) {
    var banText = parseFloat(event.key);

    if (isNaN(banText)) {
        event.preventDefault();
    }
}

function preventDefaultFunc(e) {
    e.preventDefault();
}

// кроссбразуерное определение координат

function getCoords(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    // (2)
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    // (3)
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    // (4)
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: top,
        left: left
    };
}

// функция получения гет параметров

function getParams(url = window.location) {
    let params = {};

    new URL(url).searchParams.forEach(function (val, key) {
        if (params[key] !== undefined) { // Проверяем параметр на undefined
            /* Проверяем, имеется ли в объекте аналогичный params[key]
            *  Если его нет, то добавляем его в объект
            */
            if (!Array.isArray(params[key])) {
                params[key] = [params[key]];
            }
            params[key].push(val);
        } else {
            params[key] = val;
        }
    });
    // console.log(params);
    return params;
}

// функция валидации имени

function formNameValid(el, elCheck) {
    var l = el.val().length;

    if (l === 0) {
        elCheck = false;
        el.addClass('validate');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
    } else if (l !== 0 && l < 2) {
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

// функция валидации телефона

function formPhoneValid(el, elCheck) {
    var validPhone = /_/;
    var l = el.val().length;

    if (l === 0) {
        elCheck = false;
        el.addClass('validate');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
    } else {
        if (l < 10 && l > 0) {
            elCheck = false;
            el.addClass('validate');
            el.parent().find('.msg').hide();
            el.parent().find('.msg-empty').show()
        } else {
            elCheck = true;

            el.removeClass('validate');
            el.parent().find('.msg').hide();
        }
        // if (l > 0 && validPhone.test(el.val())) {
        //     elCheck = false;
        //     el.addClass('validate');
        //     el.parent().find('.msg').hide();
        //     el.parent().find('.msg-empty').show();
        // } else {
        //     if (l > 0 && !validPhone.test(el.val())) {
        //         elCheck = true;
        //
        //         el.removeClass('validate');
        //         el.parent().find('.msg').hide();
        //     } else {
        //         elCheck = false;
        //     }
        // }
    }

    return elCheck;
} // конец

// функция валидации email

function formEmailValid(el, elCheck, emailRequired) {
    var emailVal = el.val(),
        emailValid = emailVal.split('@'),
        l = el.val().length;


    if (emailRequired) {
        if (l === 0) {
            el.addClass('validate');
            el.parent().find('.msg').hide();
            el.parent().find('.msg-error').show();
            elCheck = false;
        } else {
            if (l > 0 && (el.val().match(/.+?\@.+\.+/g) || []).length === 1) {
                if (emailValid[0].length < 3) {
                    el.addClass('validate');
                    el.parent().find('.msg').hide();
                    el.parent().find('.msg-error-length').show();
                    elCheck = false;
                } else {
                    el.removeClass('validate');
                    el.parent().find('.msg').hide();
                    elCheck = true;
                }
            } else {
                el.addClass('validate');
                el.parent().find('.msg').hide();
                el.parent().find('.msg-empty').show();
                elCheck = false;
            }
        }
    } else {
        if (l > 0) {
            if (l > 0 && (el.val().match(/.+?\@.+\.+/g) || []).length === 1) {
                if (emailValid[0].length < 3) {
                    el.addClass('validate');
                    el.parent().find('.msg').hide();
                    el.parent().find('.msg-error-length').show();
                    elCheck = false;
                } else {
                    el.removeClass('validate');
                    el.parent().find('.msg').hide();
                    elCheck = true;
                }
            } else {
                el.addClass('validate-border');
                el.parent().find('.msg').hide();
                el.parent().find('.msg-error-email').show();
                elCheck = false;
            }
        } else {
            elCheck = true
        }
    }

    return elCheck;
}// конец

// функция валидации email

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

function formIndexValid(el, elCheck) {
    var l = el.val().length;

    if (l === 0) {
        elCheck = false;
        el.addClass('validate');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
    } else if (l !== 0 && l < 6) {
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
}

function formAddressValid(el, elCheck) {
    var l = el.val().length;

    if (l === 0) {
        elCheck = false;
        el.addClass('validate');
        el.parent().find('.msg').hide();
        el.parent().find('.msg-error').show();
    } else {
        elCheck = true;
        el.removeClass('validate');
        el.parent().find('.msg').hide();
    }

    return elCheck;
}

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

// валидация формы

function validation(form, values) {
    var parent = $(form),
        parentNew = document.querySelector(form),
        formHidden = parent.find('input[name="sales_funnel"]'),
        formName = parent.find('.input-name'),
        formPhone = parent.find('.input-phone'),
        formEmail = parent.find('.input-email'),
        formIndex = parent.find('.input-index'),
        formAddress = parent.find('.input-address'),
        formInput = parent.find('input:not(input[type="submit"], input[type="hidden"], input[type="radio"], input[type="checkbox"]), textarea'),
        formTextarea = parent.find('textarea'),
        customSelectInputs = parentNew.querySelectorAll('.select-content__wrapper > input'),
        formSubmit = parent.find('input[type="submit"]'),
        nameCheck = true, phoneCheck = true, emailCheck = true, indexCheck = true, addressCheck = true,
        customSelectCheck = true, textareaCheck = true, checkArr;

    formInput.val('');

    if (formName.length > 0) nameCheck = false;
    if (formPhone.length > 0) phoneCheck = false;
    if (formEmail.length > 0) emailCheck = false;
    if (formIndex.length > 0) indexCheck = false;
    if (formAddress.length > 0) addressCheck = false;
    if (formTextarea.length > 0) textareaCheck = false;
    if (customSelectInputs.length > 0) customSelectCheck = false;

    // функция проверки значений всех результатов валидвации

    function allValidationCheck() {
        checkArr = [];
        checkArr.push(nameCheck);
        checkArr.push(phoneCheck);
        checkArr.push(emailCheck);
        checkArr.push(indexCheck);
        checkArr.push(addressCheck);
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

        if (formIndex) {
            formIndex.on('blur', function () {
                indexCheck = formIndexValid(formIndex, indexCheck)
            })
        }

        if (formAddress) {
            formAddress.on('blur', function () {
                addressCheck = formAddressValid(formAddress, addressCheck)
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

        if (formIndex.length > 0) indexCheck = formIndexValid(formIndex, indexCheck);

        if (formAddress.length > 0) addressCheck = formAddressValid(formAddress, addressCheck);

        if (formTextarea.length > 0) textareaCheck = formTextareaValid(formTextarea, textareaCheck);
    }

    eventsValidateFields();

    // разблокировка кнопки отправки при потере фокуса
    formInput.on('blur', function () {
        if (allValidationCheck()) {
            formSubmit.removeClass('disabled');
        } else {
            formSubmit.addClass('disabled');
        }
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
            case '#lead_form':
                myData = {
                    action: 'crm_send',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    funnel: formHidden.val(),
                    product: 'first_contact',
                }

                // console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        if (result['code'] === 200) {
                            $(form).closest('.modal').fadeOut(0);
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        } else {
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        }
                    }
                });

                break;

            case '#contacts_form':
                myData = {
                    action: 'crm_send',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    funnel: formHidden.val(),
                    product: 'first_contact',
                }

                // console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        formInput.val('');
                        if (result['code'] === 200) {
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        } else {
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        }
                    }
                });

                break;

            case '#review_form':
                myData = new FormData($(form)[0]);
                myData.append('action', 'add_review');

                // for (var pair of myData.entries()) {
                //     console.log(pair[0], pair[1]);
                // }

                $.ajax({
                    url: astrooma.ajaxurl,
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        var modal_thx = $('#modal-review-thx');

                        if (result['status'] === 'success' || result['status'] === 'error') {
                            $(form).closest('.modal').fadeOut(0);
                            modal_thx.find('.modal__description').remove();

                            modal_thx.find('.modal__title').html(result['title']);
                            modal_thx.find('.modal__content')[0].insertAdjacentHTML('beforeend', result['message']);

                            modal_thx.fadeIn(215);

                        } else {
                            $(form).closest('.modal').fadeOut(0);
                            modal_thx.fadeIn(215);
                        }

                        $('body').removeClass('loader');
                    }
                });

                break;

            case '#lead_course_form':
                myData = {
                    action: 'crm_send',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    funnel: values.pipeline,
                    status_id: values.status_id,
                    // orderCost: values.price,
                    orderName: values.title,
                    product: 'course_lead',
                }

                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);

                        if (result['code'] === 200) {
                            $(form).closest('.modal').fadeOut(0);
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        } else {
                            $('#modal-lead-thx').fadeIn(215);
                            $('body').removeClass('loader');
                        }
                    }
                })

                break;

            case '#subscribe_form':

                myData = {
                    action: 'crm_send',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    product: 'subscribe',
                    funnel: formHidden.val()
                }

                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        var modal_thx = $('#modal-subscribe-thx'),
                            lead_id = result['response'][0]['id'];

                        formName.val('');
                        formEmail.val('');
                        formPhone.val('');

                        if (result['code'] === 200) {
                            myData.action = 'add_subscriber';
                            myData.id = lead_id;

                            $.ajax({
                                url: astrooma.ajaxurl,
                                // url: 'https://jsonplaceholder.typicode.com/posts',
                                type: 'post',
                                dataType: 'json',
                                data: myData,
                                beforeSend: function (xhr) {
                                    $('body').addClass('loader');
                                },
                                success: function (result) {
                                    console.log(result);
                                    var status = result["status"];

                                    if (status === 'success' || status === 'error') {
                                        modal_thx.find('.modal__description').remove();

                                        modal_thx.find('.modal__title').html(result['title']);
                                        modal_thx.find('.modal__content')[0].insertAdjacentHTML('beforeend', result['message']);

                                        modal_thx.fadeIn(215);
                                    } else {
                                        modal_thx.fadeIn(215);
                                    }

                                    $('body').removeClass('loader');
                                }
                            });

                        } else {
                            modal_thx.fadeIn(215);
                            $('body').removeClass('loader');
                        }
                    }
                });

                break;

            case '#free_course_form':

                myData = {
                    action: 'send_free',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    product: 'free_course',
                    funnel: values['pipeline'],
                    first: values['pipeline_first'],
                    release: values['pipeline_release'],
                    offerCode: values['offer_code'],
                    id: values['id']
                }

                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        var msg = result['message'];

                        myData.action = 'crm_send';

                        if (result['success']) {
                            myData.free = 'success'
                        } else {
                            myData.free = 'error';
                        }
                        console.log(myData)

                        $.ajax({
                            url: astrooma.ajaxurl,
                            // url: 'https://jsonplaceholder.typicode.com/posts',
                            type: 'post',
                            data: myData,
                            dataType: 'json',
                            beforeSend: function (xhr) {
                                $('body').addClass('loader');
                            },
                            success: function (result) {
                                console.log(result);
                                var modalThanks = $('#modal-free-course-thx');

                                $(form).closest('.modal').fadeOut(0);
                                modalThanks.fadeIn(215);
                                modalThanks.find('.modal__description > p').html(msg);
                                $('body').removeClass('loader');

                                // if (result['code'] === 200) {
                                //
                                // }
                            }
                        });
                    }
                });

                break;

            case
            '#product_order_form'
            :

                // console.log(values)
                title = values.title;
                formOrderName = title.trim();
                priceWrap = parent.closest('.modal').find('.modal__price');
                formPrice;

                if (priceWrap.find('.price_old').length > 0) {
                    formPrice = priceWrap.find('.price_new').text().trim().replace(' ', '');
                    formPrice = parseInt(formPrice);
                } else {
                    formPrice = priceWrap.find('.price').text().trim().replace(' ', '');
                    formPrice = parseInt(formPrice);
                }

                myData = {
                    action: 'order_pay',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val(),
                    orderName: formOrderName,
                    orderCost: formPrice,
                    funnel: formHidden.val(),
                    product: 'product',
                    location: window.location.href,
                }

                if (localStorage.getItem('myData')) localStorage.removeItem('myData');
                localStorage.setItem('myData', JSON.stringify(myData));

                // console.log(JSON.parse(localStorage.getItem('myData')));
                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);

                        if (result['link']) {
                            location.href = result['link'];
                        } else {
                            $('body').removeClass('loader');
                            alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
                        }

                    }
                })

                break;

            case
            '#order__consultation_form'
            :
                var isPrepayment = $(e.originalEvent.submitter).hasClass('modal__btn-prepayment');
                title = values.title;
                formPrice = values.price;
                formOrderName = title.trim();

                myData = {
                    action: 'order_pay',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val(),
                    orderName: formOrderName,
                    orderCost: formPrice,
                    product: 'consultation',
                    location: window.location.href,
                    funnel: values.funnel,
                    release: values.release,
                    first: values.first,
                    prepayment: values.prepayment,
                    isPrepayment: isPrepayment,
                    id: values.id
                }

                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result);
                        myData['orderCost'] = result['sum'];

                        console.log(myData)

                        if (localStorage.getItem('myData')) localStorage.removeItem('myData');
                        localStorage.setItem('myData', JSON.stringify(myData));

                        // console.log(JSON.parse(localStorage.getItem('myData')));

                        if (result['link']) {
                            location.href = result['link'];
                        } else {
                            $('body').removeClass('loader');
                            alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
                        }

                    }
                })

                break;

            case
            '#order_form_webinar'
            :

                title = values.title;
                formOrderName = title.replace(/\s+/g, ' ').trim();

                myData = {
                    action: 'order_pay',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val(),
                    orderName: formOrderName,
                    orderCost: values.price,
                    offerCode: values.offerCode,
                    funnel: formHidden.val(),
                    product: 'webinar',
                    location: window.location.href,
                }

                if (myData.funnel === '5134192') {
                    myData.webinarDay = values.day;
                }

                if (localStorage.getItem('myData')) localStorage.removeItem('myData');
                localStorage.setItem('myData', JSON.stringify(myData));

                // console.log(JSON.parse(localStorage.getItem('myData')));
                console.log(myData)

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        console.log(result)

                        if (result['link']) {
                            location.href = result['link'];
                        } else {
                            $('body').removeClass('loader');
                            alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
                        }

                    }
                })

                break;

            case
            '#order_form_course'
            :
                myData = {
                    action: 'order_pay',
                    userName: formName.val(),
                    userEmail: formEmail.val(),
                    userPhone: formPhone.val().trim(),
                    funnel: values.pipeline,
                    status_id: values.status_id,
                    orderCost: values.price,
                    orderName: values.title,
                    offerCode: values.offer_code,
                    product: 'course',
                    location: window.location.href
                }

                console.log(myData)

                if (localStorage.getItem('myData')) localStorage.removeItem('myData');
                localStorage.setItem('myData', JSON.stringify(myData));

                $.ajax({
                    url: astrooma.ajaxurl,
                    // url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'post',
                    data: myData,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        $('body').addClass('loader');
                    },
                    success: function (result) {
                        // console.log(result);

                        if (result['link']) {
                            location.href = result['link'];
                        } else {
                            $('body').removeClass('loader');
                            alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
                        }
                    }
                });

                break;
        }
    })
}

function customSelect(container, title, content, label, radio, show) {
    document.querySelectorAll(container).forEach(function (item) {
        var labels = item.querySelectorAll(label),
            labelCount = labels.length,
            labelHeight = 0;

        for (let i = 0; i < labelCount; i++) {
            if (i < show) {
                labelHeight += labels[i].offsetHeight;
            } else {
                break;
            }
        }

        if (labelCount <= show) {
            item.querySelector(content).classList.add('no-scroll');
        }

        item.querySelector(content).style.maxHeight = labelHeight + 32 + 'px';
    })

    $(container).on('click', label, function () {
        var content = $(this).find(radio).text(),
            mainParent = $(this).closest(container);

        if (!mainParent.hasClass('active')) {
            mainParent.addClass('active');
        }

        mainParent.find(title).text(content);
        mainParent.removeClass('open');
    })

        .on('click', title, function () {
            if ($(this).closest(container).hasClass('open')) {
                $(container).removeClass('open')
            } else {
                $(container).removeClass('open')
                $(this).closest(container).addClass('open');
            }
        });
} // кастомный select