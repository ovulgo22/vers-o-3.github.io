/* ==========================================================================
   ARQUIVO: script.js
   PROJETO: Pitchutcha TV+
   ARQUITETURA JS: Modular (Conceitual)
   - State: Dados da aplicação (mock de API).
   - DOM Elements: Seleção de elementos da página.
   - Components: Funções que criam e manipulam componentes (cards, carrosséis).
   - Event Listeners: Central de interatividade do usuário.
   - Initialization: Ponto de entrada da aplicação.
   ========================================================================== */

// 'use strict'; força um modo mais seguro e rigoroso de interpretação do JS.
'use strict';

// --------------------------------------------------------------------------
// 1. STATE: Simulação de uma API de conteúdo
// --------------------------------------------------------------------------
const apiData = {
    series: [
        { title: 'A Fundação Cósmica', thumbnailGradient: 'linear-gradient(to top, #022a4a, #0d5c8d)' },
        { title: 'Ruptura Mental', thumbnailGradient: 'linear-gradient(to top, #013237, #0f6f7b)' },
        { title: 'O Vidente', thumbnailGradient: 'linear-gradient(to top, #4a0202, #8d0d0d)' },
        { title: 'Ted, o Treinador', thumbnailGradient: 'linear-gradient(to top, #024a2f, #0d8d5e)' },
        { title: 'Planeta Pré-Histórico', thumbnailGradient: 'linear-gradient(to top, #4a2c02, #8d560d)' },
        { title: 'Invasão Silenciosa', thumbnailGradient: 'linear-gradient(to top, #3b024a, #6c0d8d)' },
    ],
    movies: [
        { title: 'Frequência Anômala', thumbnailGradient: 'linear-gradient(to top, #4a4502, #8d840d)' },
        { title: 'O Último Ronin', thumbnailGradient: 'linear-gradient(to top, #4a1b02, #8d360d)' },
        { title: 'Geometria do Medo', thumbnailGradient: 'linear-gradient(to top, #1e1e1e, #555)' },
        { title: 'Projeto Fênix', thumbnailGradient: 'linear-gradient(to top, #024a45, #0d8d84)' },
        { title: 'Coda: O Som da Vida', thumbnailGradient: 'linear-gradient(to top, #022a4a, #0d5c8d)' },
        { title: 'Ecos do Silêncio', thumbnailGradient: 'linear-gradient(to top, #333, #777)' },
    ],
    docs: [
        { title: 'A Batalha dos Elefantes', thumbnailGradient: 'linear-gradient(to top, #422d13, #785226)' },
        { title: 'Supermodelos: O Legado', thumbnailGradient: 'linear-gradient(to top, #4a022f, #8d0d5e)' },
        { title: 'A Mente de Gênios', thumbnailGradient: 'linear-gradient(to top, #132542, #264a78)' },
        { title: 'Terra: O Planeta Barulhento', thumbnailGradient: 'linear-gradient(to top, #134237, #26786a)' },
        { title: '1971: O Ano em que a Música Mudou Tudo', thumbnailGradient: 'linear-gradient(to top, #423a13, #786c26)' }
    ]
};


// --------------------------------------------------------------------------
// 2. COMPONENTS & UI FUNCTIONS
// --------------------------------------------------------------------------

/**
 * Cria o HTML para um único card de conteúdo.
 * @param {object} item - O objeto contendo os dados do conteúdo (título, gradiente).
 * @returns {string} - A string HTML do elemento <li> do card.
 */
const createCardHTML = (item) => {
    return `
        <li class="card">
            <a href="#">
                <div class="card-thumbnail" style="background: ${item.thumbnailGradient};">
                    <span>${item.title}</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
            </a>
        </li>
    `;
};

/**
 * Popula um elemento de lista do carrossel com cards.
 * @param {HTMLElement} carouselListElement - O elemento <ul> do carrossel.
 * @param {Array<object>} data - O array de dados a ser populado.
 */
const populateCarousel = (carouselListElement, data) => {
    if (!carouselListElement) return;
    // Usamos map() para transformar cada item de dado em um card HTML e join() para unir tudo em uma única string.
    // Isso é mais performático do que adicionar um elemento ao DOM de cada vez.
    carouselListElement.innerHTML = data.map(createCardHTML).join('');
};

/**
 * Adiciona funcionalidade de scroll aos botões de um carrossel.
 * @param {HTMLElement} carouselArticleElement - O elemento <article> que envolve o carrossel.
 */
const setupCarouselControls = (carouselArticleElement) => {
    const content = carouselArticleElement.querySelector('.carousel-content');
    const prevButton = carouselArticleElement.querySelector('.control-prev');
    const nextButton = carouselArticleElement.querySelector('.control-next');

    // Mostra os botões, que estavam escondidos pelo CSS, pois agora temos JS para controlá-los.
    if(prevButton && nextButton) {
        carouselArticleElement.querySelector('.carousel-controls').style.display = 'flex';
    }

    // Evento para o botão "Próximo"
    nextButton?.addEventListener('click', () => {
        // A lógica matemática: scrolla para a direita a uma distância equivalente a 75% da largura visível do carrossel.
        const scrollAmount = content.clientWidth * 0.75;
        content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Evento para o botão "Anterior"
    prevButton?.addEventListener('click', () => {
        const scrollAmount = content.clientWidth * 0.75;
        content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
};

/**
 * Adiciona um efeito sutil ao header quando o usuário rola a página.
 * @param {HTMLElement} headerElement - O elemento <header>.
 */
const setupScrollHeaderEffect = (headerElement) => {
    window.addEventListener('scroll', () => {
        // Se o scroll vertical for maior que 10 pixels, adiciona a classe 'scrolled'.
        // Isso permite estilizar o header de forma diferente via CSS (ex: fundo mais sólido).
        if (window.scrollY > 10) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });
};


// --------------------------------------------------------------------------
// 3. INITIALIZATION
// --------------------------------------------------------------------------

/**
 * Função principal que inicializa a aplicação quando o DOM está pronto.
 */
function initializeApp() {
    // Seleciona os elementos do DOM uma única vez para melhor performance.
    const seriesList = document.getElementById('series-list');
    const moviesList = document.getElementById('movies-list');
    const docsList = document.getElementById('docs-list');
    const carousels = document.querySelectorAll('.carousel');
    const mainHeader = document.querySelector('.main-header');

    // Popula cada carrossel com seus respectivos dados da "API".
    populateCarousel(seriesList, apiData.series);
    populateCarousel(moviesList, apiData.movies);
    populateCarousel(docsList, apiData.docs);
    
    // Adiciona os controles de botão a cada carrossel.
    carousels.forEach(setupCarouselControls);

    // Ativa o efeito de scroll no header.
    setupScrollHeaderEffect(mainHeader);
}

// O evento 'DOMContentLoaded' é o ponto de partida. Ele garante que o script
// só será executado após o HTML ter sido completamente carregado e parseado.
document.addEventListener('DOMContentLoaded', initializeApp);

.main-header.scrolled {
    background: rgba(13, 13, 15, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
