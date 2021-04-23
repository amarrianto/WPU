// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2,3)[0]
// const kali = penjumlahanPerkalian(2,3)[1]

// const [jumlah, kali] = penjumlahanPerkalian(2, 5);
// console.log(jumlah);

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [kurang, jumlah, kali, bagi] = kalkulasi(2, 3);
// //harus berurutan memasukan variable
// console.log(jumlah);

//contoh kedua kasus sama dengan return object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     bagi: a / b,
//     kali: a * b,
//   };
// }
// //tidak berututan bisa
// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(bagi);

// destruction function arguments

const mhs1 = {
  nama: "Amar",
  umur: 25,
  email: "amarrianto@gmail.com",
  nilai: {
    tugas: 80,
    uas: 90,
    uts: 85,
  },
};

// function cetakMhs(nama, umur) {
//   return `Hallo, nama saya ${nama}. saya berumur${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//menggunakan destructuring

function cetakMhs({ nama, umur, email, nilai: { tugas, uas, uts } }) {
  return `Hallo, nama saya ${nama}. saya berumur${umur} tahun. dan nilai uas saya adalah ${tugas}`;
}

console.log(cetakMhs(mhs1));
