var angka = [1,2,3,4,6,7,8,3]
var angka2 = angka.map(function(e){
    return e * 2;
})

console.log(angka2.join(' - '))