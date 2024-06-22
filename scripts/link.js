
const logoIcons = document.querySelectorAll('ion-icon[name="logo-ionic"]');

const socialMediaIcons = document.querySelectorAll('.social-media ion-icon');

const allIcons = [...socialMediaIcons];
if (logoIcons) {
  logoIcons.forEach(item => {
    allIcons.push(item);
  })
}

allIcons.forEach(icone => {
  icone.addEventListener('click', function () {
    window.location.href = "https://github.com/marina-barbosa";
  });
});