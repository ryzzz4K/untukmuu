function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');

  // Posisi horizontal acak
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // Durasi animasi acak buat natural
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';

  // Delay acak supaya gak serentak jatuh
  flower.style.animationDelay = Math.random() * 10 + 's';

  document.body.appendChild(flower);

  // Hapus elemen setelah animasi selesai (8s sesuai CSS)
  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// Buat bunga setiap 500ms
setInterval(createFlower, 50);
