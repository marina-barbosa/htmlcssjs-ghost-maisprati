document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.getElementById('checkbox');
  const currentTheme = localStorage.getItem('theme') || 'light';
  const themeImage = document.getElementById('theme-image');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeImage.src = 'assets/awake.png';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeImage.src = 'assets/fear.png';
    }
  });
});
