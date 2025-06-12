const themes = {
  car: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=1080',
  anime: 'https://cdn.pixabay.com/photo/2024/09/05/05/33/ai-generated-9023805_1280.jpg',
  sports: 'https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&h=1080',
  food: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=1080'
};

const body = document.getElementById('main-body');
const overlay = document.getElementById('overlay');

document.querySelectorAll('.theme-button').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-theme');
    if (themes[theme]) {
      showAnimation();
      body.style.backgroundImage = `url('${themes[theme]}')`;
    }
  });
});

function showAnimation() {
  overlay.classList.add('show-overlay');
  setTimeout(() => {
    overlay.classList.remove('show-overlay');
  }, 500);
}
body.style.backgroundImage = `url('${themes.car}')`;
