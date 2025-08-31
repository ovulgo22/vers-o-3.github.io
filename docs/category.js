// CONTEÚDO FINAL DO category.js
'use strict';
let triggerElement = null;
const createCardHTML = (item, category) => { /* ... (código inalterado) ... */ };
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
    playButton.onclick = () => {
        closeModal(domElements);
        openPlayer(itemData, domElements); // Chama o player!
    };
}
function closeModal(domElements) { /* ... (código inalterado) ... */ }
function setupModalEventListeners(domElements) { /* ... (código inalterado) ... */ }
function initializeCategoryPage() {
    const categoryTitles = { /* ... */ };
    const domElements = { /* ... (código inalterado) ... */ };
    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');
    const data = apiData[categoryType];
    const title = categoryTitles[categoryType];
    if (data && title) { /* ... (código inalterado) ... */ } 
    else { /* ... (código inalterado) ... */ }
    setupModalEventListeners(domElements);
    initializePlayer(domElements); // INICIA O PLAYER
}
document.addEventListener('DOMContentLoaded', initializeCategoryPage);
