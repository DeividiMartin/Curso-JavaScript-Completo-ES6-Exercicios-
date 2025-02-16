//Verifique a distancia da primrira imagem em relação ao topo da pagina
const img = document.querySelector("img").offsetTop;
console.log(img);

//Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};
//Verifique se os links da página possuem o minimo recomendado para telas utilizados com o dedo (48px/48px de acordo como google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "possui acessibilade");
  } else {
    console.log(link, "não possui acessibilade");
  }
});

//Se o Brower for menos que 720px adicione a classe menu-mobile ao menu
const browerSmall = window.matchMedia("(max-width: 720px)").matches;
if (browerSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
