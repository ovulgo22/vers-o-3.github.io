/* ==========================================================================
   1. BANCO DE ÍCONES SVG
   ========================================================================== */

// Cada propriedade neste objeto corresponde a um ícone.
// Os SVGs são minimalistas e inspirados em bibliotecas modernas como Feather Icons.
// A propriedade 'currentColor' permite que a cor seja controlada pelo CSS.
const icons = {
    // Usado no logo e como ícone genérico
    logo: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path></svg>`,

    // Ícone para o toggle de tema (Sol)
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,

    // Ícone para o toggle de tema (Lua)
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    
    // Ícone de menu para mobile
    menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,

    // Ícone de pasta para os projetos
    folder: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,

    // Ícone do GitHub
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,

    // Ícone do LinkedIn
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,

    // Ícone de E-mail
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,

    // Ícone de link externo (para demos de projetos)
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
};

/* ==========================================================================
   2. FUNÇÃO DE CARREGAMENTO E INJEÇÃO DOS ÍCONES
   ========================================================================== */

/**
 * Carrega e injeta os ícones SVG nos elementos HTML apropriados.
 * A função busca por IDs que correspondem ao padrão `nome-icon` ou `nome-icon-numero`.
 */
const loadIcons = () => {
    // Seleciona todos os elementos cujo ID termina com "-icon" ou "-icon-[numero]"
    const iconElements = document.querySelectorAll('[id$="-icon"], [id*="-icon-"]');

    iconElements.forEach(element => {
        // Extrai o nome base do ícone do ID do elemento.
        // Ex: "theme-icon" -> "theme"
        // Ex: "github-icon-project-2" -> "github"
        const iconName = element.id.split('-')[0];

        // Mapeia nomes compostos para o nome correto do ícone no objeto.
        // Ex: "externalLink" precisa ser mapeado de "external-link-icon".
        let mappedIconName = iconName;
        if (iconName === 'external') {
            mappedIconName = 'externalLink';
        }
        
        // Verifica se o ícone existe no nosso banco de ícones.
        if (icons[mappedIconName]) {
            // Insere o código SVG dentro do elemento span.
            element.innerHTML = icons[mappedIconName];
        } else {
            console.warn(`Ícone não encontrado: ${mappedIconName}`);
        }
    });

    // Casos especiais de nomenclatura (ex: theme-icon)
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        // Define o ícone inicial do tema com base no tema atual do sistema ou preferência salva
        const currentTheme = document.body.classList.contains('theme-light') ? 'sun' : 'moon';
        themeIcon.innerHTML = icons[currentTheme];
    }
};

// Garante que o DOM esteja completamente carregado antes de executar a função.
document.addEventListener('DOMContentLoaded', loadIcons);
