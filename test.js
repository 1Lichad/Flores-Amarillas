const openCardButton = document.getElementById('openCard');
const cardScreen = document.getElementById('cardScreen');
const audio = document.getElementById('bgAudio');

if (openCardButton && cardScreen) {
  openCardButton.addEventListener('click', () => {
    document.body.classList.add('scene-open');

    if (audio) {
      audio.volume = 0.7;
      audio.play().catch(() => {
        console.log('La reproducción del audio requiere interacción del usuario.');
      });
    }

    setTimeout(() => {
      cardScreen.style.display = 'none';
    }, 700);
  });
}
