function banText(event) {
    var banText = parseFloat(event.key);

    if (isNaN(banText)) {
        event.preventDefault();
    }
}

function getStyle(elem) {
    if (window.getComputedStyle) return getComputedStyle(elem, null);
    else return elem.currentStyle;
}

var removeSpaces = (str) => str.replace(/\s+/g, '');

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
} // функция для сортировки массивов

@@include('_customSelect.js');
@@include('_clickOutside.js');
@@include('_offersSlider.js');
@@include('_validation&masks.js');



function resetSortingTable() {
    $('.table').find('.table-head__item').each(function () {
        $(this).find('[name="table_sort"]').prop('checked',false);
        $(this).find('[name="table_sort"]').removeClass('onSorting');
    })

    return false;
} // сброс сортировки в таблице

@@include('_pagination.js');
@@include('_tabsSwitch.js');
