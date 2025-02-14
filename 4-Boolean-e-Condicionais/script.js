// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 28;
let idadePrimo = 28;

if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if (minhaIdade === idadePrimo) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
let expressao = 5 - 2 && 5 - "s" && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = "Deividi";
let idade = 27;
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

let corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos.");
}
