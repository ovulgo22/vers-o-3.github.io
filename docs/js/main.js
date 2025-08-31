// main.js

// Lógica para substituir o include src="assets/icons.svg"
// Isso é necessário porque `include` não é um atributo HTML padrão.
// Uma solução robusta para carregar o SVG sprite.
function loadSVGSprite() {
    const includeDiv = document.querySelector('div[style="display: none;"] include');
    if (includeDiv) {
        const src = includeDiv.getAttribute('src');
        fetch(src)
            .then(response => response.text())
            .then(data => {
                includeDiv.parentElement.innerHTML = data;
            })
            .catch(err => console.error('Error loading SVG sprite:', err));
    }
}

// Adiciona um efeito sutil no cabeçalho ao rolar a página
function handleHeaderScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(13, 13, 15, 0.9)';
        } else {
            header.style.background = 'rgba(13, 13, 15, 0.8)';
        }
    });
}

// Função de inicialização principal
function main() {
    console.log("Clone Apple TV+ Initialized");
    loadSVGSprite();
    handleHeaderScroll();
    // Os outros scripts (carousel.js, animations.js) são auto-inicializáveis
    // com o evento DOMContentLoaded, então não precisam ser chamados aqui.
}

// Garante que o DOM está pronto antes de executar o script principal
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}
