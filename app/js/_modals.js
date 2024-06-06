@@include('_form_handler.js');

document.addEventListener('click', function (e) {
    const target = e.target;
    const isOverlay = target.classList.contains('modal');
    const isCloseButton = target.classList.contains('modal__close') || target.closest('.modal__close');
    const button = target.classList.contains('btn') ? target : target.closest('.btn');
    let modal;

    if (isOverlay) {
        modal = target;
    }

    if (isCloseButton) {
        modal = target.closest('.modal');
    }

    if (modal) {
        // modal.querySelector('.modal__content').classList.remove('animated');
        fadeOut(modal, 215)
        document.body.classList.remove('no-scroll');
    }

    if (button) {
        const modalId = button.dataset.modal;

        if (modalId) {
            const modal = document.getElementById(modalId);
            const form = modal.querySelector('form');
            const selects = modal.querySelectorAll('.select');

            modal.style.display = 'block';
            modal.style.opacity = 1;
            document.body.classList.add('no-scroll');

            if (selects.length > 0) {
                selects.forEach(select => {
                    new CustomSelect('reinit', {
                        selectElement: select
                    })
                })
            }

            if (form) {
                new HandlerForm(form);
            }
        }
    }
});

