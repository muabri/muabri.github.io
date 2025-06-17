$(document).on('ready', function () {
    // INITIALIZATION OF CUBEPORTFOLIO
    // =======================================================
    $('.cbp2').each(function () {
        var cbp = $.HSCore.components.HSCubeportfolio.init($(this), {
            layoutMode: 'mosaic',
            filters: '#filterControls',
            displayTypeSpeed: 0
        });
    });

    // INITIALIZATION OF COUNTDOWNS
    // =======================================================
    $('.js-countdown').each(function () {
        var countdown = $.HSCore.components.HSCountdown.init($(this));
    });

    // Radio Button - Category Portfolio
    $('input[type=radio][name=category_portfolio]').change(function () {
        $(".form-control").removeClass("category_active");
        $(".cbp-filter-item").hide();
        $(".subcat_" + $(this).data('key')).show();

        // Add Border Blue
        $(".category_" + $(this).val()).addClass("category_active");
    });
    // END Radio Button - Category Portfolio

    $('.owl-carousel').owlCarousel({
        center: false,
        loop: false,
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
                items: 8
            }
        },
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    })

    // Hover Button Priicing 
    $('.item-category').on('mouseenter', function (e) {
        if ($(this).children('.active-text').length != 0) {
            // Add Selected Hover
            $(this).children('h6').addClass('active-hover-text');
        } else {
            // Add Default Hover
            $(this).children('h6').addClass('hover-text');
        }
    })
    $('.item-category').on('mouseleave', function () {
        if ($(this).children('.active-text').length != 0) {
            // Remove Selected Hover
            $(this).children('h6').removeClass('active-hover-text');
        } else {
            // Remove Default Hover
            $(this).children('h6').removeClass('hover-text');
        }
    })

    // Hover Button Priicing 
    $('.item-category').on('mouseenter', function (e) {
        if ($(this).children('.active-text').length != 0) {
            // Add Selected Hover
            $(this).children('h6').addClass('active-hover-text');
        } else {
            // Add Default Hover
            $(this).children('h6').addClass('hover-text');
        }
    })
    $('.item-category').on('mouseleave', function () {
        if ($(this).children('.active-text').length != 0) {
            // Remove Selected Hover
            $(this).children('h6').removeClass('active-hover-text');
        } else {
            // Remove Default Hover
            $(this).children('h6').removeClass('hover-text');
        }
    })

    // Remove On Select Country
    $('.select2-selection .country_name').remove();
    $('#phone_code_portfolio_desktop').on('change', function () {
        $(".select2-selection .country_name").remove();
    });
    $('#phone_code_portfolio_mobile').on('change', function () {
        $(".select2-selection .country_name").remove();
    });
    // END Remove On Select Country

    // Submit Whatsapp API
    $('.whatsapp_chat_btn').on('click', function () {
        var whatsapp_btn = $(this);
        var view = $(this).data("view");
        var whatsapp_number = $('#whatsapp_number_input_' + view).val();
        var phone_code_whatsapp = $('#phone_code_portfolio_' + view).val();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        if (whatsapp_number != "") {
            $.ajax({
                url: BASE_URL + "/api/whatsapp-gateway",
                type: "POST",
                data: {
                    whatsapp_number: whatsapp_number,
                    phone_code_whatsapp: phone_code_whatsapp,
                },
                dataType: "json",
                beforeSend: function () {
                    // Change Text
                    whatsapp_btn.html('<small>Mohon Tunggu Sebentar..  <div class="spinner-border text-light ml-2" role="status" style="height: 1rem; width: 1rem;"></div></small>');
                },
                success: function (data) {
                    console.log(data);
                    // Show Modal Success
                    $('.modal').modal('hide');
                    $('#whatsappSuccess').modal('show');
                    whatsapp_btn.html('<i class="fab fa-whatsapp mr-1"></i>Dapatkan Diskon!');
                },
                error: function () {
                    whatsapp_btn.html('<i class="fab fa-whatsapp mr-1"></i>Dapatkan Diskon!');
                    Swal.fire(
                        'Error!',
                        "Error! Hubungi Admin Layanan Kami!",
                        'error'
                    )
                }
            });
        } else {
            Swal.fire(
                'Error!',
                "Silahkan isi Nomor Whatsapp Anda terlebih dahulu",
                'error'
            )
        }
    });
});
