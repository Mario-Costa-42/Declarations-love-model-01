const canvas = document.getElementById('scratch');
const ctx = canvas.getContext('2d');
const hiddenImage = document.getElementById('hidden-image');

function resizeCanvas() {
  canvas.width = hiddenImage.offsetWidth;
  canvas.height = hiddenImage.offsetHeight;
  ctx.fillStyle = '#d63384';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'destination-out';
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);

let isDrawing = false;

canvas.addEventListener('mousedown', () => (isDrawing = true));
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', () => (isDrawing = true));
canvas.addEventListener('touchend', () => (isDrawing = false));
canvas.addEventListener('touchmove', draw);

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
}
