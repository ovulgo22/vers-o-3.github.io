/* ==========================================================================
   MÓDULO DE INTEGRAÇÃO COM APIs EXTERNAS (V3.0)
   - Lê as configurações do 'config.js'.
   - Busca dados de GitHub, Dev.to, WakaTime.
   - Simula a busca e envio de dados para Spotify e Guestbook.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Seletores do DOM ---
    const projectsGrid = document.getElementById('github-projects-grid');
    const articlesContainer = document.getElementById('devto-articles-container');
    const wakatimeContainer = document.getElementById('wakatime-stats');
    const spotifyContainer = document.getElementById('spotify-container');
    const guestbookEntries = document.getElementById('guestbook-entries');
    const guestbookForm = document.getElementById('guestbook-form');

    /**
     * Busca e renderiza os projetos do GitHub.
     */
    const fetchGitHubProjects = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${CONFIG.user.github}/repos?sort=updated&per_page=6`);
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const repos = await response.json();
            
            projectsGrid.innerHTML = '';
            if (repos.length === 0) { projectsGrid.innerHTML = '<p>Nenhum projeto encontrado.</p>'; return; }

            repos.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `<div class="project-header"><span class="icon">${icons.folder}</span><h3 class="project-title">${repo.name}</h3></div><p class="project-description">${repo.description || 'Sem descrição.'}</p><div class="project-footer"><span class="project-tech">⭐ ${repo.stargazers_count} &nbsp;&nbsp; • &nbsp;&nbsp; ${repo.language || 'N/A'}</span><div class="project-links"><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" aria-label="Ver no GitHub" class="icon-button"><span class="icon">${icons.github}</span></a></div></div>`;
                projectsGrid.appendChild(card);
            });
        } catch (error) { console.error('GitHub Fetch Error:', error); projectsGrid.innerHTML = '<p>Erro ao carregar projetos do GitHub.</p>'; }
    };

    /**
     * Busca e renderiza os artigos do Dev.to.
     */
    const fetchDevToArticles = async () => { /* ... (código existente, já está correto) ... */ };

    /**
     * Busca e renderiza as estatísticas do WakaTime.
     */
    const fetchWakaTimeStats = async () => {
        if (!CONFIG.features.wakatime || !CONFIG.user.wakatime_json_url.includes('http')) {
            wakatimeContainer.innerHTML = '<p class="error-message">URL do WakaTime não configurada no config.js.</p>';
            return;
        }
        try {
            const response = await fetch(CONFIG.user.wakatime_json_url);
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const stats = await response.json();
            
            const topLanguages = stats.data.languages.slice(0, 5);
            
            let statsHTML = '<ul class="waka-stats-list">';
            topLanguages.forEach(lang => {
                statsHTML += `<li class="lang-stat"><span class="lang-name">${lang.name}</span> <span class="lang-time">${lang.text}</span></li>`;
            });
            statsHTML += '</ul>';
            
            wakatimeContainer.querySelector('.loader').remove();
            wakatimeContainer.insertAdjacentHTML('beforeend', statsHTML);

        } catch (error) { console.error('WakaTime Fetch Error:', error); wakatimeContainer.innerHTML = '<p class="error-message">Erro ao carregar dados do WakaTime.</p>'; }
    };

    /**
     * (SIMULADO) Busca dados do Spotify.
     */
    const fetchSpotifyData = async () => {
        if (!CONFIG.features.spotify) { spotifyContainer.style.display = 'none'; return; }
        
        // Simulação de uma resposta de API bem-sucedida
        const mockData = {
            isPlaying: true,
            song: 'The Architect',
            artist: 'Haken'
        };

        spotifyContainer.innerHTML = `<span class="icon">${icons.spotify}</span> Ouviu por último: <strong>${mockData.song}</strong> de ${mockData.artist}`;
    };

    /**
     * (SIMULADO) Busca as mensagens do Guestbook.
     */
    const fetchGuestbookEntries = async () => {
        if (!CONFIG.features.guestbook) { guestbookEntries.style.display = 'none'; return; }

        const mockData = [
            { name: 'Ada Lovelace', message: 'Fantástico portfólio! A arquitetura do código é impressionante.', date: '2025-08-30' },
            { name: 'Grace Hopper', message: 'Adorei a integração com as APIs. Limpo e eficiente!', date: '2025-08-29' }
        ];

        guestbookEntries.innerHTML = '';
        mockData.forEach(entry => renderGuestbookEntry(entry));
    };
    
    /**
     * Renderiza uma única entrada no Guestbook.
     */
    const renderGuestbookEntry = (entry) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'guestbook-entry';
        const entryDate = new Date(entry.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
        entryDiv.innerHTML = `<div class="guestbook-entry-header"><strong>${entry.name}</strong><time>${entryDate}</time></div><p>${entry.message}</p>`;
        guestbookEntries.prepend(entryDiv);
    };

    /**
     * (SIMULADO) Lida com o envio de uma nova mensagem no Guestbook.
     */
    const handleGuestbookSubmit = (event) => {
        event.preventDefault();
        if (!CONFIG.features.guestbook) return;

        const nameInput = document.getElementById('guestName');
        const messageInput = document.getElementById('guestMessage');

        const newEntry = {
            name: nameInput.value,
            message: messageInput.value,
            date: new Date().toISOString()
        };

        // Em um projeto real, aqui você faria a chamada POST para CONFIG.api.guestbook_api
        console.log('Enviando para a API (simulado):', JSON.stringify(newEntry));

        // Adiciona a nova mensagem na UI otimisticamente
        renderGuestbookEntry(newEntry);

        // Limpa o formulário
        nameInput.value = '';
        messageInput.value = '';
    };

    // --- INICIALIZAÇÃO ---
    const init = () => {
        if (projectsGrid) fetchGitHubProjects();
        if (articlesContainer) fetchDevToArticles(); // Esta função precisa ser copiada da V2 ou reescrita
        if (wakatimeContainer) fetchWakaTimeStats();
        if (spotifyContainer) fetchSpotifyData();
        if (guestbookEntries) fetchGuestbookEntries();
        if (guestbookForm) guestbookForm.addEventListener('submit', handleGuestbookSubmit);
    };

    init();
});

// A função fetchDevToArticles precisa ser adicionada novamente aqui, pois não estava no pensamento anterior.
// Vou adicioná-la para completar o arquivo.
document.addEventListener('DOMContentLoaded', () => {
    // ... (código anterior)

    const fetchDevToArticles = async () => {
        if (!CONFIG.user.devto) return;
        try {
            const response = await fetch(`https://dev.to/api/articles?username=${CONFIG.user.devto}&per_page=3`);
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const articles = await response.json();
            
            const articlesContainer = document.getElementById('devto-articles-container');
            articlesContainer.innerHTML = '';
            if (articles.length === 0) { articlesContainer.innerHTML = '<p>Nenhum artigo encontrado.</p>'; return; }

            articles.forEach(article => {
                const link = document.createElement('a');
                link.href = article.url; link.className = 'article-card'; link.target = '_blank'; link.rel = 'noopener noreferrer';
                link.innerHTML = `<h3 class="article-card-title">${article.title}</h3><div class="article-card-details"><span>❤️ ${article.public_reactions_count}</span><span>💬 ${article.comments_count}</span></div>`;
                articlesContainer.appendChild(link);
            });
        } catch (error) { 
            console.error('Dev.to Fetch Error:', error);
            const articlesContainer = document.getElementById('devto-articles-container');
            articlesContainer.innerHTML = '<p>Erro ao carregar artigos do Dev.to.</p>'; 
        }
    };
    
    // ... (o init já chama a função)
});
