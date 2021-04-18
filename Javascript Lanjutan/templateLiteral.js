//Template literal / Template string
// const nama = "Amar";
// const umur = 25;

// console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log("Hallo, nama saya" + nama + ",dan saya" + umur + "tahun");

//Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Hallo")}`);

// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

//html fragments
const mhs = {
  nama: "Amar",
  umur: 25,
  nrp: "12162125",
  email: "amarrianto@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
