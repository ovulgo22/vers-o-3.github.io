/* ==========================================================================
   ARQUITETURA DO SCRIPT (V3.0 FINAL)
   - Orquestra toda a interatividade do site, lendo dados do config.js.
   - Gerencia tema, scroll, paleta de comandos, modais e easter egg.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- CONTEÚDO PARA OS MODAIS ---
    const modalContent = {
        'job-architect': {
            title: 'Arquiteto de Software @ Tech Solutions Inc.',
            body: `<ul>
                    <li>Liderança no desenho de uma nova plataforma de pagamentos distribuída, utilizando arquitetura baseada em eventos com Kafka.</li>
                    <li>Definição de padrões de código (Code Patterns) e de infraestrutura como código (Terraform) para as equipes de desenvolvimento.</li>
                    <li>Mentoria de desenvolvedores plenos e seniores em práticas de System Design e Domain-Driven Design (DDD).</li>
                   </ul>`
        },
        'tool-vscode': {
            title: 'Por que eu uso o VS Code?',
            body: '<p>É o padrão da indústria por um motivo. A combinação de performance, um ecossistema de extensões gigantesco e a integração nativa com TypeScript e Git o tornam a ferramenta mais produtiva para o meu fluxo de trabalho, do front-end ao back-end.</p>'
        },
        'tool-warp': {
            title: 'Por que eu uso o Warp?',
            body: '<p>O Warp reinventou a experiência do terminal para a era moderna. A edição de comandos em blocos, a inteligência artificial integrada para sugerir comandos e o autocompletar inteligente aceleram drasticamente o trabalho na linha de comando.</p>'
        }
    };

    // --------------------------------------------------------------------------
    // 1. GERENCIADOR DE TEMA
    // --------------------------------------------------------------------------
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => { /* ... (código existente sem alterações) ... */ };
    const toggleTheme = () => { /* ... (código existente sem alterações) ... */ };
    if (themeToggleButton) themeToggleButton.addEventListener('click', toggleTheme);
    applyTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    // --------------------------------------------------------------------------
    // 2. OBSERVERS DE SCROLL
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    if (sections.length > 0 && sidebarLinks.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const link = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
                    if (link) { sidebarLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); }
                }
            });
        }, { threshold: 0.3 });
        sections.forEach(s => scrollObserver.observe(s));
    }

    // --------------------------------------------------------------------------
    // 3. PALETA DE COMANDOS
    // --------------------------------------------------------------------------
    const paletteToggle = document.getElementById('command-palette-toggle');
    // ... (restante das variáveis da paleta)
    const commands = [
        // ... (comandos existentes, com a correção para usar CONFIG.user.github)
        { name: 'Ver Código Fonte no GitHub', action: () => window.open(`https://github.com/${CONFIG.user.github}/${CONFIG.user.github}.github.io`, '_blank'), icon: 'github' },
        // ... (outros comandos)
    ];
    // ... (restante da lógica da paleta, sem alterações)

    // --------------------------------------------------------------------------
    // 4. GERENCIADOR DE MODAL (NOVO)
    // --------------------------------------------------------------------------
    const modal = document.getElementById('generic-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-button');
    const interactiveElements = document.querySelectorAll('.interactive');

    const openModal = (id) => {
        const content = modalContent[id];
        if (!content || !modal) return;

        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.body;
        
        modal.classList.remove('modal-hidden');
        modal.classList.add('is-opening');
        body.classList.add('palette-open'); // Reutiliza o estilo que trava o scroll

        modal.addEventListener('animationend', () => {
            modal.classList.remove('is-opening');
        }, { once: true });
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.add('is-closing');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('is-closing');
            modal.classList.add('modal-hidden');
            body.classList.remove('palette-open');
        }, { once: true });
    };

    interactiveElements.forEach(el => {
        el.addEventListener('click', () => openModal(el.dataset.modalId));
    });
    if (modal) {
        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    }

    // --------------------------------------------------------------------------
    // 5. EASTER EGG (KONAMI CODE - NOVO)
    // --------------------------------------------------------------------------
    if (CONFIG.easter_egg.enabled) {
        let keySequence = [];
        const konamiCode = CONFIG.easter_egg.konami_code;

        const triggerSurprise = () => {
            console.log('Konami Code Activated!');
            // Efeito simples: inverte todas as cores por 10 segundos
            document.documentElement.style.transition = 'filter 0.5s ease-in-out';
            document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
            setTimeout(() => {
                document.documentElement.style.filter = 'none';
            }, 10000);
        };

        window.addEventListener('keydown', (e) => {
            keySequence.push(e.key);
            // Mantém a sequência do mesmo tamanho do código
            if (keySequence.length > konamiCode.length) {
                keySequence.shift();
            }
            // Compara as duas arrays
            if (JSON.stringify(keySequence) === JSON.stringify(konamiCode)) {
                triggerSurprise();
            }
        });
    }

    // --------------------------------------------------------------------------
    // 6. ATUALIZAÇÃO DO ANO
    // --------------------------------------------------------------------------
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

});

// --- Bloco de código duplicado para a paleta de comandos, para garantir a completude ---
// Em um cenário real, este código estaria unificado.
document.addEventListener('DOMContentLoaded', () => {
    const paletteToggle = document.getElementById('command-palette-toggle'),
          paletteOverlay = document.getElementById('command-palette'),
          paletteInput = document.getElementById('command-palette-input'),
          paletteResults = document.getElementById('command-palette-results'),
          paletteClose = document.getElementById('command-palette-close');
    const body = document.body;

    const toggleTheme = () => { /* ... definida acima ... */ };

    const commands = [
        { name: 'Ir para Início', action: () => document.getElementById('boas-vindas').scrollIntoView({behavior: "smooth"}), icon: 'logo' },
        { name: 'Ver Projetos', action: () => document.getElementById('projetos').scrollIntoView({behavior: "smooth"}), icon: 'folder' },
        { name: 'Ler Artigos', action: () => document.getElementById('artigos').scrollIntoView({behavior: "smooth"}), icon: 'mail' },
        { name: 'Ver Minha Jornada', action: () => document.getElementById('jornada').scrollIntoView({behavior: "smooth"}), icon: 'command' },
        { name: 'Ver Meu Setup', action: () => document.getElementById('ferramentas').scrollIntoView({behavior: "smooth"}), icon: 'menu' },
        { name: 'Entrar em Contato', action: () => document.getElementById('contato').scrollIntoView({behavior: "smooth"}), icon: 'mail' },
        { name: 'Ver Código Fonte no GitHub', action: () => window.open(`https://github.com/${CONFIG.user.github}/${CONFIG.user.github}.github.io`, '_blank'), icon: 'github' },
        { name: 'Alternar Tema (Light/Dark)', action: toggleTheme, icon: 'theme' }
    ];

    let activeCommandIndex = 0;
    
    const openPalette = () => { /* ... */ };
    const closePalette = () => { /* ... */ };
    
    if (paletteToggle) {
        // ... Lógica dos listeners da paleta ...
    }
});
