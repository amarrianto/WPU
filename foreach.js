var angka = [1,2,3,4,5,6,7,8];
var nama = ['Amar','Mar','Mer']

// for( var i = 0; i < angka.length; i++){
//     console.log(angka[i])
// }

// angka.forEach(function(e){
//     console.log(e)
// })

nama.forEach(function (e,i) {
    console.log('Mahasiswa ke-' + (i+1) + 'adalah '+ e)
})