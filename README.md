**Portfólio — Projeto Individual**

**Autor:**
- **Danilson Sanches**
- **upskill217**

**Repositório GitHub:**
- https://github.com/dsanches06/portfolio  

**Link da página publicada no repositorio Github**
- https://dsanches06.github.io/Portfolio/

**Como executar localmente**
- Abrir `index.html` diretamente no navegador.

	- Com VS Code: usar a extensão Live Server e clicar em "Go Live".

**Decisões principais e justificativas**

- **Estrutura (HTML & CSS):**
	- Opção: HTML semântico (`header`, `nav`, `main`, `section`, `footer`) e CSS modular (`global.css`, `mobile.first.css`, `tablet.pc.css`).
	- Justificação: facilita leitura por humanos e ferramentas (SEO, leitores de tela), e separação de estilos por responsividade melhora manutenibilidade.

	- Exemplos:
		```html
		<header>
		  <nav aria-label="Menu principal">...</nav>
		</header>
		<main>
		  <section id="sobre">...</section>
		</main>
		<footer>...</footer>
		```

		```css
		:root { --color-text: #1a1a1a; --gap: 1rem; }
		/* global.css: variáveis e resets */
		/* mobile.first.css: estilos base para mobile */
		/* tablet.pc.css: ajustes para >=768px */
		```

- **Interatividade (JavaScript):**
	- Opção: JavaScript vanilla para comportamentos (menu sidebar, back-to-top, validação de formulário) sem frameworks.
	- Justificação: reduz dependências e tempo de carregamento; código mais transparente para ensino/avaliação; behavior progressive enhancement assegura funcionalidade mesmo sem JS.

	- Exemplos:
		```js
		// toggle do menu (exemplo simples)
		const btn = document.querySelector('.menu-btn');
		btn.addEventListener('click', () => document.body.classList.toggle('menu-open'));
		
		// validação mínima (HTML5 + JS para mensagens customizadas)
		const form = document.querySelector('form');
		form.addEventListener('submit', (e) => {
		  if (!form.checkValidity()) { e.preventDefault(); }
		});
		```

- **Acessibilidade (A11y):**
	- Opções implementadas: landmarks ARIA, ordem lógica de foco, indicadores de foco visíveis, touch targets maiores, contraste elevado (WCAG AA/AAA alvo), labels e aria-labels descritivos.
	- Justificação: garante que pessoas com diferentes necessidades (baixa visão, navegação por teclado, leitores de tela) possam usar o site; atende requisitos de qualidade académica e boas práticas profissionais.

	- Exemplos:
		```html
		<nav aria-label="Navegação principal">...</nav>
		<button aria-expanded="false" class="menu-btn">Abrir menu</button>
		```

		```css
		:focus { outline: 3px solid #cc0000; outline-offset: 2px; }
		.button, .menu-btn { min-height: 44px; min-width: 44px; }
		```

		- Exemplo de texto alternativo para imagens: `<img src="foto.jpg" alt="Retrato de Danilson Sanches">`




