/* ==========================================================================
   ARQUIVO: data.js
   PROJETO: Pitchutcha TV+
   DESCRIÇÃO: Banco de dados centralizado para ser compartilhado entre
              as diferentes páginas e scripts da aplicação.
   ========================================================================== */

const apiData = {
    series: [
        { id: 's1', title: 'A Fundação Cósmica', year: 2024, genre: 'Ficção Científica', rating: '16', description: 'Uma saga intergaláctica que narra a jornada de um grupo de exilados para salvar a humanidade e reconstruir a civilização em meio à queda de um Império Galáctico.', thumbnailGradient: 'linear-gradient(to top, #022a4a, #0d5c8d)' },
        { id: 's2', title: 'Ruptura Mental', year: 2025, genre: 'Suspense Psicológico', rating: '18', description: 'Em uma empresa onde a memória de trabalho dos funcionários foi cirurgicamente dividida entre suas vidas pessoais e profissionais, uma funcionária em busca da verdade inicia uma jornada para desvendar a teia de conspirações.', thumbnailGradient: 'linear-gradient(to top, #013237, #0f6f7b)' },
        { id: 's3', title: 'O Vidente', year: 2023, genre: 'Ação', rating: '14', description: 'Em um futuro distante onde a humanidade perdeu o sentido da visão, a sociedade teve que encontrar novas maneiras de interagir, construir e sobreviver. Tudo muda quando um par de gêmeos nasce com a capacidade de enxergar.', thumbnailGradient: 'linear-gradient(to top, #4a0202, #8d0d0d)' },
        { id: 's4', title: 'Ted, o Treinador', year: 2024, genre: 'Comédia', rating: 'Livre', description: 'Um ingênuo treinador de futebol americano é contratado para treinar um time de futebol britânico, mas o que lhe falta em conhecimento, ele compensa com otimismo e biscoitos.', thumbnailGradient: 'linear-gradient(to top, #024a2f, #0d8d5e)' },
        { id: 's5', title: 'Planeta Pré-Histórico', year: 2023, genre: 'Documentário', rating: 'Livre', description: 'Viaje 66 milhões de anos no tempo para descobrir como era o nosso mundo e os dinossauros que o habitavam, em um documentário espetacular narrado por uma voz icônica.', thumbnailGradient: 'linear-gradient(to top, #4a2c02, #8d560d)' },
        { id: 's6', title: 'Invasão Silenciosa', year: 2025, genre: 'Ficção Científica', rating: '14', description: 'Uma invasão alienígena é vista em tempo real através das perspectivas de diferentes pessoas em vários continentes ao redor do mundo.', thumbnailGradient: 'linear-gradient(to top, #3b024a, #6c0d8d)' },
    ],
    movies: [
        { id: 'm1', title: 'Frequência Anômala', year: 2024, genre: 'Suspense', rating: '16', description: 'Dois detetives descobrem uma série de crimes inexplicáveis ligados a uma frequência de rádio misteriosa que parece transmitir eventos do futuro.', thumbnailGradient: 'linear-gradient(to top, #4a4502, #8d840d)' },
        { id: 'm2', title: 'O Último Ronin', year: 2025, genre: 'Ação/Animação', rating: '18', description: 'Num futuro distópico, o último sobrevivente de um clã de guerreiros busca vingança pela morte de sua família, enfrentando o exército de seu maior inimigo.', thumbnailGradient: 'linear-gradient(to top, #4a1b02, #8d360d)' },
        { id: 'm3', title: 'Geometria do Medo', year: 2023, genre: 'Terror', rating: '18', description: 'Um grupo de estudantes de matemática se vê preso em um labirinto extradimensional onde as leis da física não se aplicam e cada sala é uma armadilha mortal baseada em paradoxos geométricos.', thumbnailGradient: 'linear-gradient(to top, #1e1e1e, #555)' },
        { id: 'm4', title: 'Projeto Fênix', year: 2024, genre: 'Ficção Científica', rating: '12', description: 'Após um evento cataclísmico, uma cientista lidera uma equipe para reativar um satélite capaz de restaurar a atmosfera da Terra, enfrentando sabotagem e os perigos de um planeta em colapso.', thumbnailGradient: 'linear-gradient(to top, #024a45, #0d8d84)' },
    ],
    docs: [
        { id: 'd1', title: 'A Batalha dos Elefantes', year: 2024, genre: 'Natureza', rating: 'Livre', description: 'Acompanhe a jornada épica de uma matriarca elefante enquanto ela lidera sua família por centenas de quilômetros de savana africana em busca de água, enfrentando predadores e caçadores.', thumbnailGradient: 'linear-gradient(to top, #422d13, #785226)' },
        { id: 'd2', title: 'Supermodelos: O Legado', year: 2023, genre: 'Biografia', rating: '12', description: 'Quatro mulheres icônicas que dominaram as passarelas nos anos 90 se reúnem para contar suas histórias de sucesso, poder e como mudaram o rosto da moda para sempre.', thumbnailGradient: 'linear-gradient(to top, #4a022f, #8d0d5e)' },
        { id: 'd3', title: 'A Mente de Gênios', year: 2025, genre: 'Ciência', rating: '10', description: 'Explore os processos de pensamento e as rotinas diárias de alguns dos maiores inovadores vivos do mundo, de cientistas a artistas, para desvendar os segredos da criatividade.', thumbnailGradient: 'linear-gradient(to top, #132542, #264a78)' },
    ]
};
