function ambilData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const sukses = true;
            if (sukses) {
                resolve("data berhasil diambil")
            } else {
                reject("gagal ambil data")
            }

        }, 3000);

    })
};

ambilData()
.then((hasil) => {
    console.log(`hasil: ${hasil}`)
})
.catch((error) => {
    console.error(`error: ${error}`)
})

//realcase promise
function getUser () {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then((res)=>
     res.json())
}

getUser()
.then((data) => {
    console.log(`${data.name}`);
})
.catch((err) => {
    console.log(`${err}`);
});