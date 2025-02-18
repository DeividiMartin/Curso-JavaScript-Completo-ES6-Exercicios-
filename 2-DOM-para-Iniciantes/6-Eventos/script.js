//Quando o usuario clicar nos links internos do site,
// adicionar a classe ativo ao item clicado e remova dos demais itens caso eles possual a mesma.
// Previna o comportamento pafrão dos

const linksInterno = document.querySelectorAll('a[href^="#"]');

function handleLink(e) {
  e.preventDefault();
  linksInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  e.currentTarget.classList.add("ativo");
}
linksInterno.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// //Selecione todos os elementos do site começando a partir do body.
// //ao clicar mostr exatamente quais elementos estão sendo clicados
const elementoSite = document.querySelectorAll("*");

function clickElement(e) {
  console.log(e.currentTarget);
}

elementoSite.forEach((elementos) => {
  elementos.addEventListener("click", clickElement);
});

// //Utilizando o codigo anterior, ao inves de mostrar no console
// //remova o  elementoque esta sendo clicado
const elementoSiteRemove = document.querySelectorAll("body *");

function clickElementRemove(e) {
  e.currentTarget.remove();
}

elementoSiteRemove.forEach((elementos) => {
  elementos.addEventListener("click", clickElementRemove);
});

//Se o usuario Clicar na tecla (t), aumente todo o texto do site
function handleClickT(e) {
  console.log(e.key);
  if (e.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}
window.addEventListener("keydown", handleClickT);
