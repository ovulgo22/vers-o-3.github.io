/* ==========================================================================
   ARQUIVO: script.js (ATUALIZADO PARA A ARQUITETURA MPA)
   PROJETO: Pitchutcha TV+
   DESCRIÇÃO: Script responsável unicamente pela interatividade da
              página inicial (index.html).
   ========================================================================== */

'use strict';

// NOTA DE ARQUITETURA: O objeto `apiData` foi removido deste arquivo.
// Ele agora é carregado globalmente a partir do arquivo `data.js`,
// tornando-o acessível para este script e para o `category.js`.

let triggerElement = null;

// --------------------------------------------------------------------------
// 2. COMPONENTS & UI FUNCTIONS (Funções compartilhadas)
// --------------------------------------------------------------------------

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
    // Populamos apenas os 3 primeiros itens para a vitrine da página inicial
    carouselListElement.innerHTML = data.slice(0, 5).map(item => createCardHTML(item, category)).join('');
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
// 3. Lógica do Modal (Idêntica, pois o modal é um componente global)
// --------------------------------------------------------------------------

function openModal(itemData, domElements) {
    triggerElement = document.activeElement;
    domElements.modal.thumbnail.style.background = itemData.thumbnailGradient;
    domElements.modal.title.textContent = itemData.title;
    domElements.modal.year.textContent = itemData.year;
    domElements.modal.genre.textContent = itemData.genre;
    domElements.modal.rating.textContent = `${itemData.rating === 'Livre' ? '' : '+'}${itemData.rating}`;
    domElements.modal.description.textContent = itemData.description;
    document.body.classList.add('modal-is-open');
    domElements.modal.container.classList.add('is-open');
    domElements.modal.closeButton.focus();
}

function closeModal(domElements) {
    document.body.classList.remove('modal-is-open');
    domElements.modal.container.classList.remove('is-open');
    triggerElement?.focus();
}

function setupModalEventListeners(domElements) {
    // A lógica de setup do modal permanece a mesma da versão anterior,
    // pois ele precisa funcionar da mesma forma na página inicial.
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
        if (event.key === 'Tab' && domElements.modal.container.classList.contains('is-open')) {
            const focusableElements = domElements.modal.content.querySelectorAll('button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    });
}

// --------------------------------------------------------------------------
// 4. Lógica dos Carrosséis Inteligentes (Idêntica)
// --------------------------------------------------------------------------

function updateCarouselButtons(content, prevBtn, nextBtn) {
    const scrollLeft = content.scrollLeft;
    const scrollWidth = content.scrollWidth;
    const clientWidth = content.clientWidth;
    prevBtn.disabled = scrollLeft < 1;
    nextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
}

function initializeCarousel(carouselElement) {
    const content = carouselElement.querySelector('.carousel-content');
    const prevBtn = carouselElement.querySelector('.control-prev');
    const nextBtn = carouselElement.querySelector('.control-next');
    if (!content || !prevBtn || !nextBtn) return;
    content.addEventListener('scroll', () => {
        updateCarouselButtons(content, prevBtn, nextBtn);
    });
    prevBtn.addEventListener('click', () => {
        content.scrollBy({ left: -content.clientWidth * 0.8, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        content.scrollBy({ left: content.clientWidth * 0.8, behavior: 'smooth' });
    });
    updateCarouselButtons(content, prevBtn, nextBtn);
}


// --------------------------------------------------------------------------
// 5. INITIALIZATION (Simplificada para a página inicial)
// --------------------------------------------------------------------------
function initializeApp() {
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

    // Popula os carrosséis da página inicial
    populateCarousel(domElements.seriesList, apiData.series, 'series');
    populateCarousel(domElements.moviesList, apiData.movies, 'movies');
    populateCarousel(domElements.docsList, apiData.docs, 'docs');
    
    // Inicializa as interações da página inicial
    domElements.carousels.forEach(initializeCarousel);
    setupScrollHeaderEffect(domElements.mainHeader);
    setupModalEventListeners(domElements);
}

document.addEventListener('DOMContentLoaded', initializeApp);
