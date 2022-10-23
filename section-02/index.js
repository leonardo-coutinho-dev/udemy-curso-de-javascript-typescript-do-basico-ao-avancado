console.log("Hello world!");

const a = 2.9;
const b = 7.5;

console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);
console.log(
  `O tipo das variáveis (a = ${a}) e (b = ${b}) é: (a => ${typeof a}) e (b => ${typeof b})`
);

const operacoes = (c, d) => {
  console.log(`A soma de ${c} com ${d} é: ${c + d}`);
  console.log(`A subtração de ${c} com ${d} é: ${c - d}`);
  console.log(`A divisão de ${c} com ${d} é: ${c / d}`);
  console.log(`A multiplicação de ${c} com ${d} é: ${c * d}`);
};

operacoes(8, 4);

operacoes(32, 44);

/**
 *
 * Este é o título
 *
 * Esta é a descrição do conteudo a ser tratado.
 *
 * Aqui está o fim!
 *
 */

let varA = "A";
let varB = "B";
let varC = "C";
let varD = "D";

// let temp = varA;

// varA = varC;
// varB = varB;
// varC = varD;
// varD = temp;

[varA, varB, varC, varD] = [varB, varC, varD, varA];

console.log(varA, varB, varC, varD);

let varString = " Lorem ipsum dolor sit amet oculus circularis.";

for (let i = 0; i < varString.length; i++) {
  console.log(varString[i]);
}

let indexVar = 0;

let newArray = [];

while (indexVar < varString.length) {
  newArray.push(varString[indexVar]);
  indexVar++;
}

console.log(newArray);

newArray.forEach((item, index) => {
  newArray[index] = `Índice ${index}: ${item}`;
});

console.log(newArray);

console.log(varString.indexOf("sit"));

console.log(varString.split(" ")[1]);

const nome = prompt("Por gentileza, informe o seu nome completo: ");

// let varFirstA = "";
// let varLastA = "";

// for (let i = 0; i < nome.length; i++) {
//   if (nome[i] === "a" || nome[i] === "A") {
//     varFirstA = `${i + 1}º`;
//     break;
//   } else {
//     varFirstA = "Não existe letra A no nome!";
//   }
// }

// for (let i = 0; i < nome.length; i++) {
//   if (nome[i] === "a" || nome[i] === "A") {
//     varLastA = `${i + 1}º`;
//   } else {
//     varLastA = "Não existe letra A no nome!";
//   }
// }

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br />`;

document.body.innerHTML += `O seu nome tem essa qtde. de letras: <strong>${
  nome.length - (nome.split(" ").length - 1)
}</strong> <br />`;

document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;

document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? <strong>${nome.indexOf(
  "a"
)}</strong> <br />`;

document.body.innerHTML += `Qual o último índice da letra A no seu nome? <strong>${nome.lastIndexOf(
  "a"
)}</strong> <br />`;

document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(
  -3
)}</strong> <br />`;

document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(
  " "
)}</strong> <br />`;

document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong> <br />`;

document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br />`;
