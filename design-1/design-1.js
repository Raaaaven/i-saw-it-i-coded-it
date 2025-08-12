 document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let currentIndex = 3; // start from center

  function updateSlider() {
    images.forEach((img) => img.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function slide(dir) {
    currentIndex += dir;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    updateSlider();
  }

  dots.forEach((dot, idx) => {
    dot.onclick = () => {
      currentIndex = idx;
      updateSlider();
    };
  });

  updateSlider();
});

