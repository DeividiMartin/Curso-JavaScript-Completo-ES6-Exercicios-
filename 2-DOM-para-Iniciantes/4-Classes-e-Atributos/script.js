//Adiciona a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

//Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

//Verifique se as imagen possuem o atriburto alt

const imagens = document.querySelectorAll("img");
imagens.forEach((imagen) => {
  const possuiAtributo = imagen.hasAttribute("alt");
  console.log(possuiAtributo);
});

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "http://www.google.com/");
console.log(link);
