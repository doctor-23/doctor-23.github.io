class Accordion {
    constructor(selector, multiple) {
        this.el = document.querySelector(selector);
        this.multiple = multiple;
        this.bindEvents();
    }

    bindEvents() {
        const headings = this.el.querySelectorAll('.heading');
        headings.forEach(heading => {
            heading.addEventListener('click', () => {
                const parent = heading.parentElement;

                if (!this.multiple) {
                    this.closeOthers(parent);
                }

                if (parent.classList.contains('open')) {
                    this.close(parent);
                } else {
                    this.open(parent);
                }
            });
        });
    }

    open(element) {
        element.classList.add('open');
        // CSS транзиции обрабатывают изменения, поэтому JavaScript здесь изменяет только классы
    }

    close(element) {
        element.classList.remove('open');
        // Аналогично, плавное закрытие обрабатывается через CSS
    }

    closeOthers(currentElement) {
        // Закрываем все аккордеоны, кроме текущего
        const allElements = this.el.querySelectorAll('.accordion-item');
        allElements.forEach(element => {
            if (element !== currentElement) {
                this.close(element);
            }
        });
    }
}
