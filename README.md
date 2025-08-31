# Clone da Interface Apple TV+ (Estudo de Front-end)

![Demonstração do Site](https://user-images.githubusercontent.com/your-username/your-repo/assets/screenshot.jpg) ## 📜 Sobre o Projeto

Este projeto é uma recriação fiel da interface de usuário do serviço de streaming Apple TV+, desenvolvido como um estudo aprofundado de arquitetura de front-end, performance e design. Foi construído utilizando exclusivamente **HTML5, CSS3 e JavaScript (ES6+)**, sem o uso de frameworks ou bibliotecas externas.

O objetivo principal foi aplicar princípios de engenharia de software para criar uma experiência de usuário fluida, responsiva e visualmente impecável, seguindo a estética minimalista e premium da Apple.

## ✨ Princípios e Tecnologias Aplicadas

O desenvolvimento foi guiado por um conjunto de disciplinas, emulando uma equipe de especialistas:

1.  **🏛️ Arquitetura de Software:**
    * Estrutura de arquivos modular e semântica.
    * Metodologia BEM-like com Variáveis CSS (Design Tokens).
    * JavaScript modularizado por funcionalidade (`carousel.js`, `animations.js`).

2.  **📐 UX, Geometria e Matemática:**
    * Layouts e espaçamentos baseados em escalas geométricas para harmonia visual.
    * Animações com curvas `cubic-bezier` matemáticas para transições naturais e orgânicas.

3.  **🎨 UI e Performance Visual:**
    * **100% Code-Based:** Nenhum arquivo de imagem (`.png`, `.jpg`). Todos os elementos visuais, incluindo ícones, foram criados com CSS e um sprite SVG.
    * Design responsivo com a abordagem **Mobile-First**.
    * Foco em tipografia, contraste e acessibilidade.

4.  **⚡ Performance:**
    * Carregamento assíncrono de scripts com `defer`.
    * Uso do `IntersectionObserver` para animações ativadas por scroll, evitando sobrecarga na thread principal.
    * Minimização de manipulações do DOM.

5.  **🌐 SEO e Acessibilidade:**
    * HTML semântico (`<header>`, `<main>`, `<section>`).
    * Meta tags otimizadas para SEO e compartilhamento social (Open Graph).
    * Uso de atributos `aria-*` para navegação acessível.

## 🚀 Como Executar

Como este é um projeto de front-end puro, não há necessidade de build steps ou instalações.

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

Ou simplesmente acesse a versão publicada no GitHub Pages (se aplicável).

## 🗂️ Estrutura de Arquivos

```
/
|-- index.html              # Estrutura principal
|-- css/                    # Estilos
|   |-- reset.css           # Normalização de estilos
|   |-- variables.css       # Design Tokens
|   |-- style.css           # Estilos de layout e componentes
|   `-- animations.css      # Animações complexas
|-- js/                     # Scripts
|   |-- carousel.js         # Lógica do carrossel
|   |-- animations.js       # Lógica de animação no scroll
|   `-- main.js             # Script principal e orquestrador
|-- assets/
|   `-- icons.svg           # Sprite de ícones vetoriais
`-- README.md               # Este arquivo
```

---

Feito com precisão e paixão por engenharia de software.
