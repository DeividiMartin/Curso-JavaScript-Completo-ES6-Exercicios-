const doc = fetch('./doc.txt');

doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((a) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = a;
  });
