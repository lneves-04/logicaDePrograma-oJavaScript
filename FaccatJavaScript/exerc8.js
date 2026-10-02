let quantidadeEleitoresTotal = Number(prompt("Digite a quantidade total de eleitores:"));
let quantidadeVotosBrancos = Number(prompt("Digite a quantidade de votos brancos:"));
let quantidadeVotosNulos = Number(prompt("Digite a quantidade de votos nulos:"));
let quantidadeVotosValidos = Number(prompt("Digite a quantidade de votos válidos:"));

function calcularPorcentagem(votos, total) {
    return (votos / total) * 100;
}

let percentualVotosBrancos = calcularPorcentagem(quantidadeVotosBrancos, quantidadeEleitoresTotal);
let percentualVotosNulos = calcularPorcentagem(quantidadeVotosNulos, quantidadeEleitoresTotal);
let percentualVotosValidos = calcularPorcentagem(quantidadeVotosValidos, quantidadeEleitoresTotal);

document.write("A porcentagem de votos brancos é: " + percentualVotosBrancos.toFixed(2) + "%<br>");
document.write("A porcentagem de votos nulos é: " + percentualVotosNulos.toFixed(2) + "%<br>");
document.write("A porcentagem de votos válidos é: " + percentualVotosValidos.toFixed(2) + "%");
