function verificarMaior() {
    let valor1 = Number(prompt("Escreva o primeiro valor:"));
    let valor2 = Number(prompt("Escreva o segundo valor:"));
    let valor3 = Number(prompt("Escreva o terceiro valor:"));

    if (valor1 > valor2 && valor1 > valor3) {
        console.log("O maior valor é: " + valor1);
    } else {
        if (valor2 > valor3) {
            console.log("O maior valor é: " + valor2);
        } else {
            console.log("O maior valor é: " + valor3);
        }
    }
}

verificarMaior();