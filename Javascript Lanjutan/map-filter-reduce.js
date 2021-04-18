const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
//for

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

//filter

// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

//filter arrow function
const newAngka = angka.filter((a) => a >= 3);
console.log(newAngka);

//map
//kalikan semua angka dengan 2
const newAngka1 = angka.map((a) => a * 2);
console.log(newAngka1);

//reduce
//jumlahkan seluruh elemen
// reduce memiliki 2 arguments dan parameternya ada 2 yaitu
// accumulator = hasil dari prosesnya
//currentValue =
// reduce memiliki nilai awal defaultnya 0
const newAngka2 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(newAngka2);

//method chaining (berantai)
//cari angka > 5
//kalikan 3
//jumlahkan
const hasil = angka
  .filter((a) => a > 5) //8,9,9
  .map((a) => a * 3) //24,27,27
  .reduce((acc, cur) => acc + cur); //78

console.log(hasil);
