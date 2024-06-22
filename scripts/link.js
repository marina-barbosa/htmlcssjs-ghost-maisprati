


// Seleciona todos os elementos <ion-icon>
const iconeLinks = document.getElementsByTagName('ion-icon');

// Itera sobre todos os elementos <ion-icon> encontrados
for (let i = 0; i < iconeLinks.length; i++) {
  // Adiciona um listener de clique para cada ícone
  iconeLinks[i].addEventListener('click', function () {
    // Redireciona para a página especificada
    window.location.href = "https://github.com/marina-barbosa";
  });
}