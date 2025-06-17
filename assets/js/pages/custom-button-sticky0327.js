$(document).on("ready", function () {
    // ========= Whatsapp Button - Pojok Kanan Bawah =========
    // Remove On Select Country
    $(".select2-selection .country_name").remove();
    $("#phone_code_whatsapp").on("change", function () {
        $(".select2-selection .country_name").remove();
    });
    // END Remove On Select Country

    // On Hover Footer - Floating Icon
    $(".btn-whatsapp").on("mouseenter", function () {
        $("#second-img").removeClass("animated-hide");
        $(".btn-whatsapp").hide();
        $("#second-img").addClass("animated-show");
    });
    $("#second-img").on("mouseleave", function () {
        $("#second-img").addClass("animated-hide");
        $("#second-img").removeClass("animated-show");
        $(".btn-whatsapp").show(200);
    });
    $("#contact-sticky").click(function () {
        $("#modalKonsultasiSekarang").modal("show");
    });
    // END On Hover Footer - Floating Icon

    // Show Modal on Schedule Meeting
    $("#close_floating").click(function () {
        $("#second-img").addClass("animated-hide");
        $("#second-img").removeClass("animated-show");
        $(".btn-whatsapp").show(200);
    });

    // Submit Konsultasi Digital Marketing
    // $("#form_konsultasi").submit(function() {
    //     $("#submit_konsultasi").slideUp(50);
    //     $("#spinner_konsultasi").slideDown(600);
    // });
    $(".whatsapp_chat_btn").on("click", function () {
        var service = $(this).data("service");

        $("#whatsapp_chat_btn").attr("data-service", service);
        $("#whatsappNumber").modal("show");
    });

    // Hide Whatsapp Mobile - Show Notification Whatsapp Send
    $("#whatsapp_chat_btn").on("click", function () {
        var whatsapp_number = $("#whatsapp_number_input").val();
        var phone_code_whatsapp = $("#phone_code_whatsapp").val();
        var service = $(this).data("service");

        // Captcha Verification
        grecaptcha
            .execute("6LfVngsqAAAAAHFilpnv6Ak2J8kNpW6rL4k_KGQc", {
                action: "submit",
            })
            .then(function (token) {
                if (whatsapp_number != "") {
                    $.ajaxSetup({
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                    });
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
                            $("#whatsapp_chat_btn").html(
                                'Mohon Tunggu Sebentar..  <div class="spinner-border text-light ml-2" role="status" style="height: 1rem; width: 1rem;"></div>'
                            );
                        },
                        success: function (data) {
                            console.log(data);
                            // Show Modal Success
                            $(".modal").modal("hide");

                            // Set Href
                            var href =
                                "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0AKebutuhan%20layanan%20saya%20adalah%20" +
                                service;
                            $("#whatsapp_success_btn").attr("href", href);

                            // Show Modal Success
                            $("#whatsappSuccess").modal("show");
                            $("#whatsapp_chat_btn").html(
                                '<i class="fab fa-whatsapp mr-2"></i>Chat Via Whatsapp'
                            );
                        },
                        error: function () {
                            $("#whatsapp_chat_btn").html(
                                '<i class="fab fa-whatsapp mr-2"></i>Chat Via Whatsapp'
                            );
                            Swal.fire(
                                "Error!",
                                "Error! Hubungi Admin Layanan Kami! (F1)",
                                "error"
                            );
                        },
                    });
                } else {
                    Swal.fire(
                        "Error!",
                        "Silahkan isi Nomor Whatsapp Anda terlebih dahulu",
                        "error"
                    );
                }
            });
        // END Captcha Verification
    });
    // ========= Whatsapp Button - Pojok Kanan Bawah =========

    /* ========= Button Sticky - Kiri Bawah ========= */
    $(".close-btn").on("click", function () {
        $("#floatingIcons").animate(
            { left: "-200px" }, // Geser ke kanan sejauh 200px
            400,
            function () {
                $(this).hide();
            }
        );
    });
});
