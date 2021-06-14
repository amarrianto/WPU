//Callback
//Synchronous Callback
// function halo(nama){
//     alert(`Hallo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama :')
//     callback(nama);
// }

// tampilkanPesan(halo);

// const mhs = [
//   {
//     nama: "Amar",
//     nrp: "121621215",
//     email: "amarrianto@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Bima",
//     nrp: "121621215",
//     email: "amarrianto@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Bekti",
//     nrp: "121621215",
//     email: "amarrianto@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 2,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

//Asynchronous

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");
