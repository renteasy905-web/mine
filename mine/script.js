// Play music on first user interaction (works on mobile + desktop)
const music = document.getElementById('bgmusic');

document.body.addEventListener('click', () => {
  music.play().catch(() => console.log("Autoplay prevented"));
}, { once: true });

// Blue & white confetti
function confetti() {
  const colors = ['#64b5f6', '#bbdefb', '#ffffff', '#42a5f5'];
  const c = document.createElement('div');
  c.style.cssText = `
    position:fixed;
    width:12px;
    height:12px;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    left:${Math.random()*100}vw;
    top:-12px;
    border-radius:50%;
    pointer-events:none;
    z-index:9999;
  `;
  document.body.appendChild(c);

  c.animate([
    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
    { transform: `translateY(100vh) rotate(720deg)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 3000,
    easing: 'cubic-bezier(0,0.5,0.5,1)'
  }).onfinish = () => c.remove();
}

setInterval(confetti, 600);