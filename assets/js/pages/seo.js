$(document).on('ready', function () {
    // INITIALIZATION OF VIDEO PLAYER
    // =======================================================
    $('.js-inline-video-player').each(function () {
        var videoPlayer = new HSVideoPlayer($(this)).init();
    });
    // INITIALIZATION OF FORM VALIDATION
    // =======================================================
    $('.js-validate').each(function () {
        $.HSCore.components.HSValidation.init($(this));
    });
    // INITIALIZATION OF AOS
    // =======================================================
    AOS.init({
        duration: 650,
        once: true
    });
    // INITIALIZATION OF TOGGLE SWITCH
    // =======================================================
    $('.js-toggle-switch').each(function () {
        var toggleSwitch = new HSToggleSwitch($(this)).init();
    });
    // INITIALIZATION OF SLICK CAROUSEL
    // =======================================================
    $('.js-slick-carousel').each(function () {
        var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });
    // INITIALIZATION OF FORM VALIDATION
    // =======================================================
    $('.js-validate').each(function () {
        var validation = $.HSCore.components.HSValidation.init($(this));
    });

    // Lihat selengkapnya Portfolio Section
    $('#more-portfolio-button').on('click', function () {
        $('#portfolio-section').slideDown(400)
        $('#more-portfolio-section').slideUp(100)
        $('html, body').animate({
            scrollTop: $("#more-portfolio-section").offset().top
        }, 500);
    });
    $('#less-portfolio-button').on('click', function () {
        $('#portfolio-section').slideUp(500)
        $('#more-portfolio-section').slideDown(600)
        $('html, body').animate({
            scrollTop: $("#portfolio-less").offset().top
        }, 500);
    });

    // Carousel Portfolio
    $('.carousel').carousel({
        interval: 2750
    })
});
