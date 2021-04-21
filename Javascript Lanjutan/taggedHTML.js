const nama = "Amar Rianto";
const umur = 25;

// function coba(strings, ...values) {
//   let result = "";
//   strings.forEach((s, i) => {
//     result += `${s}${values[i] || ""} `;
//   });
//   return result;

//cara menggunakan reduce
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Hallo. Nama saya ${nama}, dan umur saya ${umur} tahun.`;
// console.log(str);

//highlights

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Hallo. Nama saya ${nama}, dan umur saya ${umur} tahun.`;

document.body.innerHTML = str;
