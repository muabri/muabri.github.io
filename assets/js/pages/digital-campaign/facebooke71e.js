$(document).on('ready', function () {
    // Scroll to pricing
    $("#show_pricing").click(function () {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 700);
    });

    // Lihat selengkapnya Addons
    $('#more-addons').on('click', function () {
        $('#more-addons-div').hide(200)
        $('#addons-div').show(400)
    });

    // Slider Pricing
    $("#slider").ionRangeSlider({
        extra_classes: "range-slider-custom",
        type: "single",
        values: [
            [
                "500Rb/bln",
                "1Jt/bln",
                "500Rb/bln",
                [
                    "Free 1 Ads Image Creative (Inc. Feed & Story)",
                    "Free 1 Caption Ads",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Free Consultation",
                    "Objective : Awareness, Engagement",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 1 Bulan"
                ],
                "Basic",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Basic%20Plan"
            ],
            [
                "1Jt/bln",
                "2Jt/bln",
                "1Jt/bln",
                [
                    "Free 2 Ads Image Creative (Inc. Feed & Story)",
                    "Free 2 Caption Ads",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Free Consultation",
                    "Objective : Engagement, Traffic",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 2 Bulan"
                ],
                "Starter"
            ],
            [
                "2Jt/bln",
                "5Jt/bln",
                "2Jt/bln",
                [
                    "Free 4 Ads Image Creative (Inc. Feed & Story)",
                    "Free 4 Caption Ads",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Free Consultation",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 2 Bulan"
                ],
                "Small Medium",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Small%20Medium%20Plan"
            ],
            [
                "5Jt/bln",
                "10Jt/bln",
                "3,5Jt/bln",
                [
                    "Free 5 Ads Image Creative (Inc. Feed & Story)",
                    "Free 1 Ads Video Creative (Inc. Feed & Story)",
                    "Free 6 Caption Ads",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Dedicated Report Google Data Studio",
                    "Free Consultation",
                    "Free Integrations with Shopee Collaborative Ads",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 3 Bulan"
                ],
                "Professional",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Professional%20Plan"
            ],
            [
                "10Jt/bln",
                "20Jt/bln",
                "5Jt/bln",
                [
                    "Free 5 Ads Image Creative (Inc. Feed & Story)",
                    "Free 2 Ads Video Creative (Inc. Feed & Story)",
                    "Free 7 Caption Ads",
                    "Free Setup Pixel / Google Tag Manager",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Dedicated Report Google Data Studio",
                    "Free Consultation",
                    "Free Integrations with Shopee Collaborative Ads",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 3 Bulan"
                ],
                "Startup",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Startup%20Plan"
            ],
            [
                "20Jt/bln",
                "50Jt/bln",
                "10Jt/bln",
                [
                    "Free 5 Ads Image Creative (Inc. Feed & Story)",
                    "Free 2 Ads Video Creative (Inc. Feed & Story)",
                    "Free 1 Carousel Ads (Inc. Feed & Story)",
                    "Free 8 Caption Ads",
                    "Free Setup Pixel / Google Tag Manager",
                    "Free Landing Page Product",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Dedicated Report Google Data Studio",
                    "Free Consultation",
                    "Free Integrations with Shopee Collaborative Ads",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 3 Bulan"
                ],
                "Smart Enterprise",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20BSmart%20Enterprise%20Plan"
            ],
            [
                "50Jt/bln",
                "100Jt/bln",
                "15Jt/bln",
                [
                    "Free 7 Ads Image Creative (Inc. Feed & Story)",
                    "Free 3 Ads Video Creative (Inc. Feed & Story)",
                    "Free 2 Carousel Ads (Inc. Feed & Story)",
                    "Free 12 Caption Ads",
                    "Free Setup Pixel / Google Tag Manager",
                    "Free Landing Page Product",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Dedicated Report Google Data Studio",
                    "Free Consultation",
                    "Free Integrations with Shopee Collaborative Ads",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 3 Bulan"
                ],
                "Enterprise",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Enterprise%20Plan"
            ],
            [
                "100Jt/bln",
                "Unlimited",
                "Custom",
                [
                    "Custom Ads Image Creative (Inc. Feed & Story)",
                    "Custom Ads Video Creative (Inc. Feed & Story)",
                    "Custom Carousel Ads (Inc. Feed & Story)",
                    "Custom Caption Ads",
                    "Free Setup Pixel / Google Tag Manager",
                    "Free Landing Page Product",
                    "Strategy & Analyst",
                    "Report in Internal Client Dashboard",
                    "Dedicated Report Google Data Studio",
                    "Free Consultation",
                    "Free Integrations with Shopee Collaborative Ads",
                    "Objective : All Objective",
                    "Unlimited Campaign*",
                    "Unlimited Adset*",
                    "Unlimited Ads*",
                    "Unlimited Product*",
                    "Minimal Contract 3 Bulan"
                ],
                "Custom",
                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Instagram%20-%20Custom%20Plan"
            ]

        ],
        onChange: function (data) {
            $("#rangeSliderResult").text(data.from_value[0]);
             $("#maximumAds").text(data.from_value[1]);
             $("#feeAds").text(data.from_value[2]);
             $("#paket").text(data.from_value[4]);
             $("#dc-fbads-wa1").attr("href", data.from_value[5]);

             // Show Extends Feature
             $("#div-feature-11").hide();
             $("#div-feature-12").hide();
             $("#div-feature-13").hide();
             $("#div-feature-14").hide();
             $("#div-feature-15").hide();
             $("#div-feature-16").hide();
             $("#div-feature-17").hide();
             if (data.from_value[3].length > 10 && data.from_value[3].length <= 12) {
                 $("#div-feature-11").show();
             }
             if (data.from_value[3].length > 12 && data.from_value[3].length <= 14) {

                $("#div-feature-11").show();
                $("#div-feature-12").show();                 
                $("#div-feature-13").show();
                $("#div-feature-14").show();
             }
             if (data.from_value[3].length > 14 && data.from_value[3].length <= 15) {

                $("#div-feature-11").show();
                $("#div-feature-12").show();                 
                $("#div-feature-13").show();
                $("#div-feature-14").show();
                $("#div-feature-15").show();
             }
             if (data.from_value[3].length > 15 && data.from_value[3].length <= 20) {
                $("#div-feature-11").show();
                $("#div-feature-12").show();
                $("#div-feature-13").show();
                 $("#div-feature-14").show();
                 $("#div-feature-15").show();
                 $("#div-feature-16").show();
                 $("#div-feature-17").show();
             }

             // Loop Show Feature
             jQuery.each(data.from_value[3], function (index, value) {
                 $("#feature-" + (index + 1)).text(value)
             });
        }
    });
    // END Slider Pricing
});
