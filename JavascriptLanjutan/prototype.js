// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${nama}, selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Hallo ${nama}, selamat main`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${nama}, selamat tidur`;
// };

// let amar = new Mahasiswa("Amar", 20);

// class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hallo ${nama}, selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Hallo ${nama}, selamat main`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Hallo ${nama}, selamat tidur`;
  }
}
let amar = new Mahasiswa("Amar", 20);
