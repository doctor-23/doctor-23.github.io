function clickOutside(container, area, open) {
    $(function () {
        var i = 0;
        $(container).each(function () {
            i++;
            $(this).attr('data-name', 'wrapper__touch' + i);
        });

        $('[data-name="' + i + '"]').ready(function () {
            var thisAttr = $(this).find(area).parent();

            $(this).find('.wrapper__touch').click(function (event) {
                $('.wrapper__touch').not(this).parent().removeClass(open);
                $(this).parent().toggleClass(open);
            });

            $(document).on('click touchstart', function (e) {
                if (!$(e.target).closest(thisAttr).length) {
                    thisAttr.removeClass(open);
                }
            });
        });
    });

    // document.addEventListener('click', e => {
    //     let target = e.target;
    //     let its_sortPrice = target == sortPrice || sortPrice.contains(target);
    //     let its_sortPrice_is_open = sortPrice.hasAttribute('open');
    //
    //     if (!its_sortPrice && its_sortPrice_is_open) {
    //         $('.top_filter__select').removeAttr('open');
    //     }
    // });
} // клик вне элемента