function calcularAproveitamento() {
    let notaUm = Number(prompt("Digite a primeira nota:"));
    let notaDois = Number(prompt("Digite a segunda nota:"));
    let notaTres = Number(prompt("Digite a terceira nota:"));
    let mediaExercicios = Number(prompt("Digite a média dos exercícios:"));

    let aproveitamento;
    let conceito;

    aproveitamento = (notaUm + (notaDois * 2) + (notaTres * 3) + mediaExercicios) / 7;

    if (aproveitamento >= 9) {
        conceito = "A";
    } else {
        if (aproveitamento >= 7.5) {
            conceito = "B";
        } else {
            if (aproveitamento >= 6) {
                conceito = "C";
            } else {
                conceito = "D";
            }
        }
    }

    console.log("Média de aproveitamento: " + aproveitamento.toFixed(2));
    console.log("Conceito: " + conceito);
}

calcularAproveitamento();