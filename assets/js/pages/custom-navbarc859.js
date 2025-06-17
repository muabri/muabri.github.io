$(document).on('ready', function () {

    // Check Scroll after reload
    var scroll = $(window).scrollTop();
    if (scroll <= 5) {
        $("#header").addClass("sticky-custom");
    } else {
        $("#header").removeClass("sticky-custom");
    }

    // Scroll Page
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 5) {
            $("#header").addClass("sticky-custom");
        } else {
            $("#header").removeClass("sticky-custom");
        }
    });

    // Close Announce Information
    $("#close-announce").click(function () {
        $("#header").removeClass("sticky-custom");
    });
});
