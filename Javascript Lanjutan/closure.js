// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, selamat ${waktu},semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// console.log(selamatPagi("Amar"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
