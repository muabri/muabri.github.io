$(document).on('ready', function () {
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
                "Objective : Traffic",
                "1 Ad Group",
                "Free 1 Adtext Responsive",
                "Free 2 Adtext Static",
                "Free AdExtention",
                "4 Keyword Broad",
                "3 Keyword Exact",
                "3 Keyword Phrase",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 7 Days*"
            ],
            "Basic",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Basic%20Plan"
        ],
        [
            "1Jt/bln",
            "3Jt/bln",
            "1Jt/bln",
            [
                "Objective : Traffic",
                "1 Ad Group",
                "Free 1 Adtext Responsive",
                "Free 3 Adtext Static",
                "Free AdExtention",
                "5 Keyword Broad",
                "5 Keyword Exact",
                "5 Keyword Phrase",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 7-14 Days*"
            ],
            "Starter",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Starter%20Plan"
        ],
        [
            "3Jt/bln",
            "5Jt/bln",
            "2,5Jt/bln",
            [
                "Objective : Traffic, Leads",
                "1 Ad Group",
                "Free 1 Adtext Responsive",
                "Free 5 Adtext Static",
                "Free AdExtention",
                "10 Keyword Broad",
                "10 Keyword Exact",
                "10 Keyword Phrase",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 14-30 Days*"
            ],
            "Small Medium",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Small%20Medium%20Plan"
        ],
        [
            "5Jt/bln",
            "7Jt/bln",
            "3,5Jt/bln",
            [
                "Objective : Traffic, Leads",
                "2 Ad Group",
                "Free 2 Adtext Responsive/Ad Group",
                "Free 5 Adtext Static/Ad Group",
                "Free AdExtention",
                "20 Keyword Broad",
                "20 Keyword Exact",
                "20 Keyword Phrase",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Professional",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Professional%20Plan"
        ],
        [
            "7Jt/bln",
            "10Jt/bln",
            "5Jt/bln",
            [
                "Objective : Traffic, Leads",
                "3 Ad Group",
                "Free 2 Adtext Responsive/Ad Group*",
                "Free 5 Adtext Static/Ad Group*",
                "Free AdExtention",
                "Unlimited Keywords*",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Startup",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Startup%20Plan"
        ],
        [
            "10Jt/bln",
            "20Jt/bln",
            "7Jt/bln",
            [
                "Objective : Traffic, Leads",
                "2 Campaigns (Different Objective)",
                "3 Ad Group/Campaign",
                "Free 3 Adtext Responsive/Ad Group*",
                "Free 5 Adtext Static/Ad Group*",
                "Free AdExtention",
                "Unlimited Keywords*",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Small Enterprise",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Small%20Enterprise%20Plan"
        ],
        [
            "20Jt/bln",
            "50Jt/bln",
            "10Jt/bln",
            [
                "Objective : Traffic, Leads",
                "3 Campaigns (Different Objective)",
                "2 Ad Group/Campaign",
                "Free 3 Adtext Responsive/Ad Group*",
                "Free 5 Adtext Static/Ad Group*",
                "Free AdExtention",
                "Unlimited Keywords*",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Free Shopee Collaborative",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Enterprise",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Enterprise%20Plan"
        ],
        [
            "50Jt/bln",
            "100Jt/bln",
            "13Jt/bln",
            [
                "Objective : Traffic, Leads",
                "Unlimited Campaigns",
                "Unlimited Ad Group",
                "Unlimited Ad Text (Static & Responsive)",
                "Unlimited Keywords",
                "Unlimited AdExtension",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Free Shopee Collaborative",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Big Company",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Big%20Company%20Plan"
        ],
        [
            "100Jt/bln",
            "Unlimited",
            "Custom",
            [
                "Objective : Custom",
                "Unlimited Campaigns",
                "Unlimited Ad Group",
                "Unlimited Ad Text (Static & Responsive)",
                "Unlimited Keywords",
                "Unlimited AdExtension",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Free Shopee Collaborative",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Custom",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Search%20-%20Custom%20Plan"
        ],
        ],
        onChange: function (data) {
            $("#rangeSliderResult").text(data.from_value[0]);
            $("#maximumAds").text(data.from_value[1]);
            $("#feeAds").text(data.from_value[2]);
            $("#paket").text(data.from_value[4]);
            $("#dc-gads-search-wa").attr("href", data.from_value[5]);

            // Show Extends Feature
            $("#div-feature-10").hide();
            $("#div-feature-11").hide();
            $("#div-feature-12").hide();
            $("#div-feature-13").hide();
            $("#div-feature-14").hide();
            $("#div-feature-15").hide();
            $("#div-feature-16").hide();
            if (data.from_value[3].length > 9) {
                $("#div-feature-10").show();
            }
            if (data.from_value[3].length > 10) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
            }
            if (data.from_value[3].length > 11) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
                $("#div-feature-12").show();
            }
            if (data.from_value[3].length > 12) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
                $("#div-feature-12").show();
                $("#div-feature-13").show();
            }
            if (data.from_value[3].length > 13) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
                $("#div-feature-12").show();
                $("#div-feature-13").show();
                $("#div-feature-14").show();
            }
            if (data.from_value[3].length > 14) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
                $("#div-feature-12").show();
                $("#div-feature-13").show();
                $("#div-feature-14").show();
                $("#div-feature-15").show();
            }
            if (data.from_value[3].length > 15) {
                $("#div-feature-10").show();
                $("#div-feature-11").show();
                $("#div-feature-12").show();
                $("#div-feature-13").show();
                $("#div-feature-14").show();
                $("#div-feature-15").show();
                $("#div-feature-16").show();
            }

            // Loop Show Feature
            jQuery.each(data.from_value[3], function (index, value) {
                $("#feature-" + (index + 1)).text(value)
            });
        }
    });

    $("#slider2").ionRangeSlider({
        extra_classes: "range-slider-custom",
        type: "single",
        values: [
        [
            "500Rb/bln",
            "1Jt/bln",
            "500Rb/bln",
            [
                "Objective : Awareness",
                "1 Ad Group",
                "Free 1 Display Responsive",
                "Unlimited Audience*",
                "Unlimited Audience*",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 7 Days*"
            ],
            "Basic",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Basic%20Plan"
        ],
        [
            "1Jt/bln",
            "3Jt/bln",
            "1Jt/bln",
            [
                "Objective : Awareness",
                "1 Ad Group",
                "Free 1 Display Responsive",
                "Free 3 Static Ads (Mobile Display)",
                "Unlimited Audience*",
                "Unlimited Placement*",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 7-14 Days*"
            ],
            "Starter",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Starter%20Plan"
        ],
        [
            "3Jt/bln",
            "5Jt/bln",
            "2,5Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "1 Ad Group",
                "Free 1 Display Responsive",
                "Free 3 Static Ads (Mobile Display)",
                "Unlimited Audience*",
                "Unlimited Placement*",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 14-30 Days*"
            ],
            "Small Medium",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Small%20Medium%20Plan"
        ],
        [
            "5Jt/bln",
            "7Jt/bln",
            "3,5Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "1 Ad Group",
                "Free 1 Display Responsive",
                "Free 3 Static Ads (Mobile Display)",
                "Free 7 Static Ads (Leaderboard)",
                "Unlimited Audience*",
                "Unlimited Placement*",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Professional",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Professional%20Plan"
        ],
        [
            "7Jt/bln",
            "10Jt/bln",
            "5Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "1 Ad Group",
                "Free 1 Display Responsive",
                "Free 3 Static Ads (Mobile Display)",
                "Free 7 Static Ads (Leaderboard)",
                "Free 4 Static Ads (Skyscraper)",
                "Unlimited Audience*",
                "Unlimited Placement*",
                "Free Consultation",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Startup",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Startup%20Plan"
        ],
        [
            "10Jt/bln",
            "20Jt/bln",
            "7Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "1 Ad Group",
                "Free 2 Display Responsive",
                "Free 3 Static Ads (Mobile Display)",
                "Free 7 Static Ads (Leaderboard)",
                "Free 4 Static Ads (Skyscraper)",
                "Free 8 Static Ads (Square & Rectangles)",
                "Unlimited Audience*",
                "Unlimited Placement*",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Small Enterprise",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Small%20Enterprise%20Plan"
        ],
        [
            "20Jt/bln",
            "50Jt/bln",
            "10Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "2 Campaign",
                "1 Ad Group Image Only",
                "Free 1 Display Responsive / Ad Group",
                "Free 3 Static Ads (Mobile Display) / Ad Group",
                "Free 7 Static Ads (Leaderboard) / Ad Group",
                "Free 4 Static Ads (Skyscraper) / Ad Group",
                "Free 8 Static Ads (Square & Rectangles) / Ad Group",
                "1 Ad Group Animated Ads (GIF)",
                "Free 3 Static Ads (Mobile Display) / Ad Group",
                "Free 7 Static Ads (Leaderboard) / Ad Group",
                "Free 4 Static Ads (Skyscaper) / Ad Group",
                "Free 8 Static Ads (Square & Rectangles) / Ad Group",
                "Unlimited Audience* / Ad Group",
                "Unlimited Placement* / Ad Group",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Free Setup Campaign on Google Discovery",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Enterprise",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Enterprise%20Plan"
        ],
        [
            "50Jt/bln",
            "100Jt/bln",
            "13Jt/bln",
            [
                "Objective : Awareness, Traffic, Retargeting",
                "3 Campaign",
                "1 Ad Group Image Only",
                "Free 1 Display Responsive / Ad Group",
                "Free 3 Static Ads (Mobile Display) / Ad Group",
                "Free 7 Static Ads (Leaderboard) / Ad Group",
                "Free 4 Static Ads (Skyscraper) / Ad Group",
                "Free 8 Static Ads (Square & Rectangles) / Ad Group",
                "1 Ad Group Animated Ads (GIF)",
                "Free 3 Static Ads (Mobile Display) / Ad Group",
                "Free 7 Static Ads (Leaderboard) / Ad Group",
                "Free 4 Static Ads (Skyscraper) / Ad Group",
                "Free 8 Static Ads (Square & Rectangles) / Ad Group",
                "Unlimited Audience* / Ad Group",
                "Unlimited Placement* / Ad Group",
                "Free Consultation",
                "Free Setup Google Tag Manager",
                "Free Setup Campaign on Google Discovery",
                "Keyword by Google Recommendation",
                "Campaign Running 30 Days*"
            ],
            "Big Company",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Big%20Company%20Plan"
        ],
        [
            "100Jt/bln",
            "Unlimited",
            "Custom",
            [
                "Custom Ads Group",
                "Custom Ads Campaign",
                "Custom Display Responsive",
                "Custom Static Ads (Mobile Display)",
                "Custom Static Ads (Leaderboard)",
                "Custom Static Ads (Skyscaper)",
                "Keyword by Google",
                "Custom Static Ads (Square & Rectangles)",
                "Custom Audience",
                "Free Consultation",
                "Custom Placement",
                "Objective : Custom",
                "Running 30 Days",
                "Free Setup Google Tag Manager",
                "Free Setup Campaign on Google Discovery"
            ],
            "Custom",
            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Google%20Display%20-%20Custom%20Plan"
        ],
        ],
        onChange: function (data) {
            $("#rangeSliderResult2").text(data.from_value[0]);
            $("#maximumAds2").text(data.from_value[1]);
            $("#feeAds2").text(data.from_value[2]);
            $("#paket2").text(data.from_value[4]);
            $("#dc-gads-display-wa").attr("href", data.from_value[5]);

            // Show Extends Feature
            $("#div-feature-second-9").hide();
            $("#div-feature-second-10").hide();
            $("#div-feature-second-11").hide();
            $("#div-feature-second-12").hide();
            $("#div-feature-second-13").hide();
            $("#div-feature-second-14").hide();
            $("#div-feature-second-15").hide();
            $("#div-feature-second-16").hide();
            $("#div-feature-second-17").hide();
            $("#div-feature-second-18").hide();
            $("#div-feature-second-19").hide();
            $("#div-feature-second-20").hide();
            if (data.from_value[3].length > 8) {
                $("#div-feature-second-9").show();
            }
            if (data.from_value[3].length > 9) {
                $("#div-feature-second-10").show();
            }
            if (data.from_value[3].length > 10) {
                $("#div-feature-second-11").show();
            }
            if (data.from_value[3].length > 11) {
                $("#div-feature-second-12").show();
            }
            if (data.from_value[3].length > 12) {
                $("#div-feature-second-13").show();
            }
            if (data.from_value[3].length > 13) {
                $("#div-feature-second-14").show();
            }
            if (data.from_value[3].length > 14) {
                $("#div-feature-second-15").show();
            }
            if (data.from_value[3].length > 15) {
                $("#div-feature-second-16").show();
            }
            if (data.from_value[3].length > 16) {
                $("#div-feature-second-17").show();
            }
            if (data.from_value[3].length > 17) {
                $("#div-feature-second-18").show();
            }
            if (data.from_value[3].length > 18) {
                $("#div-feature-second-19").show();
            }
            if (data.from_value[3].length > 19) {
                $("#div-feature-second-20").show();
            }

            // Loop Show Feature
            jQuery.each(data.from_value[3], function (index, value) {
                $("#feature-second-" + (index + 1)).text(value)
            });
        }
    });
    // END Slider Pricing
});
