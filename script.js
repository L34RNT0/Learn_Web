function tosukggleSidebar() {
  const sidebar = document.querySelector('.glass-sidebar');

  sidebar.classList.toggle('show');
}

const footerTexts = [
    "Kepercayaan Datang Dari Hati",
    "Tertawa Atas Kesedihan Diri sendiri hal paling konyol",
    "Tidak Semua lelucon itu lucu",
    "Hidup Adalah hutang yang harus dibayar"
];

let currentTextIndex = 0;

function changeFooterText() {
    const footerText = document.getElementById('footerText');
    currentTextIndex = (currentTextIndex + 1) % footerTexts.length;
    footerText.textContent = footerTexts[currentTextIndex];
}
