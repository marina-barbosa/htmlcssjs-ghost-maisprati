document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.getElementById('checkbox');
  const currentTheme = localStorage.getItem('theme') || 'light';
  const themeImage = document.getElementById('theme-image');
  const currentImageSrc = localStorage.getItem('theme-image-src') || 'assets/fear.png';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    checkbox.checked = false;
  }
  themeImage.src = currentImageSrc;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeImage.src = 'assets/awake.png';
      localStorage.setItem('theme-image-src', 'assets/awake.png');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeImage.src = 'assets/fear.png';
      localStorage.setItem('theme-image-src', 'assets/fear.png');
    }
  });
});