"use strict";

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
  if (window.getComputedStyle) return getComputedStyle(elem, null);else return elem.currentStyle;
}

// получить куки
function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
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
function handleClickOutside(element, callback) {
  function handleDocumentClick(event) {
    var isClickInsideElement = element.contains(event.target);
    if (!isClickInsideElement) {
      callback();
    }
  }
  document.addEventListener("click", handleDocumentClick);
  return function cleanup() {
    document.removeEventListener("click", handleDocumentClick);
  };
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
} // кастомный select

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
    nameCheck = true,
    phoneCheck = true,
    emailCheck = true,
    customSelectCheck = true,
    textareaCheck = true,
    promoCheck = true,
    checkArr;
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
      case '#feedback_form':
        myData = {
          action: 'add_lead',
          userName: formName.val(),
          userEmail: formEmail.val(),
          userPhone: formPhone.val().trim(),
          company: parent.find('.input-company').val(),
          pipeline: pipeline.val(),
          status: status.val(),
          product: 'feedback'
        };

        // console.log(myData)

        $.ajax({
          url: the_keys.ajaxurl,
          // url: 'https://jsonplaceholder.typicode.com/posts',
          type: 'post',
          data: myData,
          dataType: 'json',
          beforeSend: function beforeSend(xhr) {
            $('body').addClass('loader');
          },
          success: function success(result) {
            console.log(result);
            if (result['status'] === 'success') {
              $('body').removeClass('loader');
              $(form).closest('.modal').fadeOut(0);
              document.body.classList.remove('no-scroll');
            }
            // $('#modal-lead-thx').fadeIn(215);
          }
        });

        break;
    }
  });
}
;
$(document).ready(function () {
  // init custom select

  customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 5);

  // растягиваем main между header&footer

  var header_h = $('header').outerHeight() + 'px',
    footer_h = $('footer').outerHeight() + 'px';
  $('main').css('min-height', "calc(100vh - (".concat(header_h, " + ").concat(footer_h, "))"));
  var groups, myMap, barsContent, MyBalloonLayout, MyBalloonContentLayout, myGeoObject;
  groups = [{
    center: [55.74814411, 37.54025512],
    geometryCord: [[[55.74818990, 37.53958650], [55.74848036, 37.54055210], [55.74811991, 37.54089885], [55.74782944, 37.53993325]]],
    image: '/staticfiles/img/bars/empire.png',
    alt: 'Империя',
    title: 'Деловой комплекс Империя',
    item1: 60,
    item2: 238,
    item3: 203191
  }, {
    center: [55.74846764, 37.54187356],
    geometryCord: [[[55.74816507, 37.54176628], [55.74849185, 37.54138004], [55.74869759, 37.54204522], [55.74838292, 37.54238855], [55.74816507, 37.54176628]]],
    image: '/staticfiles/img/bars/evo.jpg',
    alt: 'Эволюция',
    title: 'Башня Эволюция',
    item1: 54,
    item2: 246,
    item3: 154000
  }, {
    center: [55.74721050, 37.53853910],
    geometryCord: [[[55.74746549, 37.53869660], [55.74712578, 37.53894680], [55.74695633, 37.53838890], [55.74729522, 37.53817432]]],
    image: '/staticfiles/img/bars/stol.jpg',
    alt: 'Башня Город столиц Москва',
    title: 'Башня Город столиц Москва',
    item1: 76,
    item2: 302,
    item3: 178100
  }, {
    center: [55.74773093, 37.53883951],
    geometryCord: [[[55.74782775, 37.53834598], [55.74802140, 37.53898972], [55.74768252, 37.53935450], [55.74746549, 37.53869660]]],
    image: '/staticfiles/img/bars/stol.jpg',
    alt: 'Башня Город столиц Санкт-Петербург',
    title: 'Башня Город столиц Санкт-Петербург',
    item1: 65,
    item2: 257,
    item3: 110580
  }, {
    center: [55.74700409, 37.53748507],
    geometryCord: [[[55.74705250, 37.53758699], [55.74648365, 37.53715784], [55.74636262, 37.53727586], [55.74647760, 37.53750116], [55.74654719, 37.53757627], [55.74665310, 37.53764600], [55.74674084, 37.53767819], [55.74690121, 37.53768892], [55.74705250, 37.53758699]]],
    image: '/staticfiles/img/bars/naber.jpg',
    alt: 'Башня на Набережной Блок А',
    title: 'Башня на Набережной Блок А',
    item1: 17,
    item2: 85,
    item3: 39800
  }, {
    center: [55.74645409, 37.53638425],
    geometryCord: [[[55.74628464, 37.53689923], [55.74668405, 37.53616967], [55.74667195, 37.53597655], [55.74656302, 37.53601947], [55.74649040, 37.53608384], [55.74640567, 37.53623404], [55.74633305, 37.53636279], [55.74628464, 37.53655591], [55.74628464, 37.53689923]]],
    image: '/staticfiles/img/bars/naber.jpg',
    alt: 'Башня на Набережной Блок B',
    title: 'Башня на Набережной Блок B',
    item1: 27,
    item2: 127,
    item3: 53994
  }, {
    center: [55.74708346, 37.53662028],
    geometryCord: [[[55.74691401, 37.53608384], [55.74687770, 37.53634133], [55.74688981, 37.53657737], [55.74692612, 37.53681340], [55.74697453, 37.53698506], [55.74705925, 37.53717818], [55.74708346, 37.53709235], [55.74710766, 37.53709235], [55.74714397, 37.53704944], [55.74719239, 37.53715672], [55.74725290, 37.53698506], [55.74726501, 37.53677049], [55.74727711, 37.53657737], [55.74724080, 37.53642716], [55.74719239, 37.53621259], [55.74713187, 37.53608384], [55.74704715, 37.53595509], [55.74702294, 37.53610530], [55.74696243, 37.53610530], [55.74691401, 37.53608384]]],
    image: '/staticfiles/img/bars/naber.jpg',
    alt: 'Башня на Набережной Блок С',
    title: 'Башня на Набережной Блок С',
    item1: 59,
    item2: 268,
    item3: 160200
  }, {
    center: [55.74764064, 37.53499147],
    geometryCord: [[[55.74797953, 37.53404734], [55.74808801, 37.53499021], [55.74810011, 37.53574123], [55.74785805, 37.53584852], [55.74691446, 37.53471252], [55.74718073, 37.53436920], [55.74727755, 37.53460524], [55.74765275, 37.53419754], [55.74797953, 37.53404734]]],
    image: '/staticfiles/img/bars/iq.jpg',
    alt: 'IQ-квартал',
    title: 'IQ-квартал',
    item1: 42,
    item2: 169,
    item3: 228000
  }, {
    center: [55.74976605, 37.53383838],
    geometryCord: [[[55.74912704, 37.53399165], [55.74945380, 37.53364833], [55.74988949, 37.53349813], [55.75031307, 37.53472121], [55.74999658, 37.53505570], [55.74970554, 37.53413879], [55.74933036, 37.53452502], [55.74912704, 37.53399165]]],
    image: '/staticfiles/img/bars/oko.png',
    alt: 'МФК Око',
    title: 'МФК Око',
    item1: 85,
    item2: 354,
    item3: 249600
  }, {
    center: [55.75051489, 37.53644193],
    geometryCord: [[[55.75044228, 37.53515447], [55.75049068, 37.53530467], [55.75044228, 37.53534759], [55.75066011, 37.53607715], [55.75069642, 37.53603423], [55.75078113, 37.53627027], [55.75075693, 37.53631318], [55.75101107, 37.53712857], [55.75067222, 37.53747190], [55.75053909, 37.53749335], [55.75047858, 37.53732169], [55.75034546, 37.53745044], [55.75030915, 37.53745044], [55.75028495, 37.53740752], [55.75026074, 37.53736461], [55.75024864, 37.53732169], [55.75023654, 37.53721440], [55.75023654, 37.53715003], [55.75026074, 37.53708566], [55.75036966, 37.53695691], [55.75034546, 37.53687108], [55.75026074, 37.53695691], [55.75017603, 37.53672088], [55.75026074, 37.53661359], [55.75024864, 37.53657067], [55.75018813, 37.53663505], [55.75012762, 37.53667796], [55.75005501, 37.53665650], [55.75003080, 37.53661359], [55.75000660, 37.53654922], [55.75000660, 37.53646339], [55.75001870, 37.53639901], [55.75005501, 37.53633464], [55.75013972, 37.53624881], [55.74995819, 37.53564799], [55.75044228, 37.53515447]]],
    image: '/staticfiles/img/bars/oko3.png',
    alt: 'Oko II',
    title: 'Oko II',
    item1: 14,
    item2: 63,
    item3: 27000
  }, {
    center: [55.74938341, 37.53691645],
    geometryCord: [[[55.74968597, 37.53678771], [55.74959416, 37.53663091], [55.74946103, 37.53654507], [55.74932790, 37.53652362], [55.74914637, 37.53658799], [55.74914637, 37.53686694], [55.74917057, 37.53710297], [55.74923108, 37.53738192], [55.74926686, 37.53754460], [55.74938841, 37.53744630], [55.74954704, 37.53727059], [55.74965269, 37.53701890], [55.74968597, 37.53678771]]],
    image: '/staticfiles/img/bars/fed.png',
    alt: 'Федерация Запад',
    title: 'Федерация Запад',
    item1: 63,
    item2: 242,
    item3: 178400
  }, {
    center: [55.74980699, 37.53779622],
    geometryCord: [[[55.74986750, 37.53708811], [55.74981200, 37.53716735], [55.74959416, 37.53751067], [55.74948523, 37.53783254], [55.74943182, 37.53805371], [55.74953766, 37.53814905], [55.74970760, 37.53821826], [55.74990123, 37.53819680], [55.75007825, 37.53813294], [55.75008277, 37.53789639], [55.75005404, 37.53759650], [55.74997385, 37.53729558], [55.74986750, 37.53708811]]],
    image: '/staticfiles/img/bars/fed.png',
    alt: 'Федерация Восток',
    title: 'Федерация Восток',
    item1: 95,
    item2: 372,
    item3: 264600
  }, {
    center: [55.74884868, 37.53480704],
    geometryCord: [[[55.74851549, 37.53394745], [55.74866072, 37.53394745], [55.74864862, 37.53381871], [55.74866072, 37.53375433], [55.74867283, 37.53373288], [55.74869703, 37.53371142], [55.74873334, 37.53373288], [55.74876965, 37.53375433], [55.74891488, 37.53401183], [55.74895119, 37.53409766], [55.74936909, 37.53553661], [55.74932068, 37.53568681], [55.74922386, 37.53551515], [55.74917545, 37.53570827], [55.74912704, 37.53581556], [55.74906652, 37.53585847], [55.74900601, 37.53590139], [55.74863083, 37.53547223], [55.74863083, 37.53527911], [55.74848560, 37.53527911], [55.74848560, 37.53461393], [55.74849770, 37.53461393], [55.74851549, 37.53394745]]],
    image: '/staticfiles/img/bars/vtb_merk.jpg',
    alt: 'Евразия',
    title: 'Евразия',
    item1: 72,
    item2: 309,
    item3: 207542
  }, {
    center: [55.75050279, 37.53948892],
    geometryCord: [[[55.75063591, 37.53895248], [55.75070852, 37.53897393], [55.75082954, 37.53929580], [55.75080534, 37.53946746], [55.75047858, 37.53983224], [55.75036966, 37.53983224], [55.75021233, 37.53998244], [55.75009131, 37.53987516], [55.75010341, 37.53961766], [55.75024864, 37.53944600], [55.75027285, 37.53929580], [55.75063591, 37.53895248]]],
    image: '/staticfiles/img/bars/merk.jpg',
    alt: 'Башня Меркурий',
    title: 'Башня Меркурий',
    item1: 75,
    item2: 340,
    item3: 173960
  }, {
    center: [55.75132606, 37.53265369],
    geometryCord: [[[55.75031377, 37.53318981], [55.75174180, 37.53298514], [55.75174180, 37.53309243], [55.75215326, 37.53302805], [55.75216536, 37.53289931], [55.75229848, 37.53289931], [55.75232268, 37.53287785], [55.75245580, 37.53287785], [55.75248000, 37.53285639], [55.75262522, 37.53283493], [55.75263732, 37.53247015], [55.75202014, 37.53208391], [55.75099149, 37.53221266], [55.75099149, 37.53249161], [55.75088257, 37.53249161], [55.75088257, 37.53251307], [55.75076155, 37.53266327], [55.75058002, 37.53266327], [55.75058002, 37.53268473], [55.75048320, 37.53268473], [55.75045900, 37.53272764], [55.75030167, 37.53272764], [55.75031377, 37.53318981]]],
    image: '/staticfiles/img/bars/sev.jpg',
    alt: 'Северная Башня',
    title: 'Северная Башня',
    item1: 27,
    item2: 108,
    item3: 135000
  }, {
    center: [55.75113243, 37.53370512],
    geometryCord: [[[55.75085408, 37.53342617], [55.75136236, 37.53336179], [55.75139867, 37.53404844], [55.75086618, 37.53411281], [55.75085408, 37.53394115], [55.75082988, 37.53394115], [55.75081777, 37.53366220], [55.75084198, 37.53364074], [55.75085408, 37.53342617]]],
    image: '/staticfiles/img/bars/neva.jpg',
    alt: 'Neva 1',
    title: 'Neva 1',
    item1: 79,
    item2: 345,
    item3: 206932
  }, {
    center: [55.75156809, 37.53533590],
    geometryCord: [[[55.75142287, 37.53499258], [55.75170121, 37.53497112], [55.75171331, 37.53567922], [55.75165280, 37.53567922], [55.75164070, 37.53572214], [55.75154389, 37.53574359], [55.75153179, 37.53570068], [55.75144707, 37.53570068], [55.75142287, 37.53499258]]],
    image: '/staticfiles/img/bars/neva.jpg',
    alt: 'Neva 2',
    title: 'Neva 2',
    item1: 68,
    item2: 302,
    item3: 142300
  }];
  if ($('#map').length > 0) {
    var init = function init() {
      // Создание карты.
      myMap = new ymaps.Map("map", {
        center: [55.74866991, 37.53878930],
        zoom: 16,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      });
      for (var i = 0; i < groups.length; i++) {
        barsContent = '' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item1 + '</span>' + '<span>этажей</span>' + '</li>' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item2 + '</span>' + '<span>метров</span>' + '</li>' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item3 + '</span>' + '<span>общая площадь, м²</span>' + '</li>';
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="bars-content__item-wrapper">' + '<a class="bars-content__item-close" href="#">&#10006;</a>' + '<div class="bars-content__item-triangle"></div>' + '<div class="bars-content__item" style="background-image:url(' + groups[i].image + ');">' + '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' + '</div>' + '</div>', {
          build: function build() {
            this.constructor.superclass.build.call(this);
            this._$element = $('.bars-content__item-wrapper', this.getParentElement());
            this.applyElementOffset();
            this._$element.find('.bars-content__item-close').on('click', $.proxy(this.onCloseClick, this));
          },
          clear: function clear() {
            this._$element.find('.bars-content__item-close').off('click');
            this.constructor.superclass.clear.call(this);
          },
          onSublayoutSizeChange: function onSublayoutSizeChange() {
            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
            if (!this._isElement(this._$element)) {
              return;
            }
            this.applyElementOffset();
            this.events.fire('shapechange');
          },
          applyElementOffset: function applyElementOffset() {
            this._$element.css({
              left: -(this._$element[0].offsetWidth / 2) - this._$element[0].offsetWidth / 2,
              top: -(this._$element[0].offsetHeight + this._$element.find('.bars-content__item-triangle')[0].offsetHeight)
            });
          },
          onCloseClick: function onCloseClick(e) {
            e.preventDefault();
            this.events.fire('userclose');
          },
          getShape: function getShape() {
            if (!this._isElement(this._$element)) {
              return MyBalloonLayout.superclass.getShape.call(this);
            }
            var position = this._$element.position();
            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.bars-content__item-triangle')[0].offsetHeight]]));
          },
          _isElement: function _isElement(element) {
            return element && element[0] && element.find('.bars-content__item-triangle')[0];
          }
        });
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<div class="bars-content__item-title">$[properties.balloonHeader]</div>' + '<ul class="bars-content__item-inf">$[properties.balloonContent]</ul>');
        myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Polygon",
            coordinates: groups[i].geometryCord,
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
          },
          // Описываем свойства геообъекта.
          properties: {
            // Содержимое балуна.
            balloonHeader: groups[i].title,
            balloonContent: barsContent,
            hintContent: groups[i].alt
          }
        }, {
          fillColor: '#909090',
          strokeColor: '#696969',
          strokeWidth: 3,
          strokeStyle: 'solid',
          balloonShadow: false,
          balloonLayout: MyBalloonLayout,
          balloonContentLayout: MyBalloonContentLayout,
          balloonPanelMaxMapArea: 0
        });
        if (window.matchMedia('(max-width: 767.98px)').matches) {
          var newCenter = groups[i].center;
          myGeoObject.events.add('click', function () {
            myMap.setCenter(newCenter, 16);
          });
        }

        // Добавляем многоугольник на карту.
        myMap.geoObjects.add(myGeoObject);
      }

      // myMap.events.add('boundschange', function() {
      //     myMap.balloon.setPosition(myMap.getCenter());
      //     // myMap.center(myMap.getCenter());
      // });
    };
    ymaps.ready(init);
  }
  ;
});