<script>
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
</script>
