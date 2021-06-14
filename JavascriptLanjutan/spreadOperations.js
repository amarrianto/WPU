//Spread Operator
//memecah iterables menjadi single elements
//iterables terdiri dari string, array,arguments dll

// const mhs = ["Amar", "Yoga", "Vega"];
// console.log(...mhs);

//kapan kita menggunakan spread operator??
// saat menggabungkan dua array atau lebih

// const mhs = ["Amar", "Yoga", "Vega"];
// const dosen = ["Ali", "Arif", "Budi"];
// const orang = [...mhs, "udin", ...dosen];
// const orang = [mhs, dosen]; //salah
// const orang = mhs.concat(dosen); //bisa menggunakan cara iri tapi tidak fleksibel
// console.log(orang);

//contoh lain mengcopy nilai pada array
// const mhs = ["Amar", "Yoga", "Vega"];
// const mhs1 = mhs;
// mhs1[0] = "fajar";
// console.log(mhs1);
// console.log(mhs);
// pada kasus diatas variable tidak sepenuh mengcopy. ketika console log mhs1 maka tampil "fajar","yoga","vega"
//jika kita console log mhs maka akan tampil "fajar","yoga","vega" yang kita inginkan adalah nama variable mhs tidak berubah tetap "Amar", "Yoga", "Vega"
// maka kita gunakan spread operator

// const mhs = ["Amar", "Yoga", "Vega"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs1);
// console.log(mhs);
// maka hasilnya mhs1 akan tampil "fajar","yoga","vega"
// sedangkan mhs akan tetap "Amar", "Yoga", "Vega"

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
