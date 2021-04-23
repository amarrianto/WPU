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
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    bagi: a / b,
    kali: a * b,
  };
}
//tidak berututan bisa
const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
