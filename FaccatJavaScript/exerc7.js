let anos = Number(prompt("Digite os anos:"));
let meses = Number(prompt("Digite os meses:"));
let dias = Number(prompt("Digite os dias:"));

let total = (anos * 365) + (meses * 30) + dias;

document.write("A idade em dias é: " + total);