// cara membuat object pd javascript
// 1.object literal 
let mahasiswa1 = {
    nama: 'Amar',
    energy: 10,
    makan : function(porsi){
        this.energy += porsi;
        console.log(`Hallo ${this.nama}, Selamat makan`)
    }
}

let mahasiswa2 = {
    nama: 'Bowo',
    energy: 20,
    makan : function(porsi){
        this.energy += porsi;
        console.log(`Hallo ${this.nama}, Selamat makan`)
    }
}