const slides = document.querySelector('.carousel__slides');
const buttons = document.querySelectorAll('.carousel__controls button');
const label = document.querySelector('.carousel__current');
let currentIndex = 0;

const updateSlide = index => {
  slides.style.transform = `translateX(-${index * 100}%)`;
  buttons.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.index) === index));
  const activeSlide = document.querySelector(`.carousel__slide:nth-child(${index + 1})`);
  label.textContent = activeSlide ? activeSlide.dataset.set : 'Set';
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = Number(btn.dataset.index);
    updateSlide(currentIndex);
  });
});

updateSlide(0);
