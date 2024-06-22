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
// Adiciona um ouvinte de evento de rolagem para a página inteira
slider.addEventListener('wheel', function (event) {
  // Verifica se o cursor está sobre o slider
  if (event.target.closest('.wrapper')) {
    // Se estiver, previne a rolagem vertical padrão
    event.preventDefault();
    // E redireciona para rolagem horizontal no slider
    slider.scrollLeft += event.deltaY;
  } else {
    // Permite a rolagem vertical padrão se o cursor não estiver sobre o slider
    window.scrollBy(0, event.deltaY);
  }
}, { passive: false });