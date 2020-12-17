'use strict';

( function() {

/* плавная прокрутка с отступом сверху для фикс.шапки */
const topOffset = document.querySelector('nav.main').offsetHeight + 12;
document.querySelectorAll('nav.main a[href^="#"').forEach(link => {

    link.addEventListener('click', function(evt) {
        evt.preventDefault();

        let href = this.getAttribute('href').substring(1);

        document.querySelector('nav.main .active').classList.remove("active");
        const currentMenu = this.parentElement;
        currentMenu.classList.add("active");

        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

})();