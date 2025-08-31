/**
 * Cria um card de filme e o adiciona ao track do carrossel.
 * @param {object} movieData - Os dados do filme.
 * @returns {HTMLElement} O elemento do card criado.
 */
function createMovieCard(movieData) {
    const card = document.createElement('div');
    card.className = 'card';

    const poster = document.createElement('div');
    poster.className = 'card-poster';
    // Aplica o gradiente "matemático" para simular uma imagem
    poster.style.background = `linear-gradient(135deg, ${movieData.color1}, ${movieData.color2}, ${movieData.color3})`;
    
    const content = document.createElement('div');
    content.className = 'card-content';
    
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = movieData.title;

    content.appendChild(title);
    card.appendChild(poster);
    card.appendChild(content);

    return card;
}

/**
 * Inicializa a funcionalidade de um carrossel.
 * @param {string} carouselSelector - O seletor CSS para o container do carrossel.
 * @param {Array<object>} data - Um array de dados para os cards.
 */
export function createCarousel(carouselSelector, data) {
    const carouselElement = document.querySelector(carouselSelector);
    if (!carouselElement) return;

    const track = carouselElement.querySelector('.carousel-track');
    const nextBtn = carouselElement.querySelector('.next');
    const prevBtn = carouselElement.querySelector('.prev');

    // Popula o carrossel com os cards
    data.forEach(movie => {
        const card = createMovieCard(movie);
        track.appendChild(card);
    });

    // Funcionalidade dos botões
    nextBtn.addEventListener('click', () => {
        const scrollAmount = track.offsetWidth * 0.8; // Rola 80% da largura visível
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const scrollAmount = track.offsetWidth * 0.8;
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
}
