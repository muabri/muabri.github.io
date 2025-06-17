$(document).on('ready', function () {
    // INITIALIZATION OF VIDEO PLAYER
    // =======================================================
    $('.js-inline-video-player').each(function () {
        var videoPlayer = new HSVideoPlayer($(this)).init();
    });

    // INITIALIZATION OF SLICK CAROUSEL
    // =======================================================
    $('.js-slick-carousel').each(function () {
        var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });

    // INITIALIZATION OF FANCYBOX
    // =======================================================
    $('.js-fancybox').each(function () {
        var fancybox = $.HSCore.components.HSFancyBox.init($(this));
    });


    // Hover Jenis Fotografi
    $('.jenis-fotografi').hover(function () {
        $(this).find("input").prop('checked', true);
    }, function () {
        $(this).find("input").prop('disabled', false);
    });

    // Change Pricing
    $('#selectPricing').on("change", function () {
        var checked = $(this).is(':checked');
        if (checked) {
            $('#non-model').fadeOut(1, function () {
                $('#model').fadeIn(900);
            });
            $('#selectPricing').attr("disabled", true).delay(900).queue(function (nxt) {
                $(this).attr('disabled', false);
                nxt();
            });
        } else {
            $('#model').fadeOut(1, function () {
                $('#non-model').fadeIn(900);
            });
            $('#selectPricing').attr("disabled", true).delay(900).queue(function (nxt) {
                $(this).attr('disabled', false);
                nxt();
            });
        }
    });
});


// Slider Pricing
var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
var slideIndex5 = 1;
var slideIndex6 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);
showSlides6(slideIndex6);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activedot";
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" activedot", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " activedot";
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {
        slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides3.length
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" activedot", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " activedot";
}

function showSlides4(n) {
    var i;
    var slides4 = document.getElementsByClassName("mySlides4");
    var dots4 = document.getElementsByClassName("dot4");
    if (n > slides4.length) {
        slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides4.length
    }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" activedot", "");
    }
    slides4[slideIndex4 - 1].style.display = "block";
    dots4[slideIndex4 - 1].className += " activedot";
}

function showSlides5(n) {
    var i;
    var slides5 = document.getElementsByClassName("mySlides5");
    var dots5 = document.getElementsByClassName("dot5");
    if (n > slides5.length) {
        slideIndex5 = 1
    }
    if (n < 1) {
        slideIndex5 = slides5.length
    }
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    for (i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" activedot", "");
    }
    slides5[slideIndex5 - 1].style.display = "block";
    dots5[slideIndex5 - 1].className += " activedot";
}

function showSlides6(n) {
    var i;
    var slides6 = document.getElementsByClassName("mySlides6");
    var dots6 = document.getElementsByClassName("dot6");
    if (n > slides6.length) {
        slideIndex6 = 1
    }
    if (n < 1) {
        slideIndex6 = slides6.length
    }
    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }
    for (i = 0; i < dots6.length; i++) {
        dots6[i].className = dots6[i].className.replace(" activedot", "");
    }
    slides6[slideIndex6 - 1].style.display = "block";
    dots6[slideIndex6 - 1].className += " activedot";
}

// END Slider Pricing
