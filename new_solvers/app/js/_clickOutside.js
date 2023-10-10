// клик вне элемента
function clickOutside(el, btn, cl) {
    let element = typeof el === 'object' ? el : document.querySelector(el);
    let button = typeof btn === 'object' ? btn : document.querySelector(btn);

    document.addEventListener('click', e => {
        let target = e.target;
        let itsEl = target == element || element.contains(target);
        let its_btn = target == button;
        let its_el_is_open = element.classList.contains(cl);

        if (!itsEl && !its_btn && its_el_is_open) {
            element.classList.toggle(cl);
        }
    });
}

function handleClickOutside(element, callback) {

    function handleDocumentClick(event) {
        const isClickInsideElement = element.contains(event.target);
        if (!isClickInsideElement) {
            callback();
        }
    }

    document.addEventListener("click", handleDocumentClick);

    return function cleanup() {
        document.removeEventListener("click", handleDocumentClick);
    };
}
