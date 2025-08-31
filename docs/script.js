// Objeto principal para encapsular a lógica do site
const App = {
    // Ponto de entrada: inicializa a lógica correta para a página atual
    init: function() {
        // Lógica de Navegação Ativa
        this.handleActiveNav();

        // Executa scripts específicos da página
        const pageId = document.body.id;
        switch (pageId) {
            case 'page-home':
                this.initHomePage();
                break;
            case 'page-docs':
                this.initDocsPage();
                break;
            case 'page-playground':
                this.initPlaygroundPage();
                break;
        }
    },

    // Destaca o link de navegação da página atual
    handleActiveNav: function() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

    // Lógica para a Home Page (index.html)
    initHomePage: function() {
        const canvas = document.getElementById('hero-animation');
        if (!canvas) return;
        // ... (código completo da animação de partículas, sem alterações)
    },

    // Lógica para a Página de Documentação (docs.html)
    initDocsPage: function() {
        const sidebar = document.getElementById('sidebar-nav');
        if (!sidebar) return;
        // ... (código completo do menu mobile e observadores de scroll, sem alterações)
    },

    // Lógica para a Página do Playground (playground.html)
    initPlaygroundPage: function() {
        const fetchBtn = document.getElementById('fetch-api-btn');
        const resultBox = document.getElementById('api-result');

        if (!fetchBtn) return;

        fetchBtn.addEventListener('click', this.fetchApiData);
    },

    // Função para buscar dados da API externa
    fetchApiData: async function() {
        const resultBox = document.getElementById('api-result');
        resultBox.classList.remove('error');
        resultBox.classList.add('loading');
        resultBox.innerHTML = `<p>Consultando os dados cósmicos...</p>`;

        try {
            // Await a resposta do fetch
            const response = await fetch('https://api.quotable.io/random');
            
            // Verifica se a resposta da rede foi bem-sucedida
            if (!response.ok) {
                throw new Error(`Erro de Rede: ${response.status}`);
            }

            // Await a conversão da resposta para JSON
            const data = await response.json();
            
            // Exibe os dados formatados
            resultBox.innerHTML = `
                <blockquote>"${data.content}"</blockquote>
                <footer>— ${data.author}</footer>
            `;

        } catch (error) {
            // Trata erros de rede ou de parsing
            console.error("Falha ao buscar dados da API:", error);
            resultBox.classList.add('error');
            resultBox.innerHTML = `<p>Ocorreu um erro ao consultar o oráculo. Verifique sua conexão ou tente novamente mais tarde.</p>`;

        } finally {
            // Remove a classe de loading independentemente do resultado
            resultBox.classList.remove('loading');
        }
    }
};

// Inicializa o App quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => App.init());
