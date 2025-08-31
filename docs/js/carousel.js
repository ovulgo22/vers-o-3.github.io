// carousel.js

class Carousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.track = this.carousel.querySelector('.carousel-track');
        this.prevButton = this.carousel.querySelector('.nav-button.prev');
        this.nextButton = this.carousel.querySelector('.nav-button.next');
        
        if (!this.track || !this.prevButton || !this.nextButton) {
            console.error('Carousel structure is incomplete for:', this.carousel);
            return;
        }

        this.init();
    }

    init() {
        this.addEventListeners();
        this.updateButtonState();
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.scroll('prev'));
        this.nextButton.addEventListener('click', () => this.scroll('next'));
        this.track.addEventListener('scroll', () => this.updateButtonState());
    }

    scroll(direction) {
        const cardWidth = this.track.querySelector('.content-card').offsetWidth;
        // Geometria: Scrolla 80% da largura visível para mostrar parte do próximo card
        const scrollAmount = this.track.clientWidth * 0.8;
        const scrollValue = direction === 'next' ? scrollAmount : -scrollAmount;
        
        this.track.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }

    updateButtonState() {
        // Lógica matemática para habilitar/desabilitar botões
        const scrollLeft = this.track.scrollLeft;
        const maxScroll = this.track.scrollWidth - this.track.clientWidth;

        this.prevButton.disabled = scrollLeft < 10; // Margem de erro pequena
        this.nextButton.disabled = scrollLeft > maxScroll - 10;
    }
}

// Inicializa todos os carrosséis na página
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.content-carousel');
    carousels.forEach(carousel => new Carousel(carousel));
});
