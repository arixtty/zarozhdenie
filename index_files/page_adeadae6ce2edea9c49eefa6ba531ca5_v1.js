
; /* Start:"a:4:{s:4:"full";s:50:"/local/templates/empty/js/script.js?16114945111407";s:6:"source";s:35:"/local/templates/empty/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Select form */

$('select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/templates/empty/js/slider.js?1611494757909";s:6:"source";s:35:"/local/templates/empty/js/slider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: false,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "vertical",
    spaceBetween: 5,
});

var galleryMain = new Swiper(".gallery-main", {

    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },

    thumbs: {
        swiper: galleryThumbs,
    },
});

galleryMain.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on("transitionStart", function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});

/* End */
;; /* /local/templates/empty/js/script.js?16114945111407*/
; /* /local/templates/empty/js/slider.js?1611494757909*/
