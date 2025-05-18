// Inicializa AOS
AOS.init();

// Função para ativar/desativar modo escuro e salvar no localStorage
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Aplica o modo escuro ao carregar, considerando preferência do sistema e localStorage
function applyDarkModeOnLoad() {
  const darkModeStorage = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkModeStorage === "enabled" || (!darkModeStorage && prefersDark)) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Scroll suave com offset para menu fixo
function smoothScrollWithOffset() {
  const headerOffset = document.querySelector("header")?.offsetHeight || 0;

  document.querySelectorAll('header nav ul li a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// Validação simples e envio simulado do formulário
function setupFormHandler() {
  const form = document.getElementById("form-contato");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    // Validação básica
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Simula envio
    alert("Mensagem enviada com sucesso! (simulado)");
    form.reset();
  });
}

// Configura botão toggle do modo escuro
function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggleDarkMode");
  if (!toggleButton) return;
  toggleButton.addEventListener("click", () => {
    toggleDarkMode();
  });
}

// Função principal para inicializar tudo
function init() {
  applyDarkModeOnLoad();
  setupDarkModeToggle();
  smoothScrollWithOffset();
  setupFormHandler();
}

document.addEventListener("DOMContentLoaded", init);

