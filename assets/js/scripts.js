const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

// Ao clicar no botão, liga/desliga a classe 'aberto'
btn.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});