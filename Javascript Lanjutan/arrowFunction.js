// function expression
// const tampilNama = function(nama){
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Amar'));

//satu parameter
// arrow function
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log("Amar");

//2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Amar", "Malam"));

// implisit return
// const tampilNama = (nama) => `Nama, ${nama}`;
// console.log("Amar");

//tanpa parameter
// const tampilNama = () => `Hellow World`;
// console.log(tampilNama());

let mahasiswa = ["Amar Rianto", "Vega Gusti", "Udin"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

//mengembalikan nilai dengan array
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

//mengembalikan nilai dengan object
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumlahHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

//konsep this pada arow function

//constructor function
// const Mahasiswa = function () {
//   this.nama = "Amar";
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Hallo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
//   return this.sayHello();
// };

// const amar = new Mahasiswa();

//arrow function constructor
// constructor tidak bisa menggunakan arrow function
// method bisa menggunakan arrow function
// arrow function tidak memiliki konsep this

// const Mahasiswa = function () {
//   this.nama = "Amar";
//   this.umur = 25;
//   this.sayHello = () => {
//     console.log(`Hallo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
//   return this.sayHello();
// };

// const amar = new Mahasiswa();

//object literal
// const mhs1 = {
//   nama: "Amar",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Amar";
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const amar = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
