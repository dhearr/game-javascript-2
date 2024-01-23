// Function pilihan Komputer
function getPilihanKomputer() {
  const komputer = Math.random();
  if (komputer < 0.34) return "gajah";
  if (komputer >= 0.34 && komputer < 0.67) return "orang";
  return "semut";
}

// Function Rules Pertandingan
function getHasil(komputer, player) {
  if (player == komputer) return "SERI!";
  if (player == "gajah") return komputer == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return komputer == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return komputer == "orang" ? "KALAH!" : "MENANG!";
}

// Function Putar
function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
}

// Pilihan Player
const pilihan = document.querySelectorAll("li img");
// Looping Pilihan Player
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    // Menangkap pilihan Kmputer, Player dan Hasil
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    // Function Putar
    putar();

    setTimeout(function () {
      // Mengubah gambar komputer sesuai dengan hasil random pilihan komputer
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute(`src`, `img/${pilihanKomputer}.png`);

      // Menampilkan Hasil Pertandingan
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
