function verificarValor() {
    let valor = Number(prompt("Digite um valor:"));

    if (valor > 0) {
        console.log("O valor é Positivo");
    } else {
        if (valor < 0) {
            console.log("O valor é Negativo");
        } else {
            console.log("O número é Zero");
        }
    }
}

verificarValor();