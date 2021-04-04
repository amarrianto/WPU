// mengembalikan banyak nilai

var angka = [1,2,3,4,10,20,5,6,7,8]
var angka2 = angka.flter(function(x){
    return x > 5;
})
console.log(angka2.join(' - '))