var jmlAngkot = 10;
var angkotBeroperasi = 9;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik')
    }else{
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi')
    }
}
