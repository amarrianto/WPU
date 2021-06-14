// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function repeatLog(n) {
//   for (let i = 0; 1 < n; 1++) {
//     console.log(i);
//   }
// }

// repeatLog(10);

function repeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
repet(3, alert);
