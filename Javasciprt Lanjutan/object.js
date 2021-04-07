// cara membuat object pd javascript
// 1.object literal 
// let mahasiswa1 = {
//     nama: 'Amar',
//     energy: 10,
//     makan : function(porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Bowo',
//     energy: 20,
//     makan : function(porsi){
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan`)
//     }
// }

// function declaration

// function Mahasiswa(nama,energi){
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
    
//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`)
//     }
//     return mahasiswa
// }

// let amar = Mahasiswa('Amar',18);
// let sidik = Mahasiswa('Sidik', 20);

//constructor
function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
    
    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main`)
    }
}

let amar = new Mahasiswa('Amar',10);
let sidik = Mahasiswa('Sidik', 20);