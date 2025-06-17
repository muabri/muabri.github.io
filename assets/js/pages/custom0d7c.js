$(document).on('ready', function () {
    // Show Information Modal
    // $('#informationModal').modal('show');

    // Show Modal on Click
    $(".konsultasi_sekarang").click(function () {
        var konsultasiEmail = $('#konsultasiEmail').val();
        $('#email_form').val(konsultasiEmail);
        $('#modalKonsultasiSekarang').modal('show');
    });

    // Action Modal Konsultasi Gratis - ContactWay
    $("input[type=checkbox][name=contactWay]").click(function () {
        checked = $("input[type=checkbox]:checked").length;
        if (!checked) {
            Swal.fire(
                'Pilih Salah Satu Opsi!',
                "Mohon pilih salah satu opsi cara menghubungi",
                'error'
            )
            return false;
        } else {
            var contact_val = $(this).val();
            if (contact_val == "whatsapp" && $(this).prop("checked") == true) {
                $('#whatsapp').slideDown(300);
                $('#whatsapp').prop('required', true);
            } else if (contact_val == "whatsapp" && $(this).prop("checked") == false) {
                $('#whatsapp').slideUp(300);
                $('#whatsapp').prop('required', false);
            } else if (contact_val == "email" && $(this).prop("checked") == true) {
                $('#email').slideDown(300);
                $('#email').prop('required', true);
            } else {
                $('#email').slideUp(300);
                $('#email').prop('required', false);
            }
        }
    });
});

