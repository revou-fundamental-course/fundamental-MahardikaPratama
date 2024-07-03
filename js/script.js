// Ini Javascript untuk mengganti nama pengguna
function replaceName(){
    const userName = prompt('Masukkan Nama Anda:');
    document.getElementById('username').innerHTML = userName;
}

// Menambahkan event listener pada tombol untuk memanggil fungsi replaceName
document.getElementById('replaceName').addEventListener('click', function(){
    replaceName();
});

// Validasi form pesan
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

    // Memastikan semua field terisi sebelum mengirim
    if (name === "" || birthDate === "" || gender === "" || message === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    // Memperbarui UI dengan informasi pengirim
    setSenderUI(name, birthDate, gender, message);
    return false;
}

// Fungsi untuk mengatur UI pengirim pesan
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

// Memperbarui waktu setiap detik
setInterval(showCurrentTime, 1000);

// Memanggil fungsi untuk menampilkan waktu saat halaman dimuat
window.onload = showCurrentTime;

// Slide show
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

// Fungsi untuk menampilkan slide
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

// Inisiasi slide pertama
showSlides();

// Event listener saat DOM di-load untuk tombol CV
document.addEventListener('DOMContentLoaded', function() {
    const cvBtn = document.getElementById('cvBtn');
    const cvLink = 'https://drive.google.com/file/d/1mGWfdeaMjSOAIDoNTRrmI-nJHQxpqxzi/view?usp=drive_link'; 
    cvBtn.addEventListener('click', function() {
        window.open(cvLink, '_blank');
    });
});

// Event listener saat DOM di-load untuk tombol GitHub
document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.querySelector('.btn-github');

    githubButton.addEventListener('click', function(event) {
        const confirmMessage = 'You are about to leave this page and visit GitHub. Do you want to continue?';
        if (!confirm(confirmMessage)) {
            event.preventDefault();
        }
    });
});
