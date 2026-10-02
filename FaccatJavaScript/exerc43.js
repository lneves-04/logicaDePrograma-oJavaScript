function fazerDivisao() {
    let primeiroNumero = Number(prompt("Digite o primeiro valor:"));
    let segundoNumero = Number(prompt("Digite o segundo valor:"));
    let resultado;

    do {
        if (segundoNumero === 0) {
            console.log("O segundo valor não pode ser zero.");
            segundoNumero = Number(prompt("Digite outro valor:"));
        }
    } while (segundoNumero === 0);

    resultado = primeiroNumero / segundoNumero;

    console.log("Resultado da divisão: " + resultado);
}

fazerDivisao();