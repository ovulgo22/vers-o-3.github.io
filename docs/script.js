/* ==========================================================================
   ARQUITETURA DO SCRIPT
   - Encapsulamento em um listener DOMContentLoaded para garantir que o HTML esteja pronto.
   - Funções separadas para cada responsabilidade (Tema, Scroll, etc.).
   - Foco em performance usando APIs modernas (IntersectionObserver).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. GERENCIADOR DE TEMA (DARK/LIGHT MODE)
    // --------------------------------------------------------------------------
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Função para aplicar o tema e salvar a preferência
    const applyTheme = (theme) => {
        body.classList.remove('theme-light', 'theme-dark');
        body.classList.add(`theme-${theme}`);
        localStorage.setItem('theme', theme);

        // Atualiza o ícone (o objeto 'icons' vem do icons.js)
        if (themeIcon && window.icons) {
            themeIcon.innerHTML = theme === 'light' ? icons.sun : icons.moon;
        }
    };

    // Adiciona animação ao ícone
    const animateIcon = () => {
        if (themeIcon) {
            themeIcon.classList.add('theme-icon-spin');
            themeIcon.addEventListener('animationend', () => {
                themeIcon.classList.remove('theme-icon-spin');
            }, { once: true });
        }
    };

    // Listener para o botão de troca de tema
    themeToggleButton.addEventListener('click', () => {
        const newTheme = body.classList.contains('theme-light') ? 'dark' : 'light';
        applyTheme(newTheme);
        animateIcon();
    });

    // Lógica inicial de carregamento do tema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);


    // --------------------------------------------------------------------------
    // 2. OBSERVERS DE SCROLL (SCROLLSPY E ANIMAÇÕES)
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.3 // Ativa quando 30% da seção está visível
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const correspondingLink = document.querySelector(`.sidebar-link[href="#${id}"]`);

            // Animação de entrada
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
            
            // Destaque do link na sidebar
            if (entry.isIntersecting && correspondingLink) {
                 sidebarLinks.forEach(link => link.classList.remove('active'));
                 correspondingLink.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        scrollObserver.observe(section);
    });


    // --------------------------------------------------------------------------
    // 3. ATUALIZAÇÃO DINÂMICA DO ANO NO RODAPÉ
    // --------------------------------------------------------------------------
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
