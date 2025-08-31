# Portfólio Dinâmico de Arquiteto de Software & Desenvolvedor Full-stack

![Website Status](https://img.shields.io/website?down_message=offline&label=portfolio&style=for-the-badge&up_message=online&url=https%3A%2F%2FSEU-USUARIO.github.io%2F)
![License](https://img.shields.io/badge/license-MIT-58a6ff?style=for-the-badge)

Este é o código-fonte do meu portfólio pessoal V2.0, um site estático de última geração construído com foco absoluto em performance, interatividade e integração contínua de dados.

**[➡️ Acesse a versão ao vivo aqui](https://SEU-USUARIO.github.io/)**

---

### Preview

*Aqui é um ótimo lugar para você adicionar uma captura de tela (screenshot) do seu site depois de publicado. Isso aumenta drasticamente o apelo visual para quem visita o repositório.*

![Placeholder para Screenshot do Portfólio]

---

## ✨ Funcionalidades Principais

* **Conteúdo Dinâmico via API:** Projetos e artigos são carregados em tempo real a partir das APIs do **GitHub** e **Dev.to**, mantendo o portfólio sempre atualizado sem esforço manual.
* **Paleta de Comandos (`Ctrl+K`):** Uma interface de navegação rápida inspirada em ferramentas de desenvolvedor (VS Code, Slack) para navegar entre seções e acessar links externos.
* **Tema Dual (Light/Dark):** Alternância de tema com persistência no `localStorage` e detecção automática da preferência do sistema operacional.
* **Design Responsivo e Moderno:** Interface inspirada na clareza do GitHub Docs, totalmente adaptável para desktops, tablets e celulares.
* **Performance Extrema:** Construído sem frameworks, com SVGs gerados por código e zero dependências de imagem, garantindo um carregamento quase instantâneo.

## 🏛️ Filosofia e Arquitetura do Projeto

A arquitetura foi guiada pelos seguintes princípios:

1.  **Vanilla Stack:** Uso de HTML semântico, CSS moderno (Grid, Flexbox, Variáveis) e JavaScript puro (ES6+) para demonstrar o domínio dos fundamentos da web.
2.  **Separação de Responsabilidades (SoC):** O código é dividido em módulos com responsabilidades únicas, facilitando a manutenção e a escalabilidade.
3.  **Performance-First:** O uso da `IntersectionObserver` API para animações e scrollspy garante uma experiência fluida sem sobrecarregar o navegador.
4.  **Código como Asset:** Todos os ícones são definidos como SVGs em JavaScript, eliminando requisições HTTP e permitindo manipulação total via CSS.

## 📁 Estrutura de Arquivos

```

.
├── 📄 index.html      \# A estrutura e o conteúdo (O Esqueleto)
├── 🎨 style.css       \# O design visual e layout estático (A Pele)
├── ✨ animations.css  \# As transições e animações sutis (O Movimento)
├── 💎 icons.js        \# O banco de ícones SVG e o injetor dinâmico (Os Detalhes)
├── 🌐 api.js          \# O módulo de busca de dados externos (Os Dados)
└── 🧠 script.js       \# A lógica, interatividade e estado (O Cérebro)

```

## 🚀 Como Usar e Customizar

Para tornar este portfólio seu, siga os passos:

1.  **Personalize os Dados (`api.js`):**
    * Abra o arquivo `api.js`.
    * Altere as constantes `GITHUB_USERNAME` e `DEVTO_USERNAME` para os seus nomes de usuário.

2.  **Personalize os Links (`script.js`):**
    * Abra o arquivo `script.js`.
    * Na constante `commands`, encontre a ação para "Ver Código Fonte no GitHub" e atualize o link para o seu repositório.

3.  **Personalize o Conteúdo (`index.html`):**
    * Altere o título da página na tag `<title>`.
    * Substitua `[Seu Nome]` e outros textos (Jornada, Setup, Contato) com suas informações.

4.  **Implante no GitHub Pages:**
    * Crie um repositório no GitHub chamado `SEU-USUARIO.github.io`.
    * Envie todos os 6 arquivos de código (`index.html`, etc.) e este `README.md` para o repositório.
    * Em `Settings > Pages`, configure a fonte de deploy para a branch `main`.
    * Seu site estará no ar em poucos minutos no endereço `https://SEU-USUARIO.github.io`.

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir como quiser.
```
