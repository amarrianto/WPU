//Destructuring Variable/Assignment

//Destructuring Array
// const perkenalan = ["Halo", "Nama", "Saya", "Amar"];

// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

//rest parameter
//nama values itu bebas
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructurin object
// const mhs = {
//   nama: "Amar",
//   umur: 25,
// };

// const { nama, umur } = mhs;
// console.log(nama);

//Assignment tanpa deklarasi object

// ({ nama, umur } = { nama: "Amar", umur: 25 });
// console.log(nama, umur);

//Assign ke variable baru
// const mhs = {
//   nama: "Amar",
//   umur: 25,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

//memberikan default value
// const mhs = {
//   nama: "Amar",
//   umur: 25,
// };

// const { nama, umur, email = "amarrianto@default.com" } = mhs;
// console.log(email);

//memberikan nilai default + assign ke variable baru
// const mhs = {
//   nama: "Amar",
//   umur: 25,
// };

// const { nama: n, umur: u, email: e = "amarrianto@default.com" } = mhs;
// console.log(e);

//rest parameter
// const mhs = {
//   nama: "Amar",
//   umur: 25,
// };

// const { nama, ...value } = mhs;
// console.log(value);

//mengambil field pada object, setelah dikirm sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Amar",
  umur: 25,
  email: "email@default.com",
};

function getIdMhs({ id, nama }) {
  return nama;
}

console.log(getIdMhs(mhs));
