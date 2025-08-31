/* ==========================================================================
   ARQUITETURA DO SCRIPT (V2.0 FINAL)
   - Módulos encapsulados em um listener DOMContentLoaded.
   - Funções com responsabilidades únicas.
   - Gerenciamento de estado para funcionalidades interativas.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. GERENCIADOR DE TEMA (DARK/LIGHT MODE)
    // --------------------------------------------------------------------------
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.remove('theme-light', 'theme-dark');
        body.classList.add(`theme-${theme}`);
        localStorage.setItem('theme', theme);
        if (themeIcon && window.icons) {
            themeIcon.innerHTML = theme === 'light' ? icons.sun : icons.moon;
        }
    };
    
    const toggleTheme = () => {
        const newTheme = body.classList.contains('theme-light') ? 'dark' : 'light';
        applyTheme(newTheme);
        if (themeIcon) {
            themeIcon.classList.add('theme-icon-spin');
            themeIcon.addEventListener('animationend', () => {
                themeIcon.classList.remove('theme-icon-spin');
            }, { once: true });
        }
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // --------------------------------------------------------------------------
    // 2. OBSERVERS DE SCROLL (SCROLLSPY E ANIMAÇÕES)
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    if (sections.length > 0 && sidebarLinks.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const id = entry.target.getAttribute('id');
                    const correspondingLink = document.querySelector(`.sidebar-link[href="#${id}"]`);
                    if (correspondingLink) {
                        sidebarLinks.forEach(link => link.classList.remove('active'));
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }, { threshold: 0.3 });
        sections.forEach(section => scrollObserver.observe(section));
    }

    // --------------------------------------------------------------------------
    // 3. PALETA DE COMANDOS
    // --------------------------------------------------------------------------
    const paletteToggle = document.getElementById('command-palette-toggle');
    const paletteOverlay = document.getElementById('command-palette');
    const paletteInput = document.getElementById('command-palette-input');
    const paletteResults = document.getElementById('command-palette-results');
    const paletteClose = document.getElementById('command-palette-close');

    const commands = [
        { name: 'Ir para Início', action: () => document.getElementById('boas-vindas').scrollIntoView(), icon: 'logo' },
        { name: 'Ver Projetos', action: () => document.getElementById('projetos').scrollIntoView(), icon: 'folder' },
        { name: 'Ler Artigos', action: () => document.getElementById('artigos').scrollIntoView(), icon: 'mail' },
        { name: 'Ver Minha Jornada', action: () => document.getElementById('jornada').scrollIntoView(), icon: 'command' },
        { name: 'Ver Meu Setup', action: () => document.getElementById('ferramentas').scrollIntoView(), icon: 'menu' },
        { name: 'Entrar em Contato', action: () => document.getElementById('contato').scrollIntoView(), icon: 'mail' },
        { name: 'Ver Código Fonte no GitHub', action: () => window.open('https://github.com/ovulgo22/vers-o-3.github.io/tree/main', '_blank'), icon: 'github' },
        { name: 'Alternar Tema (Light/Dark)', action: toggleTheme, icon: 'theme' }
    ];

    const renderCommands = (filter = '') => {
        paletteResults.innerHTML = '';
        const filteredCommands = commands.filter(cmd => cmd.name.toLowerCase().includes(filter.toLowerCase()));
        
        filteredCommands.forEach((cmd, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;
            // O ícone do tema é especial, precisa saber qual mostrar
            const iconName = cmd.icon === 'theme' ? (body.classList.contains('theme-light') ? 'moon' : 'sun') : cmd.icon;
            li.innerHTML = `<span class="icon">${icons[iconName] || ''}</span> ${cmd.name}`;
            li.addEventListener('click', () => {
                cmd.action();
                closePalette();
            });
            paletteResults.appendChild(li);
        });
        updateActiveCommand(0);
    };

    let activeCommandIndex = 0;
    const updateActiveCommand = (newIndex) => {
        const items = paletteResults.querySelectorAll('li');
        if (items.length === 0) return;
        
        items[activeCommandIndex]?.classList.remove('is-active');
        activeCommandIndex = (newIndex + items.length) % items.length; // Garante que o índice seja cíclico
        items[activeCommandIndex].classList.add('is-active');
        items[activeCommandIndex].scrollIntoView({ block: 'nearest' });
    };

    const openPalette = () => {
        paletteOverlay.hidden = false;
        body.style.overflow = 'hidden';
        paletteInput.focus();
        renderCommands();
    };

    const closePalette = () => {
        paletteOverlay.hidden = true;
        body.style.overflow = '';
        paletteInput.value = '';
    };

    const handlePaletteKeyDown = (e) => {
        const items = paletteResults.querySelectorAll('li');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            updateActiveCommand(activeCommandIndex + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            updateActiveCommand(activeCommandIndex - 1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const activeItem = items[activeCommandIndex];
            if (activeItem) activeItem.click();
        }
    };
    
    if (paletteToggle && paletteOverlay && paletteInput) {
        paletteToggle.addEventListener('click', openPalette);
        paletteClose.addEventListener('click', closePalette);
        paletteOverlay.addEventListener('click', (e) => { if(e.target === paletteOverlay) closePalette(); });
        paletteInput.addEventListener('input', () => renderCommands(paletteInput.value));
        
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openPalette();
            }
            if (e.key === 'Escape' && !paletteOverlay.hidden) {
                closePalette();
            }
            if (!paletteOverlay.hidden) {
                handlePaletteKeyDown(e);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 4. ATUALIZAÇÃO DINÂMICA DO ANO NO RODAPÉ
    // --------------------------------------------------------------------------
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
