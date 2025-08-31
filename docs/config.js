/* ==========================================================================
   ARQUIVO DE CONFIGURAÇÃO CENTRAL (V3.0)
   - Todas as informações personalizáveis do site vivem aqui.
   - Facilita a manutenção e a personalização sem tocar na lógica principal.
   ========================================================================== */

const CONFIG = {
    // --- DADOS DO USUÁRIO ---
    // Preencha com seus nomes de usuário nas respectivas plataformas.
    user: {
        github: 'SEU-USUARIO-GITHUB',
        devto: 'SEU-USUARIO-DEVTO',
        // Para o WakaTime, você precisa ir no seu dashboard e gerar um link público
        // para suas estatísticas. Geralmente se parece com: 
        // https://wakatime.com/share/@SEU_USUARIO/SUA_CHAVE_SECRETA.json
        wakatime_json_url: 'URL_JSON_DO_SEU_WAKATIME' 
    },

    // --- CONFIGURAÇÕES DE API ---
    // Endpoints para funcionalidades que precisam de um backend (Serverless Functions)
    api: {
        // Endpoint da sua função serverless que busca dados do Spotify.
        // Em um projeto real, você criaria isso em plataformas como Vercel ou Netlify.
        spotify_endpoint: 'URL_DA_SUA_FUNCAO_SPOTIFY',
        
        // Endpoint da sua API para o Guestbook (Kudos).
        // GET para buscar, POST para adicionar.
        guestbook_api: 'URL_DA_SUA_API_DO_GUESTBOOK'
    },

    // --- OPÇÕES DE FUNCIONALIDADES ---
    // Use 'true' para ativar ou 'false' para desativar funcionalidades específicas.
    features: {
        guestbook: true,
        spotify: true,
        wakatime: true
    },

    // --- EASTER EGG ---
    // Sequência de teclas para ativar o Easter Egg.
    easter_egg: {
        enabled: true,
        konami_code: [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
            'b', 'a'
        ]
    }
};
