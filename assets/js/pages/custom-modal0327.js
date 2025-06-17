$(document).on("ready", function () {
    // Konsultasi Option (Next Button)
    $("#konsultasi_option_btn").on("click", function () {
        var konsultasi_option = $(
            "input[name='konsultasi_option']:checked"
        ).val();

        // Check Selected Option Konsultasi
        if (konsultasi_option == "onlineMeet") {
            // Online Meet - Condition
            $(".modal").modal("hide");
            Calendly.initPopupWidget({
                url: "https://calendly.com/meeting-gosocial/digital-marketing-consultation",
            });
            return false;
        } else if (konsultasi_option == "onlineWhatsApp") {
            // Online Chat / Whatsapp - Condition
            var phone_code_whatsapp_konsultasi = parseInt(
                $("#phone_code_konsultasi").val()
            );
            var whatsapp_number_konsultasi = parseInt(
                $("#whatsapp_number_konsultasi").val()
            );
            if (whatsapp_number_konsultasi != "") {
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
                        whatsapp_number: whatsapp_number_konsultasi,
                        phone_code_whatsapp: phone_code_whatsapp_konsultasi,
                    },
                    dataType: "json",
                    beforeSend: function () {
                        // Change Text
                        $("#konsultasi_option_btn").html(
                            'Mohon Tunggu Sebentar..  <div class="spinner-border text-light ml-2" role="status" style="height: 1rem; width: 1rem;"></div>'
                        );
                    },
                    success: function (data) {
                        // Show Modal Success
                        $(".modal").modal("hide");

                        // Set Href
                        var href =
                            "https://api.whatsapp.com/send?phone=6281234566636&text=Halo%20GoSocial%21%0D%0AKebutuhan%20layanan%20saya%20adalah%20";
                        $("#whatsapp_success_btn").attr("href", href);

                        // Show Modal Success
                        $("#whatsappSuccess").modal("show");
                    },
                    error: function () {
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
        } else {
            Swal.fire(
                "Error!",
                "Mohon Klik Button Whatsapp di pojok kanan bawah (F3).",
                "error"
            );
        }
    });
});
