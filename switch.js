var item = prompt('masukkan makanan/minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)');
    switch (item) {
        case 'daging':
        case 'nasi':
        case 'susu':
            alert('Makanan/Minuman SEHAT')
            break;
        case 'hamburger':
        case 'softdrink' :
            alert('Makanan/Minuman Tidak SEHAT')
            break;
        default:
            alert('anda memasukkan nama Makanan/Minuman yang salah')
            break;
    }
