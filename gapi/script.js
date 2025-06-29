document.addEventListener('DOMContentLoaded', (event) => {

    // --- PENTING: GANTI URL DI SINI DENGAN URL WEB APP DARI GOOGLE APPS SCRIPT ANDA ---
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxhN2rJiPJKA2qMQmflWQMSna3o3d55Wg4zu9I5tzhx5NwlbMN2h7qlcPY5d-h5DWm_/exec';

    const searchInput = document.getElementById('search-input');
    const dataContainer = document.getElementById('data-table-container');

    // Variabel global untuk menyimpan data asli yang diambil dari sheet
    let originalData = [];

    // Fungsi untuk memuat data dari API
    async function fetchData() {
        dataContainer.innerHTML = '<p style="text-align: center; margin-top: 7px;">Loading data...</p>';
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            originalData = await response.json(); // Simpan data ke variabel global
            renderTable(originalData); // Tampilkan seluruh data awal
        } catch (error) {
            console.error('Gagal memuat data:', error);
            dataContainer.innerHTML = '<p style="color: #dc3545; text-align: center;">Maaf, gagal memuat data. Periksa koneksi atau URL API Anda.</p>';
        }
    }

    // Fungsi untuk membuat dan menampilkan tabel dari array data
    function renderTable(data) {
        if (!Array.isArray(data) || data.length === 0) {
            dataContainer.innerHTML = '<p style="text-align: center; margin-top: 7px;">Tidak ada data yang tersedia.</p>';
            return;
        }

        // --- MEMBANGUN TABEL HTML SECARA DINAMIS ---
        let htmlTable = '<table><thead><tr>';

        // Tentukan header tabel sesuai dengan kolom yang ingin ditampilkan
        const displayHeaders = ['No', 'Nama', 'No Telp', 'ID-Game', 'Role', 'RT', 'Pembayaran'];

        // Buat header tabel
        displayHeaders.forEach(header => {
            htmlTable += `<th>${header}</th>`;
        });
        htmlTable += '</tr></thead><tbody>';

        // Buat baris data
        data.forEach(row => {
            htmlTable += '<tr>';
            displayHeaders.forEach(header => {
                htmlTable += `<td>${index + 1}</td>`;
                // Ambil nilai sel berdasarkan nama header, jika tidak ada, gunakan string kosong
                const cellValue = row[header] || ''; 
                htmlTable += `<td>${cellValue}</td>`;
            });
            htmlTable += '</tr>';
        });
        
        htmlTable += '</tbody></table>';

        dataContainer.innerHTML = htmlTable;
    }

    // Fungsi untuk memfilter data berdasarkan input pencarian
    function filterData() {
        const query = searchInput.value.toLowerCase().trim(); // Ambil input dan ubah ke huruf kecil
        
        if (query === '') {
            renderTable(originalData); // Jika input kosong, tampilkan seluruh data
            return;
        }
        
        // Filter data yang cocok dengan query di kolom manapun
        const filteredData = originalData.filter(row => {
            // Cek setiap kolom yang diinginkan (Nama, No Telp, ID-Game, RT, Pembayaran)
            return (
                (row['Nama'] && String(row['Nama']).toLowerCase().includes(query)) ||
                (row['No Telp'] && String(row['No Telp']).toLowerCase().includes(query)) ||
                (row['ID-Game'] && String(row['ID-Game']).toLowerCase().includes(query)) ||
                (row['Role'] && String(row['Role']).toLowerCase().includes(query)) ||
                (row['RT'] && String(row['RT']).toLowerCase().includes(query)) ||
                (row['Pembayaran'] && String(row['Pembayaran']).toLowerCase().includes(query))
            );
        });
        
        renderTable(filteredData); // Tampilkan tabel dengan data yang sudah difilter
    }

    // Tambahkan event listener untuk memanggil filterData setiap kali ada input
    searchInput.addEventListener('input', filterData);

    // Panggil fungsi untuk memuat data saat halaman dimuat
    fetchData();
});