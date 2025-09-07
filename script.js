
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  flower.style.animationDelay = Math.random() * 10 + 's';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 10000); // hapus setelah animasi
}

setInterval(createFlower, 500);
