// Seleciona o botão do modo escuro
const toggleBtn = document.getElementById('toggleDarkMode');

// Função para alternar tema
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Aplica o tema salvo no carregamento da página
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

// Adiciona o evento de clique no botão
toggleBtn.addEventListener('click', toggleTheme);

// Aplica tema ao carregar a página
window.addEventListener('DOMContentLoaded', applySavedTheme);
const hamburger = document.querySelector('button.hamburger');
const navLinks = document.querySelector('ul.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
