/**
 * Observa as seções e adiciona uma classe para animá-las quando entram na viewport.
 * Essa abordagem é extremamente performática.
 */
export function observeSections() {
    const sections = document.querySelectorAll('.carousel-section');

    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% da seção está visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para de observar depois de animar
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}
