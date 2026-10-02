function compararValores() {
    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));

    if (valor1 === valor2) {
        console.log("Os valores são iguais");
    } else {
        if (valor1 > valor2) {
            console.log("O primeiro valor é maior que o segundo");
        } else {
            console.log("O segundo valor é maior que o primeiro");
        }
    }
}

compararValores();