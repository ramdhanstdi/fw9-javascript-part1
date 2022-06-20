const printSegitiga = 5;
let  hasil = ''

if (typeof(printSegitiga)!=="number"){
    console.log("Data Harus Number");
}else{
    for(let j = printSegitiga; j >= 1; j--){
        hasil = ''
        for(let i=1; i <= j; i++){
            hasil = hasil + i
        }console.log(hasil);
    }
}