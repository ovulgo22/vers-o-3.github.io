import { createCarousel } from './ui.js';
import { observeSections } from './animations.js';

// Ponto de entrada da aplicação, executado quando o HTML está pronto.
document.addEventListener('DOMContentLoaded', () => {
    // Dados Falsos (Mock Data) - Em um app real, viria de uma API.
    const originalsData = [
        { title: 'Eco Esférico', color1: '#3a1c71', color2: '#d76d77', color3: '#ffaf7b' },
        { title: 'Vetor Temporal', color1: '#1e3c72', color2: '#2a5298', color3: '#6dd5ed' },
        { title: 'A Singularidade Dourada', color1: '#ff7e5f', color2: '#feb47b', color3: '#f7971e' },
        { title: 'Código de Fibonacci', color1: '#000000', color2: '#434343', color3: '#333333' },
        { title: 'Matriz Fantasma', color1: '#0f2027', color2: '#203a43', color3: '#2c5364' },
        { title: 'Fractais do Abismo', color1: '#141e30', color2: '#243b55', color3: '#537895' },
    ];

    const scifiData = [
        { title: 'Hyperion', color1: '#8e2de2', color2: '#4a00e0', color3: '#800080' },
        { title: 'Neuromancer', color1: '#00c9ff', color2: '#92fe9d', color3: '#00f260' },
        { title: 'Duna', color1: '#c2b280', color2: '#d2b48c', color3: '#b8860b' },
        { title: 'Solaris', color1: '#005aa7', color2: '#fffde4', color3: '#003e6b' },
        { title: 'Contato', color1: '#2c3e50', color2: '#bdc3c7', color3: '#ecf0f1' },
        { title: 'A Fundação', color1: '#4b6cb7', color2: '#182848', color3: '#2a4a8f' },
    ];

    // Inicializa os dois carrosséis
    createCarousel('#originals-carousel', originalsData);
    createCarousel('#scifi-carousel', scifiData);

    // Inicializa o observador de animações de scroll
    observeSections();
});
