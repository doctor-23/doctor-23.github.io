function phoneMask() {
    var phoneInput = $('[data-phone-mask=""]');

    phoneInput.inputmask({ mask: '+7 (999) 999-99-99' })
} // маска номера телефона

function emailMask() {
    var emailInput = $('[data-email-mask=""]');

    emailInput.inputmask({
        mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace('mailto:', '');
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: 'lower'
            }
        }
    });
} // маска email

function formNameValid(el, elCheck) {
    if(el.val().length < 2) {
        elCheck = false;
        el.addClass('validate-border');
        el.parent().find('.icon-wrapper')[0].style.display = 'none';
    } else {
        elCheck = true;
        el.removeClass('validate-border');
        el.parent().find('.icon-wrapper')[0].style.display = 'flex';
    }

    return elCheck;
} // функция валидации имени

function formPhoneValid(el, elCheck) {
    var validPhone = /_/;

    if (el.val().length === 0) {
        elCheck = false;
        el.addClass('validate-border');
        el.parent().find('.icon-wrapper')[0].style.display = 'none';
    } else {
        if (el.val().length > 0 && validPhone.test(el.val())) {
            elCheck = false;
            el.addClass('validate-border');
            el.parent().find('.icon-wrapper')[0].style.display = 'none';
        } else {
            if (el.val().length > 0 && !validPhone.test(el.val())) {
                elCheck = true;

                el.removeClass('validate-border');
                el.parent().find('.icon-wrapper')[0].style.display = 'flex';
            } else {
                elCheck = false;
            }
        }
    }

    return elCheck;
} // функция валидации телефона

function formEmailValid(el, elCheck) {
    var emailVal = el.val(),
        emailValid = emailVal.split('@');

    if (el.val().length > 0 && (el.val().match(/.+?\@.+\.+/g) || []).length === 1) {
        if(emailValid[0].length < 3) {
            el.addClass('validate-border');
            el.parent().find('.icon-wrapper')[0].style.display = 'none';
            elCheck = false;
        } else {
            el.removeClass('validate-border');
            el.parent().find('.icon-wrapper')[0].style.display = 'flex';
            elCheck = true;
        }
    } else {
        el.addClass('validate-border');
        el.parent().find('.icon-wrapper')[0].style.display = 'none';
        elCheck = false;
    }

    return elCheck;
} // функция валидации email