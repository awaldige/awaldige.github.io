// Seleciona o botão do modo escuro
const toggleBtn = document.getElementById('toggleDarkMode');
// Seleciona o botão do menu hambúrguer
const hamburger = document.querySelector('button.hamburger');
// Seleciona os links de navegação
const navLinks = document.querySelector('ul.nav-links');

// Função para alternar tema
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Aplica o tema salvo imediatamente após a declaração da função
// Isso ajuda a minimizar o "flash" do tema padrão antes do script carregar
(function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})(); // A função é invocada imediatamente

// Evento de clique no botão de alternar tema
toggleBtn.addEventListener('click', toggleTheme);

// Evento de clique no botão do menu hambúrguer
hamburger.addEventListener('click', () => {
    const isMenuOpen = navLinks.classList.toggle('open'); // Alterna a classe 'open'
    hamburger.setAttribute('aria-expanded', isMenuOpen); // Atualiza o atributo aria-expanded
    document.body.classList.toggle('no-scroll', isMenuOpen); // Adiciona/remove a classe 'no-scroll' no body
});

// Fecha o menu mobile quando um link de navegação é clicado
// E também desabilita a rolagem do corpo
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false'); // Reseta aria-expanded
            document.body.classList.remove('no-scroll'); // Remove a rolagem do body
        }
    });
});
