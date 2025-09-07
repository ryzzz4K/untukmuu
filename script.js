
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  
  // Posisi horizontal agak random tapi terbatas +/- 80px dari tengah
  const center = window.innerWidth / 2;
  flower.style.left = (center + (Math.random() * 160 - 80)) + 'px';

  // Animasi 5s dengan delay random supaya bergantian jatuh
  flower.style.animationDuration = '5s';
  flower.style.animationDelay = (Math.random() * 5) + 's';

  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 6000); // Hapus setelah animasi
}

setInterval(createFlower, 700);
