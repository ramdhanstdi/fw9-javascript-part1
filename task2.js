const mtk = 59;
const bahasaIndonesia = 59;
const bahasaInggris = 59;
const ipa = 70;

const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
console.log(average);

if (average >= 90 && average <= 100){
    console.log("Grade = A");
}else if (average >= 80){
    console.log("Grade = B");
}else if (average >= 70){
    console.log("Grade = C");
}else if (average >= 60){
    console.log("Grade = D");
}else if (average >= 0){
    console.log("Grade = E");
}else{
    console.log("Nilai tidak valid");
}