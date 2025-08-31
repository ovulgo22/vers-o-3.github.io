/* ==========================================================================
   ARQUIVO: category.js
   PROJETO: Pitchutcha TV+
   DESCRIÇÃO: Script dedicado a popular e gerenciar a página de
              categorias (category.html).
   ========================================================================== */

'use strict';

let triggerElement = null;

// --------------------------------------------------------------------------
// Funções de Componente e UI (Reutilizadas do script.js)
// Em um projeto maior, estas funções estariam em um arquivo "shared.js"
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

// --------------------------------------------------------------------------
// Lógica do Modal (Também reutilizada para consistência)
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
    // Na página de categoria, o listener é adicionado à grade principal
    domElements.categoryGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;
        const category = card.dataset.category;
        const id = card.dataset.id;
        const itemData = apiData[category]?.find(item => item.id === id);
        if (itemData) {
            openModal(itemData, domElements);
        }
    });
    
    domElements.categoryGrid.addEventListener('keydown', (event) => {
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
// Lógica Principal da Página de Categoria
// --------------------------------------------------------------------------
function initializeCategoryPage() {
    // Mapeamento de tipos para títulos legíveis
    const categoryTitles = {
        series: "Séries",
        movies: "Filmes",
        docs: "Documentários"
    };

    // Seleciona os elementos da página
    const domElements = {
        categoryTitle: document.getElementById('category-title'),
        categoryGrid: document.getElementById('category-grid'),
        navLinks: document.querySelectorAll('.main-nav .nav-link'),
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

    // 1. Lê o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');

    // 2. Busca os dados e o título correspondentes
    const data = apiData[categoryType];
    const title = categoryTitles[categoryType];

    // 3. Valida e Popula a Página
    if (data && title) {
        // Atualiza o título da página e o H1
        document.title = `Pitchutcha TV+ | ${title}`;
        domElements.categoryTitle.textContent = title;

        // Popula a grade com todos os itens da categoria
        domElements.categoryGrid.innerHTML = data.map(item => createCardHTML(item, categoryType)).join('');

        // Ativa o link de navegação correto
        domElements.navLinks.forEach(link => {
            if (link.href.includes(`type=${categoryType}`)) {
                link.classList.add('active');
            }
        });

    } else {
        // Tratamento de erro se a categoria for inválida
        domElements.categoryTitle.textContent = "Categoria não encontrada";
    }

    // 4. Inicializa a funcionalidade do Modal
    setupModalEventListeners(domElements);
}

document.addEventListener('DOMContentLoaded', initializeCategoryPage);
