let valorDigitado = Number(prompt("Digite um número (valor negativo para sair):"));
let somaAcum = 0;
let totalLidos = 0;

while (valorDigitado >= 0) {
    somaAcum = somaAcum + valorDigitado;
    totalLidos++;

    valorDigitado = Number(prompt("Digite o próximo número:"));
}

if (totalLidos > 0) {
    let mediaValores = somaAcum / totalLidos;

    console.log("Soma dos números: " + somaAcum);
    console.log("Média calculada: " + mediaValores.toFixed(2));
    console.log("Total de números lidos: " + totalLidos);
} else {
    console.log("Nenhum valor positivo foi fornecido.");
}