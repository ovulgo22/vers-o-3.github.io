document.addEventListener('DOMContentLoaded', () => {

    /**
     * MÓDULO 1: Animação de Partículas para a Landing Page (index.html)
     * Cria um fundo interativo com partículas conectadas.
     */
    const initParticleAnimation = () => {
        const canvas = document.getElementById('hero-animation');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray = [];

        class Particle {
            constructor(x, y, dirX, dirY, size) {
                this.x = x; this.y = y; this.dirX = dirX; this.dirY = dirY; this.size = size;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#8B5CF6';
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
                if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
                this.x += this.dirX;
                this.y += this.dirY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 1;
                const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                const dirX = (Math.random() * .4) - 0.2;
                const dirY = (Math.random() * .4) - 0.2;
                particlesArray.push(new Particle(x, y, dirX, dirY, size));
            }
        }

        function connect() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        const opacity = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particlesArray.forEach(p => p.update());
            connect();
        }
        
        window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; init(); });
        init();
        animate();
    };

    /**
     * MÓDULO 2: Funcionalidades da Página de Documentação (docs.html)
     * Controla o menu mobile, o destaque de link ativo e as animações de scroll.
     */
    const initDocsPage = () => {
        if (!document.body.classList.contains('docs-page')) return;

        const sidebar = document.getElementById('sidebar-nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const contentSections = document.querySelectorAll('.content-section');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        // Lógica do Menu Mobile com acessibilidade
        menuToggle.addEventListener('click', () => {
            const isOpen = sidebar.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', e => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Observador para destacar link ativo na sidebar
        const activeLinkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    sidebarLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '0px 0px -70% 0px' });

        contentSections.forEach(section => activeLinkObserver.observe(section));

        // Observador para animação de fade-in das seções
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        contentSections.forEach(section => scrollObserver.observe(section));
    };

    /**
     * MÓDULO 3: Simulação de Sistema Integrado (API Demo)
     * Controla o comportamento do exemplo interativo na página de docs.
     */
    const initApiDemo = () => {
        const submitBtn = document.getElementById('api-submit-btn');
        const input = document.getElementById('api-question-input');
        const responseOutput = document.getElementById('api-response-output');

        if (!submitBtn) return;

        submitBtn.addEventListener('click', () => {
            const question = input.value.trim();
            if (!question) {
                responseOutput.innerHTML = `<p style="color: #f7b731;">Por favor, digite uma pergunta.</p>`;
                return;
            }

            responseOutput.classList.add('loading');
            responseOutput.innerHTML = `<p>Processando sua pergunta...</p>`;

            // Simula uma chamada de API com um delay
            setTimeout(() => {
                let answer = "Esta é uma resposta padrão. Em um sistema real, a IA processaria sua pergunta e geraria uma resposta única.";
                if (question.toLowerCase().includes("futuro")) {
                    answer = "O futuro da IA é promissor, com potencial para avanços em medicina, automação e ciência. No entanto, o desenvolvimento ético é crucial para garantir que a tecnologia beneficie a todos.";
                } else if (question.toLowerCase().includes("quântica")) {
                    answer = "A computação quântica tem o potencial de resolver problemas complexos que são intratáveis para computadores clássicos, revolucionando áreas como criptografia e descoberta de novos materiais.";
                }
                
                responseOutput.classList.remove('loading');
                responseOutput.innerHTML = `<p><strong>Resposta da IA:</strong> ${answer}</p>`;
            }, 1500);
        });
    };

    // Inicializa todos os módulos
    initParticleAnimation();
    initDocsPage();
    initApiDemo();
});
