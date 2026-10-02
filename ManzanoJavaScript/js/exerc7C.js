let raioLata = Number(prompt("Informe o raio da lata:"));
let alturaLata = Number(prompt("Informe a altura da lata:"));

let volumeLata = 3.14159 * (raioLata ** 2) * alturaLata;

console.log("O volume da lata é: " + volumeLata.toFixed(2));