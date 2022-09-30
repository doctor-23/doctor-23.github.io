function customSelect(container, title, content, label, radio, show) {
    document.querySelectorAll(container).forEach(function (item) {
        var labelHeight = item.querySelector(label).offsetHeight;

        item.querySelector(content).style.maxHeight = (labelHeight * show) + 16 + 'px';
    })

    $(container).on('click', label, function () {
        var content = $(this).find(radio).text(),
            mainParent = $(this).closest(container);

        mainParent.find(title).text(content);
        mainParent.removeClass('open');
    })

        .on('click', title, function () {
            if($(this).closest(container).hasClass('open')) {
                $(container).removeClass('open')
            } else {
                $(container).removeClass('open')
                $(this).closest(container).addClass('open');
            }
        });
} // кастомный select