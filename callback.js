function ambilData(callback, errorCallback){
   setTimeout(()=>{
       const sukses = true;

       if(sukses){
           callback("Data berhasil");
       } else {
           errorCallback("Gagal");
       }
   }, 1000);
}

function sukses(data){
    console.log(`sukses: ${data}`);
}

function error(error){
    console.log(`error: ${data}`);
}

ambilData(sukses, error);

//usser

function getUser(callback, errcallback){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=> res.json())
    .then((data)=> callback(data))
    .then((err)=>errcallback(err))
}

function tampilkanuser(data){
    console.log(`namauser ${data}`);
}

function handleError(error){
    console.log(`Error ngab: ${error}`);
}

getUser(tampilkanuser, handleError)