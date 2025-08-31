/* ==========================================================================
   ARQUIVO: player.js
   PROJETO: Pitchutcha TV+
   DESCRIÇÃO: Script central para gerenciar toda a lógica do player de vídeo.
   ========================================================================== */

'use strict';

// Variável global para manter a instância do player e o item atual
let player = null;
let currentItem = null;

/**
 * Inicializa a instância do player Plyr.io com configurações e listeners.
 * @param {object} domElements - Referências aos elementos do DOM.
 */
function initializePlayer(domElements) {
    if (!document.getElementById('video-player')) return;

    player = new Plyr('#video-player', {
        // Opções de customização e internacionalização (tradução)
        i18n: {
            restart: 'Reiniciar',
            rewind: 'Retroceder {seektime}s',
            play: 'Reproduzir',
            pause: 'Pausar',
            fastForward: 'Avançar {seektime}s',
            seek: 'Buscar',
            seekLabel: '{currentTime} de {duration}',
            played: 'Reproduzido',
            buffered: 'Em buffer',
            currentTime: 'Tempo atual',
            duration: 'Duração',
            volume: 'Volume',
            mute: 'Mudo',
            unmute: 'Ativar som',
            enableCaptions: 'Habilitar legendas',
            disableCaptions: 'Desabilitar legendas',
            download: 'Baixar',
            enterFullscreen: 'Tela cheia',
            exitFullscreen: 'Sair da tela cheia',
            frameTitle: 'Player para {title}',
            captions: 'Legendas',
            settings: 'Configurações',
            pip: 'Picture-in-Picture',
            menuBack: 'Voltar ao menu anterior',
            speed: 'Velocidade',
            normal: 'Normal',
            quality: 'Qualidade',
            loop: 'Loop',
            start: 'Iniciar',
            end: 'Fim',
            all: 'Todos',
            reset: 'Resetar',
            disabled: 'Desabilitado',
            enabled: 'Habilitado',
        },
    });
    
    // FUNCIONALIDADE: "Continue Assistindo"
    let saveTimeout;
    player.on('timeupdate', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            if (!currentItem) return;
            // Salva o progresso no localStorage a cada 3 segundos de inatividade
            const progress = { time: player.currentTime, duration: player.duration };
            localStorage.setItem(`progress_${currentItem.id}`, JSON.stringify(progress));
        }, 3000);
    });

    // Listener para o botão de fechar
    domElements.player.closeButton.addEventListener('click', () => closePlayer(domElements));
    domElements.player.overlay.addEventListener('click', () => closePlayer(domElements));
}

/**
 * Abre o player modal, configura a fonte do vídeo e busca o progresso salvo.
 * @param {object} itemData - O objeto de dados do filme/série.
 * @param {object} domElements - Referências aos elementos do DOM.
 */
function openPlayer(itemData, domElements) {
    if (!player) return;

    currentItem = itemData; // Armazena o item atual

    // Configura a fonte do vídeo dinamicamente
    player.source = {
        type: 'video',
        title: itemData.title,
        sources: [
            {
                src: itemData.videoUrl,
                type: 'video/mp4',
                size: 1080, // Exemplo de tamanho
            },
            // Em um projeto real, aqui entraria a fonte HLS
            // {
            //     src: 'caminho/para/playlist.m3u8',
            //     type: 'application/x-mpegURL',
            // },
        ],
        poster: itemData.posterUrl,
    };

    // Mostra o modal
    domElements.player.container.classList.add('is-open');

    // Busca o progresso salvo e avança o vídeo
    const savedProgress = JSON.parse(localStorage.getItem(`progress_${itemData.id}`));
    if (savedProgress && savedProgress.time > 5) { // Só avança se já passou de 5s
        player.currentTime = savedProgress.time;
    }
    
    player.play();
}

/**
 * Fecha e para o player de vídeo.
 * @param {object} domElements - Referências aos elementos do DOM.
 */
function closePlayer(domElements) {
    if (!player) return;
    player.pause();
    currentItem = null;
    domElements.player.container.classList.remove('is-open');
}
