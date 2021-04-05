// variable di dalam object disebut properti, function didalam object disebut method

// var mhs = {
//     nama : "Amar Rianto",
//     umur : 25,
//     ips : [2.25,3.21,3.56,4],
//     alamat : {
//         jalan : "jl.abc No.123",
//         kota : "depok",
//         provinsi : "Jawa barat"
//     }
// }

// menampilkan
// mhs.nama
// mhs.ips[3]
// mhs.alamat.kota



//function declaration
function buatObjectMahasiswa(nama,nim,email,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Amarrianto','12162125','amarrianto@gmail.com','Sistem Informasi')

// constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Amar', '12162125', 'amarrianto@gmail.com', 'Sistem Informasi')