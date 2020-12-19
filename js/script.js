'use strict';

( function() {

/* плавная прокрутка с отступом сверху для фикс.шапки */

const navMenu = document.querySelector('nav.main');

// отступ
const topOffset = navMenu.offsetHeight + 12;

// основное меню
navMenu.querySelectorAll('a[href^="#"').forEach(link => {
   link.addEventListener('click', onClickAnchor);
});

// внутренние ссылки на якоря
document.querySelectorAll('.to-anchor').forEach(link => {
   link.addEventListener('click', onClickAnchor);
});


/**
 * Плавная прокрутка к секцци по ее якорю
 */
function onClickAnchor(evt)  {
    evt.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    setActiveMenu(this, scrollTarget);

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/**
 * Установка нового активного пункта меню
 */
function setActiveMenu(elem, target)
{
    let currentMenu = navMenu.querySelector('.active');
    if (currentMenu){
        currentMenu.classList.remove("active");
    }

    let targetMenu;
    if (elem.classList.contains('to-anchor')) {
        targetMenu = navMenu.querySelector('a[href^="#'+target.id+'"');
    } else {
        targetMenu = elem.parentElement;
    }
    targetMenu.classList.add("active");
}

})();