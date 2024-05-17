//Preload
let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function () {
    elem_preloader.classList.remove("preloader");
    elem_loader.classList.remove("loader");
}, 1280);



//script do scroll
window.addEventListener("scroll", function () {
    //Criando a variavel header e puxando a id do INDEX
    let header = document.querySelector('#header')
    //criando uma classe para o header e adicionando o efeito
    header.classList.toggle('rolar', window.scrollY > 0)
})


//script hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";
    }
}



