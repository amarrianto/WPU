var angka = [1,3,4,10,20,2,5,8]
angka.sort(function (a,b) {
    return a-b;
});
console.log(angka.join(' - '));