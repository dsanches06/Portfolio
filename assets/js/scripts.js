/* script para menu responsivo */
const btn = document.querySelector(".menu-toggle");
const link_container = document.querySelector(".link");
const main = document.querySelector("main");

// Ao clicar no botão, liga/desliga a classe 'aberto'
// e adiciona o padding do carousel
btn.addEventListener("click", () => {
    addClassList(link_container);
    toogleSlideMenu(link_container);
});

function addClassList(element) {
    element.classList.toggle("aberto");
}

function toogleSlideMenu(element) {
    if (element.classList.contains('aberto')) {
        main.style.padding = "12rem 1rem";
    }
    else {
        main.style.padding="1rem";
    }
}