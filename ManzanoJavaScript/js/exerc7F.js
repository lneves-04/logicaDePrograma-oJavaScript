let valorA = prompt("Informe o valor A:");
let valorB = prompt("Informe o valor B:");

let auxTroca = valorA;

valorA = valorB;
valorB = auxTroca;

console.log("Após a troca, Valor A: " + valorA);
console.log("Após a troca, Valor B: " + valorB);