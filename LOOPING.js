let = tinggi = 5;

for (let i =1; i <= tinggi; i++) {
    let baris = "";


for (let j = 1; j <= i; j++) {
     baris +="*";
}

   console.log(baris);

}

//soal 2
const array = [1,2,3,4,5,6,7,8];

for (let array2 of array) {
    if (array2 % 2 == 0) {
        console.log(array2)
    }
}

//soal 3
function faktorial(parameter) {
    let hasil = 1;

    for (let variable = 1; variable <= parameter; variable++) {
        hasil = hasil * variable;
    }

    console.log(hasil);
}

faktorial(9);