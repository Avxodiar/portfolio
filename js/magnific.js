/**
 * Плагин Magnific Popup
 */

$(document).ready(function() {
    // отображение pdf в popup окне
    let iframe = $('.magnific-iframe');
    if (iframe.length) {
        iframe.magnificPopup({
            type: 'iframe',
            alignTop: true,
            overflowY: 'auto',

            fixedContentPos: true,
            fixedBgPos: false,

            closeBtnInside: true,
            preloader: true,
            
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    // галерея в popup окне
    let gallery = $('.popup-gallery');
        if (gallery.length) {
        gallery.magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загружается изображение #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>designed by HTML Academy</small>';
                }
            }
        });
    }
});