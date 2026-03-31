// ambil elemen
let username = document.getElementById("text");
let password = document.getElementById("number");
let tombol = document.getElementById("buton");






// data login yang benar (buat masukin user-name sama password nya)
let userBenar = "akhsaGaming";
let passBenar = "12345";





// event klik tombol
tombol.addEventListener("click", function () {
    let inputUser = username.value;
    let inputPass = password.value;

    if (inputUser === userBenar && inputPass === passBenar) {
        alert("Login berhasil!");
    } else {
        alert("Username atau password salah!");
    }
});