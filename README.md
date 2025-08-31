# Portfólio Vivo V3.0

![Website Status](https://img.shields.io/website?down_message=offline&label=portfolio&style=for-the-badge&up_message=online&url=https%3A%2F%2FSEU-USUARIO.github.io%2F)
![License](https://img.shields.io/badge/license-MIT-58a6ff?style=for-the-badge)

Este é o código-fonte do meu Portfólio Vivo, um dashboard pessoal e profissional que se atualiza em tempo real. Construído com uma arquitetura de front-end moderna, este projeto vai além de uma simples vitrine, atuando como um reflexo dinâmico da minha atividade e evolução como desenvolvedor.

**[➡️ Acesse a versão ao vivo aqui](https://SEU-USUARIO.github.io/)**

---

### Preview

*Aqui é um ótimo lugar para você adicionar uma captura de tela (screenshot) do seu site depois de publicado. Isso aumenta drasticamente o apelo visual para quem visita o repositório.*

![Placeholder para Screenshot do Portfólio]

---

## ✨ Funcionalidades Principais

* **Dashboard de Atividade Real:** Integração com a **WakaTime** para exibir um gráfico das linguagens de programação mais usadas nos últimos 7 dias.
* **Conteúdo Dinâmico:** Projetos e artigos são carregados em tempo real via APIs do **GitHub** e **Dev.to**.
* **Sistema de Kudos (Guestbook):** Permite que visitantes deixem recados públicos, demonstrando capacidade de integração com um backend (simulado, com hooks para uma implementação real com Funções Serverless).
* **Personalização e Interatividade:**
    * **Spotify:** Exibe a última música ouvida, adicionando um toque pessoal.
    * **Modais Interativos:** A Jornada Profissional e o Setup de Ferramentas possuem detalhes adicionais que aparecem em modais ao serem clicados.
    * **Easter Egg (Konami Code):** Uma surpresa oculta (`↑↑↓↓←→←→BA`) para os curiosos.
* **Interface Profissional:**
    * **Paleta de Comandos (`Ctrl+K`):** Navegação rápida e execução de ações.
    * **Tema Dual (Light/Dark):** Com persistência e detecção automática de preferência.

## 🏛️ Filosofia e Arquitetura do Projeto

1.  **Configuração Centralizada:** Um arquivo `config.js` atua como um "painel de controle", permitindo fácil personalização e gerenciamento de features.
2.  **Vanilla Stack:** Uso de HTML semântico, CSS moderno e JavaScript puro (ES6+) para máxima performance e controle.
3.  **Separação de Responsabilidades (SoC):** O código é dividido em 8 módulos com responsabilidades únicas, facilitando a manutenção.
4.  **Performance-First:** Uso da `IntersectionObserver` API, ausência de frameworks pesados e um sistema de ícones em SVG-in-JS.

## 📁 Estrutura de Arquivos

```

.
├── 📄 index.html      \# A estrutura e o conteúdo (O Esqueleto)
├── 🎨 style.css       \# O design visual e layout (A Pele)
├── ✨ animations.css  \# As transições e animações (O Movimento)
├── ⚙️ config.js       \# O painel de controle central (As Regras)
├── 💎 icons.js        \# O banco de ícones SVG (Os Detalhes)
├── 🌐 api.js          \# O módulo de busca de dados (Os Dados)
└── 🧠 script.js       \# A lógica e interatividade (O Cérebro)
└── 📖 README.md       \# A documentação (O Manual)

```

## 🚀 Como Usar e Customizar

Para tornar este portfólio seu, siga os passos:

### 1. Configuração Central (O Passo Mais Importante)

Abra o arquivo **`config.js`** e personalize os seguintes campos:

* **`user.github`**: Seu nome de usuário do GitHub.
* **`user.devto`**: Seu nome de usuário do Dev.to.
* **`user.wakatime_json_url`**: Entre no seu dashboard do WakaTime, habilite o compartilhamento e copie o link **JSON** das suas estatísticas.
* **`features`**: Você pode desativar (`false`) funcionalidades como o Guestbook ou Spotify se não quiser usá-las.
* **`api.spotify_endpoint` / `api.guestbook_api`**: **Importante:** Estas funcionalidades precisam de um backend (Funções Serverless na Vercel, Netlify, etc.) para funcionar de verdade. O código atual **simula** o funcionamento. Para torná-lo real, você precisará criar essas funções e colocar os URLs aqui.

### 2. Personalize o Conteúdo

* **`index.html`**: Altere os textos (seu nome, sua jornada, seu setup, etc.).
* **`script.js`**: Na seção `modalContent`, edite os textos que aparecem nos pop-ups da sua jornada e ferramentas. Na seção `commands` da Paleta de Comandos, atualize o link do seu repositório GitHub.

### 3. Implante no GitHub Pages

* Crie um repositório no GitHub chamado `SEU-USUARIO.github.io`.
* Envie todos os 8 arquivos para este repositório.
* Em `Settings > Pages`, configure a fonte de deploy para a branch `main`.
* Seu site estará no ar em poucos minutos.

## 📜 Licença

Este projeto é distribuído sob a licença MIT.

---
