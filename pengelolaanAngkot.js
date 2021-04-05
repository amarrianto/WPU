var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    //jika angkot kosong
    if (penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            //jika ada kursi kosong
            if(penumpang[i] == undefined){
                //tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dair function
                return penumpang
            }

            else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + 'sudah ada di dalam angkot')
            }

            else if(i == penumpang.length -1){
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang)
                //kembalikan isi array = keluar dari finction
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong')
    } else {
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;

            }else if ( i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada di dalam angkot')
                return penumpang;
            }
        }
    }
    return penumpang;
}