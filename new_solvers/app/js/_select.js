function customSelect(containers, title, content, label, radio, show) {
    const allContainers = document.querySelectorAll(containers);

    function calculateLabelHeight(labels, show) {
        let labelHeight = 0;

        for (let i = 0; i < labels.length; i++) {
            if (i < show) {
                labelHeight += labels[i].offsetHeight;
            } else {
                break;
            }
        }

        return labelHeight;
    }

    allContainers.forEach(function (container) {
        const labels = container.querySelectorAll(label);
        const contentEl = container.querySelector(content);
        const titleEl = container.querySelector(title);
        const labelHeight = calculateLabelHeight(labels, show);

        if (show) {
            if (labels.length <= show) {
                contentEl.classList.add('no-scroll');
            }

            contentEl.style.maxHeight = labelHeight + 32 + 'px';
        }

        container.addEventListener('click', function(event) {
            const mainParent = event.target.closest(containers);
            const currentTitle = title.replaceAll('.', '');
            const currentRadio = radio.replaceAll('.', '');
            const currentLabel = label.replaceAll('.', '');

            if (event.target.classList.contains(currentRadio) || event.target.classList.contains(currentLabel)) {
                const content = event.target.textContent;

                mainParent.classList.add('active');
                titleEl.textContent = content;
                mainParent.classList.remove('open');

            } else if (event.target.classList.contains(currentTitle)) {

                if (!mainParent.classList.contains('open')) {
                    mainParent.classList.add('open');
                } else {
                    mainParent.classList.remove('open');
                }

                allContainers.forEach(container => {
                    if (container !== mainParent) {
                        container.classList.remove('open');
                    }
                });
            }
        }, true);

    })

    document.addEventListener('click', function(event) {
        const target = event.target;

        if (!target.closest(containers)) {
            allContainers.forEach(container => {
                container.classList.remove('open');
            });
        }
    });
}
