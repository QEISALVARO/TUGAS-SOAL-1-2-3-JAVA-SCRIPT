//soal 1

function hitungtotalbelanja(totalbelanja, ismember){

    let diskon = 0;

    if (totalbelanja >= 500000) {
        diskon = 0.2;    
   } else if (totalbelanja >= 300000) {
        diskon = 0.1;
    }

    //jika member true eksekusi kode ini kalau is member jangan eksekusi 
    if (ismember) {
        diskon = diskon + 0.05;
    }

    let totalbayar = totalbelanja - (totalbelanja * diskon);
    console.log(`Total yang harus dibayar: ${totalbayar}`);
}


hitungtotalbelanja(700000, true)

//soal 2
const login = (username, password) => {
    if(username !== "admin") {
        console.log("username salah");
    } else if (password !== "12345") {
        console.log("password salah");
    } else
        console.log("login berhasil")
    
}
    
login("admin", "12345");

//soal 3 
const tahunkabisat = (tahun) => {

    if (tahun % 400 === 0 || tahun % 4 ===0 ) {
        console.log("ini tahun kabisat")
    } else {
        console.log("ini bukan tahun kabisat");
    }
};

tahunkabisat(2024);
