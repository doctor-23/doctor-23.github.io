
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
