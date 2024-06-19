document.addEventListener('DOMContentLoaded', function () {
  const scrollAmount = 500;
  const slider = document.querySelector('.carousel .slider');
  const scrollLeftButton = document.querySelector('.scroll-left');
  const scrollRightButton = document.querySelector('.scroll-right');

  scrollLeftButton.addEventListener('click', function () {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightButton.addEventListener('click', function () {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});