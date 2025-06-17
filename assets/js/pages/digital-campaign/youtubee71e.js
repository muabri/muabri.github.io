$(document).on('ready', function () {

    // Lihat selengkapnya Addons
    $('#more-addons').on('click', function () {
        $('#more-addons-div').hide(200)
        $('#addons-div').show(400)
    });


    // Slider Pricing
    $("#slider").ionRangeSlider({
        extra_classes: "range-slider-custom",
        type: "single",
        values : [
   [
       "250Rb/bln",
       "500Rb/bln",
       "250Rb/bln",
       [
           "Objective : Awareness",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free Consultation",
           "Campaign Running 7 Days*"
       ],
       "Basic",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Basic%20Plan"
   ],
   [
       "500Rb/bln",
       "1Jt/bln",
       "500Rb/bln",
       [
           "Objective : Awareness",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free Consultation",
           "Campaign Running 7 Days*"
       ],
       "Starter",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Starter%20Plan"
   ],
   [
       "1Jt/bln",
       "5Jt/bln",
       "1Jt/bln",
       [
           "Objective : Awareness, Traffic, Retargeting",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free Video Ads 15 - 30 sec",
           "Free Consultation",
           "Keyword by Google Recommendation",
           "Campaign Running 14-30 Days*"
       ],
       "Small Medium",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Small%20Medium%20Plan"
   ],
   [
       "5Jt/bln",
       "7Jt/bln",
       "3,5Jt/bln",
       [
           "Objective : Awareness, Traffic, Retargeting",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free 1 Material Video Ads 15 - 30 sec",
           "Free Consultation",
           "Free Setup Google Tag Manager",
           "Keyword by Google Recommendation",
           "Campaign Running 30 Days*"
       ],
       "Professional",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Professional%20Plan"
   ],
   [
       "7Jt/bln",
       "10Jt/bln",
       "5Jt/bln",
       [
           "Objective : Awareness, Traffic, Retargeting",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free 2 Material Video Ads 15 - 30 sec",
           "Free Consultation",
           "Free Setup Google Tag Manager",
           "Keyword by Google Recommendation",
           "Campaign Running 30 Days*"
       ],
       "Startup",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Startup%20Plan"
   ],
   [
       "10Jt/bln",
       "20Jt/bln",
       "7Jt/bln",
       [
           "Objective : Awareness, Traffic, Retargeting",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free 4 Material Video Ads 15 - 30 sec",
           "Free 1 Material Video Ads 30 - 60 sec",
           "Free Consultation",
           "Free Setup Google Tag Manager",
           "Keyword by Google Recommendation",
           "Campaign Running 30 Days*"
       ],
       "Smart Enterprise",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20BSmart%20Enterprise%20Plan"
   ],
   [
       "20Jt/bln",
       "50Jt/bln",
       "10Jt/bln",
       [
           "Objective : Awareness, Traffic, Retargeting",
           "1 Ad Group",
           "Unlimited Audience*",
           "Unlimited Placement*",
           "Free 4 Material Video Ads 15 - 30 sec",
           "Free 2 Material Video Ads 30 - 60 sec",
           "Free Consultation",
           "Free Setup Google Tag Manager",
           "Keyword by Google Recommendation",
           "Campaign Running 30 Days*"
       ],
       "Enterprise",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Enterprise%20Plan"
   ],
   [
       "100Jt/bln",
       "Unlimited",
       "Custom",
       [
            "Custom Objective",
            "Custom Ad Group",
            "Unlimited Audience*",
            "Unlimited Placement*",
            "Custom Material Video Ads 15 - 30 sec",
            "Custom Material Video Ads 30 - 60 sec",
            "Free Consultation",
            "Free Setup Google Tag Manager",
            "Custom Keyword",
            "Campaign Running 30 Days min.*"
       ],
       "Custom",
       "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0ASaya%20ingin%20konsultasi%20layanan%20Iklan%20Youtube%20-%20Custom%20Plan"
   ],
        ],
        onChange: function (data) {
            $("#rangeSliderResult").text(data.from_value[0]);
            $("#maximumAds").text(data.from_value[1]);
            $("#feeAds").text(data.from_value[2]);
            $("#paket").text(data.from_value[4]);
            $("#dc-ytads-wa1").attr("href", data.from_value[5]);

            // Show Extends Feature
            $("#div-feature-7").hide();
            $("#div-feature-8").hide();
            $("#div-feature-9").hide();
            $("#div-feature-10").hide();
            if (data.from_value[3].length > 6 ) {
                $("#div-feature-7").show();
            }

            if (data.from_value[3].length > 7 ) {
                $("#div-feature-7").show();
                $("#div-feature-8").show();
            }

            if (data.from_value[3].length > 8 ) {
                $("#div-feature-7").show();
                $("#div-feature-8").show();
                $("#div-feature-9").show();
            }

            if (data.from_value[3].length > 9 ) {
                $("#div-feature-7").show();
                $("#div-feature-8").show();
                $("#div-feature-9").show();
                $("#div-feature-10").show();
            }
            

            // Loop Show Feature
            jQuery.each(data.from_value[3], function (index, value) {
                $("#feature-" + (index + 1)).text(value)
            });
        }
    });
    // END Slider Pricing
});
