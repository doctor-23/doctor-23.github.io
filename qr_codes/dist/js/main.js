"use strict";

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

function getParams() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
  var params = {};
  new URL(url).searchParams.forEach(function (val, key) {
    if (params[key] !== undefined) {
      // Проверяем параметр на undefined
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
      el.parent().find('.msg-empty').show();
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
      elCheck = true;
    }
  }
  return elCheck;
} // конец

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
    var parent = el[0].closest('.select'),
      title = parent.querySelector('.select-title');
    for (var i = 0; i < el.length; i++) {
      if (el[i].checked) {
        elCheck = true;
        title.classList.remove('validate');
        parent.querySelectorAll('.msg').forEach(function (item) {
          item.style.display = 'none';
        });
        break;
      } else {
        elCheck = false;
        title.classList.add('validate');
        parent.querySelector('.msg-error').style.display = 'block';
      }
    }
  } else {
    elCheck = true;
  }
  return elCheck;
}

// клик вне элемента

function clickOutside(el, btn, cl) {
  var element = document.querySelector(el),
    button = document.querySelector(btn);
  document.addEventListener('click', function (e) {
    var target = e.target;
    var itsEl = target == element || element.contains(target);
    var its_btn = target == button;
    var its_el_is_open = element.classList.contains(cl);
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
    nameCheck = true,
    phoneCheck = true,
    emailCheck = true,
    indexCheck = true,
    addressCheck = true,
    customSelectCheck = true,
    textareaCheck = true,
    checkArr;
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
          customSelectCheck = formCustomSelectValid(customSelectInputs, customSelectCheck, true);
          if (allValidationCheck()) {
            formSubmit.removeClass('disabled');
          } else {
            formSubmit.addClass('disabled');
          }
        });
      });
    }

    // валидация полей при потере фокуса
    if (formName) {
      formName.on('blur', function () {
        nameCheck = formNameValid(formName, nameCheck);
      });
    }
    if (formPhone) {
      formPhone.on('blur', function () {
        phoneCheck = formPhoneValid(formPhone, phoneCheck);
      });
    }
    if (formEmail) {
      formEmail.on('blur', function () {
        emailCheck = formEmailValid(formEmail, emailCheck, true);
      });
    }
    if (formIndex) {
      formIndex.on('blur', function () {
        indexCheck = formIndexValid(formIndex, indexCheck);
      });
    }
    if (formAddress) {
      formAddress.on('blur', function () {
        addressCheck = formAddressValid(formAddress, addressCheck);
      });
    }
    if (formTextarea) {
      formTextarea.on('blur', function () {
        textareaCheck = formTextareaValid(formTextarea, textareaCheck);
      });
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

  parent.off('submit');
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
          product: 'first_contact'
        };

        // console.log(myData)

        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
          product: 'first_contact'
        };

        // console.log(myData)

        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
          product: 'course_lead'
        };
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
      case '#subscribe_form':
        myData = {
          action: 'crm_send',
          userName: formName.val(),
          userEmail: formEmail.val(),
          userPhone: formPhone.val().trim(),
          product: 'subscribe',
          funnel: formHidden.val()
        };
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
                beforeSend: function beforeSend(xhr) {
                  $('body').addClass('loader');
                },
                success: function success(result) {
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
        };
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
            console.log(result);
            var msg = result['message'];
            myData.action = 'crm_send';
            if (result['success']) {
              myData.free = 'success';
            } else {
              myData.free = 'error';
            }
            console.log(myData);
            $.ajax({
              url: astrooma.ajaxurl,
              // url: 'https://jsonplaceholder.typicode.com/posts',
              type: 'post',
              data: myData,
              dataType: 'json',
              beforeSend: function beforeSend(xhr) {
                $('body').addClass('loader');
              },
              success: function success(result) {
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
      case '#product_order_form':
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
          location: window.location.href
        };
        if (localStorage.getItem('myData')) localStorage.removeItem('myData');
        localStorage.setItem('myData', JSON.stringify(myData));

        // console.log(JSON.parse(localStorage.getItem('myData')));
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
            console.log(result);
            if (result['link']) {
              location.href = result['link'];
            } else {
              $('body').removeClass('loader');
              alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
            }
          }
        });
        break;
      case '#order__consultation_form':
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
        };
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
            console.log(result);
            myData['orderCost'] = result['sum'];
            console.log(myData);
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
        });
        break;
      case '#order_form_webinar':
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
          location: window.location.href
        };
        if (myData.funnel === '5134192') {
          myData.webinarDay = values.day;
        }
        if (localStorage.getItem('myData')) localStorage.removeItem('myData');
        localStorage.setItem('myData', JSON.stringify(myData));

        // console.log(JSON.parse(localStorage.getItem('myData')));
        console.log(myData);
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
            console.log(result);
            if (result['link']) {
              location.href = result['link'];
            } else {
              $('body').removeClass('loader');
              alert('Что-то пошло не так! Попробуйте еще раз или свяжитесь с нами!');
            }
          }
        });
        break;
      case '#order_form_course':
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
        };
        console.log(myData);
        if (localStorage.getItem('myData')) localStorage.removeItem('myData');
        localStorage.setItem('myData', JSON.stringify(myData));
        $.ajax({
          url: astrooma.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
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
  });
}
function customSelect(container, title, content, label, radio, show) {
  document.querySelectorAll(container).forEach(function (item) {
    var labels = item.querySelectorAll(label),
      labelCount = labels.length,
      labelHeight = 0;
    for (var i = 0; i < labelCount; i++) {
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
  });
  $(container).on('click', label, function () {
    var content = $(this).find(radio).text(),
      mainParent = $(this).closest(container);
    if (!mainParent.hasClass('active')) {
      mainParent.addClass('active');
    }
    mainParent.find(title).text(content);
    mainParent.removeClass('open');
  }).on('click', title, function () {
    if ($(this).closest(container).hasClass('open')) {
      $(container).removeClass('open');
    } else {
      $(container).removeClass('open');
      $(this).closest(container).addClass('open');
    }
  });
} // кастомный select;

// $(document).ready(function () {
//     const mainBody = $('body');
//     const headerH = $('#header').outerHeight();
//
//     // растягиваем main между header&footer
//
//     var header_h = $('header').outerHeight() + 'px',
//         footer_h = $('footer').outerHeight() + 'px';
//
//     $('main').css('min-height', `calc(100vh - (${header_h} + ${footer_h}))`);
//
//     $('a[href^="#"],*[data-href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         var t = 1000;
//         var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
//         $('html,body').stop().animate({scrollTop: $(d).offset().top}, t);
//     }); // плавный скролл
//
//     // поиск города
//
//     $('#choice_city').on('click', function (e) {
//         e.preventDefault();
//
//         $('.modal').fadeOut(0);
//         $('#location_modal').fadeIn(215);
//
//         var modalWidth = $('#location_modal .modal__content')[0].clientWidth;
//
//         $('#location_modal .modal__content').css({
//             'min-width': modalWidth,
//             'max-width': modalWidth
//         });
//         $('#search_city').val('');
//         $(document).find('.modal__cities-list_empty').hide();
//         $(document).find('.modal__cities-list__item').show();
//
//         document.body.classList.add('no-scroll')
//         window.removeEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.removeEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     $(function () {
//         var a = $('.modal__cities-list__column .modal__cities-list__item');
//
//         function searchFilter(value) {
//             var emptyString = $(document).find('.modal__cities-list_empty'),
//                 result;
//
//             result = a.is(function () {
//                 if ($(this).text().toLowerCase().indexOf(value) > -1) {
//                     return true
//                 }
//             });
//
//             // console.log(result)
//
//             if (result) {
//                 emptyString.hide();
//             } else {
//                 emptyString.show();
//             }
//
//             a.filter(function () {
//                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//             });
//         }
//
//         $('#search_city').on('keyup', function () {
//             var searchText = $(this).val();
//
//             if (searchText.length > 0) {
//
//                 searchFilter(searchText);
//                 a.removeHighlight();
//                 a.highlight(searchText);
//             } else {
//                 searchFilter(searchText);
//                 a.removeHighlight();
//             }
//         });
//     });
//
//     // попапы
//
//     $(document).on('click', '.modal, .modal__close', function () {
//         var fields = $('.modal input:not(input[type="submit"], input[type="hidden"], input[type="radio"], input[type="checkbox"], .modal textarea');
//
//         $('.modal').fadeOut(215);
//
//         $('.modal .msg').hide();
//         fields.removeClass('validate');
//         fields.val('');
//         // enableScrollBody();
//         document.body.classList.remove('no-scroll')
//     });
//
//     $(document).on('click', '.modal > .modal__content', function (e) {
//         e.stopPropagation();
//     });
//
//     const classesArr = ['not-found__btn'];
//
//     $(document).on('click', 'button.btn, button.footer__call', function (e) {
//         e.preventDefault();
//
//         var that = $(this);
//         var btnClasses = that[0].classList;
//         var isOpen = false;
//
//         for (var i = 0; i < btnClasses.length; i++) {
//             if (btnClasses[i] !== 'btn') {
//                 isOpen = classesArr.includes(btnClasses[i]);
//             }
//
//             if (isOpen) {
//                 break;
//             }
//         }
//
//         if (!isOpen) {
//             $('#modal-lead').fadeIn(215);
//             validation('#lead_form');
//         }
//
//         if (!$(this).hasClass('not-modal')) {
//             document.body.classList.add('no-scroll')
//         }
//
//     }); // конец
//
//     // запуск валидации форм на сайте
//
//     if ($('#main_hero_form').length > 0) validation('#main_hero_form');
//     if ($('#feedback_form').length > 0) validation('#feedback_form');
//     if ($('#contacts_form').length > 0) validation('#contacts_form');
//
//     // фиксированная шапка и кнопка возврата наверх
//
//     function fixedHeader(item) {
//         if ($(item).scrollTop() > headerH) {
//             mainBody.addClass('nav_scroll');
//         } else {
//             mainBody.removeClass('nav_scroll');
//         }
//
//         if ($(item).scrollTop() > item.innerHeight) {
//             $('#back_to_top')[0].style.display = 'flex';
//         } else {
//             $('#back_to_top')[0].style.display = 'none';
//         }
//     }
//
//     $('#back_to_top').on('click', function () {
//         $('html,body').stop().animate({scrollTop: 0}, 1000);
//     })
//
//     fixedHeader(window);
//
//     $(window).scroll(function () {
//         fixedHeader(this)
//     }); // конец
//
//     // гамбургер меню
//
//     var hamburger = document.querySelector('.hamburger');
//     var hamburger_close = document.querySelector('#header .close-ico');
//     var hamburger_menu = document.querySelector('.hamburger-wrap');
//     var hamburger_scroll_menu = document.querySelector('.hamburger-wrap__scroll');
//
//     hamburger.addEventListener('click', function () {
//         hamburger_menu.classList.add('open');
//         document.body.classList.add('no-scroll');
//
//         window.removeEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.removeEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_menu.addEventListener('click', function () {
//         this.classList.remove('open');
//         document.body.classList.remove('no-scroll');
//
//         window.addEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.addEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_close.addEventListener('click', function () {
//         hamburger_menu.classList.remove('open');
//         document.body.classList.remove('no-scroll');
//
//         window.addEventListener('DOMMouseScroll', normalizeScroll, false);
//         window.addEventListener(wheelEvent, normalizeScroll, wheelOpt);
//     });
//
//     hamburger_scroll_menu.addEventListener('click', function (e) {
//         e.stopPropagation();
//     })
//
//     //  слайдер "кто будет учить" страница "о школе"
//
//     $('.consultations-reviews__list').slick({
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         speed: 300,
//         draggable: true,
//         dots: true,
//         appendDots: $('.dots-arrows_wrap'),
//         appendArrows: $('.dots-arrows_wrap'),
//         dotsClass: 'slider-dots consultations-reviews__list-dots',
//         prevArrow: '<a class="arrow-left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.884978C9.27834 0.884978 9.05667 0.966644 8.88167 1.14164L1.275 8.74831C0.0383371 9.98498 0.0383371 12.015 1.275 13.2516L8.88167 20.8583C9.22 21.1966 9.78 21.1966 10.1183 20.8583C10.4567 20.52 10.4567 19.96 10.1183 19.6216L2.51167 12.015C1.95167 11.455 1.95167 10.545 2.51167 9.98498L10.1183 2.37831C10.4567 2.03998 10.4567 1.47998 10.1183 1.14164C9.94334 0.978311 9.72167 0.884978 9.5 0.884978Z" fill="currentColor"/></svg></a>',
//         nextArrow: '<a class="arrow-right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50003 0.884978C1.72169 0.884978 1.94336 0.966644 2.11836 1.14164L9.72503 8.74831C10.9617 9.98498 10.9617 12.015 9.72503 13.2516L2.11836 20.8583C1.78003 21.1966 1.22003 21.1966 0.881695 20.8583C0.543362 20.52 0.543362 19.96 0.881695 19.6216L8.48836 12.015C9.04836 11.455 9.04836 10.545 8.48836 9.98498L0.881695 2.37831C0.543362 2.03998 0.543362 1.47998 0.881695 1.14164C1.05669 0.978311 1.27836 0.884978 1.50003 0.884978Z" fill="currentColor"/></svg></a>',
//         infinite: false,
//         swipe: true,
//         responsive: [
//             {
//                 breakpoint: 1029,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 807,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     infinite: true
//                 }
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 }
//             },
//         ]
//     });
//
//     // страница ежедневника
//
//     $('.purchases__slider-main').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: '<a class="arrow-left"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 15.1187L9.1875 14.0562L2.91876 7.84062L9.1875 1.625L8.125 0.5625L0.793756 7.84062L8.125 15.1187Z" fill="currentColor"/></svg></a>',
//         nextArrow: '<a class="arrow-right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 15.1187L0.8125 14.0562L7.08124 7.84062L0.8125 1.625L1.875 0.5625L9.20624 7.84062L1.875 15.1187Z" fill="currentColor"/></svg></a>',
//         fade: true,
//         asNavFor: '.purchases__slider-nav',
//         infinite: false,
//         adaptiveHeight: true
//     });
//
//     $('.purchases__slider-nav').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         asNavFor: '.purchases__slider-main',
//         arrows: false,
//         focusOnSelect: true,
//         infinite: false
//     });
//
//
//     // аккордеон
//     (function () {
//         var accordion = function accordion(el, multiple) {
//             this.el = el || {};
//             this.multiple = multiple || false;
//             var dropdownlink = this.el.find('.accordion__heading');
//             dropdownlink.on('click', {
//                 el: this.el,
//                 multiple: this.multiple
//             }, this.dropdown);
//         };
//
//         accordion.prototype.dropdown = function (e) {
//             var $el = e.data.el,
//                 $this = $(this),
//                 $next = $this.next();
//             $next.slideToggle();
//             $this.parent().toggleClass('open');
//
//             if (!e.data.multiple) {
//                 $el.find('.accordion__submenu').not($next).slideUp().parent().removeClass('open');
//             }
//         };
//
//         var accordion = new accordion($('.accordion'), false);
//     })(); // конец
//
//     // вызов попап на странице консультаций
//
//     $(document).on('click', '.consultations__list-item__btn-more', function (e) {
//         e.preventDefault();
//
//         var id = $(this).attr('href');
//         var modal = document.getElementById(id);
//
//         $(modal).fadeIn(215);
//
//     });
//
//     // маски
//
//     $('.input-phone').inputmask({
//         mask: "+7 (X99) 999-99-99",
//         definitions: {
//             'X': {
//                 validator: "9",
//                 placeholder: "9"
//             }
//         }
//     });
//
//     $('.input-email').inputmask({
//         mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
//         greedy: false,
//         onBeforePaste: function (pastedValue, opts) {
//             pastedValue = pastedValue.toLowerCase();
//             return pastedValue.replace('mailto:', '');
//         },
//         definitions: {
//             '*': {
//                 validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
//                 casing: 'lower'
//             }
//         }
//     });// конец
//
//
//     // Переход на страницы политики конфиденцильности и договора оферты
//
//     $(document).on('click', '.footer__policy-link, .footer__agreement-link', function (e) {
//         e.preventDefault();
//
//         var href = $(this).attr('href')
//
//         href = href.replace('#', '');
//
//         window.location.href = href;
//     })
//
// var screenshots_btn_more = $('.screenshots-reviews__more');

screenshots_btn_more.on('click', function (e) {
  e.preventDefault();
  var thatBtn = $(this),
    parentList = thatBtn.closest('.screenshots-reviews').find('.screenshots-reviews__list'),
    args = thatBtn.data('more');
  var myData = {
    action: 'loadmore',
    // экшен для wp_ajax_ и wp_ajax_nopriv_
    args: args,
    query_vars: astrooma.query_vars
  };
  $.ajax({
    url: astrooma.ajaxurl,
    type: 'post',
    data: myData,
    beforeSend: function beforeSend(xhr) {
      thatBtn.text('Загружаем...');
      thatBtn.addClass('disabled');
    },
    success: function success(result) {
      // console.log(result);
      if (window.matchMedia('(max-width: 807.98px)').matches) {
        parentList.slick('unslick');
      }
      parentList.replaceWith(result);
      parentList = thatBtn.closest('.screenshots-reviews').find('.screenshots-reviews__list');

      // if (window.matchMedia('(max-width: 807.98px)').matches) {
      screenshotsSlider(parentList);
      // }

      thatBtn.remove();
    }
  });
});
$(document).on('click', '.reviews-simple__more', function (e) {
  e.preventDefault();
  var that = $(this),
    parentList = that.closest('.reviews-simple__wrap').find('.reviews-simple__list'),
    args = $(this).data('args');
  console.log(args);
  var myData = {
    action: 'loadmore_simple_reviews',
    // экшен для wp_ajax_ и wp_ajax_nopriv_
    args: args,
    query_vars: astrooma.query_vars
  };
  console.log(astrooma.ajaxurl);
  $.ajax({
    url: astrooma.ajaxurl,
    type: 'post',
    data: myData,
    beforeSend: function beforeSend(xhr) {
      that.text('Загружаем...');
      that.addClass('disabled');
    },
    success: function success(result) {
      parentList.replaceWith(result);
      that.remove();
    },
    error: function error(req, text, _error) {
      console.log(req);
      console.log(text);
      console.log(_error);
    }
  });
});
// });