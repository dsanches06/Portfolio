/* Define as URLs dos perfis sociais */
const urls = {
  linkedin: "https://www.linkedin.com/in/danilson-sanches/",
  github: "https://github.com/dsanches06",
};

/**
 * Gets a DOM element by its ID.
 * @param {string} id - The ID of the element to retrieve
 * @returns {HTMLElement|null} The DOM element with the specified ID, or null if not found
 */
const getElementById = (id) => document.getElementById(id);


/**
 * Configura um elemento de link com uma URL e adiciona comportamento de clique.
 *
 * @function setupLink
 * @param {HTMLElement} element - O elemento DOM que será configurado como link
 * @param {string} url - A URL para a qual o link apontará
 * @returns {void}
 *
 * @description
 * Define o atributo href do elemento com a URL fornecida, configura o link
 * para abrir em uma nova aba (target="_blank") e adiciona um listener de clique
 * que registra no console a URL do elemento quando clicado.
 */
const setupLink = (element, url) => {
  if (element) {
    element.setAttribute("href", url);
    element.setAttribute("target", "_blank");
    element.addEventListener("click", () => {
      console.log("Clicou no link:", url);
    });
  }
};

// Obtém os elementos DOM dos links
let linkedin = getElementById("linkedin");
let github = getElementById("github");

// Configura os links com as URLs apropriadas
setupLink(linkedin, urls.linkedin);
setupLink(github, urls.github);

/*************************************************** */
const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
const main = document.querySelector("main");


// Ao clicar no botão, liga/desliga a classe 'aberto'
btn.addEventListener('click', () => {
  addClassList(menu);
  toogleSlideMenu(menu);
});

function addClassList(element) {
  element.classList.toggle("aberto");
}

function toogleSlideMenu(element) {
  if (element.classList.contains('aberto')) {
    main.style.padding = "10rem 1rem";
  }
  else {
    main.style.padding = "1.5rem 1rem";
  }
}