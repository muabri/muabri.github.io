$(document).on('ready', function () {
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

    // INITIALIZATION OF FANCYBOX
    // =======================================================
    $('.js-fancybox').each(function () {
        var fancybox = $.HSCore.components.HSFancyBox.init($(this));
    });

    // INITIALIZATION OF SLICK CAROUSEL
    // =======================================================
    $('.js-slick-carousel').each(function () {
        var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });

    // Change Pricing
    $('input[name=selectPricing]').on("change", function () {
        var value = $(this).val();
        if (value == "instagram") {
            $('#facebook, #youtube, #tiktok').fadeOut(1, function () {
                $('#instagram').fadeIn(900);
            });
            $("#facebook-button, #youtube-button, #tiktok-button").addClass("disabledbutton").delay(1000).queue(function () {
                $(this).removeClass("disabledbutton").dequeue();
            });
        } else if (value == "facebook") {
            $('#instagram, #youtube, #tiktok').fadeOut(1, function () {
                $('#facebook').fadeIn(900);
            });
            $("#instagram-button, #youtube-button, #tiktok-button").addClass("disabledbutton").delay(1000).queue(function () {
                $(this).removeClass("disabledbutton").dequeue();
            });
        } else if (value == "youtube") {
            $('#instagram, #facebook, #tiktok').fadeOut(1, function () {
                $('#youtube').fadeIn(900);
            });
            $("#instagram-button, #facebook-button, #tiktok-button").addClass("disabledbutton").delay(1000).queue(function () {
                $(this).removeClass("disabledbutton").dequeue();
            });
        } else if (value == "tiktok") {
            $('#instagram, #youtube, #facebook').fadeOut(1, function () {
                $('#tiktok').fadeIn(900);
            });
            $("#instagram-button, #youtube-button, #facebook-button").addClass("disabledbutton").delay(1000).queue(function () {
                $(this).removeClass("disabledbutton").dequeue();
            });
        }
    });

    // Download File PDF - Company Profile / Rate Card
    $('.download-file').on('click', function () {
        var value = $(this).data('value');

        // Check Value
        if (value == "compro") {
            var title_download = 'GoSocial Company Profile';
            var btn_download = 'Company Profile';
            var link = 'compro';
        } else if (value == "smm") {
            var title_download = 'Social Media Management Rate Card';
            var btn_download = 'Rate Card';
            var link = 'smm';
        } else {
            var title_download = 'GoSocial Company Profile';
            var btn_download = 'Company Profile';
            var link = 'compro';
        }

        // Set Text
        $('#form_download').attr('action', BASE_URL + '/download/' + link)
        $('#title_download').text(title_download)
        $('#btn_download').text(btn_download)

        // Show Modal
        $('#modalDownloadPdf').modal('show')
    });

    console.log('a');
});

// Captcha Schedule Meeting
var correctCaptcha_download = function () {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptch not verified
    } else {
        $('#submit_download').attr("disabled", false);
    }
};
