# Portfólio de Arquiteto de Software & Desenvolvedor Full-stack

![Website Status](https://img.shields.io/website?down_message=offline&label=portfolio&style=for-the-badge&up_message=online&url=https%3A%2F%2FSEU-USUARIO.github.io%2F)
![License](https://img.shields.io/badge/license-MIT-58a6ff?style=for-the-badge)

Este é o código-fonte do meu portfólio pessoal, um site estático de última geração construído com foco absoluto em performance, design limpo e engenharia de front-end moderna.

**[➡️ Acesse a versão ao vivo aqui](https://ovulgo22.github.io/vers-o-3.github.io/)**

---

### Preview

*Aqui é um ótimo lugar para você adicionar uma captura de tela (screenshot) do seu site depois de publicado. Isso aumenta drasticamente o apelo visual para quem visita o repositório.*

![Placeholder para Screenshot do Portfólio]

---

## 🏛️ Filosofia e Arquitetura do Projeto

Este projeto foi construído do zero, sem frameworks ou bibliotecas pesadas, para demonstrar o domínio dos fundamentos da web. A arquitetura foi guiada pelos seguintes princípios:

1.  **Performance em Primeiro Lugar:** O site é estático, servido via GitHub Pages, o que garante velocidade de carregamento e segurança. Não há builds, dependências ou tempo de espera.
2.  **Zero Arquivos de Imagem:** Todos os ícones são SVGs gerados dinamicamente via JavaScript. Isso elimina requisições HTTP para imagens, resultando em um carregamento quase instantâneo e renderização vetorial perfeita em qualquer resolução de tela.
3.  **Engenharia de Estilo Moderna:** O design é totalmente controlado por CSS moderno, utilizando Variáveis (Custom Properties) para um sistema de temas (Dark/Light) limpo e de fácil manutenção. O layout é construído com Grid e Flexbox.
4.  **JavaScript com Propósito e Performance:** O JavaScript é utilizado apenas para interatividade real, como a troca de tema e animações de scroll. A API `IntersectionObserver` é usada para garantir que essas operações tenham impacto mínimo na performance.
5.  **Código Limpo e Organizado:** A separação de responsabilidades é clara entre os cinco arquivos principais, tornando o projeto legível e fácil de manter.

## 📁 Estrutura de Arquivos

O projeto é composto por 5 arquivos principais, cada um com uma responsabilidade única:

```

.
├── 📄 index.html      \# A estrutura e o conteúdo (O Esqueleto)
├── 🎨 style.css       \# O design visual e layout estático (A Pele)
├── ✨ animations.css  \# As transições e animações sutis (O Movimento)
├── 💎 icons.js        \# O banco de ícones SVG e o injetor dinâmico (Os Detalhes)
└── 🧠 script.js       \# A lógica, interatividade e performance (O Cérebro)

```

## 🚀 Como Usar e Customizar

Este repositório serve como um template. Para torná-lo seu, siga os passos:

1.  **Clone ou Faça um Fork deste Repositório:** Comece criando uma cópia para a sua conta do GitHub.
2.  **Personalize o Conteúdo (`index.html`):**
    * Altere o título da página na tag `<title>`.
    * Substitua `[Seu Nome]` em todo o arquivo pelo seu nome.
    * Atualize os textos nas seções "Sobre", "Projetos", "Artigos" e "Contato" com suas informações.
    * Adicione os links corretos para seu GitHub, LinkedIn e Email.
3.  **Ajuste o Estilo (`style.css`):**
    * Para mudar a cor de destaque principal, altere o valor da variável `--color-accent` em `:root`. Todo o site se adaptará automaticamente.
4.  **Implante no GitHub Pages:**
    * Renomeie o repositório para `SEU-USUARIO.github.io` para publicá-lo como seu site principal.
    * Vá para `Settings > Pages` e configure a fonte de deploy para a branch `main`.
    * Seu site estará no ar em poucos minutos.

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. Sinta-se à vontade para usar, modificar e distribuir como quiser.
```
