document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA A PÁGINA INICIAL (index.html)
    const canvas = document.getElementById('particles-js');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // Propriedades das partículas
        const particleProps = {
            count: 100,
            radius: 2,
            color: 'rgba(88, 166, 255, 0.7)',
            lineColor: 'rgba(88, 166, 255, 0.15)',
            speed: 0.5,
            lineDistance: 150
        };

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            if (numberOfParticles > particleProps.count) numberOfParticles = particleProps.count;

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * particleProps.radius) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * particleProps.speed) - (particleProps.speed / 2);
                let directionY = (Math.random() * particleProps.speed) - (particleProps.speed / 2);
                particlesArray.push(new Particle(x, y, directionX, directionY, size, particleProps.color));
            }
        }

        function connect() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                        ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7) && distance < particleProps.lineDistance * particleProps.lineDistance) {
                        ctx.strokeStyle = particleProps.lineColor;
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
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });

        init();
        animate();
    }


    // LÓGICA PARA A PÁGINA DE DOCUMENTAÇÃO (docs.html)
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const menuToggle = document.getElementById('menu-toggle');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        const contentSections = document.querySelectorAll('.content-section');

        // Funcionalidade do Menu Mobile
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            // Ocultamente, pode-se adicionar uma classe ao body para travar o scroll do conteúdo principal
        });

        // Fechar sidebar ao clicar em um link (para mobile)
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
        });

        // Animação de Scroll para as seções
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        contentSections.forEach(section => {
            sectionObserver.observe(section);
        });


        // Destaque do link ativo na sidebar com base na rolagem
        const activeLinkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.sidebar-link[href="#${id}"]`);

                    sidebarLinks.forEach(link => link.classList.remove('active'));
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        contentSections.forEach(section => {
            activeLinkObserver.observe(section);
        });
    }

});
