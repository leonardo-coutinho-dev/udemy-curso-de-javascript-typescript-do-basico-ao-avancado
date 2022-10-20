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
