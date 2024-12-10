let btnPakWika = document.getElementById('wika');
let modal1 = document.getElementById('modal1');

let btnPakDeny = document.getElementById('pakDeny');
let modal2 = document.getElementById('modal2');

let btnPakSudi = document.getElementById('pakSudi');
let modal3 = document.getElementById('modal3');

let btnBuSuzy = document.getElementById('buSuzy');
let modal4 = document.getElementById('modal4');

let btnPakSaka = document.getElementById('pakSaka');
let modal5 = document.getElementById('modal5');

let btnBuGaluh = document.getElementById('buGaluh');
let modal6 = document.getElementById('modal6');

// Fungsi untuk menampilkan modal
btnPakWika.addEventListener('click', () => {
  modal1.style.display = "block";
});

btnPakDeny.addEventListener('click', () => {
  modal2.style.display = "block";
});

btnPakSudi.addEventListener('click', () => {
  modal3.style.display = "block";
});

btnBuSuzy.addEventListener('click', () => {
  modal4.style.display = "block";
});

btnPakSaka.addEventListener('click', () => {
  modal5.style.display = "block";
});

btnBuGaluh.addEventListener('click', () => {
  modal6.style.display = "block";
});

// Fungsi untuk menutup modal
function closeModal() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  modal6.style.display = "none";
}
