// CONTEÚDO FINAL DO script.js
'use strict';
let triggerElement = null;
const createCardHTML = (item, category) => { /* ... (código inalterado) ... */ };
const populateCarousel = (carouselListElement, data, category) => { /* ... (código inalterado) ... */ };
const setupScrollHeaderEffect = (headerElement) => { /* ... (código inalterado) ... */ };
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

    // ADIÇÃO: Listener para o botão de play DENTRO do modal de info
    const playButton = domElements.modal.content.querySelector('.play-button');
    playButton.onclick = () => { // Usamos .onclick para sobrescrever listeners anteriores
        closeModal(domElements);
        openPlayer(itemData, domElements); // Chama o player!
    };
}
function closeModal(domElements) { /* ... (código inalterado) ... */ }
function setupModalEventListeners(domElements) { /* ... (código inalterado) ... */ }
function updateCarouselButtons(content, prevBtn, nextBtn) { /* ... (código inalterado) ... */ }
function initializeCarousel(carouselElement) { /* ... (código inalterado) ... */ }
function initializeApp() {
    const domElements = { /* ... (código inalterado) ... */ };
    populateCarousel(domElements.seriesList, apiData.series, 'series');
    populateCarousel(domElements.moviesList, apiData.movies, 'movies');
    populateCarousel(domElements.docsList, apiData.docs, 'docs');
    domElements.carousels.forEach(initializeCarousel);
    setupScrollHeaderEffect(domElements.mainHeader);
    setupModalEventListeners(domElements);
    initializePlayer(domElements); // INICIA O PLAYER
}
document.addEventListener('DOMContentLoaded', initializeApp);
