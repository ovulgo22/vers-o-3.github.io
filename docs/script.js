const App = {
    // Objeto para armazenar o estado da aplicação
    state: {
        qubit: { alpha: 1, beta: 0 }, // Representa |ψ⟩ = α|0⟩ + β|1⟩
    },

    init: function() {
        // ... (código de inicialização e roteamento de página)
        // Adiciona inicializadores para novas animações
        this.animations.initStaggering();
    },

    // Submódulo para Animações
    animations: {
        initHomePageScroll: function() {
            const elements = document.querySelectorAll('[data-scroll-fade]');
            window.addEventListener('scroll', () => {
                elements.forEach(el => {
                    const opacity = Math.max(0, 1 - window.scrollY / 300);
                    const scale = Math.max(0.9, 1 - window.scrollY / 1000);
                    el.style.opacity = opacity;
                    el.style.transform = `scale(${scale})`;
                });
            }, { passive: true });
        },
        initStaggering: function() {
            const grids = document.querySelectorAll('.glossary-grid, .tools-grid');
            grids.forEach(grid => {
                const items = grid.children;
                for (let i = 0; i < items.length; i++) {
                    items[i].style.setProperty('--i', i);
                }
            });
        }
    },
    
    // Submódulo para Componentes
    components: {
        // Lógica do Simulador Quântico
        initQuantumSimulator: function() {
            const controls = document.querySelector('.simulator-controls');
            if (!controls) return;

            controls.addEventListener('click', (e) => {
                if (e.target.matches('[data-gate]')) {
                    const gate = e.target.dataset.gate;
                    App.quantum.applyGate(gate);
                }
            });
            App.quantum.updateVisuals();
        }
    },

    // Submódulo para lógica de páginas
    pages: {
        initHomePage: function() { App.animations.initHomePageScroll(); },
        initPlaygroundPage: function() { App.components.initQuantumSimulator(); /*...api oracle...*/},
        // ... (outras páginas)
    },

    // Submódulo para Lógica Quântica
    quantum: {
        applyGate: function(gate) {
            let { alpha, beta } = App.state.qubit;
            if (gate === 'reset') {
                [alpha, beta] = [1, 0];
            } else if (gate === 'h') { // Hadamard
                [alpha, beta] = [(alpha + beta) / Math.sqrt(2), (alpha - beta) / Math.sqrt(2)];
            } else if (gate === 'x') { // Pauli-X (NOT)
                [alpha, beta] = [beta, alpha];
            } else if (gate === 'measure') {
                this.measure();
                return;
            }
            App.state.qubit = { alpha, beta };
            this.updateVisuals();
        },
        measure: function() {
            const { alpha, beta } = App.state.qubit;
            const prob0 = alpha * alpha;
            const rand = Math.random();
            const result = rand < prob0 ? 0 : 1;

            document.getElementById('measurement-output').innerHTML = `<p><strong>Medição:</strong> Colapsou para o estado <strong>|${result}⟩</strong></p>`;
            
            App.state.qubit = (result === 0) ? { alpha: 1, beta: 0 } : { alpha: 0, beta: 1 };
            this.updateVisuals(true); // Anima o colapso
        },
        updateVisuals: function(isCollapse = false) {
            const { alpha, beta } = App.state.qubit;
            const prob0 = (alpha * alpha * 100).toFixed(0);
            const prob1 = (beta * beta * 100).toFixed(0);

            // Atualiza texto de estado e probabilidade
            document.getElementById('qubit-state-text').textContent = `|ψ⟩ = ${alpha.toFixed(2)} |0⟩ + ${beta.toFixed(2)} |1⟩`;
            document.getElementById('qubit-prob-text').textContent = `P(0) = ${prob0}%, P(1) = ${prob1}%`;
            if (!isCollapse) document.getElementById('measurement-output').innerHTML = '';

            // Atualiza visualização do qubit na "esfera"
            const indicator = document.getElementById('qubit-state-indicator');
            // Mapeia a probabilidade P(1) para uma posição vertical. 0% -> -115px (|0⟩), 100% -> 115px (|1⟩)
            const yPos = -115 + (beta * beta) * 230;
            indicator.style.transform = `translateY(${yPos}px)`;
        }
    },
    
    // ... (restante da lógica do App, como o fetchApiData, devidamente modularizado)
};

// Adapte a chamada init para o novo formato
document.addEventListener('DOMContentLoaded', () => {
    // ... (roteamento antigo que chama App.pages.initHomePage(), etc.)
});
