function calcularCombustivel() {
    let numeroLitros = Number(prompt("Quantos litros você colocou:"));
    let tipoCombustivel = prompt("Escreva o tipo de combustível (A-Álcool ou G-Gasolina):");
    let valorLitros;
    let valorTotal;

    if (tipoCombustivel === "A") {
        valorLitros = 2.90;
    } else {
        if (tipoCombustivel === "G") {
            valorLitros = 3.30;
        } else {
            console.log("Combustível inválido!");
            return;
        }
    }

    valorTotal = numeroLitros * valorLitros;

    console.log("Valor total: R$ " + valorTotal.toFixed(2));
}

calcularCombustivel();