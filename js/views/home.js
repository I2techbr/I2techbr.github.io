jQuery(document).ready(function () {

    'use strict';

    if (jQuery('#rev_slider_container').revolution === undefined) {
        revslider_showDoubleJqueryError('#rev_slider_container');
    } else {
        jQuery('#rev_slider_container').show().revolution({
            sliderType: 'standard',
            jsFileLocation: "/lib/slider-revolution/js/",
            dottedOverlay: 'none',
            delay: 9000,
            navigation: {
                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                mouseScrollNavigation: 'off',
                mouseScrollReverse: 'default',
                onHoverStop: 'on',
                touch: {
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: false
                },
                arrows: {
                    style: 'hades',
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    left: {
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: 'uranus',
                    hide_onleave: false,
                    direction: 'horizontal',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }
            },
            viewPort: {
                enable: true,
                outof: 'pause',
                visible_area: '80%',
                presize: false
            },
            gridwidth: 1170,
            gridheight: [800, 600, 'auto', 'auto'],
            responsiveLevels: [1920, 1441, 0, 0],
            lazyType: 'none',
            parallax: {
                type: 'mouse+scroll',
                origo: 'slidercenter',
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                disable_onmobile: 'on'
            },
            shadow: 0,
            spinner: 'spinner0',
            autoHeight: 'off',
            shuffle: 'off',
            disableProgressBar: 'off',
            hideThumbsOnMobile: 'on',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: 'off',
                nextSlideOnWindowFocus: 'off',
                disableFocusListener: false
            }

        });
    }

    var formContato = $('#formContato');
    var formContatoValidator = formContato.validate();

    formContato.on('post-success', function (e, response) {
        showNotification('success', 'Contato enviado!');
        formContatoValidator.clearForm();
    });

    formContato.on('submit', function (e) {
        $(this).post(e);
    });
});