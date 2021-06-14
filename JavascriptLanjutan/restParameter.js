//REST PARAMETER
// parameter yang ditaruh diakhir

// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b=${b}, myArgs = ${myArgs}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

//error karna ada parameter a diakhir
// function myFunc(...myArgs, a){
//     return myArgs
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// -------------------------------------------------
// function jumlahkan(...angka) {
//   //menggunakan for of
//   //   let total = 0;
//   //   for (const a of angka) {
//   //     total += a;
//   //   }
//   //   return total;

//   //menggunakan reduce
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 10));

// -------------------------------------------------
// array destructuring
// contoh kasus = mencari ketua,wakil dan anggota
// const kelompok1 = ["Amar", "Yoga", "Vega", "Mega", "Tia", "Dwi", "Arif"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// -------------------------------------------------
//object destructuring
// const team = {
//   pm: "Amar",
//   frontend: "Alif",
//   backend: "Ahmadkun",
//   ux: "Fahmi",
//   devOps: "Daffa",
// };
// const { pm, ...myTeam } = team;
// console.log(myTeam);

// -------------------------------------------------
// filltering
// function fillterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(
//   fillterBy("number", 1, 2, 3, "Amar", "Yoga", true, 7, 8, false, "Vega")
// );
