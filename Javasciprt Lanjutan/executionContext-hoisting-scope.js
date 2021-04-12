// var nama = "Amar";
// var umur = 25;

// console.log(sayHello());

// function sayHello() {
//   return `Hallo, nama saya ${nama}, ${umur} tahun.`;
// }

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}
a();

// function satu() {
//   var nama = "amar";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Bagus";
// satu();
// dua("Doddy");
// console.log(nama);
