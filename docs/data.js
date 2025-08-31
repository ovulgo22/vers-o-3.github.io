/* ==========================================================================
   ARQUIVO: data.js (ATUALIZADO COM DADOS DE VÍDEO)
   ========================================================================== */

const apiData = {
    series: [
        { id: 's1', title: 'A Fundação Cósmica', year: 2024, genre: 'Ficção Científica', rating: '16', description: 'Uma saga intergaláctica que narra a jornada de um grupo de exilados para salvar a humanidade e reconstruir a civilização em meio à queda de um Império Galáctico.', thumbnailGradient: 'linear-gradient(to top, #022a4a, #0d5c8d)', posterUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        // ... (Adicionar posterUrl e videoUrl para os outros itens também)
    ],
    movies: [
        { id: 'm1', title: 'Frequência Anômala', year: 2024, genre: 'Suspense', rating: '16', description: 'Dois detetives descobrem uma série de crimes inexplicáveis ligados a uma frequência de rádio misteriosa que parece transmitir eventos do futuro.', thumbnailGradient: 'linear-gradient(to top, #4a4502, #8d840d)', posterUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    ],
    docs: [
        { id: 'd1', title: 'A Batalha dos Elefantes', year: 2024, genre: 'Natureza', rating: 'Livre', description: 'Acompanhe a jornada épica de uma matriarca elefante enquanto ela lidera sua família por centenas de quilômetros de savana africana em busca de água.', thumbnailGradient: 'linear-gradient(to top, #422d13, #785226)', posterUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    ]
    // OBS: Por brevidade, adicionei os links a apenas um item de cada categoria.
    // Em um projeto real, todos os itens teriam seus próprios links.
};
