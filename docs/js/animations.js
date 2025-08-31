// animations.js

class ScrollAnimator {
    constructor() {
        this.elementsToAnimate = document.querySelectorAll('.content-carousel');
        if (this.elementsToAnimate.length === 0) return;
        
        this.initObserver();
    }

    initObserver() {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // Anima quando 10% do elemento está visível
        };

        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
        this.elementsToAnimate.forEach(el => this.observer.observe(el));
    }

    handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Para de observar o elemento depois que a animação foi acionada
                observer.unobserve(entry.target);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimator();
});
