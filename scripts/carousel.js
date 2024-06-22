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




const slider = document.querySelector('.slider');

slider.addEventListener('wheel', function (event) {

  if (event.target.closest('.wrapper')) {

    event.preventDefault();

    slider.scrollLeft += event.deltaY;
  } else {

    window.scrollBy(0, event.deltaY);
  }
}, { passive: false });