function clickOutside(el, btn, cl) {
    var element = document.querySelector(el),
        button = document.querySelector(btn);

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
