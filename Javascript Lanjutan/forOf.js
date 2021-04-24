// const mhs = ["Amar", "Yoga", "Vega", "Mega"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

//string
// const nama = "Amar";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Amar", "Yoga", "Vega", "Mega"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//Nodelist
// const liNama = document.querySelectorAll(".nama");

// // liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//arguments
// function jumlahkanAngka() {
//   // return arguments.reduce((a,i)=>a+i); reduce tidak bisa dipakai pada arguments
//   // arguments.forEach(a=> jumlah += a) forEach tidak bisa dipakai pada arguments
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//for .. in

const mhs = {
  nama: "amar",
  umur: 25,
  email: "amarrianto@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
