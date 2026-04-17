function ambilData() {
    return new Promise((resolve) => {
        console.log("proses mengambil data....");

        setTimeout(() => {
            resolve("data berhasil di ambil");
        }, 4000);
    });
}

async function main() {
    const hasil = await ambilData();
    console.log(hasil);
}

main();

// real case

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
        
    );
    const data = await response.json();
    console.log(data);
}

getUser();