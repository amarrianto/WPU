// const mhs = {
//   nama: "Amar",
//   umur: 25,
//   nrp: "12162125",
//   email: "amarrianto@gmail.com",
// };

// const el = `<div class="mhs">
//       <h2>${mhs.nama}</h2>
//       <span class="nrp">${mhs.nrp}</span>
//   </div>`;

// console.log(el);

// Looping
// const mhs = [
//   {
//     nama: "Amar",
//     umur: 25,
//   },
//   {
//     nama: "Vega",
//     umur: 23,
//   },
//   {
//     nama: "Yoga",
//     umur: 28,
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.umur}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;
// document.body.innerHTML = el;

//conditional
//ternary
const lagu = {
  judul: "Tetap ingin setia",
  penyanyi: "Isyana Sarasvati",
};

const el = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
    </ul>
</div>`;

document.body.innerHTML = el;

//nested
//HTML fragment bersarang

// const mhs = {
//   nama: "Amar Rianto",
//   semester: 6,
//   mataKuliah: [
//     "Rekayasa Web",
//     "Analisis dan perancangan Sistem Informasi",
//     "Pemograman Sistem Interaktif",
//   ],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `
//     <ol>
//         ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//     </ol>
//     `;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester: ${mhs.semester}</span>
//     <h4>Mata Kuliah:</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;
