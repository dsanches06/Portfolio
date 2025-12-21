/* script para menu responsivo */
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const main = document.querySelector("main");

// Ao clicar no botão, liga/desliga a classe 'aberto'
// e adiciona o padding do carousel
btn.addEventListener("click", () => {
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
        main.style.padding = "2.5rem 1rem";
    }
}