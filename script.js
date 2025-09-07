const body = document.body;

function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.top = '-50px';
  flower.style.animationDuration = (7000 + Math.random() * 5000) + 'ms';
  body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 12000);
}

window.addEventListener('mousemove', e => {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = (e.clientX - 20) + 'px';
  flower.style.top = (e.clientY - 20) + 'px';
  flower.style.animationDuration = (7000 + Math.random() * 5000) + 'ms';
  body.appendChild(flower);

  setTimeout(() => flower.remove(), 12000);
});

window.addEventListener('touchmove', e => {
  const touch = e.touches;
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = (touch.clientX - 20) + 'px';
  flower.style.top = (touch.clientY - 20) + 'px';
  flower.style.animationDuration = (7000 + Math.random() * 5000) + 'ms';
  body.appendChild(flower);

  setTimeout(() => flower.remove(), 12000);
}, { passive: true });

setInterval(createFallingFlower, 800);