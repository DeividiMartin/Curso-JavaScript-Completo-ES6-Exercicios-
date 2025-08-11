//Duplque o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

//Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primiroDt = faq.querySelector("dt");

//Selecione o DD referente ao primeiro Dt

const primeiroDd = primiroDt.nextElementSibling;
console.log(primeiroDd);

//Substitua o conteudo html de .faz pelo .animais
const animal = document.querySelector(".animais");
faq.innerHTML = animal.innerHTML;
