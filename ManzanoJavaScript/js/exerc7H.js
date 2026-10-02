let comprimentoCaixa = Number(prompt("Insira o comprimento da caixa:"));
let larguraCaixa = Number(prompt("Insira a largura da caixa:"));
let alturaCaixa = Number(prompt("Insira a altura da caixa:"));

let volCaixa = comprimentoCaixa * larguraCaixa * alturaCaixa;

console.log("O volume da caixa retangular é: " + volCaixa.toFixed(2));