//soal 1
function cekUmur(umur) {
    try {
        if (isNaN(umur)) {
            throw new Error("umur harus angka");
        }

        if (umur < 0) {
            throw new Error("umur tidak valid");
        }

        console.log("Umur :", umur);

    } catch (error) {
        console.log("Error:", error.message);
    }

    finally {
        console.log("selesai")
    }
}

cekUmur(10);

//soal 2
function parseData (parsingdong){
    try {
        let hasil = JSON.parse(parsingdong)
        console.log(hasil)
    } catch (error) {
        console.log(error.message)
        console.log("JSON nggak valid")
    }
}

parseData('{nama": "irwan"}');

//soal3
function transfer(saldorekening, jumlahtransfer) {
    try {
        if (saldorekening < jumlahtransfer) {
            throw new Error("Saldo anda tidak mencukupi");
        }

        console.log("Transfer berhasil");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

transfer(100000, 200000);

//soal 4
function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("tidak bisa dibagi dengan 0");
        }

        let hasil = a / b;
        console.log(`hasil pembagian: ${hasil}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

bagiAngka(5, 5);

//soal 5
const validasiUmur = (umur) => {
    try {
        if (umur < 18){
            throw new Error ("umur belum mencukupi")
        }
        console.log("akses diberikan")
    } catch (error) {
        console.log(error.message)
    }
}

validasiUmur(18);