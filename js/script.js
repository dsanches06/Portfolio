/* Define as URLs dos perfis sociais */
const urls = {
  linkedin: "https://www.linkedin.com/in/danilson-sanches/",
  github: "https://github.com/dsanches06",
  phone: "tel:+351123456789",
  outlook: "mailto:dsanches06@outlook.com"
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
const setupLink = (element, url, type) => {
  if (element) {

    switch (type) {
      case "link":
        element.setAttribute("href", url);
        element.setAttribute("target", "_blank");
        break;
      case "phone":
      case "email":
        element.setAttribute("href", url);
        break;
    }

    console.log(url);
  }
};

// Obtém os elementos DOM dos links
const linkedin = getElementById("linkedin");
const github = getElementById("github");
const phone = getElementById("phone");
const outlook = getElementById("outlook");


// Configura os links com as URLs apropriadas
setupLink(linkedin, urls.linkedin, "link");
setupLink(github, urls.github, "link");

//
setupLink(phone, urls.phone, "phone");
setupLink(outlook, urls.outlook, "email");

/*************************************************** */
/* script para menu responsivo */
const btn = document.querySelector(".menu-toggle");
const openBtn = document.querySelector(".open-sidebar-button");
const closeBtn = document.querySelector(".close-sidebar-button");
const link_container = document.querySelector(".link-container");
const menuLinks = document.querySelectorAll(".menu__link");

// Ao clicar no botão, liga/desliga a classe 'aberto'
// e adiciona o padding do carousel
btn.addEventListener("click", () => {
  link_container.classList.toggle("aberto");

  // Atualiza aria-expanded
  const isOpen = link_container.classList.contains("aberto");
  openBtn.setAttribute("aria-expanded", isOpen);
  closeBtn.setAttribute("aria-expanded", isOpen);
});

// Atualiza aria-current quando um link é clicado
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Remove aria-current de todos os links
    menuLinks.forEach(l => l.removeAttribute("aria-current"));

    // Adiciona aria-current ao link clicado
    this.setAttribute("aria-current", "page");

    // Fecha o menu
    link_container.classList.remove("aberto");
    openBtn.setAttribute("aria-expanded", false);
    closeBtn.setAttribute("aria-expanded", false);
  });
});

/*************************************************** */
//Interatividade (JavaScript) para receber dados preenchidos no form

function enviarForm(event) {
  event.preventDefault();

  const nome = getElementById("nome").value;

  //mostra o banner
  document.querySelector(".banner-info").style.display = "flex";
  document.querySelector(".banner-info-p").firstElementChild.innerHTML = "Obrigado por me contactar " + nome + " em breve, irei responder.";
}

/*************************************************************/
//fechar banner, depois de clicar em cima
const banner_info = document.querySelector(".banner-info");
banner_info.addEventListener("click", () => {
  //fecha o banner
  banner_info.style.display = "none";
  //limpa o formulario
  getElementById("contact-form").reset();
});
