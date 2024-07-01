// Ini Javascript
function replaceName(){
    const userName = prompt('Masukkan Nama Anda:');
    document.getElementById('userName').innerHTML = userName
}

document.getElementById('replaceName').addEventListener('click', function(){
    replaceName();
});

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const genderElements = document.forms["message-form"]["gender"];
    const message = document.forms["message-form"]["messages"].value;

    // Validasi gender
    let gender = "";
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }

    if (name === "" || birthDate === "" || gender === "" || message === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById('sender-full-name').innerText = name;
    document.getElementById('sender-birth-date').innerText = birthDate;
    document.getElementById('sender-gender').innerText = gender;
    document.getElementById('sender-messages').innerText = message;
}

// Menampilkan waktu saat ini
function showCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    currentTimeElement.innerText = `${now.toDateString()} ${now.toLocaleTimeString()}`;
}

// Menjalankan fungsi setiap detik untuk memperbarui waktu
setInterval(showCurrentTime, 1000);

// Memanggil fungsi untuk menampilkan waktu saat ini saat halaman dimuat
window.onload = showCurrentTime;