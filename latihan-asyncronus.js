async function getUser() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!data.ok) {
      throw new Error("Gagal mengambil data");
    }

    const hasil = await data.json();

    hasil.forEach(user => {
      console.log(user.name);
    });

  } catch (error) {
    console.log(error.message);
  }
}

getUser();