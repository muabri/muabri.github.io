// ============= MODAL ACTION FOTO PRODUK DIDUKUNG=============
$(document).on('ready', function () {
    $('.pakaian').on("click", function () {
        var count = 1
        $('#modalPakaian').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/pakaian-' + count + '.webp');
            count++;
        });
        $('#modalPakaian').modal('show');
    });
    
    $('.aksesoris').on("click", function () {
        var count = 1
        $('#modalAksesoris').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/aksesoris-' + count + '.webp');
            count++;
        });
        $('#modalAksesoris').modal('show');
    });
    
    $('.sepatu').on("click", function () {
        var count = 1
        $('#modalSepatu').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/sepatu-' + count + '.webp');
            count++;
        });
        $('#modalSepatu').modal('show');
    });
    
    $('.kosmetik').on("click", function () {
        var count = 1
        $('#modalKosmetik').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/kosmetik-' + count + '.webp');
            count++;
        });
        $('#modalKosmetik').modal('show');
    });
    
    $('.makanan').on("click", function () {
        var count = 1
        $('#modalMakanan').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/makanan-' + count + '.webp');
            count++;
        });
        $('#modalMakanan').modal('show');
    });

    $('.minuman').on("click", function () {
        var count = 1
        $('#modalMinuman').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/minuman-' + count + '.webp');
            count++;
        });
        $('#modalMinuman').modal('show');
    });

    $('.elektronik').on("click", function () {
        var count = 1
        $('#modalElektronik').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/elektronik-' + count + '.webp');
            count++;
        });
        $('#modalElektronik').modal('show');
    });

    $('.lainnya').on("click", function () {
        var count = 1;
        $('#modalLainnya').find('img').each(function () {
            $(this).attr('src', BASE_URL + '/assets/img/service/foto-produk/foto-didukung/lainnya-' + count + '.webp');
            count++;
        });
        $('#modalLainnya').modal('show');
    });
});
// ============= END MODAL ACTION FOTO PRODUK DIDUKUNG=============