//Callback
//Synchronous Callback
function halo(nama){
    alert(`Hallo, ${nama}`);
}

function tampilkanPesan(callback){
    const nama = prompt('Masukkan Nama :')
    callback(nama);
}

tampilkanPesan(halo);