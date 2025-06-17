$(document).on('ready', function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    })
});
