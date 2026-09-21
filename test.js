const openCardButton = document.getElementById('openCard');
const cardScreen = document.getElementById('cardScreen');
const audio = document.getElementById('bgAudio');
const letterToggle = document.getElementById('letterToggle');
const letterClose = document.getElementById('letterClose');
const letterPanel = document.getElementById('letterPanel');

const setLetterOpen = (isOpen) => {
  document.body.classList.toggle('letter-open', isOpen);
  letterToggle?.toggleAttribute('disabled', isOpen);
  letterToggle?.setAttribute('aria-expanded', String(isOpen));
  letterPanel?.setAttribute('aria-hidden', String(!isOpen));
};

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

letterToggle?.addEventListener('click', () => {
  setLetterOpen(!document.body.classList.contains('letter-open'));
});

letterClose?.addEventListener('click', () => {
  setLetterOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setLetterOpen(false);
  }
});
