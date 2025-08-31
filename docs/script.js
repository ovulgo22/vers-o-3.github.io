/* ==========================================================================
   ARQUIVO: script.js (VERSÃO FINAL COMPLETA)
   PROJETO: Pitchutcha TV+
   ARQUITETURA JS: Modular (Conceitual)
   - State: Dados da aplicação (mock de API).
   - DOM Elements: Seleção de elementos da página.
   - Components: Funções que criam e manipulam componentes (cards, carrosséis).
   - Modal Logic: Funções dedicadas ao controle do modal.
   - Event Listeners: Central de interatividade do usuário.
   - Initialization: Ponto de entrada da aplicação.
   ========================================================================== */

'use strict';

// --------------------------------------------------------------------------
// 1. STATE: Simulação de uma API de conteúdo (Enriquecida com detalhes)
// --------------------------------------------------------------------------
const apiData = {
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

// --------------------------------------------------------------------------
// 2. COMPONENTS & UI FUNCTIONS
// --------------------------------------------------------------------------
const createCardHTML = (item, category) => {
    return `
        <li class="card" data-category="${category}" data-id="${item.id}">
            <a href="#" onclick="return false;">
                <div class="card-thumbnail" style="background: ${item.thumbnailGradient};">
                    <span>${item.title}</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
            </a>
        </li>
    `;
};
const populateCarousel = (carouselListElement, data, category) => {
    if (!carouselListElement) return;
    carouselListElement.innerHTML = data.map(item => createCardHTML(item, category)).join('');
};
const setupCarouselControls = (carouselArticleElement) => {
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });
};

// --------------------------------------------------------------------------
// 3. NOVA SEÇÃO: Lógica do Modal
// --------------------------------------------------------------------------

/**
 * Preenche e abre o modal com os dados de um item específico.
 * @param {object} itemData - O objeto de dados do item que foi clicado.
 */
function openModal(itemData) {
    const modalContainer = document.getElementById('modal-container');
    // Selecionamos os elementos internos do modal aqui para garantir que eles existam.
    document.getElementById('modal-thumbnail').style.background = itemData.thumbnailGradient;
    document.getElementById('modal-title').textContent = itemData.title;
    document.getElementById('modal-year').textContent = itemData.year;
    document.getElementById('modal-genre').textContent = itemData.genre;
    document.getElementById('modal-rating').textContent = `+${itemData.rating}`;
    document.getElementById('modal-description').textContent = itemData.description;

    document.body.classList.add('modal-is-open'); // Trava o scroll do fundo
    modalContainer.classList.add('is-open');
}

/**
 * Fecha o modal.
 */
function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    document.body.classList.remove('modal-is-open');
    modalContainer.classList.remove('is-open');
}

/**
 * Configura todos os event listeners para o sistema do modal.
 * Usa a técnica de DELEGAÇÃO DE EVENTOS para performance.
 */
function setupModalEventListeners() {
    const carouselsContainer = document.querySelector('.carousels-container');
    const modalContainer = document.getElementById('modal-container');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalOverlay = document.getElementById('modal-overlay');

    // Listener único no container dos carrosséis (delegação de eventos)
    carouselsContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.card'); // Encontra o card pai mais próximo do elemento clicado
        if (!card) return; // Se não clicou em um card, não faz nada

        const category = card.dataset.category;
        const id = card.dataset.id;
        
        // Encontra o item correspondente nos nossos dados
        const itemData = apiData[category]?.find(item => item.id === id);

        if (itemData) {
            openModal(itemData);
        }
    });

    // Listeners para fechar o modal
    modalCloseButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Listener para a tecla 'Escape' para fechar o modal (melhora a acessibilidade)
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalContainer.classList.contains('is-open')) {
            closeModal();
        }
    });
}


// --------------------------------------------------------------------------
// 4. INITIALIZATION (Final e completa)
// --------------------------------------------------------------------------
function initializeApp() {
    // Seleciona os elementos do DOM
    const seriesList = document.getElementById('series-list');
    const moviesList = document.getElementById('movies-list');
    const docsList = document.getElementById('docs-list');
    const carousels = document.querySelectorAll('.carousel');
    const mainHeader = document.querySelector('.main-header');

    // Popula cada carrossel com seus respectivos dados e categoria.
    populateCarousel(seriesList, apiData.series, 'series');
    populateCarousel(moviesList, apiData.movies, 'movies');
    populateCarousel(docsList, apiData.docs, 'docs');
    
    // Adiciona os controles de botão a cada carrossel.
    carousels.forEach(setupCarouselControls);

    // Ativa o efeito de scroll no header.
    setupScrollHeaderEffect(mainHeader);

    // **NOVA INTEGRAÇÃO:** Ativa a lógica do modal.
    setupModalEventListeners();
}

document.addEventListener('DOMContentLoaded', initializeApp);
