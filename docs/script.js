/* ==========================================================================
   ARQUIVO: script.js (VERSÃO FINAL REVISADA E REFINADA)
   PROJETO: Pitchutcha TV+
   ========================================================================== */

'use strict';

// --------------------------------------------------------------------------
// 1. STATE: Simulação de uma API de conteúdo
// --------------------------------------------------------------------------
const apiData = { /* ... (os dados permanecem os mesmos da versão anterior, omitido por brevidade) ... */ 
    series: [
        { id: 's1', title: 'A Fundação Cósmica', year: 2024, genre: 'Ficção Científica', rating: '16', description: 'Uma saga intergaláctica que narra a jornada de um grupo de exilados para salvar a humanidade e reconstruir a civilização em meio à queda de um Império Galáctico.', thumbnailGradient: 'linear-gradient(to top, #022a4a, #0d5c8d)' },
        { id: 's2', title: 'Ruptura Mental', year: 2025, genre: 'Suspense Psicológico', rating: '18', description: 'Em uma empresa onde a memória de trabalho dos funcionários foi cirurgicamente dividida entre suas vidas pessoais e profissionais, uma funcionária em busca da verdade inicia uma jornada para desvendar a teia de conspirações.', thumbnailGradient: 'linear-gradient(to top, #013237, #0f6f7b)' },
        { id: 's3', title: 'O Vidente', year: 2023, genre: 'Ação', rating: '14', description: 'Em um futuro distante onde a humanidade perdeu o sentido da visão, a sociedade teve que encontrar novas maneiras de interagir, construir e sobreviver. Tudo muda quando um par de gêmeos nasce com a capacidade de enxergar.', thumbnailGradient: 'linear-gradient(to top, #4a0202, #8d0d0d)' },
        { id: 's4', title: 'Ted, o Treinador', year: 2024, genre: 'Comédia', rating: 'Livre', description: 'Um ingênuo treinador de futebol americano é contratado para treinar um time de futebol britânico, mas o que lhe falta em conhecimento, ele compensa com otimismo e biscoitos.', thumbnailGradient: 'linear-gradient(to top, #024a2f, #0d8d5e)' },
        { id: 's5', title: 'Planeta Pré-Histórico', year: 2023, genre: 'Documentário', rating: 'Livre', description: 'Viaje 66 milhões de anos no tempo para descobrir como era o nosso mundo e os dinossauros que o habitavam, em um documentário espetacular narrado por uma voz icônica.', thumbnailGradient: 'linear-gradient(to top, #4a2c02, #8d560d)' },
        { id: 's6', title: 'Invasão Silenciosa', year: 2025, genre: 'Ficção Científica', rating: '14', description: 'Uma invasão alienígena é vista em tempo real através das perspectivas de diferentes pessoas em vários continentes ao redor do mundo.', thumbnailGradient: 'linear-gradient(to top, #3b024a, #6c0d8d)' },
    ],
    movies: [
        { id: 'm1', title: 'Frequência Anômala', year: 2024, genre: 'Suspense', rating: '16', description: 'Dois detetives descobrem uma série de crimes inexplicáveis ligados a uma frequência de rádio misteriosa que parece transmitir eventos do futuro.', thumbnailGradient: 'linear-gradient(to top, #4a4502, #8d840d)' },
        { id: 'm2', title: 'O Último Ronin', year: 2025, genre: 'Ação/Animação', rating: '18', description: 'Num futuro distópico, o último sobrevivente de um clã de guerreiros busca vingança pela morte de sua família, enfrentando o exército de seu maior inimigo.', thumbnailGradient: 'linear-gradient(to top, #4a1b02, #8d360d)' },
        { id: 'm3', title: 'Geometria do Medo', year: 2023, genre: 'Terror', rating: '18', description: 'Um grupo de estudantes de matemática se vê preso em um labirinto extradimensional onde as leis da física não se aplicam e cada sala é uma armadilha mortal baseada em paradoxos geométricos.', thumbnailGradient: 'linear-gradient(to top, #1e1e1e, #555)' },
        { id: 'm4', title: 'Projeto Fênix', year: 2024, genre: 'Ficção Científica', rating: '12', description: 'Após um evento cataclísmico, uma cientista lidera uma equipe para reativar um satélite capaz de restaurar a atmosfera da Terra, enfrentando sabotagem e os perigos de um planeta em colapso.', thumbnailGradient: 'linear-gradient(to top, #024a45, #0d8d84)' },
    ],
    docs: [
        { id: 'd1', title: 'A Batalha dos Elefantes', year: 2024, genre: 'Natureza', rating: 'Livre', description: 'Acompanhe a jornada épica de uma matriarca elefante enquanto ela lidera sua família por centenas de quilômetros de savana africana em busca de água, enfrentando predadores e caçadores.', thumbnailGradient: 'linear-gradient(to top, #422d13, #785226)' },
        { id: 'd2', title: 'Supermodelos: O Legado', year: 2023, genre: 'Biografia', rating: '12', description: 'Quatro mulheres icônicas que dominaram as passarelas nos anos 90 se reúnem para contar suas histórias de sucesso, poder e como mudaram o rosto da moda para sempre.', thumbnailGradient: 'linear-gradient(to top, #4a022f, #8d0d5e)' },
        { id: 'd3', title: 'A Mente de Gênios', year: 2025, genre: 'Ciência', rating: '10', description: 'Explore os processos de pensamento e as rotinas diárias de alguns dos maiores inovadores vivos do mundo, de cientistas a artistas, para desvendar os segredos da criatividade.', thumbnailGradient: 'linear-gradient(to top, #132542, #264a78)' },
    ]
};

// REFINAMENTO DE PERFORMANCE: Mantém uma referência ao último elemento focado antes do modal abrir.
let triggerElement = null;

// --------------------------------------------------------------------------
// 2. COMPONENTS & UI FUNCTIONS
// --------------------------------------------------------------------------

/**
 * REFINAMENTO DE CÓDIGO E SEMÂNTICA: Remove JS inline e usa href significativo.
 */
const createCardHTML = (item, category) => {
    return `
        <li class="card" data-category="${category}" data-id="${item.id}" role="button" tabindex="0">
            <div class="card-link-content">
                <div class="card-thumbnail" style="background: ${item.thumbnailGradient};">
                    <span>${item.title}</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
            </div>
        </li>
    `;
};

const populateCarousel = (carouselListElement, data, category) => {
    if (!carouselListElement) return;
    carouselListElement.innerHTML = data.map(item => createCardHTML(item, category)).join('');
};

const setupCarouselControls = (carouselArticleElement) => {
    // ... (esta função permanece a mesma, omitida por brevidade)
    const content = carouselArticleElement.querySelector('.carousel-content');
    const prevButton = carouselArticleElement.querySelector('.control-prev');
    const nextButton = carouselArticleElement.querySelector('.control-next');
    if (content.scrollWidth > content.clientWidth) {
        carouselArticleElement.querySelector('.carousel-controls').style.display = 'flex';
    }
    nextButton?.addEventListener('click', () => {
        const scrollAmount = content.clientWidth * 0.75;
        content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prevButton?.addEventListener('click', () => {
        const scrollAmount = content.clientWidth * 0.75;
        content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
};

const setupScrollHeaderEffect = (headerElement) => {
    // ... (esta função permanece a mesma, omitida por brevidade)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });
};

// --------------------------------------------------------------------------
// 3. Lógica do Modal (Refinada para Acessibilidade e Performance)
// --------------------------------------------------------------------------

function openModal(itemData, domElements) {
    triggerElement = document.activeElement; // REFINAMENTO DE ACESSIBILIDADE: Salva quem abriu o modal

    // REFINAMENTO DE PERFORMANCE: Usa referências de elementos já selecionadas
    domElements.modal.thumbnail.style.background = itemData.thumbnailGradient;
    domElements.modal.title.textContent = itemData.title;
    domElements.modal.year.textContent = itemData.year;
    domElements.modal.genre.textContent = itemData.genre;
    domElements.modal.rating.textContent = `${itemData.rating === 'Livre' ? '' : '+'}${itemData.rating}`;
    domElements.modal.description.textContent = itemData.description;

    document.body.classList.add('modal-is-open');
    domElements.modal.container.classList.add('is-open');

    // REFINAMENTO DE ACESSIBILIDADE: Move o foco para dentro do modal
    domElements.modal.closeButton.focus();
}

function closeModal(domElements) {
    document.body.classList.remove('modal-is-open');
    domElements.modal.container.classList.remove('is-open');
    
    // REFINAMENTO DE ACESSIBILIDADE: Devolve o foco para quem abriu o modal
    triggerElement?.focus();
}

function setupModalEventListeners(domElements) {
    domElements.carouselsContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;

        const category = card.dataset.category;
        const id = card.dataset.id;
        const itemData = apiData[category]?.find(item => item.id === id);

        if (itemData) {
            openModal(itemData, domElements);
        }
    });
    
    // Permite que o card seja ativado com a tecla Enter, como um botão
    domElements.carouselsContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const card = event.target.closest('.card');
            if (!card) return;
            const category = card.dataset.category;
            const id = card.dataset.id;
            const itemData = apiData[category]?.find(item => item.id === id);
            if (itemData) {
                openModal(itemData, domElements);
            }
        }
    });

    domElements.modal.closeButton.addEventListener('click', () => closeModal(domElements));
    domElements.modal.overlay.addEventListener('click', () => closeModal(domElements));
    
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && domElements.modal.container.classList.contains('is-open')) {
            closeModal(domElements);
        }
        
        // REFINAMENTO DE ACESSIBILIDADE: "Prende" o foco dentro do modal
        if (event.key === 'Tab' && domElements.modal.container.classList.contains('is-open')) {
            const focusableElements = domElements.modal.content.querySelectorAll('button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    });
}

// --------------------------------------------------------------------------
// 4. INITIALIZATION (Final e completa)
// --------------------------------------------------------------------------
function initializeApp() {
    // REFINAMENTO DE PERFORMANCE: Centraliza todas as consultas ao DOM
    const domElements = {
        seriesList: document.getElementById('series-list'),
        moviesList: document.getElementById('movies-list'),
        docsList: document.getElementById('docs-list'),
        carousels: document.querySelectorAll('.carousel'),
        mainHeader: document.querySelector('.main-header'),
        carouselsContainer: document.querySelector('.carousels-container'),
        modal: {
            container: document.getElementById('modal-container'),
            content: document.querySelector('.modal-content'),
            overlay: document.getElementById('modal-overlay'),
            closeButton: document.getElementById('modal-close-button'),
            thumbnail: document.getElementById('modal-thumbnail'),
            title: document.getElementById('modal-title'),
            year: document.getElementById('modal-year'),
            genre: document.getElementById('modal-genre'),
            rating: document.getElementById('modal-rating'),
            description: document.getElementById('modal-description'),
        }
    };

    populateCarousel(domElements.seriesList, apiData.series, 'series');
    populateCarousel(domElements.moviesList, apiData.movies, 'movies');
    populateCarousel(domElements.docsList, apiData.docs, 'docs');
    
    domElements.carousels.forEach(setupCarouselControls);
    setupScrollHeaderEffect(domElements.mainHeader);
    setupModalEventListeners(domElements);
}

document.addEventListener('DOMContentLoaded', initializeApp);
