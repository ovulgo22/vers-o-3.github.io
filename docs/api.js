/* ==========================================================================
   MÓDULO DE INTEGRAÇÃO COM APIs EXTERNAS
   - Responsável por buscar e renderizar dados dinâmicos do GitHub e Dev.to.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO ---
    // Substitua pelos seus nomes de usuário.
    const GITHUB_USERNAME = 'ovulgo22';
    const DEVTO_USERNAME = 'ovulgo22';
    const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;
    const DEVTO_API_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=3`;

    // --- Seletores do DOM ---
    const projectsGrid = document.getElementById('github-projects-grid');
    const articlesContainer = document.getElementById('devto-articles-container');

    /**
     * Busca e renderiza os projetos do GitHub.
     * Pega os 6 repositórios atualizados mais recentemente.
     */
    const fetchGitHubProjects = async () => {
        try {
            const response = await fetch(GITHUB_API_URL);
            if (!response.ok) {
                throw new Error(`Erro na API do GitHub: ${response.statusText}`);
            }
            const repos = await response.json();

            // Limpa o loader
            projectsGrid.innerHTML = '';

            if (repos.length === 0) {
                projectsGrid.innerHTML = '<p>Nenhum projeto encontrado no GitHub.</p>';
                return;
            }

            repos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-header">
                        <span id="folder-icon-${repo.id}" class="icon">${icons.folder}</span>
                        <h3 class="project-title">${repo.name}</h3>
                    </div>
                    <p class="project-description">${repo.description || 'Sem descrição.'}</p>
                    <div class="project-footer">
                        <span class="project-tech">⭐ ${repo.stargazers_count} &nbsp;&nbsp; • &nbsp;&nbsp; ${repo.language || 'N/A'}</span>
                        <div class="project-links">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub" class="icon-button">
                                <span id="github-icon-project-${repo.id}" class="icon">${icons.github}</span>
                            </a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });

        } catch (error) {
            console.error('Falha ao buscar projetos do GitHub:', error);
            projectsGrid.innerHTML = '<p class="error-message">Não foi possível carregar os projetos do GitHub no momento.</p>';
        }
    };

    /**
     * Busca e renderiza os artigos do Dev.to.
     */
    const fetchDevToArticles = async () => {
        try {
            const response = await fetch(DEVTO_API_URL);
             if (!response.ok) {
                throw new Error(`Erro na API do Dev.to: ${response.statusText}`);
            }
            const articles = await response.json();
            
            // Limpa o loader
            articlesContainer.innerHTML = '';

            if (articles.length === 0) {
                articlesContainer.innerHTML = '<p>Nenhum artigo encontrado no Dev.to.</p>';
                return;
            }

            articles.forEach(article => {
                const articleLink = document.createElement('a');
                articleLink.href = article.url;
                articleLink.className = 'article-card';
                articleLink.target = '_blank';
                articleLink.rel = 'noopener noreferrer';
                articleLink.innerHTML = `
                    <h3 class="article-card-title">${article.title}</h3>
                    <div class="article-card-details">
                        <span>❤️ ${article.public_reactions_count} Reações</span>
                        <span>💬 ${article.comments_count} Comentários</span>
                    </div>
                `;
                articlesContainer.appendChild(articleLink);
            });

        } catch (error) {
            console.error('Falha ao buscar artigos do Dev.to:', error);
            articlesContainer.innerHTML = '<p class="error-message">Não foi possível carregar os artigos do Dev.to no momento.</p>';
        }
    };

    // --- INICIALIZAÇÃO ---
    if (projectsGrid) {
        fetchGitHubProjects();
    }
    if (articlesContainer) {
        fetchDevToArticles();
    }
});
